const proxyPort = 3002;

const Cap = require('cap').Cap;
var Proxy = require('http-mitm-proxy');
var proxy = Proxy();

let packetList = [];
let inject = undefined;

const backendPort = 3001;
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');
const prompt = require('prompt');
const { exec } = require('child_process');
const open = require('open');

const cert =
  fs.readFileSync(path.join(__dirname, '/.http-mitm-proxy/certs/ca.pem')) ||
  null;
const key =
  fs.readFileSync(
    path.join(__dirname, './.http-mitm-proxy/keys/ca.private.key')
  ) || null;

const properties = [
  {
    description: 'Wollen Sie die App verschlüssen (J/N)? ',
    name: 'encrypt',
    validator: /\b(yes|no|ja|nein|j|n|y)\b/i,
    warning: 'Eingabe nicht gültig.',
  },
];

prompt.start();

prompt.get(properties, function (err, result) {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  if (/\b(yes|y|ja|j)\b/i.test(result.encrypt)) {
    process.env['REACT_APP_SERVER_HTTPS'] = true;
    process.env['HTTPS'] = true;
  }

  const APP_URL = `http${
    process.env['HTTPS'] ? 's' : ''
  }://platin.demo.com:3000`;

  exec('npm start');
  console.log(`\x1b[${process.env['HTTPS'] ? '32' : '33'}m`);
  console.log(`App running on ${APP_URL}`, '\x1b[0m');
  open(APP_URL);

  let server;
  if (process.env['REACT_APP_SERVER_HTTPS']) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    server = https
      .createServer({ cert, key, rejectUnauthorized: false }, app)
      .listen(backendPort, () => {
        console.log(`TLS Backend running on ${backendPort}`);
      });
  } else {
    server = app.listen(backendPort, () => {
      console.log(`Non-TLS Backend running on ${backendPort}`);
    });
  }

  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
    transports: ['polling'],
  });

  io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected.`);
    socket.on('send', (content) => {
      socket.broadcast.emit('receive', content);
      console.log(content);
    });
  });

  app.use(cors());

  app.get('/', (req, res) => {
    return res.send('Backend running');
  });

  app.get('/devices', (req, res) => {
    return res.send(getDeviceList());
  });

  app.get('/headers', async (req, res) => {
    return res.send(getRecentHTTPHeaders());
  });

  app.get('/packet', async (req, res) => {
    return res.send(getRecentPackets());
  });

  app.get('/inject', async (req, res) => {
    if ('msg' in req.query) {
      return res.send(injectMessage(req.query.msg));
    }
  });

  app.get('/expose', async (req, res) => {
    console.log(req.query.get);
    return res.send(exposeCert(req.query.get));
  });

  proxy.onError(function (ctx, err, errorKind) {
    var url =
      ctx && ctx.clientToProxyRequest ? ctx.clientToProxyRequest.url : '';
    if (errorKind !== 'HTTPS_CLIENT_ERROR') {
      console.error(errorKind + ' on ' + url + ':', err);
    }
  });

  proxy.onRequest(function (ctx, callback) {
    return callback();
  });

  proxy.onRequestData(function (ctx, chunk, callback) {
    if (chunk.length > 10 && chunk.length < 1000) {
      if (chunk.length > 80) {
        console.log('packet length: ' + chunk.length);
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
        console.log('changing..');
        chunk = Buffer.from(bufferMsg, 'ascii');
        packetList.push(`packet: length ${chunk.length}, ${bufferMsg}`);
      } else {
        packetList.push(`packet: length ${chunk.length}, ${decodedASCII}`);
      }
    }
    return callback(null, chunk);
  });

  proxy.onWebSocketMessage(function (ctx, message, callback) {});

  proxy.listen({ port: proxyPort }, () => {
    console.log('Proxy running on ' + proxyPort);
  });
});

function getDeviceList() {
  return Cap.deviceList();
}

function getRecentPackets() {
  const response = [...packetList];
  return { response };
}

function injectMessage(msg) {
  if (msg === 'clear') {
    inject = undefined;
  } else {
    inject = msg;
  }
}

function getRecentHTTPHeaders(params) {}

function exposeCert(get) {
  let response;
  if (get === 'cert') {
    response = cert.toString();
  }
  if (get === 'key') {
    response = key.toString();
  }
  return { response };
}

module.exports = {
  getDeviceList,
  getRecentPackets,
  injectMessage,
  getRecentHTTPHeaders,
  exposeCert,
};
