"use client";
import { useEffect, useState } from "react";
import API_URL from "../../config/apiConfiguration"; // Asegúrate de que la configuración de la API esté correcta
import RespuestaItem from "./RespuestaItem"; // Asegúrate de que este componente esté correctamente importado

function LearningUnitsList() {
  const [learningUnits, setLearningUnits] = useState([]); // Estado para las unidades de aprendizaje
  const [loading, setLoading] = useState(false); // Estado para cargar
  const [error, setError] = useState(""); // Estado para errores

  // Obtener las unidades de aprendizaje
  useEffect(() => {
    const fetchLearningUnits = async () => {
      setLoading(true);
      setError(""); // Limpiar el error si lo había
      try {
        const response = await API_URL.get("/api/unidades-de-aprendizaje/listar"); // Ruta API para obtener las unidades de aprendizaje
        setLearningUnits(response.data); // Almacenamos los datos en el estado
      } catch (error) {
        setError("Error al obtener las unidades de aprendizaje.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLearningUnits(); // Llamada para obtener las unidades de aprendizaje
  }, []); // Solo se ejecuta al montar el componente

  if (loading) return <p>Cargando...</p>; // Mostramos un mensaje mientras cargamos
  if (error) return <p>{error}</p>; // Mostramos un mensaje de error si hubo uno

  return (
    <section className="flex-1 p-8 bg-blue-300 bg-opacity-20">
      <h2 className="mb-5 text-3xl font-semibold text-slate-800">
        Control de respuestas
      </h2>
      <p className="mb-10 text-lg tracking-wide text-gray-500">
        Administra las respuestas para cada pregunta registrada, con el fin de un mejor control para la creación y 
        estructura de sus evaluaciones. 
      </p>

      {/* Sección para el botón de agregar unidad */}
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-5">
        <h3 className="text-2xl font-medium text-black">Respuestas Registradas</h3>
        <div className="flex gap-5">
          <select className="px-5 py-0 text-lg bg-white rounded h-[51px] text-stone-900 w-[306px] max-sm:w-full">
            <option>Pregunta 1</option>
            <option>Pregunta 2</option>
            <option>Pregunta 3</option>
            <option>Pregunta 4</option>
            <option>Pregunta 5</option>
          </select>
          <div className="flex justify-between items-center mb-8">
            <button
              className="text-sm font-bold text-white bg-teal-400 rounded cursor-pointer border-[none] h-[51px] w-[194px]"
            >
              AGREGAR RESPUESTA
            </button>
          </div>
        </div>
      </div>

      {/* Encabezado de la tabla con los títulos de las columnas */}
      <div className="grid gap-5 px-24 py-5 grid-cols-[2fr_1fr_1fr_1fr_2fr_0.5fr] max-md:p-4 max-md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr_0.5fr] max-sm:gap-2.5 max-sm:p-2.5 max-sm:grid-cols-[1fr]">
        <div className="text-xs font-semibold text-neutral-400">Nombre</div>
        <div className="text-xs font-semibold text-neutral-400">Evaluación</div>
        <div className="text-xs font-semibold text-neutral-400">Correcta</div>
      </div>

      {/* Aquí se mapean las unidades de aprendizaje y se muestran en tarjetas */}
      <div className="flex flex-col gap-3">
        {learningUnits.length === 0 ? (
          <p>No hay unidades de aprendizaje disponibles.</p>
        ) : (
          learningUnits.map((unit) => (
            <RespuestaItem
              key={unit.id}
              unit={unit} // Aquí se pasan todas las propiedades de la unidad
            />
          ))
        )}
      </div>
    </section>
  );
}

export default LearningUnitsList;
