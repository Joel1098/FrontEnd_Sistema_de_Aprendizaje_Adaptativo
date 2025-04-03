function ModalActions({ onCancel, onConfirm, isLoading, error }) {
  return (
    <div className="mt-6 flex justify-between items-center p-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="px-4 py-2 bg-teal-400 text-white rounded hover:bg-teal-500"
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Confirmar"}
        </button>
      </div>
    </div>
  );
}

export default ModalActions;
