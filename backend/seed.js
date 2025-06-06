require('dotenv').config();
const mongoose = require('mongoose');
const Objetivo = require('./models/Objetivo');
const Tarea = require('./models/Tarea');

const MONGO_URI = process.env.MONGO_URI;

const seed = async () => {
  await mongoose.connect(MONGO_URI);
  console.log('Conectado a MongoDB');

  await Tarea.deleteMany();
  await Objetivo.deleteMany();

  const obj1 = new Objetivo({
    nombre: 'Finalizar Proyecto CRUD',
    fechaInicio: new Date(),
    fechaFinalPlaneada: new Date(new Date().setDate(new Date().getDate() + 7))
  });

  await obj1.save();

  const tareas = [
    { titulo: 'Crear backend', descripcion: 'Express y MongoDB', objetivoId: obj1._id },
    { titulo: 'Diseñar frontend', descripcion: 'React + Tailwind', objetivoId: obj1._id },
  ];

  for (const t of tareas) {
    const tarea = new Tarea(t);
    await tarea.save();
    obj1.tareas.push(tarea._id);
  }

  await obj1.save();

  console.log('Datos insertados correctamente');
  process.exit();
};

seed();
