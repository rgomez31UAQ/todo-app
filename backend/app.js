const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/objetivos', require('./routes/objetivo.routes'));
app.use('/api/tareas', require('./routes/tarea.routes'));

module.exports = app;
