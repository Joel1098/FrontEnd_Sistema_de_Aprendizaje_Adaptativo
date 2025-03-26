import { useState } from "react";
import API_URL from "../config/apiConfiguration"; // Asegúrate de que la configuración de axios esté correcta

function LearningUnitElement({ title, unitId }) {
  const [isEnrolled, setIsEnrolled] = useState(false); // Estado para saber si el usuario está inscrito
  const [loading, setLoading] = useState(false); // Para mostrar un estado de carga
  const [error, setError] = useState(""); // Para mostrar errores

  // Función que maneja la inscripción a la unidad
  const handleEnroll = async () => {
    setLoading(true);
    setError(""); // Limpiar error previo
    try {
      // Hacer la solicitud al backend para inscribir al usuario
      const response = await API_URL.post('api/unidades-de-aprendizaje/inscribir', {
        unidadId: unitId, // Pasamos el ID de la unidad de aprendizaje
      });

      if (response.status === 200) {
        setIsEnrolled(true); // Marcar que el usuario está inscrito
        alert(`Inscripción exitosa a la unidad: ${title}`);
      }
    } catch (error) {
      setError("Hubo un error al inscribirse. Intenta nuevamente.");
      console.error(error);

      setTimeout(() => {

        setError("");
        
      }, 3000);
    } finally {
      setLoading(false); // Terminamos el estado de carga
    }
  };

  // Obtener los estilos para el título de la tarjeta
  const getTitleStyles = () => {
    return "text-2xl font-semibold tracking-wide text-black text-center";
  };

  // Obtener los estilos para el contenedor de la tarjeta
  const getContainerStyles = () => {
    return "flex flex-col justify-center items-center px-4 py-20 w-full rounded-3xl bg-gray-100 shadow-lg hover:shadow-xl transition-all ease-in-out duration-300";
  };

  // Obtener los estilos para el botón de inscripción
  const getButtonContainerStyles = () => {
    return "px-4 py-4 mt-20 text-base font-bold text-center text-white bg-teal-500 rounded-lg w-[150px] hover:bg-teal-600 transition-all duration-300";
  };

  return (
    <article className={getContainerStyles()}>
      <h2 className={getTitleStyles()}>{title}</h2>

      {/* Mostrar error si hay */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Botón de Inscripción */}
      <button
        onClick={handleEnroll}
        className={getButtonContainerStyles()}
        disabled={isEnrolled || loading} // Deshabilitar el botón si ya está inscrito o si está en proceso de carga
      >
        {loading ? "Cargando..." : isEnrolled ? "Inscrito" : "Inscribir"}
      </button>
    </article>
  );
}

export default LearningUnitElement;
