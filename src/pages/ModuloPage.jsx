
import ContentHeader from "./ContentHeader";
import LearningUnitsList from "./LearningUnitsList";
import Sidebar from "./Sidebar";

function ModuloDashboard() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex mx-auto w-full max-w-none min-h-screen bg-white max-md:max-w-[991px] max-sm:flex-col max-sm:max-w-screen-sm">
        <Sidebar />
        <section className="flex flex-col flex-1 max-sm:w-full">
          <ContentHeader title="Módulo" />
          <div className="flex-1 p-8 bg-blue-300 bg-opacity-20 max-sm:p-4">
            <header className="mb-10">
              <h1 className="mb-5 text-3xl font-semibold text-slate-800 max-md:text-2xl">
                Control de módulos
              </h1>
              <p className="text-lg tracking-wide leading-normal text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmodadipiscing elit, sed do
                eiusmodeiusmodadipiscing elit, sed do eiusmodLorem
              </p>
            </header>
            <LearningUnitsList />
          </div>
        </section>
      </main>
    </>
  );
}

export default ModuloDashboard;
