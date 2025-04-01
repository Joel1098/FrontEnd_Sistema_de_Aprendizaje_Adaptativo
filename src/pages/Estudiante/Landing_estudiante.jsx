
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LearningUnitCard from "./Unidad_card";


function HomePage() {
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
          El sistema proporciona un listado de unidades de aprendizajes
          registradas a las cuales se puede inscribir. Posteriormente se muestra
          una evaluación de conocimientos de opción multiple, el cuál es creado
          por un profesor que imparte la unidad de aprendizaje. Complementado a
          todo lo anterior, se estructuró un cuestionario basado en el modelo de
          VARK, el cuál ayuda a obtener los estilos de aprendizaje más
          predominantes de un individuo.
        </p>
        <br />
        <p>
          Los resultados obtenidos de ambas evaluaciones permitirán a nuestra
          propuesta de solución brindar una ruta de aprendizaje que se ajuste
          con los materiales contenidos en el sistema, para una experiencia de
          aprendizaje basada en las necesidades de un estudiante de nivel
          superior.
        </p>
      </article>
    </section>

        <hr className="my-0 mr-0 ml-0 h-px bg-gray-500" />

        <LearningUnitCard />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
