import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import electricidad from '../../img/electricidad.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.png';
import map_x from '../../img/map_x.png';

export const Electricidad = () => {

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
                <div className="among_ele">
                    <div className="among_ele-img">
                        <Link to="#"><img src={electricidad} alt="Electricidad"/></Link>
                    </div>
                    <div className="among_ele-img2">
                        <button onClick={openModal}><img src={icono_mapa} /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} className="img_modal"/>
                        </Modal>
                    </div>
                    <div className="among_ele-fle2">
                        <Link className="among_ele_tit2" to="/almacen">Almacén</Link><br/>
                        <Link to="/almacen"><img src={flecha} /></Link>
                    </div>
                    <div className="among_ele-fle">
                        <Link className="among_ele_tit" to="/motor_inferior">Motor Inferior</Link><br/>
                        <Link to="/motor_inferior"><img src={flecha}/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
