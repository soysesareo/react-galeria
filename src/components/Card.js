import React from 'react';
import '../style/Card.css'

/* function Cards(props) {
  return (
    <div className='contenedor-tarjeta'>
        <img 
          className='imagen-tarjeta' 
          src={require(`../imgs/galeria-${props.imagen}.jpg`)}
          />
        <div className='contenedor-texto-tarjeta'>
          <p className='nombre-animal'>{props.nombre}</p>
          <p className='tipo-animal'>{props.tipo}</p>
        </div>
    </div>
  );
} */

const Cards = ({imagen, nombre, tipo}) => {
  return (
    <div className='contenedor-tarjeta'>
        <img 
          className='imagen-tarjeta' 
          src={require(`../imgs/galeria-${imagen}.jpg`)}
          />
        <div className='contenedor-texto-tarjeta'>
          <p className='nombre-animal'>{nombre}</p>
          <p className='tipo-animal'>{tipo}</p>
        </div>
    </div>
  );
}

export default Cards