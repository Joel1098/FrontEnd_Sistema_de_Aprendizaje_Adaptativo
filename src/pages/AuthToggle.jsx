
import PropTypes from "prop-types";

function AuthToggle({ setActiveTab }) {
  return (
    <nav className="flex gap-10 self-center px-3.5 py-2.5 mt-6 max-w-full text-base text-white bg-teal-400 bg-opacity-60 rounded-[33px] w-[329px]">
      <button
        className={`px-5 py-2 font-medium rounded-[33px] cursor-pointer hover:bg-cyan-700 ${
          setActiveTab === "login" ? "bg-teal-400" : "bg-transparent"
        }`}
        onClick={() => setActiveTab("login")}
      >
        Iniciar sesión
      </button>
      <button
        className={`px-5 py-2 font-medium rounded-[33px] cursor-pointer hover:bg-cyan-700 ${
          setActiveTab === "register" ? "bg-teal-400 px-5 py-2 rounded-[33px]" : "bg-transparent"
        }`}
        onClick={() => setActiveTab("register")}
      >
        Registrar
      </button>
    </nav>
  );
}

AuthToggle.propTypes = {
  setActiveTab: PropTypes.string.isRequired,
};

export default AuthToggle;
