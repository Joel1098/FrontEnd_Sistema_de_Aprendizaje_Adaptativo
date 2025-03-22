"use client";

import { useState } from "react";

function AuthToggle() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <nav className="flex gap-10 self-center px-3.5 py-2.5 mt-6 max-w-full text-base text-white bg-teal-400 bg-opacity-60 rounded-[33px] w-[329px]">
      <button
        className={`px-5 py-2 font-medium rounded-[33px] ${
          activeTab === "login" ? "bg-teal-400" : ""
        }`}
        onClick={() => setActiveTab("login")}
      >
        Iniciar sesión
      </button>
      <button
        className={`grow shrink my-auto w-[90px] ${
          activeTab === "register" ? "bg-teal-400 px-5 py-2 rounded-[33px]" : ""
        }`}
        onClick={() => setActiveTab("register")}
      >
        Registrar
      </button>
    </nav>
  );
}

export default AuthToggle;
