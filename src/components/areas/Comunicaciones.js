import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import comunicaciones from '../../img/comunicaciones.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Comunicaciones = () => {

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
                <div className="among_com">
                    <div className="among_com-fle">
                        <Link className="among_com_tit" to="/almacen">Almacén</Link>
                        <Link to="/almacen"><img src={flecha} /></Link>
                    </div>
                    <div className="among_com-img">
                        <Link to="#"><img src={comunicaciones} alt="Comunicaciones" /></Link>
                    </div>
                    <div className="among_com-img2">
                        <button onClick={openModal}><img src={icono_mapa} /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} className="img_modal"/>
                        </Modal>
                    </div>
                    <div className="among_com-fle3">
                        <Link className="among_com_tit3" to="/escudos">Escudos</Link><br/>
                        <Link to="/escudos"><img src={flecha} /></Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
