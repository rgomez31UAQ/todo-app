import uaqLogo from '../assets/uaq-blanco.png';
import fiLogo from '../assets/fi.jpg';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <img src={uaqLogo} alt="UAQ" className="h-12" />
          <img src={fiLogo} alt="Facultad de Informática" className="h-12 rounded-full border-2 border-white" />
        </div>
        <h1 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
          Todo App – Facultad de Informática UAQ
        </h1>
      </div>
    </header>
  );
}
