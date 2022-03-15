import React from 'react';
import { Carousel } from 'react-bootstrap';
import a1 from '../img/a1.png';
import a2 from '../img/a2.png';
import a3 from '../img/a3.png';
import a4 from '../img/a4.jpg';
import a5 from '../img/a5.jpg';
import a6 from '../img/a6.jpg';

export const Galeria = () => {
  return (
    <>
      <h2 className="text-center fw-bold fs-1" >Galeria</h2>
      <p className="text-center fw-bold ">Una pequena muestra de como trabajamos</p>
      <div className="container">
        <Carousel className="mt-2">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={a1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={a2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={a3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={a4}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={a5}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={a6}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}
