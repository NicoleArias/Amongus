import React from 'react';

import '../../styles/participantes.css';
import amarisho from '../../img/amarisho.gif';
import azul from '../../img/azul.gif';

export const Developers = () => {
    return (
        <>
            <div className="among_desc">
                <div className="amarisho">
                    <img src={azul} className="azul"/>
                    <ul>
                        <li>MATTHEW</li>
                        <li>NICOLE</li>
                    </ul>
                </div>
            </div> 
        </>
    )
}
