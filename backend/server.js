// Optional Full-Stack Node.js + Express + MongoDB + Socket.IO Backend for TaskBuddy
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

let tasksStore = [];

app.get('/api/tasks', (req, res) => {
  res.json(tasksStore);
});

app.post('/api/tasks', (req, res) => {
  const newTask = { id: Date.now().toString(), ...req.body };
  tasksStore.push(newTask);
  io.emit('tasks:updated', tasksStore);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:index', (req, res) => {
  const idx = parseInt(req.params.index, 10);
  if (tasksStore[idx]) {
    tasksStore[idx] = req.body;
    io.emit('tasks:updated', tasksStore);
    return res.json(tasksStore[idx]);
  }
  res.status(404).json({ error: 'Task not found' });
});

app.delete('/api/tasks/:index', (req, res) => {
  const idx = parseInt(req.params.index, 10);
  tasksStore = tasksStore.filter((_, i) => i !== idx);
  io.emit('tasks:updated', tasksStore);
  res.json({ success: true });
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`TaskBuddy API + WebSocket Server listening on port ${PORT}`));
