import React from "react";

const Ubicacion = ({emailContacto, mapaGoogle}) => {
    return (
        <div className="ubicacion">
            <h2>Encuentranos en la Plaza de Maipú</h2>
            <div className="mapa">
                <iframe src={mapaGoogle}
                    title="mapa"
                    width="100%" 
                    height="300" 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p>Contactanos al correo <strong>{emailContacto}</strong> </p>
        </div>
    );
}

export default Ubicacion;