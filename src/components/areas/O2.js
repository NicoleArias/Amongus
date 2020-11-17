import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/O2.css';

import o2 from '../../img/o2.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const O2 = () => {
    return (
        <>
            <div class="among_menu">
                <div class="among_o2">
                    <div class="among_o2-fle">
                        <Link class="among_o2_tit" to="/armeria">Armeriar</Link>
                        <Link to="/armeria"><img src={flecha} /></Link>
                    </div>
                    <div class="among_o2-img">
                        <Link to="#"><img src={o2} alt="O2" /></Link>
                    </div>
                    <div class="among_o2-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div class="among_o2-fle3">
                        <Link class="among_o2_tit3" to="/pasillo3">Pasillo</Link><br/>
                        <Link to="/pasillo3"><img src={flecha} /></Link>
                    </div>
                </div>
            </div>

            <div id="miModal" class="modal">
                <div class="modal-contenido">
                    <a href="/O2"><img src={map_x} class="img_modal-x" /></a>
                    <img src={map_blue} class="img_modal" />
                </div>  
            </div>
        </>
    )
}
