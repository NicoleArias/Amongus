import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/motor_superior.css';

import motor_superior from '../../img/motor_superior.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Motor_Superior = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_ms">
                    <div className="among_ms-fle2">
                        <Link className="among_ms_tit2" to="/pasillo2">Pasillo</Link><br/>
                        <Link to="/pasillo2"><img src={flecha} /></Link>
                    </div>
                    <div className="among_ms-img">
                        <Link to="#"><img src={motor_superior} alt="Motor Superior" /></Link>
                    </div>
                    <div className="among_ms-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div className="among_ms-fle3">
                        <Link className="among_ms_tit3" to="/ala_medica">Ala Medica</Link>
                        <Link to="/ala_medica"><img src={flecha} /></Link>
                    </div>
                </div>
            </div>

            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <a href="/motor_superior"><img src={map_x} className="img_modal-x" /></a>
                    <img src={map_blue} className="img_modal" />
                </div>  
            </div>
        </>
    )
}
