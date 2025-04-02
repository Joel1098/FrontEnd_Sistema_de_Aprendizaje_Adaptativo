

function ModalActions({ onCancel, onConfirm }) {
  return (
    <footer className="pt-8 w-full text-base font-semibold whitespace-nowrap max-md:max-w-full">
      <div className="flex flex-wrap gap-3 items-start px-6 pb-6 w-full max-md:px-5 max-md:max-w-full">
        <button
          onClick={onCancel}
          className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 text-gray-700 bg-white rounded-lg border border-solid shadow-sm basis-0 border-[color:var(--Gray-300,#D5D7DA)] min-w-60"
        >
          CANCELAR
        </button>
        <button
          onClick={onConfirm}
          className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 text-white bg-teal-400 rounded-lg shadow-sm basis-0 min-w-60"
        >
          CONFIRMAR
        </button>
      </div>
    </footer>
  );
}

export default ModalActions;
