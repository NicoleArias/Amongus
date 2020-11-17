import React from 'react';
import { Link } from 'react-router-dom';
import start from '../../img/start.png';

// import '../../styles/index.css';

export const Inicio = () => {
    return (
        <div className="among_desc">
            <p>
            Esta página web esta basada en un juego 'Among US' y aqui podras encontrar 
            algunas de las misiones que realizarás como tripulante, sigue el 
            camino de las flechas amarillas y podras completarlas todas; 
            tambien podras guiarte con el mapa.
            </p>  <br/>
            <Link to="/cafeteria"><img src={start} className="among_desc_img"/></Link>
        </div>
    )
}
