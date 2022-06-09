import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Nav.Link className='text-white fw-bold display-6' as={Link} to="/"> Rakibul</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/services">Services</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;