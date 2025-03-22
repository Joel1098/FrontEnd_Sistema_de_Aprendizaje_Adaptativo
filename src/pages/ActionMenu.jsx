

function ActionMenu() {
  const menuItems = [
    { label: "Subir", active: false },
    { label: "Editar", active: true },
    { label: "Listar", active: false },
    { label: "Detalles de contenido", active: false },
  ];

  return (
    <nav className="flex z-10 items-start pt-2 pb-16 mt-0 text-base tracking-wide bg-blue-300 rounded-none shadow min-h-[301px] min-w-28 text-zinc-900 max-md:mt-0">
      <ul className="flex-1 shrink w-full basis-0 min-w-60">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`w-full ${item.label.includes("Detalles") ? "" : "whitespace-nowrap"} ${
              item.active ? "text-zinc-600" : ""
            }`}
          >
            <div
              className={`flex gap-3 items-center px-3 py-4 w-full min-h-14 ${
                item.active ? "bg-purple-200" : ""
              }`}
            >
              <div className="flex-1 shrink self-stretch my-auto w-full basis-0 min-w-60">
                {item.label}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ActionMenu;
