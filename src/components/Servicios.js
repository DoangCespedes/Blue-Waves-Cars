import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faScrewdriverWrench, faBusinessTime, faSprayCanSparkles, faCar, faCarSide, faHammer} from '@fortawesome/free-solid-svg-icons';
import cuatro from '../img/4.jpg';
import uno from '../img/1.jpg';
import diez from '../img/10.jpg';
import d6 from '../img/16.jpg';
import cinco from '../img/5.jpg';


export const Servicios = () => {
  return (
    <>
      <div className="container bg-dark text-center text-white">  
        <h2>
            Servicios <FontAwesomeIcon className="icon" icon={faBusinessTime} /> 
        </h2>
    
        <div className=" row text-black justify-content-around mt-4">
          
            <div className="col-md-3 mb-2 ">
              <NavLink className="letras2" to='/chapa'>
                <div className="card">
                  <img
                      src={cuatro}
                      className="card-img-top "
                  />

                  <div className="card-body">
                      <h5 className="fw-bold">Chapa en General <FontAwesomeIcon className="icon" icon={faHammer} /> </h5>
                      <p>Reparamos cualquier tipo de choque</p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col-md-3 mb-2 ">
              <NavLink className="letras2" to='/pintura'>
                <div className="card">
                  <img
                      src={uno}
                      className="card-img-top "
                  />

                  <div className="card-body">
                      <h5 className="fw-bold">Pintura en General <FontAwesomeIcon className="icon" icon={faCar} /> </h5>
                      <p>Profecionales en la materia, tambien hacemos personalizaciones</p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col-md-3 mb-2 ">
            <NavLink className="letras2" to='/mecanica'>
              <div className="card">
                <img
                    src={diez}
                    className="card-img-top "
                />

                <div className="card-body">
                    <h5 className="fw-bold">Mecanica en General <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} /></h5>
                    <p>Somos profesionales certificados en multiples marcas</p>
                </div>
              </div>
            </NavLink>
            </div>
        </div>


        <div className="row text-black justify-content-around mt-4">
        
            <div className="col-md-3 mb-2 ">
              <NavLink className="letras2" to='/luztrado'>
                <div className="card">
                  <img
                      src={d6}
                      className="card-img-top "
                  />

                  <div className="card-body">
                      <h5 className="fw-bold">Luztrado <FontAwesomeIcon className="icon" icon={faCarSide}/></h5>
                      <p>Luztramos, critalizamos y quitamos la opacidad de tu vehiculo</p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col-md-3 mb-2 ">
              <NavLink className="letras2" to='/limpieza de interiores'>
                <div className="card">
                  <img
                      src={cinco}
                      className="card-img-top "
                  />

                  <div className="card-body">
                      <h5 className="fw-bold">Interiores <FontAwesomeIcon className="icon" icon={faSprayCanSparkles}/></h5>
                      <p>Limpieza de interiores a profundidad</p>
                  </div>
                </div>
              </NavLink>
            </div>
        </div>
      </div>
    
    </>
  )
}
