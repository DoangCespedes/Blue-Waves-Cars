import React from 'react';
import Header from '../components/Header';
import { Prefierenos } from '../components/Prefierenos';
import { Presupuesto } from '../components/Presupuesto';
import treinta from '../img/30.jpg';
import logo from '../img/logoTaller.jfif';



export const Empresa = () => {
  return (
    <>
      <Header/>
      <div className="container bg-white mt-2">
          <div className="row">
              <div className="col-md-4"><img className="img-fluid" src={treinta}/></div>
              <div className="col-md-8 text-center">
                <img className="img-fluid" src={logo}/>
                <h3 className="fw-bold">Hola soy Carlos</h3>
                <p className="text-start">Gerente general y trabajador activo en Blue-Waves-Cars, quiero comentarte 
                  que nuestra vision está orientada al logro de la satisfacción de nuestros 
                  clientes a través de la confianza, interés, eficiencia, rentabilidad y 
                  cumplimiento, para asi alcanzar la excelencia del servicio que ofrecemos.
                  Somos profesionales con mas de 15 años de experiencia en el rubro, contamos
                  con un equipo altamente calificado y certificado para cualquier tarea.<br/>
                  Además, somos un taller inclusivo, accesible y algo que nos caracteriza es explicar 
                  a nuestros clientes en que condicion se encuentra el vehiculo al entrar y al salir de
                  la empresa, porque una buena comunicación es importante para todos.
                </p>
              </div>
          </div>
      </div>
      <Presupuesto/>
      <Prefierenos/>
    </>
  )
}
