import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/reactor.css';

import flecha from '../../img/flecha.png';
import reactor from '../../img/reactor.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Reactor = () => {
    return (
        <>
            <div class="among_menu">
                <div class="among_rea">
                    <div class="among_rea-img">
                        <Link to="#miModalT"><img src={reactor} alt="Reactor" /></Link>
                    </div>
                    <div class="among_rea-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>
                    <div class="among_rea-fle3">
                        <Link class="among_rea_tit3" to="/pasillo2">Pasillo</Link><br/>
                        <Link to="/pasillo2"><img src={flecha} /></Link>
                    </div>
                </div>
            </div> 

            <div id="miModal" class="modal">
                <div class="modal-contenido">
                    <a href="/reactor"><img src={map_x} class="img_modal-x" /></a>
                    <img src={map_blue} class="img_modal" />
                </div>  
            </div>
        </>
    )
}
