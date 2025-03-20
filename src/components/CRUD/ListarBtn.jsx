import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import API_URL from '../../config/apiConfiguration';

const ListarBtn = ({ url }) => {
  const [unidades, setUnidades] = useState([]);

  const obtenerUnidades = async () => {
    try {
      const response = await API_URL.get(url);
      setUnidades(response.data);
    } catch (error) {
      console.error('Error al obtener unidades:', error);
    }
  };

  useEffect(() => {
    obtenerUnidades();
  }, [url]);

  return (
    <div>
      <h3>Listado de Unidades de Aprendizaje</h3>
      <ul>
        {unidades.map((unidad) => (
          <li key={unidad.id}>
            {unidad.nombre} - {unidad.descripcion}
            {/* Agregar botones para editar y eliminar */}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListarBtn.propTypes = {
  url: PropTypes.string.isRequired,
  obtenerDatos: PropTypes.func.isRequired
};

export default ListarBtn;
