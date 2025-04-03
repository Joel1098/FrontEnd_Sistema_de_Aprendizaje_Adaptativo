

function LearningUnitCardProfesor() {
  return (
    <section className="flex flex-col items-center p-5 mx-auto my-36 bg-white rounded-3xl border border-black border-solid shadow-2xl h-[900px] w-[786px] max-md:mx-auto max-md:my-12 max-md:h-auto max-md:w-[90%] max-sm:w-[95%]">
      <a 
      href="/menu-control"
      >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8546d439acf950770e226701d7cfa1f96fbccd48"
        className="mt-16 mb-20 rounded-lg h-[425px] w-[389px] max-md:w-4/5 max-md:h-auto"
        alt="Learning Units"
        
      />
      </a>
      <div>
        <div>
        <h2 className="mb-9 text-2xl font-medium leading-10 text-center text-slate-800 max-sm:text-xl">
          Menú de control de una unidad de aprendizaje
        </h2>
        <p className="text-xl tracking-wide leading-9 text-center text-gray-500 max-w-[685px] max-sm:text-base">
          Control en creación, edición, listado y eliminación de elementos como módulos, temas, 
          preguntas, respuestas, evaluaciones y subida de contenido.
        </p>
        </div>
        <div>
        <h2 className="mb-9 text-2xl font-medium leading-10 text-center text-slate-800 max-sm:text-xl">
          Gestión de contenido
        </h2>
        <p className="text-xl tracking-wide leading-9 text-center text-gray-500 max-w-[685px] max-sm:text-base">
          Control en los materiales de aprendizaje cargados al sistema.
        </p>

        </div>
      </div>
      
      <div>

        
      </div>
    </section>
  );
}

export default LearningUnitCardProfesor;
