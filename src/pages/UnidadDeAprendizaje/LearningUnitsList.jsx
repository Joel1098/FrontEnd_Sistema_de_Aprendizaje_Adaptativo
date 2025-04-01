
import { useEffect, useState } from "react";
import CreateModal from "../../components/CRUD/ModalCrear"; // Modal para agregar nuevas unidades
import API_URL from "../../config/apiConfiguration"; // Asegúrate de que la configuración de la API esté correcta
import LearningUnitItem from "./LearningUnitItem"; // Asegúrate de que este componente esté correctamente importado

function LearningUnitsList() {
  const [learningUnits, setLearningUnits] = useState([]); // Estado para las unidades de aprendizaje
  const [loading, setLoading] = useState(false); // Estado para cargar
  const [error, setError] = useState(""); // Estado para errores

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

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
        Control de unidades de aprendizaje
      </h2>
      <p className="mb-10 text-lg tracking-wide text-gray-500">
        Administra las unidades de aprendizaje que se encuentran registradas en el sistema.
      </p>

      {/* Sección para el botón de agregar unidad */}
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-5">
        <h3 className="text-2xl font-medium text-black">Unidades de Aprendizaje Registradas</h3>
        <div className="flex gap-5">
          <select className="px-5 py-0 text-lg bg-white rounded h-[51px] text-stone-900 w-[306px] max-sm:w-full">
            <option>UNIDADES DE APRENDIZAJE</option>
          </select>
          <div className="flex justify-between items-center mb-8">
            <button
              className="text-sm font-bold text-white bg-teal-400 rounded cursor-pointer border-[none] h-[51px] w-[194px]"
              onClick={openModal}
            >
              AGREGAR UNIDAD
            </button>
          </div>

          {/* Modal de Crear Unidad */}
          <CreateModal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className="text-lg font-semibold">Crear Unidad de Aprendizaje</h2>
            <form>
              <div className="mt-4">
                <label htmlFor="name" className="block">Nombre</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ingrese el nombre de la unidad"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="description" className="block">Descripción</label>
                <input
                  type="text"
                  id="description"
                  placeholder="Ingrese la descripción"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  className="w-1/3 text-white bg-teal-500 rounded p-2"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-1/3 text-white bg-teal-500 rounded p-2"
                >
                  Crear Unidad
                </button>
              </div>
            </form>
          </CreateModal>
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
          <p>No hay unidades de aprendizaje disponibles.</p>
        ) : (
          learningUnits.map((unit) => (
            <LearningUnitItem key={unit.id} unit={unit} />
          ))
        )}
      </div>
    </section>
  );
}

export default LearningUnitsList;
