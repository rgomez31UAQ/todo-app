import { useState } from 'react';
import { createObjetivo } from '../services/api';

export default function ObjetivoForm({ onCreated }) {
  const [nombre, setNombre] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFinalPlaneada, setFechaFinalPlaneada] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevo = { nombre, fechaInicio, fechaFinalPlaneada };
    await createObjetivo(nuevo);
    onCreated();
    setNombre('');
    setFechaInicio('');
    setFechaFinalPlaneada('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 bg-gray-100 rounded">
      <input
        type="text"
        placeholder="Nombre del objetivo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full p-2 border"
      />
      <input
        type="date"
        value={fechaInicio}
        onChange={(e) => setFechaInicio(e.target.value)}
        className="w-full p-2 border"
      />
      <input
        type="date"
        value={fechaFinalPlaneada}
        onChange={(e) => setFechaFinalPlaneada(e.target.value)}
        className="w-full p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Crear Objetivo
      </button>
    </form>
  );
}
