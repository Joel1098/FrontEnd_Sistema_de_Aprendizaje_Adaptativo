import API_URL from "../config/apiConfiguration";


export const ObtenerUA = async () => {

    try{
        const response = await API_URL.get('/api/unidades-de-aprendizaje/listar');
        return response.data;
    }catch(error){
            throw new Error(error.response?.data || 'Error al obtener las unidades');
        }
    

    
};

export const CrearUA = async () => {

    try{
        const response = await API_URL.post('/api/unidades-de-aprendizaje/crear');
        return response.data;
    }catch(error){
            throw new Error(error.response?.data || 'Error al crear la unidad');
        }
    };