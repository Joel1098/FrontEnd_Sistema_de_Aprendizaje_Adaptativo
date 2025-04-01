import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import API_URL from "../../config/apiConfiguration";
import LearningUnitGrid from "./LearningUnitGrid";

function Ua_Estudiante() {
  const [learningUnits, setLearningUnits] = useState([]);

  // Utilizamos useEffect para obtener las unidades de aprendizaje al cargar la página
  useEffect(() => {
    const fetchLearningUnits = async () => {
      try {
        const response = await API_URL.get("/api/unidades-de-aprendizaje/listar");
        setLearningUnits(response.data); // Guardamos las unidades de aprendizaje
      } catch (error) {
        console.error("Error al obtener las unidades de aprendizaje:", error);
      }
    };

    fetchLearningUnits();
  }, []);

  return (
    <div>
      <div className="flex overflow-hidden flex-col pt-10 w-full bg-white max-md:max-w-full">
      <div className="flex flex-col self-center ml-3 w-full max-w-[1658px] max-md:max-w-full">
      <Header/>
    
      <h1 className="self-start mt-30 text-4xl font-semibold text-slate-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl flex relative justify-between items-center px-36 py-10 max-md:p-5 max-sm:p-4">
        Elegir unidad de aprendizaje
        </h1>
      
      <LearningUnitGrid learningUnits={learningUnits} />
    </div>
    <Footer/>
    </div>
    </div>
  );
}

export default Ua_Estudiante;
