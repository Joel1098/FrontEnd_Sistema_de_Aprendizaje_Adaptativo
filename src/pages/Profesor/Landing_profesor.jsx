
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LearningUnitCardProfesor from "./UnidadProfesor";


function HomePageProfesor() {
  return (
    <div className="w-full min-h-screen bg-white">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Header />

      <main className="px-28 py-0 max-md:px-5 max-md:py-0">
      <section className="mb-24 max-md:mb-12">
      <h1 className="mb-10 text-5xl font-semibold leading-[79.2px] max-w-[1098px] text-slate-800 max-md:text-3xl max-sm:text-2xl">
        Bienvenido al sistema de aprendizaje adaptativo
      </h1>

      <article className="text-2xl tracking-wide leading-10 text-gray-500 max-w-[1604px] max-md:text-xl max-sm:text-base">
        <p>
          El sistema proporciona un menú con diferentes opciones que permitirán mantener un mejor control 
          de los elementos a ingresar en el sistema, como lo son unidades de aprendizaje, modulos, temas, preguntas,
          respuestas, evaluaciones y un apartado de contenido. 
          Con el fin de que se pueda mantener un orden, todos estos elementos se vinculan entre si pero 
          de forma independiente, lo cual permite la modificación de estos sin afectación alguna de 
          manera general.
        </p>
        <br />
      </article>
    </section>

        <hr className="my-0 mr-0 ml-0 h-px bg-gray-500" />

        <LearningUnitCardProfesor />
      </main>

      <Footer />
    </div>
  );
}

export default HomePageProfesor;
