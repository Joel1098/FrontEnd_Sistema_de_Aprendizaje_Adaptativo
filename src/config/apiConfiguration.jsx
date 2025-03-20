import axios from "axios";



const API_URL = axios.create({

    baseURL: `${import.meta.env.VITE_SERVER_HOST_ADDRESS}`

});


export default API_URL;
