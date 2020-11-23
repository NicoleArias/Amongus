import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import administracion from '../../img/administracion.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Administracion = () => {

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
                <div className="among_adm">
                    <div className="among_adm-fle">
                        <Link className="among_adm_tit" to="/pasillo">Pasillo</Link>
                        <Link to="/pasillo"><img src={flecha} /></Link>
                    </div>
                    <div className="among_adm-img">
                        <Link to="#"><img src={administracion} alt="Administración" /></Link>
                    </div>  
                    <div className="among_adm-img2">
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
