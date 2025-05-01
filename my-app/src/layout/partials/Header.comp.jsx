import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    navigate('/');
  };

  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img
          src={logo}
          alt="logo"
          width="95"
          height="95"
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-lg-auto">
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/tickets">
            Tickets
          </Nav.Link>
          <Nav.Link onClick={logMeOut} style={{ cursor: 'pointer' }}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};




