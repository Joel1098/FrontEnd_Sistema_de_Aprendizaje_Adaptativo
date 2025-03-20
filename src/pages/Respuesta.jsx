import { useEffect, useState } from 'react';
import API_URL from '../config/apiConfiguration'; // Asegúrate de que la configuración de axios esté correcta

const Respuesta = () => {
  const [respuestas, setRespuestas] = useState([]);
  const [nuevaRespuesta, setNuevaRespuesta] = useState({ respuesta: '', respuestaCorrecta: '', temaId: 0 });
  const [respuestaEditada, setRespuestaEditada] = useState({ id: '', pregunta: '', respuestaCorrecta: '' });
  const [preguntaId, setPreguntaId] = useState(0); // ID del tema para obtener las preguntas

  // Función para obtener preguntas por tema
  const obtenerRespuestaPorPregunta = async () => {
    if (preguntaId <= 0) return; // Verificar que el temaId sea válido

    try {
      const response = await API_URL.get(`/api/preguntas/listar-por-tema/${preguntaId}`);
      console.log('Preguntas obtenidas:', response.data); // Ver respuesta en la consola
      setRespuestas(response.data); // Actualizar el estado con la respuesta de las preguntas
    } catch (error) {
      console.error('Error al obtener las preguntas:', error);
    }
  };

  // Crear pregunta
  const crearPregunta = async () => {
    try {
      const response = await API_URL.post('/api/preguntas/crear', nuevaRespuesta);
      console.log('Pregunta creada:', response.data); // Ver respuesta en la consola
      alert('Pregunta creada con éxito!');
      setNuevaRespuesta({ pregunta: '', respuestaCorrecta: '', temaId: 0 }); // Limpiar los campos después de la creación
      obtenerRespuestaPorPregunta(); // Volver a obtener las preguntas para actualizar la lista
    } catch (error) {
      console.error('Error al crear la pregunta:', error);
      alert('Error al crear la pregunta.');
    }
  };

  // Editar pregunta
  const editarPregunta = async () => {
    try {
      const response = await API_URL.put(`/api/preguntas/editar/${respuestaEditada.id}`, respuestaEditada);
      console.log('Pregunta editada:', response.data); // Ver respuesta en la consola
      alert('Pregunta editada con éxito!');
      setRespuestaEditada({ id: '', pregunta: '', respuestaCorrecta: '' }); // Limpiar los campos después de la edición
      obtenerRespuestaPorPregunta(); // Volver a obtener las preguntas para actualizar la lista
    } catch (error) {
      console.error('Error al editar la pregunta:', error);
      alert('Error al editar la pregunta.');
    }
  };

  // Eliminar pregunta
  const eliminarPregunta = async (id) => {
    try {
      const response = await API_URL.delete(`/api/preguntas/eliminar/${id}`);
      console.log('Pregunta eliminada:', response.data); // Ver respuesta en la consola
      alert('Pregunta eliminada con éxito!');
      obtenerRespuestaPorPregunta(); // Volver a obtener las preguntas para actualizar la lista
    } catch (error) {
      console.error('Error al eliminar la pregunta:', error);
      alert('Error al eliminar la pregunta.');
    }
  };

  useEffect(() => {
    if (preguntaId > 0) {
      obtenerRespuestaPorPregunta();
    }
  }, [preguntaId]); // Esto se ejecutará cada vez que cambie el `temaId`

  return (
    <div>
      <h1>Gestión de Preguntas</h1>

      {/* Campo para ingresar el ID del tema */}
      <div>
        <h2>Ingresar ID del tema</h2>
        <input
          type="number"
          placeholder="ID del tema"
          value={preguntaId}
          onChange={(e) => setPreguntaId(e.target.value)}
        />
        <button onClick={obtenerRespuestaPorPregunta}>Obtener Preguntas</button>
      </div>

      {/* Crear pregunta */}
      <div>
        <h2>Crear Pregunta</h2>
        <input
          type="text"
          placeholder="Pregunta"
          value={nuevaRespuesta.pregunta}
          onChange={(e) => setNuevaRespuesta({ ...nuevaRespuesta, pregunta: e.target.value })}
        />
        <input
          type="text"
          placeholder="Respuesta Correcta"
          value={nuevaRespuesta.respuestaCorrecta}
          onChange={(e) => setNuevaRespuesta({ ...nuevaRespuesta, respuestaCorrecta: e.target.value })}
        />
        <input
          type="number"
          placeholder="ID del Tema"
          value={nuevaRespuesta.temaId}
          onChange={(e) => setNuevaRespuesta({ ...nuevaRespuesta, temaId: e.target.value })}
        />
        <button onClick={crearPregunta}>Crear Pregunta</button>
      </div>

      {/* Editar pregunta */}
      <div>
        <h2>Editar Pregunta</h2>
        <input
          type="text"
          placeholder="ID de la pregunta"
          value={respuestaEditada.id}
          onChange={(e) => setRespuestaEditada({ ...respuestaEditada, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Pregunta"
          value={respuestaEditada.pregunta}
          onChange={(e) => setRespuestaEditada({ ...respuestaEditada, pregunta: e.target.value })}
        />
        <input
          type="text"
          placeholder="Respuesta Correcta"
          value={respuestaEditada.respuestaCorrecta}
          onChange={(e) => setRespuestaEditada({ ...respuestaEditada, respuestaCorrecta: e.target.value })}
        />
        <button onClick={editarPregunta}>Editar Pregunta</button>
      </div>

      {/* Listar preguntas */}
      <div>
        <h2>Listado de Preguntas</h2>
        <ul>
          {respuestas.map((pregunta) => (
            <li key={pregunta.id}>
              {pregunta.pregunta} - {pregunta.respuestaCorrecta}
              <button onClick={() => eliminarPregunta(pregunta.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Respuesta;
