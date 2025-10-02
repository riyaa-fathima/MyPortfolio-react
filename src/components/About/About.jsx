import "./about.scss";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
         
          <Col md={5} sm={12} className="text-center mb-4 mb-md-0">
            <Image src="" roundedCircle fluid className="profile-img" />
          </Col>

         
          <Col md={7} sm={12}>
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              Hi, I'm <span className="highlight">Your Name</span>, a passionate 
              developer who loves building modern, responsive, and user-friendly 
              applications. With a strong focus on web technologies, I enjoy 
              turning ideas into real-world projects that make an impact.
            </p>
            <p className="about-text">
              When I'm not coding, you can find me exploring new tools, 
              contributing to projects, or learning something new every day.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
