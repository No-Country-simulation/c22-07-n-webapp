import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('authToken');


    navigate('/');
  }, [navigate]);

  return (
    <div>
      <p>Cerrando sesión...</p>
    </div>
  );
};

export default Logout;
