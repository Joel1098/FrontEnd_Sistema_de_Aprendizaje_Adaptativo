
import { useState } from "react";
import CrearPregunta from "../../components/CRUD/Pregunta/ModalCrearPregunta";
import ModalEliminarPregunta from "../../components/CRUD/Pregunta/ModalEliminarPregunta";
import API_URL from "../../config/apiConfiguration"; // Asegúrate de que la configuración de la API esté correcta
import PreguntaItem from "./PreguntaItem";

function PreguntasList() {
  const [temas] = useState([]);
  const [preguntas, setPreguntas] = useState([]); // Estado para las unidades de aprendizaje
  const [selectedTemas, setSelectedTemas] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para cargar
  const [error, setError] = useState(""); // Estado para errores
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
  const [isModal, SetisModal] = useState(false);
  const [PreguntaToDelete, setPreguntaToDelete] = useState(null);


  
    


   // Obtener módulos cuando se selecciona una unidad de aprendizaje
   const fetchPreguntas = async (temaId) => {
    setLoading(true);
    setError(""); // Limpiar el error si lo había
    try {
      const response = await API_URL.get(`/api/listar-por-tema/${temaId}`); // Ruta para obtener módulos
      setPreguntas(response.data); // Almacenamos los módulos
    } catch (error) {
      setError("Error al obtener los temas.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  // Cuando seleccionamos una unidad, obtenemos sus módulos
  const handleTemaOnChange = (e) => {
    const selectedTemaId = e.target.value;
    setSelectedTemas(selectedTemaId); // Actualizamos la unidad seleccionada
    fetchPreguntas(selectedTemaId);  // Traemos los módulos de esa unidad
     // Traemos los módulos de esa unidad
  };


  const openModal = () => SetisModal(true);

  const closeModal = () => SetisModal(false);


  const openDeleteModal = (question) => {
    setPreguntaToDelete(question); // Asignamos la unidad a eliminar
    setIsDeleteModalOpen(true); 
  };

  // Cerrar modal de eliminar
  const closeDeleteModal = () => setIsDeleteModalOpen(false);


  const handleDeletePregunta = async () => {
    try {
      await API_URL.delete(`/api/preguntas/eliminar/${PreguntaToDelete.id}`);
      const response = 200;
      if (response.status) {

        setPreguntas((prevPreguntas) => prevPreguntas.filter((question) => question.id !== PreguntaToDelete.id)); 
        closeDeleteModal();
      }else{
        console.log("No esta recibiendo correctamente el id.");
      }
      
    } catch (error) {
      console.error("Error al eliminar la pregunta:", error);
    }
  };

  if (loading) return <p>Cargando...</p>; // Mostramos un mensaje mientras cargamos
  if (error) return <p>{error}</p>; // Mostramos un mensaje de error si hubo uno

  return (
    <section className="flex-1 p-8 bg-blue-300 bg-opacity-20">
      <h2 className="mb-5 text-3xl font-semibold text-slate-800">
        Control de preguntas
      </h2>
      <p className="mb-10 text-lg tracking-wide text-gray-500">
        Administra las preguntas para poder construir evaluaciones para cada unidad de aprendizaje registrada en el sistema.
      </p>

      {/* Sección para el botón de agregar unidad */}
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-5">
        <h3 className="text-2xl font-medium text-black">Preguntas Registrados</h3>
        <div className="flex gap-5">
        <select
            className="px-5 py-0 text-lg bg-white rounded h-[51px] text-stone-900 w-[306px] max-sm:w-full"
            onChange={handleTemaOnChange}
            value={selectedTemas || ""}
          >
            <option value="">Selecciona un Tema</option>
            {temas.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.nombre}
              </option>
            ))}
          </select>
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={openModal}
              className="text-sm font-bold text-white bg-teal-400 rounded cursor-pointer border-[none] h-[51px] w-[194px]"
            >
              AGREGAR PREGUNTA
            </button>
          </div>
        </div>
      </div>

      {/* Encabezado de la tabla con los títulos de las columnas */}
      <div className="grid gap-5 px-24 py-5 grid-cols-[2fr_1fr_1fr_1fr_2fr_0.5fr] max-md:p-4 max-md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr_0.5fr] max-sm:gap-2.5 max-sm:p-2.5 max-sm:grid-cols-[1fr]">
        <div className="text-xs font-semibold text-neutral-400">Nombre</div>
        <div className="text-xs font-semibold text-neutral-400">Orden</div>
        <div className="text-xs font-semibold text-neutral-400">Temas</div>
        <div className="text-xs font-semibold text-neutral-400">Evaluaciones</div>
        <div className="text-xs font-semibold text-neutral-400">Acciones</div>
      </div>

      {/* Mostrar los módulos si hay módulos disponibles para la unidad seleccionada */}
      <div className="flex flex-col gap-3">
        {preguntas.length === 0 ? (
          <p>No hay módulos disponibles para esta unidad de aprendizaje.</p>
        ) : (
          preguntas.map((question) => (
            <PreguntaItem
              key={question.id}
              module={question}
              onDelete={() => openDeleteModal(question)} // Pasamos la función para eliminar
            />
          ))
        )}
      </div>

      {/* Modal de Crear Módulo */}
      <CrearPregunta isOpen={isModal} onClose={closeModal} selectedTemas={selectedTemas}>
        <h2 className="text-lg font-semibold">Crear Módulo</h2>
        <form>
          <div className="mt-4">
            <label htmlFor="name" className="block">Nombre</label>
            <input
              type="text"
              id="name"
              placeholder="Ingrese el nombre del módulo"
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
              Crear Módulo
            </button>
          </div>
        </form>
      </CrearPregunta>

      {/* Modal de Confirmación de Eliminación */}
      <ModalEliminarPregunta
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirmDelete={handleDeletePregunta}
        itemName={PreguntaToDelete?.nombre} 
      />
    </section>
  );
}

export default PreguntasList;
