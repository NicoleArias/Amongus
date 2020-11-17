import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/cafeteria.css';

import flecha from '../../img/flecha.png';
import cafeteria from '../../img/cafeteria.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Cafeteria = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_caf">
                    <div className="among_caf-fle">
                        <Link className="among_caf_tit1" to="/ala_medica">Ala Medica</Link>
                        <Link to="/ala_medica"><img src={flecha} /></Link>
                    </div>
                    <div className="among_caf-img">
                        <Link to="#"><img src={cafeteria} /></Link>
                    </div>
                    <div className="among_caf-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div className="among_caf-fle2">
                        <Link className="among_caf_tit2" to="/pasillo">Pasillo</Link><br/>
                        <Link to="/pasillo"><img src={flecha} /></Link>
                    </div>
                    <div className="among_caf-fle3">
                        <Link className="among_caf_tit3" to="/armeria">Armeria</Link><br/>
                        <Link to="/armeria"><img src={flecha} /></Link>
                    </div>
                </div>
            </div>

            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <a href="/cafeteria"><img src={map_x} className="img_modal-x"/></a>
                    <img src={map_blue} className="img_modal"/>
                </div>  
            </div>
        </>
    )
}


