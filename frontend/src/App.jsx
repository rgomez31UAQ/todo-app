import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ObjetivoDetalle from './pages/ObjetivoDetalle';
import LandingPage from './pages/LandingPage';
import InternalLayout from './layouts/InternalLayout';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/home" element={
          <InternalLayout>
            <Home />
          </InternalLayout>
        } />

        <Route path="/objetivo/:id" element={
          <InternalLayout>
            <ObjetivoDetalle />
          </InternalLayout>
        } />
      </Routes>
    </div>
  );
}
