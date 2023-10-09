import React from 'react';
import Logo from '../assets/logo.jpg';

const Cabecera = () => {
    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={Logo} alt="logo" />
            </a>
            <input className="menu-lateral" type="checkbox" id="menu-lateral" />
            <label className="seccion-icono-menu-lateral">
                <span className="icono-menu-lateral"></span>
            </label>
            <nav className="areas-principales">
                <ul>
                    <li><a href="/">Sobre Nosotros</a></li>
                    <li><a href="/">Nuestro Menú</a> </li>
                    <li><a href="/">Reservaciones</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecera;