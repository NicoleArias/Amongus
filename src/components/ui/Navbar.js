import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/navbar.css';
import among from '../../img/among.png';

export const Navbar = () => {

    return (
        <>
            <header>
                <Link to="/pre_inicio"><img src={among} className="header_img"/></Link>
            </header>

            <nav className="among_nav">
                <ul className="among_ul">
                    <li>
                        <Link to="/inicio">
                            INICIO
                        </Link> 
                    </li>
                    <li>
                        <Link to="/cafeteria">
                            AREAS
                        </Link>
                    </li>
                    <li>
                        <Link to="/participantes">
                            PROGRAMADORES
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
