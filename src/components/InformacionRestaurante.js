import React from "react";
import RamenImage from "../assets/ramen-info.png";

const InformacionRestaurante = () => {
    return (
        <div className="jumbotron">
            <div className="seccion-derecha">
                <h1>Ramen Maipú</h1>
                <h2>El mejor Ramen hecho por manos Japonesas</h2>
                <p>Ven a probar el verdadero Ramen hecho con ingredientes naturales y preparado por chef entrenados en Japón</p>
            </div>
            <div className="seccion-izquierda">
                <img src={RamenImage} alt="" />
            </div>
        </div>
    );
}

export default InformacionRestaurante;