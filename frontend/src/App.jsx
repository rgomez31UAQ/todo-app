import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ObjetivoDetalle from './pages/ObjetivoDetalle';
import Header from './components/Header';
import Footer from './components/Footer'; // opcional

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/objetivo/:id" element={<ObjetivoDetalle />} />
        </Routes>
      </main>

      <Footer /> {/* opcional */}
    </div>
  );
}

export default App;
