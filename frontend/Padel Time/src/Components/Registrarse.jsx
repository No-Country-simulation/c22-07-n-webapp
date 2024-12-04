import styles from '../Styles/Registrarse.module.css';

const Registrarse = () => {
    return (
      <div className={styles.containerRegister}>

        <div className={styles.left}></div>
       
        <div className={styles.right}>
          <h1 className={styles.title}>Registrarse</h1>
          <form style={{display: 'flex', flexDirection:'column'}}>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              required
            />
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
