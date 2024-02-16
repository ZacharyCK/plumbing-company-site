import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar expand="md" className="main-nav">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="./faucet.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className="company-name">Zach's Fake Plumbers</span>
          </Navbar.Brand>
          <nav>
          <Navbar.Toggle className="custom-toggler" aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto navigation-links">
                <Nav.Link className="navigation-link" href="#about">Our Company</Nav.Link>
                <Nav.Link className="navigation-link" href="#services">Services</Nav.Link>
                <Nav.Link className="navigation-link" href="#testimonials">Testimonials</Nav.Link>
                <Nav.Link className="navigation-link" href="#faq">FAQs</Nav.Link>
                <Nav.Link className="navigation-link" href="#contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </nav>
          
        </Container>
      </Navbar>
    );
}
  
  export default Navigation;