import { useState } from "react";
import ModalActions from "../ModalActions"; // Asegúrate de tener este componente de acciones ya definido
import ModalHeader from "../ModalHeader"; // Asegúrate de tener este componente también

function ModalEliminar({ isOpen, onClose, onConfirmDelete, itemName }) {
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const [error, setError] = useState(""); // Para manejar posibles errores

  const handleCancel = () => {
    setError(""); // Limpiar cualquier mensaje de error
    onClose(true); // Cerrar el modal
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    setError(""); // Limpiar el error si lo había
    try {
      // Llamamos a la función onConfirmDelete para ejecutar la acción de eliminación
      await onConfirmDelete();
      onClose(); // Cerrar el modal después de eliminar
    } catch (error) {
      setError("Hubo un error al eliminar la unidad."); // Mostrar mensaje de error si falla la eliminación
      console.error(error);
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  return (
    <>
      {isOpen && (
        <section className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <article className="overflow-hidden max-w-full bg-white rounded-2xl shadow-xl w-[640px]">
            <ModalHeader title={`Eliminar ${itemName}`} onClose={onClose} />

            <div className="px-6 w-full max-md:px-5 max-md:max-w-full">
              <p className="text-lg text-center text-gray-700">
                ¿Estás seguro de que deseas eliminar la unidad de aprendizaje?: <strong>{itemName}</strong>?
              </p>
            </div>

            {/* Mostrar el mensaje de error si hay */}
            {error && (
              <div className="text-red-500 text-center py-2">
                <p>{error}</p>
              </div>
            )}

            <ModalActions
            
              onCancel={handleCancel}
              onConfirm={handleConfirmDelete}
              isLoading={loading}
              confirmText="Confirmar"
              cancelText="Cancelar"
            />
          </article>
        </section>
      )}
    </>
  );
}

export default ModalEliminar;
