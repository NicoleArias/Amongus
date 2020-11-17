import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/almacen.css';

import almacen from '../../img/almacen.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Almacen = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_alm">
                    <div className="among_alm-fle">
                        <Link className="among_alm_tit" to="/electricidad">Electricidad</Link>
                        <Link to="/electricidad"><img src={flecha}/></Link>
                    </div>
                    <div className="among_alm-img">
                        <Link to="#"><img src={almacen} alt="Almacén"/></Link>
                    </div>
                    <div className="among_alm-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div className="among_alm-fle2">
                        <Link className="among_alm_tit2" to="/comunicaciones">Comunicaciones</Link><br/>
                        <Link to="/comunicaciones"><img src={flecha}/></Link>
                    </div>
                    <div className="among_alm-fle3">
                        <Link className="among_alm_tit3" to="/pasillo">Pasillo</Link><br/>
                        <Link to="/pasillo"><img src={flecha}/></Link>
                    </div>
                    
                </div>
            </div>

            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <a href="./almacen"><img src={map_x} className="img_modal-x"/></a>
                    <img src={map_blue} className="img_modal"/>
                </div>  
            </div>
        </>
    )
}
