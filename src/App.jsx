// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/Inicio_sesion'; // Importa las páginas
import InicioEstudiante from './pages/Landing_estudiante';
import CRUDParaProfesor from './pages/UnidadAprendizajePage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} /> {/* Página de login */}
        
        {/* Navegacion para alumno */}

        <Route path="/alumno-inicio" element={<InicioEstudiante />}/>
        
        {/* Navegacion para profesor */}
        <Route path="/unidad-de-aprendizaje" element={<CRUDParaProfesor />} /> {/* Página de Unidad de Aprendizaje */}

        {/* Navegacion para administrador */}
        
      </Routes>
    </Router>
  );
}

export default App;
