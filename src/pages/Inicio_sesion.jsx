import { useState } from "react";
import AuthToggle from "./AuthToggle"; // Componente para cambiar entre login y registro
import LoginForm from "./LoginForm"; // Asegúrate de importar LoginForm
import RegisterForm from "./RegisterForm"; // Asegúrate de importar RegisterForm

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login"); // Estado para manejar el formulario activo

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-36 bg-white max-md:px-5 max-md:py-24">
      <section className="flex flex-col ml-3.5 max-w-full w-[479px]">
        <h1 className="self-center text-base text-black">Bienvenido</h1>
        {/* Cambiar entre login y registro */}
        <AuthToggle setActiveTab={setActiveTab} />
        {/* Condicional para renderizar el formulario de login o el de registro */}
        {activeTab === "login" && <LoginForm />}
        {activeTab === "register" && <RegisterForm />}
      </section>
    </main>
  );
}

export default LoginPage;
