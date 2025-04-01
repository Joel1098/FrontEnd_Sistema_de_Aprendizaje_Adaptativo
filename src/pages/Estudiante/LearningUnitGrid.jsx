import { useEffect, useState } from "react";
import API_URL from "../../config/apiConfiguration";
import LearningUnitElement from "./LearningUnitElement"; // Asegúrate de que este componente esté importado correctamente

function LearningUnitGrid() {
  const [learningUnits, setLearningUnits] = useState([]); // Para las unidades de aprendizaje
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(""); // Manejo de errores

  useEffect(() => {
    // Obtener las unidades de aprendizaje de la API
    const fetchLearningUnits = async () => {
      setLoading(true);
      setError(""); // Limpiar el error si lo había
      try {
        const response = await API_URL.get("/api/unidades-de-aprendizaje/listar"); // Ruta de la API
        setLearningUnits(response.data); // Guardamos los datos en el estado
      } catch (error) {
        setError("Error al obtener las unidades de aprendizaje.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLearningUnits();
  }, []); // Ejecutar solo cuando el componente se monte

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <div className="mt-30 mr-6 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full space-y-[80px] flex relative justify-between items-center px-36 py-4 max-md:p-5 max-sm:p-4 ">
        {/* Usar grid para mostrar las tarjetas de unidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {learningUnits.length === 0 ? (
            <p>No hay unidades de aprendizaje disponibles.</p>
          ) : (
            learningUnits.map((unit) => (
              <LearningUnitElement
                key={unit.id}
                title={unit.nombre} // Usamos el nombre de la unidad
                unitId={unit.id} // Pasamos el ID de la unidad para la inscripción
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default LearningUnitGrid;
