const mongoose = require('mongoose');

const objetivoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFinalPlaneada: { type: Date, required: true },
  tareas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tarea' }]
});

module.exports = mongoose.model('Objetivo', objetivoSchema);
