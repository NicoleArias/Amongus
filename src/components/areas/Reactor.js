import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import flecha from '../../img/flecha.png';
import reactor from '../../img/reactor2.png';
import reactor2 from '../../img/reactor1.png';
import reactor_t1 from '../../img/reactor_t1.png';
import reactor_t2 from '../../img/reactor_t2.png';
import icono_mapa from '../../img/icono-mapa.png';
import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';

// import Unlock_Manifolds_Skeld from '../../img/Unlock_Manifolds_Skeld.png';

export const Reactor = () => {

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
                <div className="among_rea">
                    <div className="among_rea-img">
                        <img src={reactor2} className="among_rea-img1"/><br/>
                        <img src={reactor} className="among_rea-img2"/>
                        <img src={reactor_t1} className="rea_t1" />
                        <img src={reactor_t2} className="rea_t2" />
                    </div>
                    <div className="among_rea-img2">
                    <button onClick={openModal}><img src={icono_mapa} /></button>
                        <Modal isOpen={isOpenModal} closeModal={closeModal} className="modal">
                            <img src={map_x} className="img_modal-x" onClick={closeModal} />
                            <img src={map_blue} className="img_modal"/>
                        </Modal>
                    </div>
                    <div className="among_rea-fle3">
                        <Link className="among_rea_tit3" to="/pasillo2">Pasillo</Link><br/>
                        <Link to="/pasillo2"><img src={flecha} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
