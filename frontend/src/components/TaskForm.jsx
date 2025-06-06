import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-sm">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Escribe una tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
      >
        Añadir
      </button>
    </form>
  );
}
