import { useEffect, useState } from 'react';
import API_URL from '../config/apiConfiguration'; // Asegúrate de que la configuración de axios esté correcta

const ModuloPage = () => {
  const [modulos, setModulos] = useState([]);
  const [nuevoModulo, setNuevoModulo] = useState({ nombre: '', descripcion: '' });
  const [moduloEditado, setModuloEditado] = useState({ id: '', nombre: '', descripcion: '' });
  const [unidadId, setUnidadId] = useState(0); // Estado para manejar el ID de la unidad de aprendizaje

  // Función para obtener módulos por unidad de aprendizaje
  const obtenerModulos = async () => {
    if (unidadId <= 0) return; // No hacer nada si el ID de la unidad no es válido

    try {
      const response = await API_URL.get(`/api/modulos/${unidadId}`);
      console.log('Modulos obtenidos:', response.data); // Ver la respuesta en la consola
      setModulos(response.data); // Actualizar el estado con la respuesta
    } catch (error) {
      console.error('Error al obtener los módulos:', error);
    }
  };

  // Crear módulo
  const crearModulo = async () => {
    try {
      const response = await API_URL.post('/api/modulos/crear', nuevoModulo);
      console.log('Módulo creado:', response.data); // Ver la respuesta en la consola
      alert('Módulo creado con éxito!');
      setNuevoModulo({ nombre: '', descripcion: '' }); // Limpiar los campos después de la creación
      obtenerModulos(); // Volver a obtener los módulos para actualizar la lista
    } catch (error) {
      console.error('Error al crear el módulo:', error);
      alert('Error al crear el módulo.');
    }
  };

  // Editar módulo
  const editarModulo = async () => {
    try {
      const response = await API_URL.put(`/api/modulos/editar/${moduloEditado.id}`, moduloEditado);
      console.log('Módulo editado:', response.data); // Ver la respuesta en la consola
      alert('Módulo editado con éxito!');
      setModuloEditado({ id: '', nombre: '', descripcion: '' }); // Limpiar los campos después de la edición
      obtenerModulos(); // Volver a obtener los módulos para actualizar la lista
    } catch (error) {
      console.error('Error al editar el módulo:', error);
      alert('Error al editar el módulo.');
    }
  };

  // Eliminar módulo
  const eliminarModulo = async (id) => {
    try {
      const response = await API_URL.delete(`/api/modulos/eliminar/${id}`);
      console.log('Módulo eliminado:', response.data); // Ver la respuesta en la consola
      alert('Módulo eliminado con éxito!');
      obtenerModulos(); // Volver a obtener los módulos para actualizar la lista
    } catch (error) {
      console.error('Error al eliminar el módulo:', error);
      alert('Error al eliminar el módulo.');
    }
  };

  useEffect(() => {
    // Llamamos a obtenerModulos solo cuando el ID de la unidad es válido
    if (unidadId > 0) {
      obtenerModulos();
    }
  }, [unidadId]); // Esto se ejecutará cada vez que cambie el `unidadId`

  return (
    <div>
      <h1>Gestión de Módulos</h1>

      {/* Campo para ingresar el ID de la unidad */}
      <div>
        <h2>Ingresar ID de la unidad de aprendizaje</h2>
        <input
          type="number"
          placeholder="ID de la unidad"
          value={unidadId}
          onChange={(e) => setUnidadId(e.target.value)}
        />
        <button onClick={obtenerModulos}>Obtener Módulos</button>
      </div>

      {/* Crear módulo */}
      <div>
        <h2>Crear Módulo</h2>
        <input
          type="text"
          placeholder="Nombre del módulo"
          value={nuevoModulo.nombre}
          onChange={(e) => setNuevoModulo({ ...nuevoModulo, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={nuevoModulo.descripcion}
          onChange={(e) => setNuevoModulo({ ...nuevoModulo, descripcion: e.target.value })}
        />
        <button onClick={crearModulo}>Crear Módulo</button>
      </div>

      {/* Editar módulo */}
      <div>
        <h2>Editar Módulo</h2>
        <input
          type="text"
          placeholder="ID del módulo"
          value={moduloEditado.id}
          onChange={(e) => setModuloEditado({ ...moduloEditado, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nombre"
          value={moduloEditado.nombre}
          onChange={(e) => setModuloEditado({ ...moduloEditado, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={moduloEditado.descripcion}
          onChange={(e) => setModuloEditado({ ...moduloEditado, descripcion: e.target.value })}
        />
        <button onClick={editarModulo}>Editar Módulo</button>
      </div>

      {/* Listar módulos */}
      <div>
        <h2>Listado de Módulos</h2>
        <ul>
          {modulos.map((modulo) => (
            <li key={modulo.id}>
              {modulo.nombre} - {modulo.descripcion}
              <button onClick={() => eliminarModulo(modulo.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModuloPage;
