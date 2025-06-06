import { motion } from "framer-motion";

export default function ObjetivoCard({ objetivo, onClick }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 15px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
    >
      <h3 className="font-bold text-lg">{objetivo.titulo}</h3>
      <p className="text-gray-600">{objetivo.descripcion}</p>
    </motion.div>
  );
}
