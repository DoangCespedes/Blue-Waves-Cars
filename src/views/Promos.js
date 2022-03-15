import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleDollarToSlot} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import {Presupuesto} from '../components/Presupuesto';
import {Servicios} from '../components/Servicios'
import diecinueve from '../img/19.jpg';
import ventiuno from '../img/21.jpg';
import ventisiete from '../img/27.jpg';
import once from '../img/11.jpg';

export const Promos = () => {
  return (
    <>
      <Header/>
      <div>
        <div className="bg-warning">
            <h2 className="text-center fw-bold fs-1" >Promocion del mes <FontAwesomeIcon className="icon" icon={faCircleDollarToSlot} />  </h2>
        </div>
        <div className="row mt-2 bg-white">
          <div className='col-md-4'>
            <img className="img-fluid" src={diecinueve} />
          </div>
          <div className="col-md-8 text-center">
            <h3 className="fw-bold">FRENOS 3.000$(ARS)</h3>
            <p className="">
              Llama y solicita tu promocion Cambio de pastillas al menor precio de todo Buenos Aires.
            </p>
          </div>
        </div>
        <div className="row mt-2 bg-white">
          <div className='col-md-4'>
            <img className="img-fluid" src={ventiuno} />
          </div>
          <div className="col-md-8 text-center">
            <h3 className="fw-bold">PINTAMOS DOS Y PAGAS UNO 10.000$(ARS)</h3>
            <p className="">
              Llama y solicita tu promocion 2x1. Por cada paño de pintura que nos canceles
               nosotros pintamos 2 y esto al menor precio de todo Buenos Aires. 
            </p>
          </div>
        </div>
        <div className="row mt-2 bg-white">
          <div className='col-md-4'>
            <img className="img-fluid" src={ventisiete} />
          </div>
          <div className="col-md-8 text-center">
            <h3 className="fw-bold">DIAGNOSTICO DE AVERIAS 1.300$(ARS)</h3>
            <p className="">
              Llama y solicita tu promocion, Tenemos las herramientas más avanzadas del mercado. 
              Realiza tu diagnostico integral al menor precio de todo Buenos Aires. 
            </p>
          </div>
        </div>
          <div className="row mt-2 bg-white">
            <div className='col-md-4'>
              <img className="img-fluid" src={once} />
            </div>
            <div className="col-md-8 text-center">
              <h3 className="fw-bold">CAMBIO DE ACEITE 1.200$(ARS)</h3>
              <p className="">
                Llama y solicita tu promocion, tenemos el equipo mas sofisticado para realizar el 
                mantenimiento a tu vehiculo en minutos y al menor precio de todo Buenos Aires. 
              </p>
            </div>
          </div>
      </div>
      <Presupuesto/>
      <Servicios/>  
        
    </>
  )
}
