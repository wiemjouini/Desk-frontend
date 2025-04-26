import React from 'react'
import {Nav , Navbar, NavbarCollapse, NavbarToggle} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'

export const Header= () => {
  return (
    <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
    <Navbar.Brand><img src={logo} alt='logo' width='95px'></img></Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-bar'/>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-lg-auto">
      <Nav.Link href='/dashboard'>dashboard</Nav.Link>
      <Nav.Link href='/dashboard'>Tickets</Nav.Link>
      <Nav.Link href='/dashboard'>Logout</Nav.Link>
    </Nav>
    
    </Navbar.Collapse>
    </Navbar>
  )
}

