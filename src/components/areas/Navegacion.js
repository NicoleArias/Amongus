import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import navegacion from '../../img/navegacion.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Navegacion = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const openModal = () => {
        setIsOpenModal(true);
    };
    const closeModal = () => {
        setIsOpenModal(false);
    };

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
                        <button onClick={openModal}><img src={icono_mapa} /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} className="img_modal"/>
                        </Modal>
                    </div>      
                </div>
            </div>
        </>
    )
}
