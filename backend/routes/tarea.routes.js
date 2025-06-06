const express = require('express');
const router = express.Router();
const Tarea = require('../models/Tarea');

router.post('/', async (req, res) => {
  try {
    const tarea = new Tarea(req.body);
    const saved = await tarea.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  await Tarea.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
