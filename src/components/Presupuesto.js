import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import diecisiete from '../img/17.jpg';
import "./Presupuesto.css";


export const Presupuesto = () => {
  return (
    <div className="col-12 mt-2">
        <img className="img-fluid rounded w-100" src={diecisiete}/>
        <div className="row text-center bg-white">
            <div className="col-6 ">
                <p className=" fw-bold">
                <FontAwesomeIcon icon={faPhone} className="ico" /> Llámanos: <br/>
                928 417 651 - 928 670 215 
                </p>
            </div>
            <div className="col-6 fw-bold">
                <p>
                    <FontAwesomeIcon icon={faClock} className="ico" /> Nuestro Horario: <br/>
                    Lun - Vie 07.00 - 17.00
                </p>
            </div>
        </div>
    </div>
  )
}
