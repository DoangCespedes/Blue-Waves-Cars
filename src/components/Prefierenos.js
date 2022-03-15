import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo2.png';

export const Prefierenos = () => {
  return (
    <div className="container">
        <div className="row text-white text-center">
            <div className="block col-12 bg-dark align-middle">
                <img className="mt-2" src={logo}/>
                <p className="fs-1 fw-bold">¿POR QUE ELEGIRNOS?</p> 
            </div>
            <div className="col-md-4 bg-dark">
                <FontAwesomeIcon className="icon fs-1 mt-2" icon={faDollarSign} />
                <p className="fs-4 fw-bold mt-4">BUENA INVERSIÓN</p>
                <p className="">Al elegirnos, no solo estaras cuidando de tu vehiculo,
                sino tambien de tu billetera, trabajamos con presupuestos adecuados para 
                todo tipo de reparacion y mantenimiento, tambien ofrecemos promociones y 
                lo mas importante garantizamos nuestra mano de obra.</p>
            </div>
            <div className="col-md-4 bg-dark">
                <FontAwesomeIcon className="icon fs-1 mt-2" icon={faThumbsUp} />
                <p className="fs-4 fw-bold mt-4">VALORES</p>
                <p className="">Confianza, Honestidad, Amabilidad, Lealtad, 
                Respeto Vocacion de Servicio, Profesionalismo, Deseo de superacion,
                 Trabajo en equipo, Responsabilidad, Integridad.</p>
            </div>
            <div className="col-md-4 bg-dark">
                <FontAwesomeIcon className="icon fs-1 mt-2" icon={faClock} />
                <p className="fs-4 fw-bold mt-4">Velocidad</p>
                <p className="">Sabemos lo importente que es el tiempo para todos, 
                por esto en Blue-Waves-Cars contamos con equipo preparado y altamente calificado para
                realizar cualquier tarea de forma excelente, segura y en tiempo record.</p>
            </div>
        </div>
    </div>
  )
}
