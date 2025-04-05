
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function PreguntaItem({ unit, onDelete, onEdit }) {

  const {nombre, evaluacion, respuestas, dificultad} = unit
  

  return (
    <article className="grid items-center px-0 py-10 bg-white rounded-lg grid-cols-[2fr_1fr_1fr_1fr_2fr_0.5fr] max-md:p-4 max-md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr_0.5fr] max-sm:gap-2.5 max-sm:p-2.5 max-sm:grid-cols-[1fr] relative">
      <div className="text-sm text-center text-black">{nombre}</div>
      <div className="text-sm text-center text-black">{evaluacion}</div>
      <div className="text-sm text-center text-black">{respuestas}</div>
      <div className="text-sm text-center text-black">{dificultad}</div>

      <div className="flex gap-2.5 justify-center max-sm:absolute max-sm:right-2.5 max-sm:top-2/4 max-sm:-translate-y-2/4">
        
      <button
          aria-label="Delete"
          onClick={() => onEdit(unit)} // Llamamos a onDelete pasando la unidad
          className="ti ti-trash text-2xl cursor-pointer"
        >
          <FaEdit />
        </button>
        
        <button
          aria-label="Delete"
          onClick={() => onDelete(unit)} // Llamamos a onDelete pasando la unidad
          className="ti ti-trash text-2xl cursor-pointer"
        >
          <FaTrashAlt />
        </button>
        
      </div>
    </article>
  );
}

export default PreguntaItem;
