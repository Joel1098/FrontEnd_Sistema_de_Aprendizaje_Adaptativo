

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center px-20 py-4 w-full bg-slate-800 mt-[468px] text-slate-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col ml-5 max-w-full w-[605px]">
        <div className=" gap-6 justify-between max-w-full text-white w-[500px] flex flex-nowwrap self-end">
          <h2 className="self-start mt-4 text-3xl font-bold tracking-widest">
            SAA
          </h2>
          <div className="flex gap-10 text-2xl font-semibold tracking-wider">
            <div className="shrink-0 w-px border border-gray-500 border-solid h-[79px]" />
            <p className="flex-auto my-auto">
              Sistema de aprendizaje adaptativo
            </p>
          </div>
        </div>

        <nav className="flex flex-nowwrap gap-7 self-start mt-10 text-2lg tracking-wider text-center max-md:mt-10">
          <a href="#" className="hover:text-white">
            Modelo de VARK y como funciona
          </a>
          <div className="shrink-0 w-px h-6 border border-gray-500 border-solid" />
          <a href="#" className="basis-auto hover:text-white">
            Algoritmos propuestos
          </a>
          <div className="shrink-0 w-px h-6 border border-gray-500 border-solid" />
          <a href="#" className="basis-auto hover:text-white">
            Tecnologías implementadas
          </a>
        </nav>

        <p className="self-center mt-7 text-4lg tracking-wider text-center">
          Todos los derechos reservados, 2025.{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
