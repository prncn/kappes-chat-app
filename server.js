const port = 3001;
const express = require('express')
const cors = require('cors')
const { Server } = require('socket.io');
const { getDeviceList, getRecentPackets, injectMessage, getRecentHTTPHeaders } = require('./pcaps/mitmProxy');
const app = express()
// const https = require('http');
// const fs = require('fs');
// const cert = fs.readFileSync('./pcaps/.http-mitm-proxy/certs/ca.pem');
// const key = fs.readFileSync('./pcaps/.http-mitm-proxy/keys/ca.private.key');
// const server = https.createServer({}, app);

const server = app.listen(port, () => {
  console.log(`Backend running on ${port}`);
});

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected.`);
  socket.on('send', (content) => {
    socket.broadcast.emit('receive', content)
    console.log(content);
  });
});

app.use(cors());

app.get('/', (req, res) => {
  return res.send('Backend running')
})

app.get('/devices', (req, res) => {
  return res.send(getDeviceList());
})

app.get('/headers', async (req, res) => {
  return res.send(await getRecentHTTPHeaders());
})

app.get('/packet', async (req, res) => {
  return res.send(await getRecentPackets());
})

app.get('/inject', async (req, res) => {
  if("msg" in req.query) {
    return res.send(injectMessage(req.query.msg));
  }
})