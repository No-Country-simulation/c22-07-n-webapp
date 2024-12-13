import { Link } from 'react-router-dom';
import jugador from '../assets/jugador.png';
import React from 'react';

const Home = () => {
  return (
    <div style={{display:'flex'}}>
        <div style={{display: 'flex', flexDirection:'column', marginTop: '3em'}}>
            <h1 style={{fontSize: '5em'}}>Reserva tu cancha <br/>asegura tu partido gracias a Padel Time</h1>
            <p style={{fontSize: '1.5em'}}> Organiza tus partidos y reserva canchas de pádel con facilidad. ¡Accede ahora y mejora tu experiencia deportiva!</p>
            <div style={{textAlign: 'center'}}>
                <Link style={{backgroundColor: '#F55D26', padding:'5px 10px', textDecoration: 'none', color: '#fff'}} to="./reservation">Reservar cancha</Link>
            </div>
        </div>
        <div>
            <img src={jugador} alt="jugador" />
        </div>
    </div>
  )
}

export default Home
