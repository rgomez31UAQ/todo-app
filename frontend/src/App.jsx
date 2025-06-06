import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ObjetivoDetalle from './pages/ObjetivoDetalle';
import LandingPage from './pages/LandingPage'; // ✅ nuevo
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header solo para secciones internas */}
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage />
          }
        />

        <Route
          path="/home"
          element={
            <>
              <Header />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </>
          }
        />

        <Route
          path="/objetivo/:id"
          element={
            <>
              <Header />
              <main className="flex-grow">
                <ObjetivoDetalle />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
