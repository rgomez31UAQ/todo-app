import { useState } from 'react';
import { createTarea, deleteTarea } from '../services/api';

export default function TareaList({ objetivo, onChange }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const agregar = async () => {
    if (titulo === '') return;
    await createTarea({ titulo, descripcion, objetivoId: objetivo._id });
    setTitulo('');
    setDescripcion('');
    onChange();
  };

  const eliminar = async (id) => {
    await deleteTarea(id);
    onChange();
  };

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2">Tareas de {objetivo.nombre}</h3>
      <ul className="space-y-1">
        {objetivo.tareas.map(t => (
          <li key={t._id} className="bg-gray-200 p-2 flex justify-between">
            <span>{t.titulo}</span>
            <button onClick={() => eliminar(t._id)} className="text-red-500">X</button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border p-1 mr-2"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="border p-1 mr-2"
        />
        <button onClick={agregar} className="bg-green-500 text-white px-2 py-1 rounded">Agregar</button>
      </div>
    </div>
  );
}
