import { Link } from 'react-router-dom';
import uaqLogo from '../assets/uaq-blanco.png';
import fiLogo from '../assets/fi.jpg';

export default function LandingPage() {
  const scrollToForm = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-uaqblue text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 px-6 shadow-md bg-uaqblue">
        <div className="flex items-center gap-4">
          <img src={uaqLogo} alt="UAQ" className="h-12" />
          <img src={fiLogo} alt="FI" className="h-12 rounded-full border-2 border-white" />
        </div>
        <Link
          to="/home"
          className="bg-uaqyellow text-uaqblue px-4 py-2 rounded font-bold hover:bg-yellow-300 transition"
        >
          Iniciar App →
        </Link>
      </header>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center text-center flex-grow px-6 py-12 bg-gradient-to-b from-uaqblue to-blue-700">
        <h1 className="text-4xl font-bold mb-4">Sistema de Gestión de Tareas</h1>
        <p className="max-w-xl text-lg mb-6 text-gray-100">
          Organiza tus metas, crea objetivos y asocia tareas para lograrlos. Desarrollado con React y Node.js por estudiantes de la Facultad de Informática – UAQ.
        </p>
        <div className="flex gap-4">
          <Link
            to="/home"
            className="bg-uaqyellow text-uaqblue px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Comenzar ahora
          </Link>
          <button
            onClick={scrollToForm}
            className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-uaqblue transition"
          >
            Contactar
          </button>
        </div>
      </main>

      {/* Características */}
      <section className="bg-white text-gray-900 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-uaqblue mb-6">📋 ¿Qué ofrece esta app?</h2>
          <ul className="grid gap-6 md:grid-cols-3">
            <li className="bg-uaqgray p-4 rounded shadow hover:shadow-lg transition">
              ✅ Crear, editar y eliminar objetivos
            </li>
            <li className="bg-uaqgray p-4 rounded shadow hover:shadow-lg transition">
              ✅ Asignar tareas a cada objetivo
            </li>
            <li className="bg-uaqgray p-4 rounded shadow hover:shadow-lg transition">
              ✅ Interfaz moderna con navegación intuitiva
            </li>
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-uaqyellow text-uaqblue px-6 py-12">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">📬 Contacto</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-2 rounded border"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-2 rounded border"
            />
            <textarea
              rows="4"
              placeholder="Tu mensaje"
              className="w-full p-2 rounded border"
            />
            <button
              type="submit"
              className="bg-uaqblue text-white px-4 py-2 rounded hover:bg-blue-900 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-uaqblue text-gray-200 text-sm text-center py-4">
        &copy; {new Date().getFullYear()} Universidad Autónoma de Querétaro · Facultad de Informática
      </footer>
    </div>
  );
}
