const express = require('express');
const router = express.Router();
const Objetivo = require('../models/Objetivo');
const Tarea = require('../models/Tarea');

router.get('/', async (req, res) => {
  const objetivos = await Objetivo.find().populate('tareas');
  res.json(objetivos);
});

router.get('/:id', async (req, res) => {
  const objetivo = await Objetivo.findById(req.params.id).populate('tareas');
  res.json(objetivo);
});

router.post('/', async (req, res) => {
  try {
    const objetivo = new Objetivo(req.body);
    const saved = await objetivo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const updated = await Objetivo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Tarea.deleteMany({ objetivoId: req.params.id });
  await Objetivo.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
