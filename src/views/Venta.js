import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCar, faBusinessTime, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import treintaiuno from '../img/31.jpg';
import { Presupuesto } from '../components/Presupuesto';
import { Servicios } from '../components/Servicios';



export const Venta = () => {
  return (
    <>
      <Header/>
      <div className="row">
        <div className="row fw-bold fs-1 text-center">
          <p className=" ">Somos tu opción confiable en CABA.</p>
          <div className="col-md-6">
            <FontAwesomeIcon className="icon" icon={faBusinessTime} />
            <p className='fs-3'>FINANCIAMIENTO</p>
            <p className='fs-6'>Recibimos su vehículo como parte de pago.</p> 
          </div>
          <div className="col-md-6">
            <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} /> 
            <p className='fs-3'>TALLER</p>
            <p className='fs-6'>Deja tu vehiculo en manos de expertos.</p>
          </div>
        </div>
        <div className="container bg-white" >
          <div className="col-md-3 mb-2 mt-4">
                <div className="card">
                  <img
                      src={treintaiuno}
                      className="card-img-top "
                  />

                  <div className="card-body">
                      <h5 className="fw-bold">Corsa <FontAwesomeIcon className="icon" icon={faCar} /> </h5>
                      <NavLink to='/chapa'><Button className="btn ">Me interesa</Button></NavLink>
                  </div>
                </div>
              
          </div> 
        </div>
        
      </div>
      <Presupuesto/>
      <Servicios/>
    </>
  )
}
