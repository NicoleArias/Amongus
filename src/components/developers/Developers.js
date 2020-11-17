import React from 'react';

import '../../styles/participantes.css';
import amarisho from '../../img/amarisho.gif';
import azul from '../../img/azul.gif';

export const Developers = () => {
    return (
        <>
            <div class="among_desc">
                <div class="amarisho">
                    <img src={amarisho} />
                
                    <img src={azul} />
                    <ul>
                        <li>MATTHEW</li>
                        <li>NICOLE</li>
                        <li>JHOAN</li>
                        <li>BRAINER</li>
                    </ul>
                </div>
            </div> 
        </>
    )
}
