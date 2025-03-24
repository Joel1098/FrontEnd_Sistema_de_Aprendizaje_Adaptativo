import axios from "axios";
import { useState } from "react";
import API_URL from "../config/apiConfiguration"; // Asegúrate de que la configuración de axios esté correcta

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword] = useState(false);
  const [error, setError] = useState(""); // Para manejar posibles errores
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todos los campos estén llenos
    if (!email || !password || !confirmPassword) {
      setError("Por favor ingrese todos los campos.");
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      setLoading(true);
      setError(""); // Limpiamos cualquier error previo

      // Realizamos la solicitud POST para hacer el registro
      const response = await axios.post(`${API_URL}/api/auth/register`, { email, password });

      if (response.status === 200) {
        alert("Registro exitoso!");
        // Puedes redirigir al usuario o hacer alguna acción adicional
      }
    } catch (error) {
      setError("Error al registrar el usuario.");
      console.error("Error en registro:", error);
    } finally {
      setLoading(false); // Terminamos el estado de carga
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-20 max-md:mt-10">
      <p className="self-center text-base text-zinc-600 text-center">
        Realice su registro
      </p>

      {/* Mostrar error si hay */}
      {error && <p className="text-red-500 text-center">{error}</p>}

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
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="confirmPassword" className="block text-base text-black">
          Confirmar Contraseña
        </label>
        <input
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar contraseña"
          className="flex w-full gap-5 justify-between px-8 py-4 max-w-full text-base font-light bg-white border border-teal-400 border-solid rounded-[40px] text-neutral-400 max-md:px-5"
        />
      </div>

      <div className="flex flex-col items-end mt-6 max-w-full w-full">
        <button
          type="submit"
          className="self-start px-7 py-3.5 mt-16 text-base text-white bg-slate-500 rounded-[36px] max-md:px-5 max-md:mt-10"
          disabled={loading} // Deshabilitar botón mientras cargamos
        >
          {loading ? "Cargando..." : "Registrar"}
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
