import "./hero.scss";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../Projects/Projects";
import Skill from "../Skill/Skill";
import About from "../AboutMe/AboutMe";
import riyaa from "../../assets/riyaa.jpeg";
import ContactMe from "../ContactMe/ContactMe";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-subSec">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} className="text-center">
              <img src={riyaa} alt="Riya Fathima" className="hero-img" />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h6>Frontend Developer & Designer</h6>
              <h1>RIYA FATHIMA </h1>
            </Col>
            <Col className="para-text">
              <p>
                I create beautiful, responsive, and user-friendly websites using
                modern technologies like React, JavaScript, and Bootstrap.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Project />
      <div className="about-sec">
        <About />
        <Skill />
      </div>
      <ContactMe />
    </section>
  );
}

export default Hero;
