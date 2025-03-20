import { useState } from "react";
import API_URL from "../config/apiConfiguration";

function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState(''); 
    const[message, setMessage] = useState('');
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(false);

    const handleLogin = async () => {

        setLoading(true);
        setError(null);
    

    try{

        const response = await API_URL.post('/api/auth/login', {email, password});
        setMessage('Login exitoso');
        console.log('Token recibido', response.data.token);

    }catch(err){

            setError('Error al iniciar sesion');
            console.error('Error', err);
        }

        setLoading(false);

    };
    
    return(
        <div>

<h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar sesión'}
      </button>
        </div>

    );
    
}

export default Login;

