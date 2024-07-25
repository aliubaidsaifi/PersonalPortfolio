import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";
import jobboard from "../assets/projects/jobboard.png";



const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Task Management App"
              description="A Task Management App using MERN (MongoDB, Express.js, React.js, Node.js) enables users to perform CRUD (Create, Read, Update, Delete) operations on tasks. It allows users to create new tasks with details like title, description, and deadline. Users can view existing tasks, update task details, mark tasks as complete, and delete tasks as needed."
              ghLink="https://github.com/aliubaidsaifi/task_mng_1"
              demoLink="https://64f21f9dcf07490dd486508a--eloquent-biscochitos-23ebb2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Node.js Express.js React.js."
              ghLink="https://github.com/aliubaidsaifi/E-commerce-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Real Time Bidding App"
              description="A Real-Time Bidding (RTB) App using MERN (MongoDB, Express.js, React.js, Node.js) facilitates real-time auctions where advertisers bid for ad impressions. It features user authentication, bid management, real-time updates on bid status, interactive dashboards for monitoring bidding performance, analytics for tracking ad performance. The MERN stack ensures scalability, real-time functionality, and a responsive user interface for effective ad placement management."
              ghLink="https://github.com/aliubaidsaifi/Real-Time-Bidding"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobboard}
              isBlog={false}
              title="Beez Hive"
              description="A Job Board App using MERN (MongoDB, Express.js, React.js, Node.js) facilitates job search and recruitment. It features secure user authentication, job posting and search functionalities, application management, interactive dashboards for job seekers and employers, real-time notifications, analytics for job performance tracking, and optional payment integration. The MERN stack ensures scalability, real-time updates, and a responsive UI for efficient job management and recruitment processes."
              ghLink="https://github.com/aliubaidsaifi/Beezhive"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects