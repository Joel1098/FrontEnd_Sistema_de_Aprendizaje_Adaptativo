

function LearningUnitCard() {
  return (
    <section className="flex flex-col items-center p-5 mx-auto my-36 bg-white rounded-3xl border border-black border-solid shadow-2xl h-[900px] w-[786px] max-md:mx-auto max-md:my-12 max-md:h-auto max-md:w-[90%] max-sm:w-[95%]">
      <a 
      href="/inscribir-unidades"
      >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8546d439acf950770e226701d7cfa1f96fbccd48"
        className="mt-16 mb-20 rounded-lg h-[425px] w-[389px] max-md:w-4/5 max-md:h-auto"
        alt="Learning Units"
        
      />
</a>
      <div>
        <h2 className="mb-9 text-2xl font-medium leading-10 text-center text-slate-800 max-sm:text-xl">
          Unidades de aprendizaje
        </h2>

        <p className="text-xl tracking-wide leading-9 text-center text-gray-500 max-w-[685px] max-sm:text-base">
          Mostrar unidades de aprendizaje registradas en el sistema para
          comenzar con tu ruta de aprendizaje.
        </p>
      </div>
    </section>
  );
}

export default LearningUnitCard;
