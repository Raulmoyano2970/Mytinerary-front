import React from 'react';
import { useState } from 'react';
import SubButton from './SubButton';
import { Link as NavLink } from 'react-router-dom';


function ButtonNav(props) {

    let {name, subname , subname2, rute, ruteDos} = props
    let [mostrar, setMostrar] = useState(false)

    let ocultarBoton = () => {
        setMostrar(!mostrar)
    }
    return (
        <>
        <li className="menuitem menuitem--show">
            <a href="#" className="menulink" onClick={ocultarBoton}>{name}<img src="../img/arrow.svg" className="menuarrow" /></a>
            {mostrar && (
            <ul className="menu__nesting">
                <NavLink to={rute}>
                <SubButton nombre={subname} />
                </NavLink>
                <NavLink to={ruteDos}>
                <SubButton nombre={subname2} />
                </NavLink>
            </ul>
            )}
        </li>
        </>
    )
}
export default ButtonNav