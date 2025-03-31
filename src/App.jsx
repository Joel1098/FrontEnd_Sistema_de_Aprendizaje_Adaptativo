// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/Inicio_sesion'; // Importa las páginas
import HomePage from './pages/Landing_estudiante';
import ModuloDashboard from './pages/ModuloPage';
import LearningUnitsPage from './pages/Ua_Estudiante';
import LearningDashboard from './pages/UnidadAprendizajePage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} /> {/* Página de login */}
        
        {/* Navegacion para alumno */}

        <Route path="/alumno-inicio" element={<HomePage />}/>
        <Route path="/inscribir-unidades" element={<LearningUnitsPage />}/>
        

        
        {/* Navegacion para profesor */}
        <Route path="/unidad-de-aprendizaje" element={<LearningDashboard />} /> {/* Página de Unidad de Aprendizaje */}
        <Route path="/modulo" element={<ModuloDashboard />} /> {/* Página de Módulo */}

        {/* Navegacion para administrador */}
        
      </Routes>
    </Router>
  );
}

export default App;
