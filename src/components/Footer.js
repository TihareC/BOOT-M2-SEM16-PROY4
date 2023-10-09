import React from "react";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Pinterest from "../assets/pinterest.png";

const Footer = () => {
    return (
        <footer>
            <div className="contenido">
                <div className="enlaces">
                    <img src={Facebook} alt="Facebook" />
                    <img src={Instagram} alt="Instagram" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Pinterest} alt="Pinterest" />
                </div>
                <div className="enlaces">
                    <ul>
                        <li><a href="#">Sobre Nosotros</a></li>
                    </ul>
                </div>
                <div className="enlaces">
                    <ul>
                        <li><a href="#">Nuestro Menú</a> </li>
                    </ul>
                </div>
                <div className="enlaces">
                    <ul>
                        <li><a href="#">Reservaciones</a></li>
                    </ul>
                </div>
            </div>
            <div className="barra-inferior">
                <p>©2023 Tihare Contreras. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;