import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleClose = () => setExpanded(false);
  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className="custom-navbar"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" onClick={handleClose} className="nav-link">
              Home
            </NavLink>
            <a href="/#about" className="nav-link">
              About
            </a>
            <NavLink to="/project" onClick={handleClose} className="nav-link">
              Project
            </NavLink>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
