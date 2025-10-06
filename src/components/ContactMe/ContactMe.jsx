import React from "react";
import "./contactMe.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactMe() {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-links">
          <Row>
            <Col>
              <a
                href="mailto:yourmail@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail className="icon" />
                riyafathima9889@gmail.com
              </a>
            </Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/riya-fathima-ab8384367/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
                LinkedIn
              </a>
            </Col>
            <Col>
              <a
                href="https://www.instagram.com/riaaahh.h/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
                Instagram
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default ContactMe;
