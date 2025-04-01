

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
