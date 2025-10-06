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
              A passionate{" "}
              <span className="highlight">Frontend Developer & Designer</span>{" "}
              who loves crafting elegant, responsive, and user-friendly web
              experiences. With an eye for design and detail, I enjoy blending
              creativity and technology to bring ideas to life.
            </p>
            <p className="about-text">
              Beyond coding, I find inspiration in colors, visuals, and everyday
              moments — always learning, exploring, and growing through
              creativity.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
