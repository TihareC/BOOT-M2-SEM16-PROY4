import React, {useState} from 'react'
import Cabecera from './Cabecera'
import InformacionRestaurante from './InformacionRestaurante'
import FormularioContacto from './FormularioContacto'
import Ubicacion from './Ubicacion'

export default function Example() {
  const [emailContacto] = useState('contacto@ramenmaipu.cl');
  const [mapaGoogle] = useState('https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1620.6791561661278!2d-70.75698237943998!3d-33.50969644570614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1696796339083!5m2!1ses-419!2scl');

  return (
    <>
      <Cabecera></Cabecera>
      <main>
        <InformacionRestaurante></InformacionRestaurante>
        <Ubicacion emailContacto={emailContacto} mapaGoogle={mapaGoogle}></Ubicacion>
        <FormularioContacto></FormularioContacto>
      </main>
    </>
  )
}