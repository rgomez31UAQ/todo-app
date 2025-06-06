import { useEffect, useState } from 'react';
import { getObjetivos, deleteObjetivo } from '../services/api';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react'; // ícono opcional (requiere instalación de lucide-react)

export default function ObjetivoList() {
  const [objetivos, setObjetivos] = useState([]);

  const loadObjetivos = async () => {
    const res = await getObjetivos();
    setObjetivos(res.data);
  };

  const eliminar = async (id) => {
    if (confirm('¿Eliminar este objetivo?')) {
      await deleteObjetivo(id);
      loadObjetivos();
    }
  };

  useEffect(() => {
    loadObjetivos();
  }, []);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">🎯 Objetivos actuales</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {objetivos.length === 0 && (
          <p className="text-gray-600 italic">No hay objetivos aún. Agrega uno arriba ☝️</p>
        )}
        {objetivos.map((o) => (
          <div
            key={o._id}
            className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition border-l-4 border-blue-600"
          >
            <h3 className="text-xl font-semibold text-gray-800">{o.nombre}</h3>
            <p className="text-sm text-gray-500 mt-1">
              📅 {new Date(o.fechaInicio).toLocaleDateString()} →{' '}
              {new Date(o.fechaFinalPlaneada).toLocaleDateString()}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <Link
                to={`/objetivo/${o._id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Ver tareas →
              </Link>
              <button
                onClick={() => eliminar(o._id)}
                className="text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <Trash2 size={18} />
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
