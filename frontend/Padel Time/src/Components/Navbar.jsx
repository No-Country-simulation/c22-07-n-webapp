import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="" alt="Logo Padel Time" />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/feature">Características</Link>
        </li>
        <li>
          <Link to="/reservation">Reservas</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/login">Iniciar sesión</Link>
        </li>
        <li>
          <Link to="/sign-up">Registrarse</Link>
        </li>
        <li>
          <Link to="/logout">Cerrar sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

