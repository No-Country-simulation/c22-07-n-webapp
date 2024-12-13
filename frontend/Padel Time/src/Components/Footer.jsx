
import React from 'react';
import styles from '../Styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3>Padel Time - Todos los derechos reservados © 2024</h3>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" aria-label="Facebook" className={styles.icon} target='_blank'>
            
          </a>
          <a href="https://www.x.com" aria-label="Twitter" className={styles.icon} target='_blank'>
            
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className={styles.icon} target='_blamk'>
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
