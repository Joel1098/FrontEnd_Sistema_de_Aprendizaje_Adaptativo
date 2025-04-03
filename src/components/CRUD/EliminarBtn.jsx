
import API_URL from '../../config/apiConfiguration';

const EliminarBtn = ({ url, obtenerDatos }) => {
  const handleEliminar = async () => {
    try {
      await API_URL.delete(url);
      obtenerDatos(); // Actualiza la lista después de eliminar
      alert('Unidad eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar unidad:', error);
      alert('Error al eliminar la unidad');
    }
  };

  return <button onClick={handleEliminar}>Eliminar</button>;
};

export default EliminarBtn;
