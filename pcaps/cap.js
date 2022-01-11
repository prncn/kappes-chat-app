const Cap = require("cap").Cap;
const hex2ascii = require("hex2ascii");
const arrayBufferToHex = require("array-buffer-to-hex");

var c = new Cap();
var filter = "tcp port 3001";
var bufSize = 10 * 1024 * 1024;
var buffer = Buffer.alloc(65535);

let packetList = [];
let httpHeaderList = [];

function shiftLists(lists) {
  lists.forEach((list) => {
    if (list.length > 10) {
      list.shift();
    }
  });
}

function serveProxy() {
  c.open("\\Device\\NPF_Loopback", filter, bufSize, buffer);
  c.setMinBytes && c.setMinBytes(0);

  c.on("packet", function (nbytes, trunc) {
    if (nbytes > 70) {
      let rawPacketData = buffer.slice(68, nbytes);
      let decodedASCII = hex2ascii("0x" + arrayBufferToHex(rawPacketData));
      if (decodedASCII.startsWith('["receive",')) {
        console.log(decodedASCII);
        packetList.push(`packet: length ${nbytes}, ${decodedASCII}`);
      } else if (nbytes > 200) {
        httpHeaderList.push(decodedASCII);
      }

      shiftLists([packetList, httpHeaderList]);
    }
  });
  return packetList;
}

function getDeviceList() {
  return Cap.deviceList();
}

function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      const packets = serveProxy();
      resolve(packets);
    }, ms)
  );
}

async function getRecentPackets() {
  const response = packetList;
  packetList = [];
  return { message: response };
}

async function getRecentHTTPHeaders() {
  const response = httpHeaderList;
  httpHeaderList = [];
  return { message: response };
}

serveProxy();

const injectBuffer = Buffer.from([
  0x18, 0x00, 0x00, 0x00, 0x60, 0x03, 0x5b, 0x10, 0x00, 0x37, 0x06, 0x80,

  // Source address
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x01,

  // Destination address
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x01,

  // Ports, SEQ, ACK, etc.
  0x0b, 0xb9, 0xd9, 0x1d, 0xca, 0x33, 0x2e, 0x20, 0x0b, 0x9c, 0xcc, 0xdf, 0x50,
  0x18, 0x27, 0xf6, 0x6e, 0xdb, 0x00, 0x00,

  // Data
  0x81, 0x21, 0x34, 0x32, 0x5b, 0x22, 0x72, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65,
  0x22, 0x2c, 0x22, 0x63, 0x61, 0x6c, 0x6c, 0x20, 0x6d, 0x65, 0x20, 0x73, 0x6f,
  0x6d, 0x65, 0x20, 0x74, 0x69, 0x6d, 0x65, 0x22, 0x5d,
]);

const hexStreams = [
  "18000000600e8b300017068000000000000000000000000000000001000000000000000000000000000000010bb9de5b883376b702cec3ef501827f425150000810132",
  "180000006003f077001406800000000000000000000000000000000100000000000000000000000000000001de5b0bb902cec3ef883376ba501027f5d81d0000",
  "180000006003f077001b06800000000000000000000000000000000100000000000000000000000000000001de5b0bb902cec3ef883376ba501827f5dbc3000081818cc62f02bf",
  "18000000600e8b300014068000000000000000000000000000000001000000000000000000000000000000010bb9de5b883376ba02cec3f6501027f4d8170000",
  "18000000600aa58a0017068000000000000000000000000000000001000000000000000000000000000000010bb9de5ace8498939de10b9e501827f4da260000810132",
  "1800000060077e67001406800000000000000000000000000000000100000000000000000000000000000001de5a0bb99de10b9ece849896501004fdb0270000",
  "1800000060077e67001b06800000000000000000000000000000000100000000000000000000000000000001de5a0bb99de10b9ece849896501804fdd598000081817e4e8daf4d",
  "18000000600aa58a0014068000000000000000000000000000000001000000000000000000000000000000010bb9de5ace8498969de10ba5501027f48d290000",
  "1800000060077e67002c06800000000000000000000000000000000100000000000000000000000000000001de5a0bb99de10ba5ce849896501804fd144b00008192eda113b2d99348909ec47dd6cf8d31da88cd7fddcffc",
  "18000000600aa58a0014068000000000000000000000000000000001000000000000000000000000000000010bb9de5ace8498969de10bbd501027f48d110000",
  "18000000600e8b30002b068000000000000000000000000000000001000000000000000000000000000000010bb9de5b883376ba02cec3f6501827f456140000811534325b2272656365697665222c2268656c6c6f225d",
  "180000006003f077001406800000000000000000000000000000000100000000000000000000000000000001de5b0bb902cec3f6883376d1501027f5d7ff0000"
];

function sendHexBuffer(hexStream) {
  const buffer = Buffer.from(hexStream, "hex");
  c.send(buffer, buffer.length);
}

function injectMessage() {
  try {
    for (let i = 0; i < hexStreams.length; i++) {
      const element = hexStreams[i];
      sendHexBuffer(element);
    }
    // c.send(injectBuffer, injectBuffer.length);
    // sendHexBuffer(hexStreams.at(-1));
  } catch (error) {
    console.log(error);
  }
}


