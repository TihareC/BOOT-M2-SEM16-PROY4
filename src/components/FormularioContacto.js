import React, { useState } from "react";
import Contacto from "../assets/contacto.jpg";

const FormularioContacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeEnvio, setMensajeEnvio] = useState(<></>);
  const enviarMensaje = (event) => {
    event.preventDefault();
    console.log(`Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`);
    setMensajeEnvio(<div className="mensaje-enviado">
      <p>
        Mensaje enviado, nos comunicaremos contigo a la brevedad.
      </p>
      <ul>
        <li>Nombre: {nombre}</li>
        <li>Correo: {correo}</li>
        <li>Teléfono: {telefono}</li>
        <li>Mensaje: {mensaje}</li>
      </ul>
    </div>);
  }

  return (
    <div className="contacto">
      <h2>Contactanos</h2>
      <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>

      <div className="secciones-contactanos">
        <div className="secciones-contactanos-derecha">
          <img src={Contacto} alt="" />
        </div>
        <div className="secciones-contactanos-izquierda">
          <form onSubmit={enviarMensaje}>
            <input type="text" placeholder="Nombre" required minLength="1" onChange={(e) => setNombre(e.target.value)} />
            <input type="email" placeholder="Correo" required onChange={(e) => setCorreo(e.target.value)} />
            <input type="tel" placeholder="Teléfono" required onChange={(e) => setTelefono(e.target.value)} />
            <textarea name="mensaje" placeholder="Mensaje" rows={4} required minLength="1" onChange={(e) => setMensaje(e.target.value)} ></textarea>
            <input type="submit" value="Enviar" />
          </form>
          {mensajeEnvio}
        </div>
      </div>
    </div>
  );
}

export default FormularioContacto;