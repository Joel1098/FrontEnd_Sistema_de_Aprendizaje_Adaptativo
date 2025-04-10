import { useState } from "react";
import API_URL from "../../../config/apiConfiguration"; // Asegúrate de que la URL de tu API esté correcta
import InputField from "../InputField";
import ModalActions from "../ModalActions";
import ModalHeader from "../ModalHeader";
import TextareaField from "../TextareaField";

function ModalCrearUnidad({ onClose, isOpen, id }) {
  const [nombre, setNombre] = useState(""); // Estado para el nombre de la unidad
  const [descripcion, setDescripcion] = useState(""); // Estado para la descripción de la unidad
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const [error, setError] = useState(""); // Para manejar posibles errores
  const [setNewUnidad] = useState({});


  const handleCancel = () => {
    setNombre(""); // Limpiar el nombre
    setDescripcion(""); // Limpiar la descripción
    onClose(false); // Cerrar el modal
  };

  const handleConfirm = async () => {
    if (!nombre || !descripcion) {
      setError("Todos los campos son obligatorios");
      return;
    }

    

    try {
      setLoading(true);
      setError(""); // Limpiar errores previos

      // Realizamos la solicitud para crear la unidad de aprendizaje
      const response = await API_URL.post("/api/unidades-de-aprendizaje/crear", {
        Nombre: nombre,
        Descripcion: descripcion,
        UsuarioId: id
      });

      
      if (response.status === 200) {

        const newUnidad = response.data; 

        setNewUnidad((prevUnidades) => [...prevUnidades, newUnidad]);
        console.log("Unidad creada exitosamente", newUnidad);
        onClose(true); // Cerrar el modal
      }
    } catch (error) {
      setError("Hubo un error al crear la unidad de aprendizaje.");
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
            <ModalHeader title="Agregar Unidad de Aprendizaje" onClose={onClose} />

            <div className="px-6 w-full max-md:px-5 max-md:max-w-full">
              <form className="w-full max-md:max-w-full">
                <InputField
                  label="Nombre"
                  placeholder="Título del la unidad de aprendizaje"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />

                <TextareaField
                  label="Descripción"
                  placeholder="Agregar una breve descripción de su unidad de aprendizaje"
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

export default ModalCrearUnidad;
