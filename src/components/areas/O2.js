import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import o2 from '../../img/o2.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.png';
import map_x from '../../img/map_x.png';

export const O2 = () => {

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
                <div class="among_o2">
                    <div class="among_o2-fle">
                        <Link class="among_o2_tit" to="/armeria">Armeriar</Link>
                        <Link to="/armeria"><img src={flecha} /></Link>
                    </div>
                    <div class="among_o2-img">
                        <Link to="#"><img src={o2} alt="O2" /></Link>
                    </div>
                    <div class="among_o2-img2">
                        <button onClick={openModal}><img src={icono_mapa} /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} className="img_modal"/>
                        </Modal>
                    </div>
                    <div class="among_o2-fle3">
                        <Link class="among_o2_tit3" to="/pasillo3">Pasillo</Link><br/>
                        <Link to="/pasillo3"><img src={flecha} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
