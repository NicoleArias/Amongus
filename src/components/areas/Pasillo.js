import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/pasillo.css';

import pasillo from '../../img/pasillo.png';
import flecha from '../../img/flecha.png';
// import icono_mapa from '../../img/icono-mapa.png';
// import map_blue from '../../img/Map_blue.jpg';
// import map_x from '../../img/map_x.png';

export const Pasillo = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_p1">
                    <div className="among_p1-fle">
                        <Link className="among_p1_tit" to="/cafeteria">Cafeteria</Link>
                        <Link to="/cafeteria"><img src={flecha}/></Link>
                    </div>
                    <div className="among_p1-img">
                        <Link to="#"><img src={pasillo} alt="Armeria"/></Link>
                    </div>
                    <div className="among_p1-fle2">
                        <Link className="among_p1_tit2" to="/almacen">Almacén</Link><br/>
                        <Link to="/almacen"><img src={flecha}/></Link>
                    </div>
                    <div className="among_p1-fle3">
                        <Link className="among_p1_tit3" to="/administracion">Administración</Link><br/>
                        <Link to="/administracion"><img src={flecha}/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
