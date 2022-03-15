import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../img/logo2.png';
import "./Navbar.css";

export const Navbarr = () => {
    return (
        <>
            
            <div className="barra">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Container>
                    <Navbar.Brand ><NavLink to='/' className="btn btn-outline-dark"><img src={logo} alt='log' className="logo2"/></NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link><NavLink className="letras" to='/empresa'>Empresa</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="letras" to='/promos'>Promociones</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="letras" to='/venta'>Venta/Autos</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="letras" to='/Contacto'>Contacto</NavLink></Nav.Link>
                        <NavDropdown className="letras" title="Servicios" id="collasible-nav-dropdown">
                            <NavDropdown.Item><NavLink className="letras2" to='/mecanica'>Mecanica General</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink className="letras2" to='/chapa'>Chapa</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink className="letras2" to='/pintura'>Pintura</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink className="letras2" to='/luztrado'>Luztrado</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink className="letras2" to='/interiores'>Limpieza de interiores</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="https://www.google.com/maps/place/34%C2%B038'44.5%22S+58%C2%B024'05.5%22W/@-34.6456806,-58.4037086,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4dce52213d7c52b9!8m2!3d-34.6456806!4d-58.4015199?hl=es"><FontAwesomeIcon className="iconNav" icon={faLocationDot} /> </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/bluewavescars/?hl=es-la"><FontAwesomeIcon className="iconNav" icon={faInstagram} /> </Nav.Link>
                        <Nav.Link href="https://wa.me/5491163674688?text=Quiero%20una%20cita%20en%20Blue-Waves-Cars"><FontAwesomeIcon className="iconNav" icon={faWhatsapp} /> </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes"><FontAwesomeIcon className="iconNav" icon={faFacebook} /> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </div>
        </>
      )
};