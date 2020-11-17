import React from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/navegacion.css';

import navegacion from '../../img/navegacion.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Navegacion = () => {
    return (
        <>
            <div class="among_menu">
                <div class="among_nave">
                    <div class="among_nave-fle">
                        <Link class="among_nave_tit" to="/pasillo3">Pasillo</Link>
                        <Link to="/pasillo3"><img src={flecha} /></Link>
                    </div>
                    <div class="among_nave-img">
                        <Link to="#"><img src={navegacion} alt="Navegación" /></Link>
                    </div>      
                    <div class="among_nave-img2">
                        <a href="#miModal"><img src={icono_mapa} /></a>
                    </div>      
                </div>
            </div>

            <div id="miModal" class="modal">
                <div class="modal-contenido">
                    <a href="/navegacion"><img src={map_x} class="img_modal-x" /></a>
                    <img src={map_blue} class="img_modal" />
                </div>  
            </div>
        </>
    )
}
