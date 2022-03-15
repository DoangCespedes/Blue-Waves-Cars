import React from 'react';
import Header from '../components/Header';
import { Presupuesto } from '../components/Presupuesto';
import { Promociones } from '../components/Promociones';
import { Servicios } from '../components/Servicios';
import { Prefierenos } from '../components/Prefierenos';
import dos from '../img/2.jpg';
import tres from '../img/3.jpg';
import logo from '../img/logoTaller.jfif';

export const Luztrado = () => {
  return (
    <>
      <Header/>
      <div className="Container bg-white">
        <div className="row">
            <div className="col-md-4">
              <img className="img-fluid rounded" src={dos}/>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold text-center">Blue-Waves-Cars / Servicio profesional en Luztrado y Cristalizados</h4>
                <img className="img-fluid rounded w-100" src={logo}/>
                <p className="mt-3 fs-10 text-start">
                Atendemos cualquier tipo de caso que presente tu vehiculo, somos especialistas 
                con mas de 15 anos de carrera en el area.<br/><br/>
                Removemos la opacidad que presente el vehiculo, aclaramos los faros, quitamos 
                rayas y damos un excelente brillo al vehiculo.
                </p>
            </div>
            <div className="col-md-4">
                <div className="row">
                    <Promociones/>    
                </div>
            </div>
        </div>
      </div>
      <div className="container">
      </div>
      <div className="row text-center bg-dark text-white">
        <div className="col-md-4">
          <p className='fs-2 fw-bold'> Proteccion de superficies para vehículos</p> 
          <p className="mt-3 fs-10 text-start">
            Trabajamos con los estandarres mas elevados. Infundimos tecnología moderna, materiales 
            de última generación y técnicas de luztrado de precisión en cada solución de protección 
            para su vehiculo. Desde materiales con Nano Ceramic Coatings hasta la película 
            de protección de pintura de curación instantánea.<br/>  
            Muchos no lo saben pero un luztrado Profesional mejora el rendimiento y la comodidad para mejorar el atractivo visual, reducir la resistencia 
            aerodinámica y agilizar el proceso de limpiando sus valiosas posesiones.<br/>
          </p> 
        </div>
        <div className="col-md-8"><img className="img-fluid rounded w-100" src={tres}/></div>
      </div>
      <Prefierenos/>
      <Presupuesto/>
      <Servicios/>
    </>
  )
}
