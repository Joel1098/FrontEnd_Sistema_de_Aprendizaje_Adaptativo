"use client";

import ContentHeader from "./ContentHeader";
import CreateForm from "./CreateForm";
import Sidebar from "./Sidebar";

function CRUDParaProfesor() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[26%] max-md:ml-0 max-md:w-full">
          <Sidebar />
        </div>
        <div className="ml-5 w-[74%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:max-w-full">
            <ContentHeader
              title="Unidad de Aprendizaje"
              subtitle="Crear unidad de aprendizaje"
            />
            <div className="flex flex-col px-8 pt-8 pb-80 bg-blue-300 bg-blend-normal max-md:px-5 max-md:pb-24 max-md:max-w-full">
              <h2 className="self-start text-3xl font-semibold text-slate-800">
                Create new event
              </h2>
              <p className="mt-5 text-lg tracking-wide text-gray-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmodadipiscing elit, sed do
                eiusmodeiusmodadipiscing elit, sed do eiusmodLorem
              </p>
              <CreateForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CRUDParaProfesor;
