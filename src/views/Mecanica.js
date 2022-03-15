import React from 'react'
import Header from '../components/Header'
import { Presupuesto } from '../components/Presupuesto';
import { Promociones } from '../components/Promociones';
import { Servicios } from '../components/Servicios';
import { Prefierenos } from '../components/Prefierenos';
import doce from '../img/12.jpg';
import quince from '../img/15.jpg';
import h from '../img/h.jpg';
import g from '../img/g.jpg';
import logo from '../img/logoTaller.jfif';

export const Mecanica = () => {
  return (
    <>
      <Header/>
      <div className="Container bg-white">
        <div className="row">
            <div className="col-md-4">
              <img className="img-fluid rounded" src={doce}/>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold text-center">Blue-Waves-Cars / Servicio profesional de Mecanica</h4>
                <img className="img-fluid rounded w-100" src={logo}/>
                <p className="mt-3 fs-10 text-start">
                Atendemos cualquier tipo de caso que presente tu vehiculo, somos especialistas 
                con mas de 15 anos de carrera en el area. En Blue-Waves-Cars contarás con la asistencia
                para tu vehículo, un personal técnico especializado, en las marcas más 
                comerciales de Argentina.
                </p>
            </div>
            <div className="col-md-4">
                <div className="row">
                    <Promociones/>    
                </div>
            </div>
        </div>
        <div className="row mt-2 text-center bg-dark text-white">
        <p className='fs-2 fw-bold'> Servicios Mecanicos</p>
          <div className="col-md-6 text-start">
            <img className="img-fluid rounded" src={h}/>
            <p className='fs-4 fw-bold'> Tipos de servicios:</p>
            <li>Reemplazo de cadena de tiempo: todos los modelos 4 cilindros, 6 cilindros y 8 cilindros.</li>
            <li>Limpieza de inyectores y cambio de kit.</li>
            <li>Reemplazo o reparación de Clutch mecánico o hidráulico.</li>
            <li>Suspensión y tren delantero.</li>
            <li>Reparación de frenos.</li>
            <li>Cambio de rolineras.</li>
            <li>Reparación de alternadores y arranques.</li>
            <li>Cambio de tripoides guardapolvo.</li><br/>
          </div>
          <div className="col-md-6 text-start">
            <p className='fs-4 fw-bold mt-2'> Hacemos cambio de:</p>
            <li>Cables de bujías.</li>
            <li>Filtros de aire.</li>
            <li>Filtro de gasolina.</li>
            <li>Kits de tiempo.</li>
            <li>Aceite.</li>
            <li>Filtros de aceite.</li>
            <li>Estoperas de cigueñal y árboles de levas.</li>
            <li>Limpieza y cambio de kits de inyectores.</li>
            <img className="img-fluid rounded mt-2 w-100" src={quince}/>
            <p className='fs-4 fw-bold mt-2'> Mecanica general</p>
            <li>Nuestros técnicos, también están capacitados para realizar el mantenimiento preventivo y correctivo de tu auto.</li>
            <li>Reparación de motores, caja, cámaras 4, 6 y 8 cilindros.</li><br/>
          </div>
        </div>
      </div>
      <img className="img-fluid rounded w-100" src={g}/>
      <Prefierenos/>
      <Presupuesto/>
      <Servicios/>
    </>
  )
}
