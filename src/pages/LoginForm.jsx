"use client";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-20 max-md:mt-10">
      <p className="self-center text-base text-zinc-600 text-center">
        Realice su inicio de sesión
      </p>

      <div className="mt-14 max-md:mt-10">
        <label htmlFor="email" className="block text-base text-black">
          Correo
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu correo"
          className="px-8 py-4 mt-3 max-w-full w-full text-base font-light bg-white border border-teal-400 border-solid rounded-[40px] text-neutral-400 max-md:px-5"
        />
      </div>

      <div className="mt-8">
        <label htmlFor="password" className="block text-base text-black">
          Contraseña
        </label>
        <div className="relative mt-3">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            className="flex w-full gap-5 justify-between px-8 py-4 max-w-full text-base font-light bg-white border border-teal-400 border-solid rounded-[40px] text-neutral-400 max-md:px-5"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 max-md:right-5"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/773a7a108356148a02caaee3efc0e6ed5a203bc6?placeholderIfAbsent=true&apiKey=a73b68a54705491597344db5d49d250e"
              alt={showPassword ? "Hide password" : "Show password"}
              className="object-contain shrink-0 aspect-square w-[18px]"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end mt-6 max-w-full w-full">
        <a href="#" className="text-xs font-light text-black">
          ¿Olvidaste tu contraseña?
        </a>

        <button
          type="submit"
          className="self-start px-7 py-3.5 mt-16 text-base text-white bg-slate-500 rounded-[36px] max-md:px-5 max-md:mt-10"
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
