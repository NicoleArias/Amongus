import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import motor_superior from '../../img/motor_superior.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.png';
import map_x from '../../img/map_x.png';
import use from '../../img/use.png';
import RefuelStation from '../minigames/RefuelStationDos';

export const Motor_Superior = () => {

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
                <div className="among_ms">
                    <div className="among_ms-fle2">
                        <Link className="among_ms_tit2" to="/pasillo2">Pasillo</Link><br/>
                        <Link to="/pasillo2"><img src={flecha} /></Link>
                    </div>
                    <div className="among_ms-img">
                        <Link to="#"><img src={motor_superior} alt="Motor Superior" /></Link>
                    </div>
                    <div className="among_ms-img2">
                        <button onClick={openModal}><img src={icono_mapa} /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} className="img_modal"/>
                        </Modal>
                    </div>
                    <div className="among_ms-fle3">
                        <Link className="among_ms_tit3" to="/ala_medica">Ala Medica</Link>
                        <Link to="/ala_medica"><img src={flecha} /></Link>
                    </div>
                    <div>
                        <button onClick={openModal2}><img src={use} className="use_esc"/></button>
                        <Modal isOpen={isOpenM} className="modal">
                            <img src={map_x} className="img_modal-xalm" onClick={closeModal2} />
                            <RefuelStation />
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}
