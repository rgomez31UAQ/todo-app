export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p className="text-center text-gray-500 mt-8">No hay tareas aún.</p>;

  return (
    <div className="space-y-4 mt-4">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}
