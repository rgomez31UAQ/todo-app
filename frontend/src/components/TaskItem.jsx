export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg shadow-md transition bg-${task.done ? 'green' : 'white'}`}>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="accent-blue-500"
        />
        <span className={`text-lg ${task.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 font-semibold transition"
      >
        ✕
      </button>
    </div>
  );
}
