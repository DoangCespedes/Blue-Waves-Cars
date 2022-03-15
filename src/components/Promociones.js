import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleDollarToSlot} from '@fortawesome/free-solid-svg-icons';
import diecinueve from '../img/19.jpg';
import ventiuno from '../img/21.jpg';
import once from '../img/11.jpg';
import ventisiete from '../img/27.jpg';





export const Promociones = () => {
  return (
    <>
        <div className="">
            <div className="bg-warning">
                <h2 className="text-center fw-bold fs-1" >Promocion del mes <FontAwesomeIcon className="icon" icon={faCircleDollarToSlot} />  </h2>
            </div>
            <p className="text-center fw-bold ">Solo llamanos y pautamos la cita para tu vehiculo!</p>
            <div className="container">
                <Carousel className="mt-2">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={diecinueve}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={once}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ventiuno}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ventisiete}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </>
  )
}
