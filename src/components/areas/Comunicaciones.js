import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/comunicaciones.css';

import comunicaciones from '../../img/comunicaciones.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Comunicaciones = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_com">
                    <div className="among_com-fle">
                        <Link className="among_com_tit" to="/almacen">Almacén</Link>
                        <Link to="/almacen"><img src={flecha} /></Link>
                    </div>
                    <div className="among_com-img">
                        <Link to="#"><img src={comunicaciones} alt="Comunicaciones" /></Link>
                    </div>
                    <div className="among_com-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div className="among_com-fle3">
                        <Link className="among_com_tit3" to="/escudos">Escudos</Link><br/>
                        <Link to="/escudos"><img src={flecha} /></Link>
                    </div>
                    
                </div>
            </div>

            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <a href="./comunicaciones"><img src={map_x} className="img_modal-x" /></a>
                    <img src={map_blue} className="img_modal" />
                </div>  
            </div>
        </>
    )
}
