import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from '../Styles/Login.module.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://padeltime.azurewebsites.net/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('authToken', data.token);

        
        navigate('/reservation');  
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
    <div className={styles.containerLogin}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <h2 className={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection:'column'}}>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={user.email}
            onChange={handleEmail}
            placeholder="Correo electrónico"
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            value={user.password}
            onChange={handlePassword}
            placeholder="Contraseña"
          />
          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
        <p>
          ¿Olvidaste tu contraseña?{' '}
          <a href="#" className={styles.link}>
            Haz click aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
