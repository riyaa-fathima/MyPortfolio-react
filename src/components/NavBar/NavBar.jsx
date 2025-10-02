import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Nav className="ms-auto">
          <NavLink to="/"  className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/project" className="nav-link">
            Project
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
