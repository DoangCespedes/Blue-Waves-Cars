import React from 'react';
import Header from '../components/Header';
import { Presupuesto } from '../components/Presupuesto';
import { Promociones } from '../components/Promociones';
import { Servicios } from '../components/Servicios';
import { Prefierenos } from '../components/Prefierenos';
import v3 from '../img/23.jpg';
import logo from '../img/logoTaller.jfif';

export const Chapa = () => {
  return (
    <>
      <Header/>
      <div className="Container bg-white">
        <div className="row">
            <div className="col-md-4">
              <img className="img-fluid rounded" src={v3}/>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold text-center">Blue-Waves-Cars / Servicio profesional de Chapa</h4>
                <img className="img-fluid rounded w-100" src={logo}/>
                <p className="mt-3 fs-10 text-start">
                Atendemos cualquier tipo de caso que presente tu vehiculo, somos especialistas 
                con mas de 15 anos de carrera en el area.<br/><br/>
                Tambien llevamos un largo recorrido en autos clasicos y restauraciones.
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
