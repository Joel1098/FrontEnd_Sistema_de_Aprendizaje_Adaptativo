// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/Inicio_sesion'; // Importa las páginas
import CRUDParaProfesor from './pages/UnidadAprendizajePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Definir rutas principales */}
        <Route path="/" element={<LoginPage />} /> {/* Página de login */}
        <Route path="/unidad-de-aprendizaje" element={<CRUDParaProfesor />} /> {/* Página de Unidad de Aprendizaje */}
        
        
      </Routes>
    </Router>
  );
}

export default App;
