import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/motor_inferior.css';

import motor_inferior from '../../img/motor_inferior.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Motor_Inferior = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_mi">
                    <div className="among_mi-fle2">
                        <Link className="among_mi_tit2" to="/electricidad">Electricidad</Link>
                        <Link to="/electricidad"><img src={flecha} /></Link>
                    </div>
                    <div className="among_mi-img">
                        <Link to="#"><img src={motor_inferior} alt="Motor Inferior" /></Link>
                    </div>
                    <div className="among_mi-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div className="among_mi-fle3">
                        <Link className="among_mi_tit3" to="/pasillo2">Pasillo</Link><br/>
                        <Link to="/pasillo2"><img src={flecha} /></Link>
                    </div>
                    
                </div>
            </div>
            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <a href="/motor_inferior"><img src={map_x} className="img_modal-x" /></a>
                    <img src={map_blue} className="img_modal" />
                </div>  
            </div>
        </>
    )
}
