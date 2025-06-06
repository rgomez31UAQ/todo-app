import { useState } from "react";
import AddTaskButton from "../components/AddTaskButton";
import ObjetivoCard from "../components/ObjetivoCard";

export default function Home() {
  const [objetivos, setObjetivos] = useState([
    { id: 1, titulo: "Aprender React", descripcion: "Estudiar hooks y router" },
    { id: 2, titulo: "Terminar proyecto", descripcion: "Finalizar la app ToDo" },
  ]);

  const handleAddTask = () => {
    const nuevoId = objetivos.length + 1;
    const nuevoObjetivo = {
      id: nuevoId,
      titulo: `Nueva tarea ${nuevoId}`,
      descripcion: "Descripción de la nueva tarea",
    };
    setObjetivos([...objetivos, nuevoObjetivo]);
  };

  const handleCardClick = (id) => {
    alert("Abrir detalle del objetivo " + id);
    // Aquí podrías navegar a /objetivo/:id con react-router
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <AddTaskButton onClick={handleAddTask} />
      {objetivos.map((obj) => (
        <ObjetivoCard key={obj.id} objetivo={obj} onClick={() => handleCardClick(obj.id)} />
      ))}
    </div>
  );
}
