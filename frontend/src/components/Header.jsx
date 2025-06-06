import uaqLogo from '../assets/uaq-blanco.png';
import fiLogo from '../assets/fi.jpg';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center gap-4">
        <img src={uaqLogo} alt="UAQ" className="h-12" />
        <img src={fiLogo} alt="Facultad de Informática" className="h-12 rounded-full border-2 border-white" />
      </div>
      <h1 className="text-xl font-bold">Todo App - Facultad de Informática UAQ</h1>
    </header>
  );
}
