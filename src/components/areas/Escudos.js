import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import escudos from '../../img/escudos.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.png';
import map_x from '../../img/map_x.png';
import use from '../../img/use.png';

import PrimeShields from '../minigames/PrimeShields';

export const Escudos = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const openModal = () => {
        setIsOpenModal(true);
    };
    const closeModal = () => {
        setIsOpenModal(false);
    };

    const [isOpenM, setIsOpenM] = useState(false);
    const openModal2 = () => {
        setIsOpenM(true);
    };
    const closeModal2 = () => {
        setIsOpenM(false);
    };

    return (
        <>
            <div className="among_menu"> 
                <div className="among_esc">
                    <div className="among_esc-fle2">
                        <Link className="among_esc_tit2" to="/comunicaciones">Comunicaciones</Link>
                        <Link to="/comunicaciones"><img src={flecha} /></Link>
                    </div>
                    <div className="among_esc-img">
                        <Link to="#"><img src={escudos} alt="Escudos" /></Link>
                    </div>
                    <div className="among_esc-img2">
                        <button onClick={openModal}><img src={icono_mapa} /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} className="img_modal"/>
                        </Modal>
                    </div>
                    <div className="among_esc-fle3">
                        <Link className="among_esc_tit3" to="/pasillo3">Pasillo</Link><br/>
                        <Link to="/pasillo3"><img src={flecha} /></Link>
                    </div>
                    <div>
                        <button onClick={openModal2}><img src={use} className="use_esc"/></button>
                        <Modal isOpen={isOpenM} className="modal">
                            <img src={map_x} className="img_modal-xesc" onClick={closeModal2} />
                            <PrimeShields closeModal={closeModal2} />
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}
