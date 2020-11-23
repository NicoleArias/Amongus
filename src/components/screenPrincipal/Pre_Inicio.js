import React from 'react';
import { Link } from 'react-router-dom';

import among from '../../img/among.png';

export const Pre_Inicio = () => {
    return (
        <>
            <Link className="a_among" to="/inicio"><img src={among} /></Link>
        </>
    )
}
