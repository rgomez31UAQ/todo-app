import { useEffect, useState } from 'react';
import { getObjetivos, deleteObjetivo } from '../services/api';
import { Link } from 'react-router-dom';

export default function ObjetivoList() {
  const [objetivos, setObjetivos] = useState([]);

  const loadObjetivos = async () => {
    const res = await getObjetivos();
    setObjetivos(res.data);
  };

  const eliminar = async (id) => {
    await deleteObjetivo(id);
    loadObjetivos();
  };

  useEffect(() => {
    loadObjetivos();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2 font-bold">Lista de Objetivos</h2>
      <ul className="space-y-2">
        {objetivos.map((o) => (
          <li key={o._id} className="bg-white p-3 shadow-md rounded flex justify-between items-center">
            <Link to={`/objetivo/${o._id}`} className="text-blue-600 underline">
              {o.nombre}
            </Link>
            <button onClick={() => eliminar(o._id)} className="text-red-500">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
