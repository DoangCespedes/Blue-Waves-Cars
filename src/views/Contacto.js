import React from 'react';
import Header from '../components/Header';
import { MapView } from '../components/MapView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {Prefierenos} from '../components/Prefierenos'
import diecisiete from '../img/17.jpg';
import logo from '../img/logo2.png';

<i class="fa-solid faLocationDot"></i>
export const Contacto = () => {
  return( 
        <>
            <Header/>
            <Prefierenos/>
            <img src={diecisiete} alt="img" className="img-fluid rounded w-100"/>
            <div className="Container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-center fs-4 fw-bold"> DIRECCION </p>
                        <p className="text-center"> C1437 CABA, Argentina<br />Av. Amancio Alcorta 2884</p>
				        <p className="text-center">(+54) 11 2186-9771 <br/> (+54) 11 6367-4688</p>
				        <p className="text-center">blue-waves-cars@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-center fs-4 fw-bold"> HORARIO </p>
                        <p className="text-center">Lunes a Viernes<br />(9:00am) a (5:00pm)</p>
				        <p className="text-center">Sabado <br/> (9:00am) a (2:00pm)</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <MapView/>
            </div>
            <div className="row bg-dark text-center text-white mt-4">
                 
                <p className="fs-1 fw-bold "><img alt="img" src={logo}/> <br/> CONTACTO </p>
                <div className="col-3 mb-4">
                    <a href="https://wa.me/5491163674688?text=Quiero%20una%20cita%20en%20Blue-Waves-Cars"> <FontAwesomeIcon className="iconNav" icon={faWhatsapp} /> </a>
                </div>
                <div className="col-3 mb-4">
                    <a href="https://www.instagram.com/bluewavescars/?hl=es-la"> <FontAwesomeIcon className="iconNav" icon={faInstagram} /> </a>
                </div>
                <div className="col-3 mb-4">
                    <a href="https://facebook.com/"> <FontAwesomeIcon className="iconNav" icon={faFacebook} /> </a>
                </div>
                <div className="col-3 mb-4">
                    <a href="https://www.google.com/maps/place/34%C2%B038'44.5%22S+58%C2%B024'05.5%22W/@-34.6456806,-58.4037086,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4dce52213d7c52b9!8m2!3d-34.6456806!4d-58.4015199?hl=es"> <FontAwesomeIcon className="iconNav" icon={faLocationDot} /> </a>
                </div>
            </div>
            
        </>
    )        
};