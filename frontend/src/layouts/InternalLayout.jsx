import { motion } from 'framer-motion';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function InternalLayout({ children }) {
  return (
    <>
      <Header />
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
