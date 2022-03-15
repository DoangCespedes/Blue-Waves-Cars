import React from 'react'
import { Carousel } from 'react-bootstrap';
import a from '../img/a.jpg';
import c from '../img/c.jpg';
import i from '../img/i.jpg';
import j from '../img/j.jpg';




const Header = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={a}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={i}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={j}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Header