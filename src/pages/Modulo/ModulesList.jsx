
import ModuleItem from "./ModuleItem";

function LearningUnitsList() {
  const learningUnits = [
    {
      name: "Sistemas Distribuidos",
      modules: 5,
      topics: 20,
      evaluations: 6,
      description: "Manejo de nube, redes y máquinas virtuales",
    },
    {
      name: "Compiladores",
      modules: 4,
      topics: 12,
      evaluations: 4,
      description: "Teoría de analisis sintáctico y semántico",
    },
    {
      name: "Ingeniería de Software",
      modules: 5,
      topics: 15,
      evaluations: 3,
      description: "Buenas prácticas en construcción de sistemas de software",
    },
    {
      name: "Sistemas Operativos",
      modules: 6,
      topics: 9,
      evaluations: 2,
      description:
        "Desarrollo de programas con lenguaje C y sistema operativo Linux",
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-5">
        <h2 className="text-2xl font-medium text-black">
          Unidades de Aprendizaje Registradas
        </h2>
        <div className="flex gap-5 max-sm:flex-col max-sm:w-full">
          <div className="flex justify-between items-center px-5 py-3.5 bg-white rounded h-[51px] w-[306px] max-sm:w-full">
            <span className="text-lg text-stone-900">
              UNIDADES DE APRENDIZAJE
            </span>
            <i className="ti ti-chevron-down" />
          </div>
          <button className="flex items-center justify-center text-sm font-bold text-white bg-teal-400 rounded cursor-pointer h-[51px] w-[194px] max-sm:w-full">
            AGREGAR UNIDAD
          </button>
        </div>
      </div>

      <div className="table overflow-hidden bg-white rounded-lg">
        <div className="grid p-5 border-b border-solid border-b-neutral-200 grid-cols-[2fr_1fr_1fr_1fr_3fr_1fr] max-sm:gap-2.5 max-sm:grid-cols-[1fr]">
          <div className="text-xs font-semibold text-neutral-400 max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
            Nombre
          </div>
          <div className="text-xs font-semibold text-neutral-400 max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
            Módulos
          </div>
          <div className="text-xs font-semibold text-neutral-400 max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
            Temas
          </div>
          <div className="text-xs font-semibold text-neutral-400 max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
            Evaluaciones
          </div>
          <div className="text-xs font-semibold text-neutral-400 max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
            Descripción
          </div>
          <div className="text-xs font-semibold text-neutral-400 max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
            Acciones
          </div>
        </div>

        {learningUnits.map((unit, index) => (
          <ModuleItem key={index} unit={unit} />
        ))}
      </div>
    </section>
  );
}

export default LearningUnitsList;
