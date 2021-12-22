const express = require('express')
const cors = require('cors')
const { Server } = require('socket.io')
const app = express()

const server = app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
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
  res.send('server running')
})