import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Inicio_sesion';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para la Unidad de Aprendizaje */}
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
