import "./skill.scss";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import { Code, Database, Globe, Smartphone } from "lucide-react"; // example icons

function Skill() {
  const skills = [
    {
      title: "Frontend Development",
      desc: "HTML, CSS, JavaScript, React, Bootstrap",
    },
    { title: "Backend Development", desc: "Node.js, Express, MongoDB" },
    { title: "Programming Languages", desc: "Java, Python, C++" },
    {
      title: "Responsive Design",
      desc: "Cross-device and cross-browser compatibility",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <Row>
          {/* Left side title */}
          <Col md={4} sm={12} className="mb-4">
            <h1 className="section-title">SKILLS</h1>
          </Col>

          {/* Right side cards */}
          <Col md={8} sm={12}>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className={`skill-card color-${index % 4}`} key={index}>
                  <div className="icon">{skill.icon}</div>
                  <div>
                    <h3>{skill.title}</h3>
                    <p>{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skill;
