import React from 'react';

import '../../styles/participantes.css';
import amarisho from '../../img/amarisho.gif';
import azul from '../../img/azul.gif';

export const Developers = () => {
    return (
        <>
            <div className="among_desc">
                <div className="amarisho">
                    <div className="pro_1">
                        <i class="fa fa-github" aria-hidden="true"></i>
                        <a href="https://github.com/3lCR3P3R" target="_blank">3lCR3P3R</a>
                    </div>
                    <img src={azul} className="azul"/>
                    <ul>
                        <li>MATTHEW</li>
                        <li>NICOLE</li>
                    </ul>
                    <div className="pro_2">
                        <i class="fa fa-github" aria-hidden="true"></i>
                        <p>
                            sdnwejfnwejfef we fw efwjefnwk
                        </p>
                    </div>
                </div>
            </div> 
        </>
    )
}
