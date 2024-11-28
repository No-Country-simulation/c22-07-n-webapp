import { useState } from "react"


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmail = (e)=>{
      return  setUser({...user, email: e.target.value})
    }

    const handlePassword = (e)=>{
        return setUser({...user,password: e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');

      try {
          const response = await fetch('http://tu-api-laravel.com/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
          });

          const data = await response.json();

          if (response.ok) {
              console.log('Login successful:', data);
              // Aquí puedes redirigir al usuario o guardar el token
              localStorage.setItem('authToken', data.token);
          } else {
              setError(data.message || 'Error al iniciar sesión');
          }
      } catch (error) {
          setError('Error de conexión con el servidor');
      } finally {
          setLoading(false);
      }
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleEmail}
            />

            <label>Contraseña</label>
            <input
                type="password"
                name="password"
                value={user.password}
                onChange={handlePassword}
            />

            <button type="submit" disabled={loading}>
                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>

        <p>
            ¿Olvidaste tu contraseña? <a href="#">Haz click aquí</a>
        </p>
    </div>
);


}

export default Login
