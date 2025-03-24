import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";




function AuthToggle() {

  const[activeTab, setActiveTab] = useState("register");
  
  return (
    <div>
    <nav className="flex gap-10 self-center px-3.5 py-2.5 mt-6 max-w-full text-base text-white bg-teal-400 bg-opacity-60 rounded-[33px] w-[329px]">
      <button
        className="px-5 py-2 font-medium rounded-[33px]"
        onClick={() => setActiveTab("login")}
      >
        Iniciar sesión
      </button>
      <button
        className="grow shrink my-auto w-[90px]"
        onClick={() => setActiveTab("register")}
      >
        Registrar
      </button>
    </nav>
    {/* Muestra el formulario de acuerdo a la vista activa */}
    {activeTab === "login" && <LoginForm />}
      {activeTab === "register" && <RegisterForm />}
    </div>
  );
}

export default AuthToggle;
