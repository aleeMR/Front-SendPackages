import { Link } from 'react-router-dom';
import React from 'react';

import Nav from 'react-bootstrap/Nav';

class NavCustom extends React.Component{
  render (){
    return (
      <Nav>
        <Nav.Item>
          <Link to="/" className="nav-link navbar-option">Inicio</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/sends" className="nav-link navbar-option">Ver Envíos</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/sends/status" className="nav-link navbar-option">Ver Estados</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/sends/create" className="nav-link navbar-option">Enviar Paquete</Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavCustom;