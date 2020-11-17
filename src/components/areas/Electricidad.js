import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/electricidad.css';

import electricidad from '../../img/electricidad.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Electricidad = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_ele">
                    <div className="among_ele-img">
                        <Link to="#"><img src={electricidad} alt="Electricidad"/></Link>
                    </div>
                    <div className="among_ele-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div className="among_ele-fle2">
                        <Link className="among_ele_tit2" to="/almacen">Almacén</Link><br/>
                        <Link to="/almacen"><img src={flecha} /></Link>
                    </div>
                    <div className="among_ele-fle">
                        <Link className="among_ele_tit" to="/motor_inferior">Motor Inferior</Link><br/>
                        <Link to="/motor_inferior"><img src={flecha}/></Link>
                    </div>
                </div>
            </div>

            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <a href="/electricidad"><img src={map_x} className="img_modal-x"/></a>
                    <img src={map_blue} className="img_modal"/>
                </div>  
            </div>
        </>
    )
}
