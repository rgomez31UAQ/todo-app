import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getObjetivo } from '../services/api';
import TareaList from '../components/TareaList';

export default function ObjetivoDetalle() {
  const { id } = useParams();
  const [objetivo, setObjetivo] = useState(null);

  const cargar = async () => {
    const res = await getObjetivo(id);
    setObjetivo(res.data);
  };

  useEffect(() => {
    cargar();
  }, [id]);

  if (!objetivo) return <p>Cargando...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-2">{objetivo.nombre}</h1>
      <TareaList objetivo={objetivo} onChange={cargar} />
    </div>
  );
}
