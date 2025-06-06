import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ObjetivoDetalle from './pages/ObjetivoDetalle';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/objetivo/:id" element={<ObjetivoDetalle />} />
    </Routes>
  );
}

export default App;
