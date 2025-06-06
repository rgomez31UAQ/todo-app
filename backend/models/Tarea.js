const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: String,
  objetivoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Objetivo', required: true }
});

module.exports = mongoose.model('Tarea', tareaSchema);
