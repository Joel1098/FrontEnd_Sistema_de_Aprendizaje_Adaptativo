import { useEffect, useState } from 'react';
import API_URL from '../../config/apiConfiguration'; // Asegúrate de que la configuración de axios esté correcta

const Tema = () => {
  const [temas, setTemas] = useState([]);
  const [nuevoTema, setNuevoTema] = useState({ nombre: '', descripcion: '' });
  const [temaEditado, setTemaEditado] = useState({ id: '', nombre: '', descripcion: '' });
  const [moduloId, setModuloId] = useState(0); // ID del módulo para obtener los temas

  // Función para obtener los temas de un módulo
  const obtenerTemasPorModulo = async () => {
    if (moduloId <= 0) return; // Verificar que el moduloId sea válido

    try {
      const response = await API_URL.get(`/api/temas/listar-por-modulo/${moduloId}`);
      console.log('Temas obtenidos:', response.data); // Ver respuesta en la consola
      setTemas(response.data); // Actualizar los temas en el estado
    } catch (error) {
      console.error('Error al obtener los temas:', error);
    }
  };

  // Función para crear un nuevo tema
  const crearTema = async () => {
    try {
      const response = await API_URL.post('/api/temas/crear', nuevoTema);
      console.log('Tema creado:', response.data); // Ver respuesta en la consola
      alert('Tema creado con éxito!');
      setNuevoTema({ nombre: '', descripcion: '' }); // Limpiar los campos después de la creación
      obtenerTemasPorModulo(); // Volver a obtener los temas para actualizar la lista
    } catch (error) {
      console.error('Error al crear el tema:', error);
      alert('Error al crear el tema.');
    }
  };

  // Función para editar un tema
  const editarTema = async () => {
    try {
      const response = await API_URL.put(`/api/temas/editar/${temaEditado.id}`, temaEditado);
      console.log('Tema editado:', response.data); // Ver respuesta en la consola
      alert('Tema editado con éxito!');
      setTemaEditado({ id: '', nombre: '', descripcion: '' }); // Limpiar los campos después de la edición
      obtenerTemasPorModulo(); // Volver a obtener los temas para actualizar la lista
    } catch (error) {
      console.error('Error al editar el tema:', error);
      alert('Error al editar el tema.');
    }
  };

  // Función para eliminar un tema
  const eliminarTema = async (id) => {
    try {
      const response = await API_URL.delete(`/api/temas/eliminar/${id}`);
      console.log('Tema eliminado:', response.data); // Ver respuesta en la consola
      alert('Tema eliminado con éxito!');
      obtenerTemasPorModulo(); // Volver a obtener los temas para actualizar la lista
    } catch (error) {
      console.error('Error al eliminar el tema:', error);
      alert('Error al eliminar el tema.');
    }
  };

  useEffect(() => {
    if (moduloId > 0) {
      obtenerTemasPorModulo();
    }
  }, [moduloId], obtenerTemasPorModulo); // Esto se ejecutará cada vez que cambie el `moduloId`

  return (
    <div>
      <h1>Gestión de Temas</h1>

      {/* Campo para ingresar el ID del módulo */}
      <div>
        <h2>Ingresar ID del módulo</h2>
        <input
          type="number"
          placeholder="ID del módulo"
          value={moduloId}
          onChange={(e) => setModuloId(e.target.value)}
        />
        <button onClick={obtenerTemasPorModulo}>Obtener Temas</button>
      </div>

      {/* Crear tema */}
      <div>
        <h2>Crear Tema</h2>
        <input
          type="text"
          placeholder="Nombre del tema"
          value={nuevoTema.nombre}
          onChange={(e) => setNuevoTema({ ...nuevoTema, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={nuevoTema.descripcion}
          onChange={(e) => setNuevoTema({ ...nuevoTema, descripcion: e.target.value })}
        />
        <button onClick={crearTema}>Crear Tema</button>
      </div>

      {/* Editar tema */}
      <div>
        <h2>Editar Tema</h2>
        <input
          type="text"
          placeholder="ID del tema"
          value={temaEditado.id}
          onChange={(e) => setTemaEditado({ ...temaEditado, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nombre"
          value={temaEditado.nombre}
          onChange={(e) => setTemaEditado({ ...temaEditado, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={temaEditado.descripcion}
          onChange={(e) => setTemaEditado({ ...temaEditado, descripcion: e.target.value })}
        />
        <button onClick={editarTema}>Editar Tema</button>
      </div>

      {/* Listar temas */}
      <div>
        <h2>Listado de Temas</h2>
        <ul>
          {temas.map((tema) => (
            <li key={tema.id}>
              {tema.nombre} - {tema.descripcion}
              <button onClick={() => eliminarTema(tema.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tema;
