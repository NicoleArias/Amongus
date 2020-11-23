import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import motor_inferior from '../../img/motor_inferior.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

export const Motor_Inferior = () => {

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
                <div className="among_mi">
                    <div className="among_mi-fle2">
                        <Link className="among_mi_tit2" to="/electricidad">Electricidad</Link>
                        <Link to="/electricidad"><img src={flecha} /></Link>
                    </div>
                    <div className="among_mi-img">
                        <Link to="#"><img src={motor_inferior} alt="Motor Inferior" /></Link>
                    </div>
                    <div className="among_mi-img2">
                        <button onClick={openModal}><img src={icono_mapa} /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} className="img_modal"/>
                        </Modal>
                    </div>
                    <div className="among_mi-fle3">
                        <Link className="among_mi_tit3" to="/pasillo2">Pasillo</Link><br/>
                        <Link to="/pasillo2"><img src={flecha} /></Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
