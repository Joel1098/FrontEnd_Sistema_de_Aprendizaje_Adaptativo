
import { useEffect, useState } from "react";
import CrearTema from "../../components/CRUD/Tema/ModalCreartTema";
import ModalEliminarTema from "../../components/CRUD/Tema/ModalEliminarTema";
import API_URL from "../../config/apiConfiguration";
import TemaItem from "./TemaItem";

function TemasList() {

  const [learningUnits, setLearningUnits] = useState([]);
  const [temas, setTemas] = useState([]);
  const [modulos, setModulos] = useState([]); 
  const [selectedModulo, setSelectedModulo] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
  const [isModal, SetisModal] = useState(false);
  const [TopicToDelete, setTopicToDelete] = useState(null);
  const [selectedUnidad, setSelectedUnidad] = useState(null);

  useEffect(() => {
    const fetchLearningUnits = async () => {
      setLoading(true);
      setError(""); // Limpiar el error si lo había
      try {
        const response = await API_URL.get("/api/unidades-de-aprendizaje/listar"); // Ruta API para obtener las unidades de aprendizaje
        setLearningUnits(response.data); // Almacenamos las unidades de aprendizaje
      } catch (error) {
        setError("Error al obtener las unidades de aprendizaje.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLearningUnits(); // Llamada para obtener las unidades de aprendizaje
  }, []);
  
  
  const fetchModulos = async (unidadDeAprendizajeId) => {
    if (!unidadDeAprendizajeId) {
      console.error("El ID de la unidad de aprendizaje no es válido:", unidadDeAprendizajeId);
      return;
    }
    setLoading(true);
    setError(""); // Limpiar el error si lo había
    try {
      const response = await API_URL.get(`/api/modulos/${unidadDeAprendizajeId}`); // Ruta para obtener los módulos de la unidad
      setModulos(response.data); // Almacenamos los módulos
    } catch (error) {
      setError("Error al obtener los módulos.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  

   
   const fetchTemas = async (moduloId) => {

    if(!moduloId) 
      return; // Si no hay módulo seleccionado, no hacemos nada
    
    setLoading(true);
    setError(""); // Limpiar el error si lo había
    try {
      const response = await API_URL.get(`/api/temas/listar-por-modulo/${moduloId}`); // Ruta para obtener módulos
        
        setTemas(response.data.length == 0 ? [] : response.data); // No hay temas, limpiar el estado
      } catch (error) {
        if(error.response && error.response.status === 404){
      setTemas([]);
      console.error(error);
        }
    } finally {
      setLoading(false);
    }
  };

  const handleUnidadChange = (e) => {
    const selectedUnidadId = e.target.value;
    setSelectedUnidad(selectedUnidadId); // Actualizamos la unidad seleccionada
    fetchModulos(selectedUnidadId); // Traemos los módulos de esa unidad
    setSelectedModulo(null); // Resetear el módulo seleccionado al cambiar de unidad
    setTemas([]); // Limpiar los temas cuando cambiamos de unidad
  };

  // Cuando seleccionamos una unidad, obtenemos sus módulos
  const handleModuloChange = (e) => {
    const selectedModuloId = e.target.value;
    setSelectedModulo(selectedModuloId); // Actualizamos el módulo seleccionado
    fetchTemas(selectedModuloId); // Traemos los temas para el módulo seleccionado
  };


  const openModal = () => SetisModal(true);

  const closeModal = () => SetisModal(false);


  const openDeleteModal = (topic) => {
    setTopicToDelete(topic); // Asignamos la unidad a eliminar
    setIsDeleteModalOpen(true); 
  };

  // Cerrar modal de eliminar
  const closeDeleteModal = () => setIsDeleteModalOpen(false);


  const handleDeleteTopic = async () => {
    try {
      await API_URL.delete(`/api/temas/eliminar/${TopicToDelete.id}`);
      const response = 200;
      if (response.status) {

        setTemas((prevTemas) => prevTemas.filter((topic) => topic.id !== TopicToDelete.id)); 
        closeDeleteModal();
      }else{
        console.log("No esta recibiendo correctamente el id.");
      }
      
    } catch (error) {
      console.error("Error al eliminar el tema:", error);
    }
  };

  if (loading) return <p>Cargando...</p>; // Mostramos un mensaje mientras cargamos
  if (error) return <p>{error}</p>; // Mostramos un mensaje de error si hubo uno

  return (
    <section className="flex-1 p-8 bg-blue-300 bg-opacity-20">
      <h2 className="mb-5 text-3xl font-semibold text-slate-800">
        Control de temas
      </h2>
      <p className="mb-10 text-lg tracking-wide text-gray-500">
        Administra los temas para los módulos previamente registrados.
      </p>

      {/* Sección para el botón de agregar unidad */}
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-5">
        <h3 className="text-2xl font-medium text-black">Temas Registrados</h3>
        <div className="flex gap-5">
        <select
            className="px-5 py-0 text-lg bg-white rounded h-[51px] text-stone-900 w-[306px] max-sm:w-full"
            onChange={handleUnidadChange}
            value={selectedUnidad || ""}
          >
            <option value="">Selecciona una unidad de aprendizaje</option>
            {learningUnits.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.nombre}
              </option>
            ))}
          </select>
          <select
            className="px-5 py-0 text-lg bg-white rounded h-[51px] text-stone-900 w-[306px] max-sm:w-full"
            onChange={handleModuloChange}
            value={selectedModulo || ""}
          >
            <option value="">Selecciona un módulo</option>
            {modulos.map((module) => (
              <option key={module.id} value={module.id}>
                {module.nombre}
              </option>
            ))}
          </select>
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={openModal}
              className="text-sm font-bold text-white bg-teal-400 rounded cursor-pointer border-[none] h-[51px] w-[194px]"
            >
              AGREGAR TEMA
            </button>
          </div>
        </div>
      </div>

      {/* Encabezado de la tabla con los títulos de las columnas */}
      <div className="grid gap-5 px-24 py-5 grid-cols-[2fr_1fr_1fr_1fr_2fr_0.5fr] max-md:p-4 max-md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr_0.5fr] max-sm:gap-2.5 max-sm:p-2.5 max-sm:grid-cols-[1fr]">
        <div className="text-xs font-semibold text-neutral-400">Nombre</div>
        <div className="text-xs font-semibold text-neutral-400">Materiales de aprendizaje</div>
        <div className="text-xs font-semibold text-neutral-400">Preguntas</div>
        <div className="text-xs font-semibold text-neutral-400">Acciones</div>
      </div>

      {/* Mostrar los módulos si hay módulos disponibles para la unidad seleccionada */}
      <div className="flex flex-col gap-3">
        {temas.length === 0 ? (
          <p>No hay temas disponibles para este módulo.</p>
        ) : (
          temas.map((topic) => (
            <TemaItem
              key={topic.id}
              topic={topic}
              onDelete={() => openDeleteModal(topic)} // Pasamos la función para eliminar
            />
          ))
        )}
      </div>

      {/* Modal de Crear Tema */}
      <CrearTema isOpen={isModal} onClose={closeModal} selectedModulo={selectedModulo}>
        <h2 className="text-lg font-semibold">Crear Tema</h2>
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
              Crear Tema
            </button>
          </div>
        </form>
      </CrearTema>

      {/* Modal de Confirmación de Eliminación */}
      <ModalEliminarTema
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirmDelete={handleDeleteTopic}
        itemName={TopicToDelete?.nombre} 
      />
    </section>
  );
}

export default TemasList;
