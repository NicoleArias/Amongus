import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/ala_medica.css';

import flecha from '../../img/flecha.png';
import medica from '../../img/medica.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Ala_Medica = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_ala">
                    <div className="among_ala-fle">
                        <Link className="among_ala_tit" to="/motor_superior">Motor Superior</Link>
                        <Link to="/motor_superior"><img src={flecha}/></Link>
                    </div>
                    <div className="among_ala-img">
                        <Link to="#"><img src={medica} alt="Ala Medica"/></Link>
                    </div>
                    <div className="among_ala-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div className="among_ala-fle3">
                        <Link className="among_ala_tit3" to="/cafeteria">Cafeteria</Link><br/>
                        <Link to="/cafeteria"><img src={flecha} /></Link>
                    </div>
                    
                </div>
            </div>

            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <a href="/ala_medica"><img src={map_x} className="img_modal-x"/></a>
                    <img src={map_blue} className="img_modal"/>
                </div>  
            </div>
        </>
    )
}
