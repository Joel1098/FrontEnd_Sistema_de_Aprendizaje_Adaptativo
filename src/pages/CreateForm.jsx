"use client";


function CreateForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col pt-8 pb-32 mt-12 mb-0 bg-white rounded-3xl max-md:pb-24 max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5 max-md:max-w-full"
    >
      <div className="flex flex-col px-8 text-lg font-semibold text-zinc-600 max-md:px-5 max-md:max-w-full">
        <label htmlFor="learning-unit" className="self-start">
          Crear unidad de aprendizaje
        </label>
        <input
          id="learning-unit"
          type="text"
          placeholder="Ingrese la unidad de aprendizaje"
          className="px-5 py-4 mt-2.5 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-zinc-300 text-neutral-400 max-md:px-5 max-md:mr-0.5 max-md:max-w-full"
        />

        <label htmlFor="description" className="self-start mt-20 max-md:mt-10">
          Descripción
        </label>
        <textarea
          id="description"
          placeholder="Descripción de una unidad de aprendizaje."
          className="px-5 pt-4 pb-44 mt-2.5 rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-zinc-300 text-neutral-400 max-md:px-5 max-md:pb-28 max-md:max-w-full"
        />
      </div>

      <button
        type="submit"
        className="self-end px-16 pt-4 pb-8 mt-28 mr-24 mb-0 max-w-full text-2xl font-bold text-center text-white whitespace-nowrap bg-teal-400 rounded-xl w-[265px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:mb-2.5"
      >
        CREAR
      </button>
    </form>
  );
}

export default CreateForm;
