import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

// import '../../styles/almacen.css';

import almacen from '../../img/almacen.png';
import flecha from '../../img/flecha.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';
import use from '../../img/use.png';
import RefuelStation from '../minigames/RefuelStationUno';

export const Almacen = () => {

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
                <div className="among_alm">
                    <div className="among_alm-fle">
                        <Link className="among_alm_tit" to="/electricidad">Electricidad</Link>
                        <Link to="/electricidad"><img src={flecha}/></Link>
                    </div>
                    <div className="among_alm-img">
                        <Link to="#"><img src={almacen} alt="Almacén"/></Link>
                    </div>
                    <div className="among_alm-img2">
                        <button onClick={openModal}><img src={icono_mapa} /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} className="img_modal"/>
                        </Modal>
                    </div>
                    <div className="among_alm-fle2">
                        <Link className="among_alm_tit2" to="/comunicaciones">Comunicaciones</Link><br/>
                        <Link to="/comunicaciones"><img src={flecha}/></Link>
                    </div>
                    <div className="among_alm-fle3">
                        <Link className="among_alm_tit3" to="/pasillo">Pasillo</Link><br/>
                        <Link to="/pasillo"><img src={flecha}/></Link>
                    </div>
                    <div>
                        <button onClick={openModal2}><img src={use} className="use_alm"/></button>
                        <Modal isOpen={isOpenM}>
                            <img src={map_x} className="img_modal-xnav" onClick={closeModal2} />
                            <RefuelStation/>
                        </Modal>
                    </div> 
                </div>
            </div>
        </>
    )
}
