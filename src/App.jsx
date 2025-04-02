// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/Estudiante/Landing_estudiante';
import LearningUnitsPage from './pages/Estudiante/Ua_Estudiante';
import LoginPage from './pages/Login/Inicio_sesion'; // Importa las páginas

// CRUD de profesor por página
import ModuloDashboard from './pages/Modulo/ModuloPage';
import PreguntaDashboard from './pages/Preguntas/PreguntaPage';
import RespuestaDashboard from './pages/Respuestas/RespuestaPage';
import TemaDashboard from './pages/Tema/TemaPage';
import LearningDashboard from './pages/UnidadDeAprendizaje/UnidadAprendizajePage';



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
          <Route path="/tema" element={<TemaDashboard />} /> {/* Página de Tema */}
          <Route path="/preguntas" element={<PreguntaDashboard />} /> {/* Página de Pregunta */}
          <Route path="/respuestas" element={<RespuestaDashboard />} /> {/* Página de Respuesta */}
        
        
       

        {/* Navegacion para administrador */}
        
      </Routes>
 
    </Router>
  );
}

export default App;
