
import Sidebar from "../../components/Sidebar";
import ContentHeader from "../ContentHeader";
import PreguntaList from "./PreguntaList";


function PreguntaDashboard() {
  

  return (
    <>
      <main className="flex mx-auto w-full max-w-none min-h-screen bg-white max-md:max-w-[991px] max-sm:flex-col max-sm:max-w-screen-sm">
        <Sidebar />
        <section className="flex flex-col flex-1 max-sm:w-full">
          <ContentHeader title="Preguntas" />
          <PreguntaList />
         
        </section>
      </main>
    </>
  );
}

export default PreguntaDashboard;

