import { useState } from "react";
import API_URL from "../../../config/apiConfiguration"; // Asegúrate de que la URL de tu API esté correcta
import InputField from "../InputField";
import ModalActions from "../ModalActions";
import ModalHeader from "../ModalHeader";
import TextareaField from "../TextareaField";


function CrearTema({ isOpen, onClose, selectedModulo }) {
  const [nombre, setNombre] = useState(""); // Estado para el nombre de la unidad
  const [descripcion, setDescripcion] = useState(""); // Estado para la descripción de la unidad
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const [error, setError] = useState(""); // Para manejar posibles errores
  const [setNewTema] = useState({}); 

  const handleCancel = () => {
    setNombre(""); // Limpiar el nombre
    setDescripcion(""); // Limpiar la descripción
    onClose(false); // Cerrar el modal
  };

  

  const handleConfirm = async () => {
    if (!nombre || !descripcion || !selectedModulo) {
      console.log('nombre:', nombre);
      console.log('descripcion:', descripcion);
      console.log('moduloId:', selectedModulo);
      setError("Todos los campos son obligatorios");
      return;
    }
      

    try {
      setLoading(true);
      setError(""); // Limpiar errores previos
      
      console.log("Datos enviados", {

        IdModulo: selectedModulo,
        Nombre: nombre,
        Descripcion: descripcion,

      });
      
      const response = await API_URL.post("/api/temas/crear", {
        
        IdModulo: selectedModulo,
        Nombre: nombre,
        Descripcion: descripcion,
      });

      

      // Si la respuesta es exitosa, cerramos el modal y actualizamos la lista
      if (response.status === 200) {

        const newTema = response.data; // Guardamos el nuevo módulo creado

        setNewTema((prevTemas) => [...prevTemas, newTema]);
        console.log("Tema creado exitosamente", newTema);
        onClose(true); // Cerrar el modal
      }
    } catch (error) {
      setError("Hubo un error al crear el tema.");
      console.error(error);
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  return(
    <>
      {isOpen && (
        <section className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <article className="overflow-hidden max-w-full bg-white rounded-2xl shadow-xl w-[640px]">
            <ModalHeader title="Agregar Tema" onClose={onClose} />

            <div className="px-6 w-full max-md:px-5 max-md:max-w-full">
              <form className="w-full max-md:max-w-full">
                <InputField
                  label="Nombre"
                  placeholder="Título del tema"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />

                <TextareaField
                  label="Descripción"
                  placeholder="Agregar una breve descripción de su tema"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </form>
            </div>

            {/* Mostrar el mensaje de error si hay */}
            {error && (
              <div className="text-red-500 text-center py-2">
                <p>{error}</p>
              </div>
            )}

            <ModalActions
              onCancel={handleCancel}
              onConfirm={handleConfirm}
              isLoading={loading}
            />
          </article>
        </section>
      )}
    </>
  );
}

export default CrearTema;
