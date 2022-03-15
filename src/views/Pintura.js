import React from 'react';
import Header from '../components/Header';
import { Presupuesto } from '../components/Presupuesto';
import { Promociones } from '../components/Promociones';
import { Servicios } from '../components/Servicios';
import { Prefierenos } from '../components/Prefierenos';
import logo from '../img/logoTaller.jfif';
import { Galeria } from '../components/Galeria';

export const Pintura = () => {
  return (
    <>
      <Header/>
      <div className="Container bg-white">
        <div className="row">
            <div className="col-md-4">
              <Galeria/>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold text-center">Blue-Waves-Cars / Servicio profesional en Luztrado y Cristalizados</h4>
                <img className="img-fluid rounded w-100" src={logo}/>
                <p className="mt-3 fs-10 text-start">
                Atendemos cualquier tipo de caso que presente tu vehiculo, somos especialistas 
                con mas de 15 anos de carrera en el area.<br/><br/>
                Por ser esta rama nuestro fuerte, en Blue-Waves-Cars restauramos y llevamos el mantenimiento de todo tipo de vehículos, 
                para satisfacer las necesidades de sus clientes, y que sigan luciendo tal y como el primer día. .
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
