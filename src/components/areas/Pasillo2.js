import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/pasillo2.css';

import pasillo2 from '../../img/pasillo2.png';
import flecha from '../../img/flecha.png';
// import icono_mapa from '../../img/icono-mapa.png';
// import map_blue from '../../img/Map_blue.jpg';
// import map_x from '../../img/map_x.png';

export const Pasillo2 = () => {
    return (
        <div className="among_menu">
        <div className="among_p2">
            <div className="among_p2-fle">
                <Link className="among_p2_tit" to="/motor_superior">Motor Superior</Link>
                <Link to="/motor_superior"><img src={flecha} /></Link>
            </div>
            <div className="among_p2-fle4">
                <Link className="among_p2_tit4" to="/reactor">Reactor</Link>
                <Link to="/reactor"><img src={flecha}/></Link>
            </div>
            <div className="among_p2-img">
                <Link to="#"><img src={pasillo2} alt="pasillo2"/></Link>
            </div>
            <div className="among_p2-fle2">
                <Link className="among_p2_tit2" to="./motor_inferior">Motor Inferior</Link><br/>
                <Link to="/motor_inferior"><img src={flecha}/></Link>
            </div>
            <div className="among_p2-fle3">
                <Link className="among_p2_tit3" to="./seguridad">Seguridad</Link><br/>
                <Link to="/seguridad"><img src={flecha}/></Link>
            </div>
        </div>
    </div>
    )
}
