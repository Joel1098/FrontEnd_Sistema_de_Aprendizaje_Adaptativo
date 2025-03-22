"use client";
import React from "react";
import ActionMenu from "./ActionMenu";

function Sidebar() {
  const navigationItems = [
    "Unidad de aprendizaje",
    "Modulo",
    "Tema",
    "Preguntas",
    "Respuestas",
    "Evaluaciones",
    "Contenido",
  ];

  return (
    <aside className="flex flex-col items-start py-8 pr-20 pl-8 mx-auto w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-start max-w-full text-slate-800 w-[363px]">
        <div className="flex shrink-0 bg-teal-400 h-[50px] w-[50px]" />

        {navigationItems.map((item, index) => (
          <React.Fragment key={index}>
            <h2
              className={`${index === 0 ? "mt-12" : "mt-20"} text-3xl font-semibold max-md:mt-10`}
            >
              {item}
            </h2>
            {index === 0 && (
              <div className="flex flex-col mt-9 ml-4 text-white whitespace-nowrap w-[82px] max-md:ml-2.5">
                <div className="self-end text-base">Crear</div>
                <div className="self-start mt-32 text-xl font-black max-md:mt-10"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="px-4 pt-4 pb-64 max-w-full bg-white rounded-lg border border-solid border-zinc-300 min-h-[349px] w-[280px] max-md:pb-24">
        <div className="flex gap-2 items-center w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a117795011dc58a22849cde6b655a206f65a8343?placeholderIfAbsent=true&apiKey=a73b68a54705491597344db5d49d250e"
            className="object-contain self-stretch my-auto w-5 aspect-square"
            alt="Icon"
          />
        </div>
        <div className="flex mt-2 w-full min-h-11" />
      </div>

      <ActionMenu />

      <div className="z-10 mt-0 max-w-full text-base tracking-wide whitespace-nowrap rounded-none text-zinc-900 w-[280px]">
        <div className="flex gap-3 items-center px-3 py-4 w-full bg-blue-300 min-h-14">
          <div className="flex-1 shrink self-stretch my-auto w-full basis-0 min-w-60">
            Eliminar
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
