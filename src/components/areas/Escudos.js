import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/escudos.css';

import escudos from '../../img/escudos.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Escudos = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_esc">
                    <div className="among_esc-fle2">
                        <Link className="among_esc_tit2" to="/comunicaciones">Comunicaciones</Link>
                        <Link to="/comunicaciones"><img src={flecha} /></Link>
                    </div>
                    <div className="among_esc-img">
                        <Link to="#"><img src={escudos} alt="Escudos" /></Link>
                    </div>
                    <div className="among_esc-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div className="among_esc-fle3">
                        <Link className="among_esc_tit3" to="/pasillo3">Pasillo</Link><br/>
                        <Link to="/pasillo3"><img src={flecha} /></Link>
                    </div>
                </div>
            </div>

            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <a href="./escudos"><img src={map_x} className="img_modal-x" /></a>
                    <img src={map_blue} className="img_modal" />
                </div>  
            </div>
        </>
    )
}
