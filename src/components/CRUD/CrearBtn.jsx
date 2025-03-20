import PropTypes from 'prop-types';
import { useState } from 'react';
import API_URL from '../../config/apiConfiguration';

// Componente Crear
const CrearBtn = ({ url, obtenerDatos }) => {
  const [unidad, setUnidad] = useState({
    nombre: '',
    descripcion: '',
    usuarioId: 0
  });

  const handleChange = (e) => {
    setUnidad({
      ...unidad,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API_URL.post(url, unidad);  // Usamos el `url` que se pasa como prop
      obtenerDatos();  // Llamamos a obtenerDatos() después de crear
      alert('Unidad creada con éxito');
    } catch (error) {
      console.error('Error al crear unidad:', error);
      alert('Error al crear la unidad');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={unidad.nombre}
        onChange={handleChange}
        required
      /><br></br>
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={unidad.descripcion}
        onChange={handleChange}
        required
      /><br></br>
      <input
        type="number"
        name="usuarioId"
        placeholder="ID del Usuario"
        value={unidad.usuarioId}
        onChange={handleChange}
        required
      /><br></br>
      <button type="submit">Crear Unidad</button>
    </form>
  );
};

CrearBtn.propTypes = {
    url: PropTypes.string.isRequired,
    obtenerDatos: PropTypes.func.isRequired
};

export default CrearBtn;
