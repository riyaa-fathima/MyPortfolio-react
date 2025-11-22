import "./hero.scss";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../Projects/Projects";
import Skill from "../Skill/Skill";
import About from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import riyaa from "../../assets/riyaa.jpeg";

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
              <h6>Full Stack MERN Developer</h6>
              <h1>RIYA FATHIMA</h1>
            </Col>
            <Col className="para-text">
              <p>
                I build complete web applications — from designing clean UIs to
                developing robust backend APIs with Node.js, Express, and
                MongoDB. My focus is on performance, scalability, and real-world
                problem solving using modern web technologies.
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
