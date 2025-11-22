import "./about.scss";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import about from "../../assets/about.jpeg";

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={5} sm={12} className="text-center mb-4 mb-md-0">
            <Image src={about} className="profile-img" />
          </Col>

          <Col md={7} sm={12}>
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              A dedicated{" "}
              <span className="highlight">Full Stack MERN Developer</span> who
              builds scalable, efficient, and user-centric web applications. I
              enjoy working across the entire development cycle — from designing
              clean UIs to building powerful backend logic and managing
              databases.
            </p>
            <p className="about-text">
              I focus on writing clean, maintainable code and solving real-world
              problems with practical solutions. Every project is a chance to
              optimize performance, improve user experience, and learn something
              new.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
