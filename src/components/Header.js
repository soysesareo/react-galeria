import React from 'react';
import '../style/Header.css'

const Header = ({cabecera}) => {
    return (
        <div className='contenedor-header'>
            <p className='texto-cabecera'>{cabecera}</p>
            <hr className='linea-header' />
        </div>
    );
}

export default Header