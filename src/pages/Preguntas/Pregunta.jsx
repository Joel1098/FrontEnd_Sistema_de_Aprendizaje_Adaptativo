import { useEffect, useState } from 'react';
import API_URL from '../../config/apiConfiguration'; // Asegúrate de que la configuración de axios esté correcta

const Pregunta = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [nuevaPregunta, setNuevaPregunta] = useState({ pregunta: '', respuestaCorrecta: '', temaId: 0 });
  const [preguntaEditada, setPreguntaEditada] = useState({ id: '', pregunta: '', respuestaCorrecta: '' });
  const [temaId, setTemaId] = useState(0); // ID del tema para obtener las preguntas

  // Función para obtener preguntas por tema
  const obtenerPreguntasPorTema = async () => {
    if (temaId <= 0) return; // Verificar que el temaId sea válido

    try {
      const response = await API_URL.get(`/api/preguntas/listar-por-tema/${temaId}`);
      console.log('Preguntas obtenidas:', response.data); // Ver respuesta en la consola
      setPreguntas(response.data); // Actualizar el estado con la respuesta de las preguntas
    } catch (error) {
      console.error('Error al obtener las preguntas:', error);
    }
  };

  // Crear pregunta
  const crearPregunta = async () => {
    try {
      const response = await API_URL.post('/api/preguntas/crear', nuevaPregunta);
      console.log('Pregunta creada:', response.data); // Ver respuesta en la consola
      alert('Pregunta creada con éxito!');
      setNuevaPregunta({ pregunta: '', respuestaCorrecta: '', temaId: 0 }); // Limpiar los campos después de la creación
      obtenerPreguntasPorTema(); // Volver a obtener las preguntas para actualizar la lista
    } catch (error) {
      console.error('Error al crear la pregunta:', error);
      alert('Error al crear la pregunta.');
    }
  };

  // Editar pregunta
  const editarPregunta = async () => {
    try {
      const response = await API_URL.put(`/api/preguntas/editar/${preguntaEditada.id}`, preguntaEditada);
      console.log('Pregunta editada:', response.data); // Ver respuesta en la consola
      alert('Pregunta editada con éxito!');
      setPreguntaEditada({ id: '', pregunta: '', respuestaCorrecta: '' }); // Limpiar los campos después de la edición
      obtenerPreguntasPorTema(); // Volver a obtener las preguntas para actualizar la lista
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
      obtenerPreguntasPorTema(); // Volver a obtener las preguntas para actualizar la lista
    } catch (error) {
      console.error('Error al eliminar la pregunta:', error);
      alert('Error al eliminar la pregunta.');
    }
  };

  useEffect(() => {
    if (temaId > 0) {
      obtenerPreguntasPorTema();
    }
  }, [temaId]); // Esto se ejecutará cada vez que cambie el `temaId`

  return (
    <div>
      <h1>Gestión de Preguntas</h1>

      {/* Campo para ingresar el ID del tema */}
      <div>
        <h2>Ingresar ID del tema</h2>
        <input
          type="number"
          placeholder="ID del tema"
          value={temaId}
          onChange={(e) => setTemaId(e.target.value)}
        />
        <button onClick={obtenerPreguntasPorTema}>Obtener Preguntas</button>
      </div>

      {/* Crear pregunta */}
      <div>
        <h2>Crear Pregunta</h2>
        <input
          type="text"
          placeholder="Pregunta"
          value={nuevaPregunta.pregunta}
          onChange={(e) => setNuevaPregunta({ ...nuevaPregunta, pregunta: e.target.value })}
        />
        <input
          type="text"
          placeholder="Respuesta Correcta"
          value={nuevaPregunta.respuestaCorrecta}
          onChange={(e) => setNuevaPregunta({ ...nuevaPregunta, respuestaCorrecta: e.target.value })}
        />
        <input
          type="number"
          placeholder="ID del Tema"
          value={nuevaPregunta.temaId}
          onChange={(e) => setNuevaPregunta({ ...nuevaPregunta, temaId: e.target.value })}
        />
        <button onClick={crearPregunta}>Crear Pregunta</button>
      </div>

      {/* Editar pregunta */}
      <div>
        <h2>Editar Pregunta</h2>
        <input
          type="text"
          placeholder="ID de la pregunta"
          value={preguntaEditada.id}
          onChange={(e) => setPreguntaEditada({ ...preguntaEditada, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Pregunta"
          value={preguntaEditada.pregunta}
          onChange={(e) => setPreguntaEditada({ ...preguntaEditada, pregunta: e.target.value })}
        />
        <input
          type="text"
          placeholder="Respuesta Correcta"
          value={preguntaEditada.respuestaCorrecta}
          onChange={(e) => setPreguntaEditada({ ...preguntaEditada, respuestaCorrecta: e.target.value })}
        />
        <button onClick={editarPregunta}>Editar Pregunta</button>
      </div>

      {/* Listar preguntas */}
      <div>
        <h2>Listado de Preguntas</h2>
        <ul>
          {preguntas.map((pregunta) => (
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

export default Pregunta;
