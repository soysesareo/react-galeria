import React from 'react';
import '../style/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";


const Footer = () => {
    return (
        <div className='contenedor-footer'>
            <hr className='linea-texto' />
            <p className='texto-footer'>::..Todos los derechos reservados 2022..::</p>
            <div className='boton'>
                <Button  variant="primary" size="lg">
                    Ver más imágenes
                </Button>
            </div>
        </div>


    );
}


export default Footer