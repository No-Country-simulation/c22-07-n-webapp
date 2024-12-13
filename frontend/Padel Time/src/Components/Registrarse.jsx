import styles from '../Styles/Registrarse.module.css';
import React, { useState } from 'react';

const Registrarse = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es obligatorio.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, introduce un correo electrónico válido.';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch('https://padeltime.azurewebsites.net/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Cuenta creada con éxito.');
          setFormData({ fullName: '', email: '', password: '' }); // Resetea el formulario
        } else {
          alert('Hubo un problema al registrar la cuenta.');
        }
      } catch (error) {
        console.error('Error al registrar la cuenta:', error);
        alert('Ocurrió un error, intenta más tarde.');
      }
    }
  };

  return (
    <div className={styles.containerRegister}>
      <div className={styles.left}></div>

      <div className={styles.right}>
        <h1 className={styles.title}>Registrarse</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className={styles.input}
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <button type="submit" className={styles.button}>
            Crear cuenta
          </button>
          <a href="/login" className={styles.link}>
            Ya tienes una cuenta? Inicia sesión
          </a>
        </form>
      </div>
    </div>
  );
};

export default Registrarse;
