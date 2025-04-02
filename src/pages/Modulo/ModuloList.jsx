"use client";
import { useEffect, useState } from "react";
import API_URL from "../../config/apiConfiguration"; // Asegúrate de que la configuración de la API esté correcta
import ModuloItem from "./ModuloItem"; // Asegúrate de que este componente esté correctamente importado

function ModulosList() {
  const [learningUnits, setLearningUnits] = useState([]); // Estado para las unidades de aprendizaje
  const [loading, setLoading] = useState(false); // Estado para cargar
  const [error, setError] = useState(""); // Estado para errores

  // Obtener las unidades de aprendizaje
  useEffect(() => {
    const fetchLearningUnits = async () => {
      setLoading(true);
      setError(""); // Limpiar el error si lo había
      try {
        const response = await API_URL.get('/api/unidades-de-aprendizaje/listar'); // Ruta API para obtener las unidades de aprendizaje
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
        Control de modulos.
      </h2>
      <p className="mb-10 text-lg tracking-wide text-gray-500">
        Administra los modulos correspondientes que abarquen toda una a una unidad de aprendizaje. 
      </p>

      {/* Sección para el botón de agregar unidad */}
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-5">
        <h3 className="text-2xl font-medium text-black">Módulos Registrados</h3>
        <div className="flex gap-4">
          <select className="px-3 py-0 text-lg bg-white rounded h-[51px] text-stone-900 w-[306px] max-sm:w-full">
            <option>Patrones de diseño</option>
            <option>Fundamentos de programación</option>
            <option>Sistemas Distribuidos</option>
            <option>Analisis y diseño</option>

          </select>
          <div className="flex justify-between items-center mb-8">
            <button
              className="text-sm font-bold text-white bg-teal-400 rounded cursor-pointer border-[none] h-[51px] w-[194px]"
            >
              AGREGAR MODULO
            </button>
          </div>
        </div>
      </div>

      {/* Encabezado de la tabla con los títulos de las columnas */}
      <div className="grid gap-5 px-24 py-5 grid-cols-[2fr_1fr_1fr_1fr_2fr_0.5fr] max-md:p-4 max-md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr_0.5fr] max-sm:gap-2.5 max-sm:p-2.5 max-sm:grid-cols-[1fr]">
        <div className="text-xs font-semibold text-neutral-400">Nombre</div>
        <div className="text-xs font-semibold text-neutral-400">Módulos</div>
        <div className="text-xs font-semibold text-neutral-400">Temas</div>
        <div className="text-xs font-semibold text-neutral-400">Evaluaciones</div>
        <div className="text-xs font-semibold text-neutral-400">Descripción</div>
        <div className="text-xs font-semibold text-neutral-400">Acciones</div>
      </div>

      {/* Aquí se mapean las unidades de aprendizaje y se muestran en tarjetas */}
      <div className="flex flex-col gap-3">
        {learningUnits.length === 0 ? (
          <p>No hay unidades módulos disponibles.</p>
        ) : (
          learningUnits.map((unit) => (
            <ModuloItem
              key={unit.id}
              unit={unit} // Aquí se pasan todas las propiedades de la unidad
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ModulosList;
