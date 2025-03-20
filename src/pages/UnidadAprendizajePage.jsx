import { useState } from 'react';
import API_URL from '../config/apiConfiguration'; // Asegúrate de que tu API_URL esté configurado correctamente

const CrearUnidad = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [unidadCreada, setUnidadCreada] = useState(null);

  // Obtén el usuarioId desde el contexto o desde localStorage
  const usuarioId = localStorage.getItem('usuarioId') || 1; // Aquí se asume que el usuarioId ya está guardado

  const crearUnidadDeAprendizaje = async () => {
    const nuevaUnidad = {
      nombre,
      descripcion,
      usuarioId, // Usamos el usuarioId que ya tenemos en el frontend
    };

    try {
      const response = await API_URL.post('/api/unidades-de-aprendizaje/crear', nuevaUnidad);
      setUnidadCreada(response.data); // Asumiendo que la respuesta contiene la unidad recién creada con su ID
      alert('Unidad de aprendizaje creada con éxito');
    } catch (error) {
      console.error('Error al crear la unidad de aprendizaje:', error);
      alert('Error al crear la unidad de aprendizaje');
    }
  };

  return (
    <div>
      <h1>Crear Unidad de Aprendizaje</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button onClick={crearUnidadDeAprendizaje}>Crear</button>

      {unidadCreada && (
        <div>
          <h3>Unidad de aprendizaje creada con éxito:</h3>
          <p>Nombre: {unidadCreada.nombre}</p>
          <p>ID: {unidadCreada.id}</p> {/* Muestra el ID generado */}
        </div>
      )}
    </div>
  );
};

export default CrearUnidad;
