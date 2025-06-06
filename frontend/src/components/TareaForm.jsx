import { useState } from 'react';
import { createTarea } from '../services/api';

export default function TareaForm({ objetivoId, onCreated }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTarea({ titulo, descripcion, objetivoId });
    setTitulo('');
    setDescripcion('');
    if (onCreated) onCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="w-full border p-2"
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="w-full border p-2"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Agregar Tarea</button>
    </form>
  );
}
