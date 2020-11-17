import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/pasillo3.css';

import pasillo3 from '../../img/pasillo3.png';
import flecha from '../../img/flecha.png';
// import icono_mapa from '../../img/icono-mapa.png';
// import map_blue from '../../img/Map_blue.jpg';
// import map_x from '../../img/map_x.png';

export const Pasillo3 = () => {
    return (
        <>
            <div className="among_menu">
                <div className="among_p3">
                    <div className="among_p3-fle">
                        <Link className="among_p3_tit" to="/armeria">Armeria</Link>
                        <Link to="/armeria"><img src={flecha}/></Link>
                    </div>
                    <div className="among_p3-fle4">
                        <Link className="among_p3_tit4" to="/O2">O2</Link>
                        <Link to="/O2"><img src={flecha}/></Link>
                    </div>
                    <div className="among_p3-img">
                        <Link to="#"><img src={pasillo3} alt="Pasillo 3"/></Link>
                    </div>
                    <div className="among_p3-fle2">
                        <Link className="among_p3_tit2" to="/escudos">Escudos</Link><br/>
                        <Link to="/escudos"><img src={flecha}/></Link>
                    </div>
                    <div className="among_p3-fle3">
                        <Link className="among_p3_tit3" to="/navegacion">Navegación</Link><br/>
                        <Link to="/navegacion"><img src={flecha}/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
