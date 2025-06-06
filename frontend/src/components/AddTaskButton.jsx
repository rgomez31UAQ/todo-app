import { motion } from "framer-motion";

export default function AddTaskButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, backgroundColor: "#4F46E5" }}
      whileTap={{ scale: 0.95 }}
      className="bg-indigo-600 text-white px-4 py-2 rounded shadow-md font-semibold"
    >
      + Agregar tarea
    </motion.button>
  );
}
