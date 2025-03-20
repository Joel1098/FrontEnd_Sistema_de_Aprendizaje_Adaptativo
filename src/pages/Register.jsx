import { useState } from "react";
import API_URL from "../config/apiConfiguration";


function Register() {

    const[nombre, setNombre] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState(''); 
    const[message, setMessage] = useState('');
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(false);



    const handleRegister = async () => {

        setLoading(true);
        setError(null);


    try{

        const response = await API_URL.post('/api/auth/register', {
            
            nombre: nombre, 
            email: email, 
            password: password
        });
        setMessage('Usuario registrado correctamente');
        console.log('Usuario registrado', response.data.message);

    }catch(error){

        setError('Error en el registro');
        console.error('Error al realizar el registro', error);
    }

    setLoading(false);

    };

    return(
        <div>
      <h2>Registro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} // Cambiar el nombre
      /><br></br>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Cambiar el email
      /><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Cambiar la contraseña
      /><br></br>
      <button onClick={handleRegister} disabled={loading}>
        {loading ? 'Cargando...' : 'Registrar'}
      </button>
    </div>
    );
}

export default Register;
