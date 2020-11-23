import  React from  'react';

import map_blue from '../../img/Map_blue.jpg';
import map_x from '../../img/map_x.png';
import '../../styles/modal.css';

export const Modal = ({ isOpen, closeModal })  =>  {

    return  (
        <div className={`modal ${isOpen && 'modal-open'}`}  onClick={ closeModal }>
            <h1>MODAL</h1>
            <img src={map_blue} />
            <button  onClick = { closeModal }>
                <img src={map_x} />
            </button >
        </div>
    )
}