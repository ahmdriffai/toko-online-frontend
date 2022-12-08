import React from 'react';
import {
  Navbar, Container, Nav, Badge, NavDropdown,
} from 'react-bootstrap';
import { BiCartAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Navigation({ authUser }) {
  const renderMenuElement = () => {
    if (authUser === null) {
      return (
        <>
          <Link to="/login" className="ms-3 btn btn-primary btn-sm px-4">Login</Link>
          <Link to="/register" className="ms-3 btn btn-outline-primary btn-sm px-4">Register</Link>
        </>
      );
    }
    return (
      <NavDropdown title={authUser.name} id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
      </NavDropdown>
    );
  };

  return (
    <Navbar bg="light" variant="light" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand href="/">Online Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="ms-auto">
          <Nav.Link href="#home">
            <BiCartAlt />
            <Badge bg="danger" className="cart-count">1</Badge>
          </Nav.Link>
        </Nav>
        {renderMenuElement()}
      </Container>
    </Navbar>
  );
}

export default Navigation;
