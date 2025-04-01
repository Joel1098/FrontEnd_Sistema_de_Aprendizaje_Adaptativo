

function Sidebar() {
  const navItems = [
    { name: "Unidad de aprendizaje", active: false },
    { name: "Módulo", active: false },
    { name: "Tema", active: false },
    { name: "Preguntas", active: false },
    { name: "Respuestas", active: false },
    { name: "Evaluaciones", active: false },
    { name: "Subir contenido", active: false },
  ];

  return (
    <nav className="flex flex-col bg-white w-[400px] max-md:w-[250px] max-sm:w-full max-sm:h-auto">
      <div className="px-20 py-16">
        <h2 className="text-xl font-semibold text-white bg-teal-400 rounded h-[58px] w-[146px] flex items-center justify-center">
          Inicio
        </h2>
      </div>
      <div className="flex flex-col gap-14 px-20 py-9 max-md:px-10 max-md:py-9 max-sm:hidden">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`text-xl font-semibold text-center ${
              item.active ? "text-white" : "text-black"
            } cursor-pointer`}
          >
            {item.name}
          </button>
        ))}
        <button className="flex justify-center items-center cursor-pointer">
          <span className="text-xl font-semibold text-center text-black">
            Cerrar sesión
          </span>
          <span>
            <svg
              width="34"
              height="38"
              viewBox="0 0 34 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logout-icon"
            >
              <path
                d="M12.75 33.25H7.08333C6.33189 33.25 5.61122 32.9164 5.07986 32.3225C4.54851 31.7286 4.25 30.9232 4.25 30.0833V7.91667C4.25 7.07681 4.54851 6.27136 5.07986 5.6775C5.61122 5.08363 6.33189 4.75 7.08333 4.75H12.75M22.6667 26.9167L29.75 19M29.75 19L22.6667 11.0833M29.75 19H12.75"
                stroke="#1E1E1E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
