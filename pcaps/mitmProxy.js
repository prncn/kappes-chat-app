const port = 3002;

const Cap = require("cap").Cap;
const hex2ascii = require("hex2ascii");
const arrayBufferToHex = require("array-buffer-to-hex");
var Proxy = require("http-mitm-proxy");
var proxy = Proxy();

let packetList = [];
let inject = undefined;

proxy.onError(function (ctx, err, errorKind) {
  var url = ctx && ctx.clientToProxyRequest ? ctx.clientToProxyRequest.url : "";
  // console.error(errorKind + " on " + url + ":", err);
});

proxy.onRequest(function (ctx, callback) {
  return callback();
});

proxy.onRequestData(function (ctx, chunk, callback) {
  if (chunk.length > 10) {
    let rawPacketData = chunk.slice(2, chunk.length);
    let decodedASCII = hex2ascii("0x" + arrayBufferToHex(rawPacketData));
    console.log(decodedASCII);
    packetList.push(`packet: length ${chunk.length}, ${decodedASCII}`);
    if(packetList.length > 5) {
      packetList.shift();
    }
  }
  return callback(null, chunk);
});

proxy.onResponse(function (ctx, callback) {
  return callback(null);
});

proxy.onResponseData(function (ctx, chunk, callback) {
  if (chunk.length > 10) {
    let rawPacketData = chunk.slice(2, chunk.length);
    let decodedASCII = hex2ascii("0x" + arrayBufferToHex(rawPacketData));
    console.log(decodedASCII);
    if (decodedASCII.startsWith('["receive",')) {
      if(inject !== undefined) {
        console.log("changing..");
        let bufferMsg = `42["receive","${inject}"]`;
        chunk = Buffer.from(bufferMsg, "ascii");
        packetList.push(`packet: length ${chunk.length}, ${bufferMsg}`);
      } else {
        packetList.push(`packet: length ${chunk.length}, ${decodedASCII}`);
      }
    }
  }
  return callback(null, chunk);
});

proxy.onWebSocketMessage(function (ctx, message, callback) {
});

proxy.listen({ port: port });
console.log("Proxy running on " + port);

function getDeviceList() {
  return Cap.deviceList();
}

function getRecentPackets() {
  const response = [...packetList]
  return { response };
}

function injectMessage(msg) {
  if(msg === "clear") {
    inject = undefined;
  } else {
    inject = msg;
  }
}

function getRecentHTTPHeaders(params) {
  
}

module.exports = {
  getDeviceList,
  getRecentPackets,
  injectMessage,
  getRecentHTTPHeaders,
};