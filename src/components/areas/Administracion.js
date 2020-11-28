import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import administracion from '../../img/administracion.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.png';
import map_x from '../../img/map_x.png';
import use from '../../img/use.png';

import SwipeCard from '../minigames/SwipeCard';


export const Administracion = () => {

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
                <div className="among_adm">
                    <div className="among_adm-fle">
                        <Link className="among_adm_tit" to="/pasillo">Pasillo</Link>
                        <Link to="/pasillo"><img src={flecha} alt="" /></Link>
                    </div>
                    <div className="among_adm-img">
                        <Link to="#"><img src={administracion} alt="Administración" /></Link>
                    </div>  
                    <div className="among_adm-img2">
                        <button onClick={openModal}><img src={icono_mapa} alt="" /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} alt="" className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} alt="" className="img_modal"/>
                        </Modal>
                    </div>  
                    <div>
                        <button onClick={openModal2}><img src={use} alt="" className="use_adm"/></button>
                        <Modal isOpen={isOpenM} className="modal">
                            <img src={map_x} alt="" className="img_modal-xadm" onClick={closeModal2} />
                            <SwipeCard />
                        </Modal>
                    </div>         
                </div>
            </div>
        </>
    )
}
