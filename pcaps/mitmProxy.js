const proxyPort = 3002;

const Cap = require("cap").Cap;
var Proxy = require("http-mitm-proxy");
var proxy = Proxy();

let packetList = [];
let inject = undefined;

const backendPort = 3001;
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const app = express();
const https = require("https");
const fs = require("fs");
const path = require("path");

const cert = fs.readFileSync(path.join(__dirname, '/.http-mitm-proxy/certs/ca.pem'));
const key = fs.readFileSync(path.join(__dirname, './.http-mitm-proxy/keys/ca.private.key'));

const HTTPSserver = https.createServer({cert, key}, app).listen(backendPort, () => {
  console.log(`TLS Backend running on ${backendPort}`);
});

// const HTTPserver = app.listen(backendPort, () => {
//   console.log(`Non-TLS Backend running on ${backendPort}`);
// });

const io = new Server(HTTPSserver, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected.`);
  socket.on("send", (content) => {
    socket.broadcast.emit("receive", content);
    console.log(content);
  });
});

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Backend running");
});

app.get("/devices", (req, res) => {
  return res.send(getDeviceList());
});

app.get("/headers", async (req, res) => {
  return res.send(await getRecentHTTPHeaders());
});

app.get("/packet", async (req, res) => {
  return res.send(await getRecentPackets());
});

app.get("/inject", async (req, res) => {
  if ("msg" in req.query) {
    return res.send(injectMessage(req.query.msg));
  }
});

proxy.onError(function (ctx, err, errorKind) {
  var url = ctx && ctx.clientToProxyRequest ? ctx.clientToProxyRequest.url : "";
  if (errorKind !== "HTTPS_CLIENT_ERROR") {
    console.error(errorKind + " on " + url + ":", err);
  }
});

proxy.onRequest(function (ctx, callback) {
  return callback();
});

proxy.onRequestData(function (ctx, chunk, callback) {
  if (chunk.length > 10 && chunk.length < 1000) {
    if (chunk.length > 80) {
      console.log("packet length: " + chunk.length);
    }
    let rawPacketData = chunk.slice(2, chunk.length);
    let decodedASCII = rawPacketData.toString();
    console.log(decodedASCII);
    packetList.push(`packet: length ${chunk.length}, ${decodedASCII}`);
    if (packetList.length > 5) {
      packetList.shift();
    }
  }
  return callback(null, chunk);
});

proxy.onResponse(function (ctx, callback) {
  return callback(null);
});

proxy.onResponseData(function (ctx, chunk, callback) {
  if (chunk.length > 10 && chunk.length < 300) {
    let rawPacketData = chunk.slice(2, chunk.length);
      let decodedASCII = rawPacketData.toString();
      console.log(decodedASCII);
      if (inject !== undefined && decodedASCII.startsWith('["receive",')) {
        let bufferMsg = `42["receive","${inject}"]`;
        console.log("changing..");
        chunk = Buffer.from(bufferMsg, "ascii");
        packetList.push(`packet: length ${chunk.length}, ${bufferMsg}`);
      } else {
        packetList.push(`packet: length ${chunk.length}, ${decodedASCII}`);
      }
  }
  return callback(null, chunk);
});

proxy.onWebSocketMessage(function (ctx, message, callback) {});

proxy.listen({ port: proxyPort }, () => {
  console.log("Proxy running on " + proxyPort);
});

function getDeviceList() {
  return Cap.deviceList();
}

function getRecentPackets() {
  const response = [...packetList];
  return { response };
}

function injectMessage(msg) {
  if (msg === "clear") {
    inject = undefined;
  } else {
    inject = msg;
  }
}

function getRecentHTTPHeaders(params) {}

module.exports = {
  getDeviceList,
  getRecentPackets,
  injectMessage,
  getRecentHTTPHeaders,
};
