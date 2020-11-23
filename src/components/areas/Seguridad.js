import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import seguridad from '../../img/seguridad.png'
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Seguridad = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const openModal = () => {
        setIsOpenModal(true);
    };
    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <>
            <div className="among_menu">
                <div className="among_seg">
                    <div className="among_seg-fle">
                        <Link className="among_seg_tit" to="/pasillo2">Pasillo</Link>
                        <Link to="/pasillo2"><img src={flecha} /></Link>
                    </div>
                    <div className="among_seg-img">
                        <Link to="#"><img src={seguridad} alt="Seguridad" /></Link>
                    </div>
                    <div className="among_seg-img2">
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
