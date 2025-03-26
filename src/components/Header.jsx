

function Header() {
  return (
    <header className="flex relative justify-between items-center px-36 py-10 max-md:p-5 max-sm:p-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/868e68b62483f1fe0bd6e3990fa1759c5e29e8f4"
        className="h-12 w-[70px]"
        alt="SAA Logo"
      />

      <nav className="flex gap-14 max-sm:hidden">
        <a href="alumno-inicio" className="text-2xl tracking-wide text-zinc-600">
          Inicio
        </a>
        <a href="#" className="text-2xl tracking-wide text-zinc-600">
          Acerca de
        </a>
      </nav>

      <div className="flex gap-4 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e368afc6212f4b6c130c03327c102cfc0947560"
          className="h-[63px] w-[63px]"
          alt="User"
        />
        <span className="text-lg font-medium tracking-wide text-black">
          Joel
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27eb5c8e2a2ada04d4f05c59a25d2c09380355b3"
          className="w-3 h-[21px]"
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
