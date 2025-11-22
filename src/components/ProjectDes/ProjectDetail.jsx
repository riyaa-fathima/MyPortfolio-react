import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./projectDetail.scss";
import { FaGithub } from "react-icons/fa";
import eCommerce from "../../assets/eCommerce.png";
import portfolio from "../../assets/portfolio.png";
import ecommerceImg from "../../assets/ecommerceImg.jpeg"
import crypto from "../../assets/crypto.png";
import { Col, Row } from "react-bootstrap";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData = {
    ecommerce: {
      title: "E-Commerce Website",
      description:
        "A full-featured e-commerce web app with product pages, cart, checkout, and admin panel built using React, Node.js, and MongoDB.",
      overview:
        "A fully functional e-commerce web app where users can browse products, add them to cart, and place orders.",
      research:
        "The goal was to create a responsive, user-friendly shopping platform. I studied various UI patterns and checkout flows used by popular sites like Amazon and Flipkart.",
      design:
        "Built with React, Bootstrap, and Node.js. Implemented REST APIs for cart management and used MongoDB for product storage.",
      github: "https://github.com/riyaa-fathima/react-eCommerce",
      image: eCommerce,
    },
    portfolio: {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing my work, skills, and achievements using React and modern UI design.",
      overview:
        "A modern personal portfolio showcasing my projects, skills, and experience.",
      research:
        "Inspired by minimal and modern UI designs. The focus was to maintain readability and visual appeal.",
      design:
        "Developed with React and Bootstrap, following responsive design principles.",
      github: "https://github.com/riyaa-fathima/reactPortfolio",
      image: portfolio,
    },
    fEcommerce: {
  title: "Full Stack MERN E-Commerce Platform",
  description:
    "A production-ready e-commerce web application with JWT authentication, protected routes, admin dashboard, cart system, and order management.",
  overview:
    "Users can register, log in, browse products, and manage their cart and orders. Admins can perform full CRUD operations on products and users through a secure dashboard.",
  research:
    "Focused on handling real-world MERN stack challenges such as data modeling, authentication, session handling, and API security. Implemented REST APIs with Express and integrated MongoDB for structured data management.",
  design:
    "Frontend built with React and Bootstrap/Tailwind. Backend handled using Node.js, Express, and MongoDB with JWT-based authentication and middleware validation for protected routes.",
  github: "https://github.com/riyaa-fathima/YOUR_REPO",
  image: ecommerceImg,
},

    crypto: {
      title: "Crypto Price Tracker",
      description:
        "Tracks real-time cryptocurrency prices using public APIs with chart visualizations and live updates.",
      overview:
        "The Crypto Price Tracker is a real-time web application that helps users track the latest cryptocurrency prices and trends in an elegant, user-friendly interface.",
      research:
        "With the rapid growth of cryptocurrencies, many users struggle to find reliable and updated market data in one place. I built this project to understand how APIs like CoinGecko and CoinMarketCap provide real-time data and to practice integrating APIs with React for live updates.",
      design:
        "The design is clean and minimalistic, with a focus on usability. I used React for dynamic rendering and API handling, Bootstrap for layout and responsiveness, and Axios for fetching live crypto prices. The UI displays live coin names, symbols, prices, and percentage changes, making it ideal for monitoring crypto trends.",
      stack: "React.js, Axios, Bootstrap, CoinGecko API",
      github: "https://github.com/riyaa-fathima/redux-crypto",
      image: crypto,
    },
  };

  const project = projectData[id];

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-detail">
      <div className="detail-container">
        <div className="info-section">
          <h1 className="text-center">{project.title}</h1>
          <p className="desc text-center">{project.description}</p>
          <div className="image-section">
            <img src={project.image} alt={project.title} />
          </div>
          <Row className="info-block">
            <Col>
              <h3>Overview</h3>
            </Col>
            <Col>
              <p>{project.overview}</p>
            </Col>
          </Row>
          <Row className="info-block">
            <Col>
              <h3>Research</h3>
            </Col>
            <Col>
              <p>{project.research}</p>
            </Col>
          </Row>
          <Row className="info-block">
            <Col>
              <h3>Design & Development</h3>
            </Col>
            <Col>
              <p>{project.design}</p>
            </Col>
          </Row>

          <div className="buttons">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-btn"
            >
             <FaGithub />
            </a>
            <button
              onClick={() => navigate("/project")}
              className="btn back-btn"
            >
              View More Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
