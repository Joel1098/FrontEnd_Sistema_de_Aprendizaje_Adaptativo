

function LearningUnitRow({ unit }) {
  return (
    <article className="grid items-center px-0 py-10 bg-white rounded-lg grid-cols-[2fr_1fr_1fr_1fr_2fr_0.5fr] max-md:p-4 max-md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr_0.5fr] max-sm:gap-2.5 max-sm:p-2.5 max-sm:grid-cols-[1fr] relative">
      <div className="text-sm text-center text-black">{unit.name}</div>
      <div className="text-sm text-center text-black">{unit.modules}</div>
      <div className="text-sm text-center text-black">{unit.topics}</div>
      <div className="text-sm text-center text-black">{unit.evaluations}</div>
      <div className="text-sm text-center text-black">{unit.description}</div>
      <div className="flex gap-2.5 justify-center max-sm:absolute max-sm:right-2.5 max-sm:top-2/4 max-sm:-translate-y-2/4">
        <button
          aria-label="Editar"
          className="ti ti-edit text-2xl cursor-pointer"
        />
        <button
          aria-label="Eliminar"
          className="ti ti-trash text-2xl cursor-pointer"
        />
      </div>
    </article>
  );
}

export default LearningUnitRow;
