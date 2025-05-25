import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { loginFail } from '../../components/login/loginSlice';
import { userLogout } from '../../api/userApi';

//



export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  


  const logMeOut = () => {
    sessionStorage.removeItem('accessJWT');
    localStorage.removeItem("sotetelDeskSite")
    dispatch(loginFail("Logged out")); // <- ça remet isAuth à false
    userLogout();
    navigate('/');
  };

  // Vérifie si on est sur la page d’accueil (login)
  const isLoginPage = location.pathname === '/';

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
          {/* 👇 Afficher uniquement si on n'est pas sur la page login */}
          {!isLoginPage && (
            <>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link>
              <Nav.Link onClick={logMeOut} style={{ cursor: 'pointer' }}>Logout</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};




