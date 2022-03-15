import React from 'react';
import Header from '../components/Header';
import { Presupuesto } from '../components/Presupuesto';
import { Promociones } from '../components/Promociones';
import { Servicios } from '../components/Servicios';
import { Prefierenos } from '../components/Prefierenos';
import f from '../img/f.jpg';
import logo from '../img/logoTaller.jfif';

export const Interiores = () => {
  return (
    <>
      <Header/>
      <div className="Container bg-white">
        <div className="row">
            <div className="col-md-4">
              <img className="img-fluid rounded" alt="img" src={f}/>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold text-center">Blue-Waves-Cars / Servicio profesional en Limpieza </h4>
                <img className="img-fluid rounded w-100" alt="img" src={logo}/>
                <p className="mt-3 fs-10 text-start">
                Atendemos cualquier tipo de caso que presente tu vehiculo, somos especialistas 
                con mas de 15 anos de carrera en el area.<br/>
                Realizamos todo tipo de limpiezas ya sea interior, exterior, abrillantado o pulido, 
                limpieza de tapizados, lavado de motores, chasis, y también lavamos y descarbonizamos 
                componentes mecánicos del auto, todo para que su vehículo luzca siempre excelente.
                </p>
            </div>
            <div className="col-md-4">
                <div className="row">
                    <Promociones/>    
                </div>
            </div>
        </div>
      </div>
      <Prefierenos/>
      <Presupuesto/>
      <Servicios/>
    </>
  )
}
