import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import API_URL from '../../config/apiConfiguration';

const EditarBtn = ({ url, obtenerDatos }) => {
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
      await API_URL.put(url, unidad);
      obtenerDatos(); // Actualiza la lista después de editar
      alert('Unidad editada con éxito');
    } catch (error) {
      console.error('Error al editar unidad:', error);
      alert('Error al editar la unidad');
    }
  };

  useEffect(() => {
    const fetchUnidad = async () => {
      const response = await API_URL.get(url);
      setUnidad(response.data);
    };
    fetchUnidad();
  }, [url]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={unidad.nombre}
        onChange={handleChange}
        required
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={unidad.descripcion}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="usuarioId"
        placeholder="ID del Usuario"
        value={unidad.usuarioId}
        onChange={handleChange}
        required
      />
      <button type="submit">Editar Unidad</button>
    </form>
  );
};

EditarBtn.propTypes = {
    url: PropTypes.string.isRequired,
    obtenerDatos: PropTypes.func.isRequired
};

export default EditarBtn;
