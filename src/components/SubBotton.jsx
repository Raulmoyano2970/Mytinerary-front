import React from 'react';

import { Link as NavLink } from 'react-router-dom';

function SubButton(props) {

    let {nombre, rute}= props

    return (
        <li className="menuinside">
            <p className="menulink menu__link--inside">{nombre}</p>
        </li>
    )
}
export default SubButton