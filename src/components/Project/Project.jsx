import "./project.scss";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import eCommerce from "../../assets/eCommerce.png"
import portfolio from "../../assets/portfolio.png"
import todo from "../../assets/todo.png"
import crypto from "../../assets/crypto.png"

function Project() {
  const projects = [
    {
      title: "E-Commerce Website",
      img: eCommerce,
      
    },
    {
      title: "Portfolio Website",
      img: portfolio,
      
    },
    {
      title: "To-do list ",
      img: todo,
      
    },
    {
      title: "Crypto-Price Tracker ",
      img: crypto,
      
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h1 className="section-title text-center">FEATURED    WORK</h1>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} sm={6} xs={12} key={index} className="mb-4">
              <Card className="project-card">
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                 
                  <Button
                    variant="primary"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Project;
