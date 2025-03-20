import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UnidadAprendizajePage from './pages/UnidadAprendizajePage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para la Unidad de Aprendizaje */}
        <Route path="/" element={<UnidadAprendizajePage />} />
      </Routes>
    </Router>
  );
};

export default App;
