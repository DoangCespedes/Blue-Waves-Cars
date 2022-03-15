import React from 'react';
import  Header  from "../components/Header";
import { Presupuesto } from '../components/Presupuesto';
import { Promociones } from '../components/Promociones';
import { Servicios } from '../components/Servicios';
import logo from '../img/logoTaller.jfif';

export const Inicio = () => {
  return(
        <>
            <Header/>
            <div className="Container bg-white">
                <div className="row">
                    <div className="col-md-8 text-center">
                        <h4 className="fw-bold ">Blue-Waves-Cars / Servicio profesional de Chapa, Pintura y Mecanica del Automóvil </h4>
                        <img className="img-fluid rounded" src={logo}/>
                        <p className="mt-3 fs-10 text-start">
                        En nuestra compañia nos caracterizamos por 
                        tener un equipo altamente calificado y la utilización de las últimas tecnologías 
                        en materia de equipamiento. Todo ello con el objetivo de ofrecer a nuestros clientes 
                        el mejor de los servicios posible para dar respuesta a las necesidades de sus vehículos.<br/><br/>
                        Lo más importante, para nosotros, es transmitir confianza, seguridad, garantías y que el 
                        cliente tenga toda la información necesaria antes, durante y tras la reparación. Es por 
                        ello que realizamos presupuestos adaptados a las nuevas tecnologías y los comunicamos a 
                        nuestros clientes, por vía telefónica, por e-mail, o por Whatsapp.
                        </p>
                        </div>
                    <div className="col-md-4">
                        <div className="row">
                            <Promociones/>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="car-img-top">
                <Presupuesto/>
            </div>
            <div className="Container">
                <Servicios/>
            </div>
        </>
    )    
};