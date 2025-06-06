import { useState } from 'react';
import { createTarea, deleteTarea } from '../services/api';
import { Trash2, PlusCircle } from 'lucide-react';

export default function TareaList({ objetivo, onChange }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const agregar = async () => {
    if (titulo.trim() === '') return;
    await createTarea({ titulo, descripcion, objetivoId: objetivo._id });
    setTitulo('');
    setDescripcion('');
    onChange();
  };

  const eliminar = async (id) => {
    if (confirm('¿Eliminar esta tarea?')) {
      await deleteTarea(id);
      onChange();
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-blue-900 mb-4">
        🧩 Tareas asociadas a "{objetivo.nombre}"
      </h2>

      {objetivo.tareas.length === 0 && (
        <p className="text-gray-500 italic mb-4">No hay tareas aún.</p>
      )}

      <ul className="space-y-3 mb-6">
        {objetivo.tareas.map((t) => (
          <li
            key={t._id}
            className="bg-gray-50 border-l-4 border-blue-600 rounded-md px-4 py-2 flex justify-between items-start hover:bg-gray-100"
          >
            <div>
              <p className="font-medium text-gray-800">{t.titulo}</p>
              {t.descripcion && (
                <p className="text-sm text-gray-500 mt-1">{t.descripcion}</p>
              )}
            </div>
            <button
              onClick={() => eliminar(t._id)}
              className="text-red-500 hover:text-red-700 ml-4"
              title="Eliminar tarea"
            >
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">Agregar nueva tarea</h3>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Descripción (opcional)"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={agregar}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <PlusCircle size={18} />
          Agregar tarea
        </button>
      </div>
    </div>
  );
}
