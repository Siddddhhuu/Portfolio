import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GYM from "../../Assets/Projects/GYM.png";
import url from "../../Assets/Projects/url.png";
import currencyconvertor from "../../Assets/Projects/currencyconvertor.png";
import todolist from "../../Assets/Projects/todolist.png";
import PG from "../../Assets/Projects/PG.png";
import Tictactoe from "../../Assets/Projects/Tictactoe.png";
import Tweet from "../../Assets/Projects/Tweet.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GYM}
              title="Atmanirbhar Instructor-Personal AI GYM Trainer"
              description="Build a website for GYM lovers to Enhance there workout excercise andthis project is build using Python Language and MySQL is used for Database to Collect User Data."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tweet}
              title="Twitlaytics"
              description=""            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={url}
              title="URL Shortner"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PG}
              title="Password Generator"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyconvertor}
              title="Currency Convertor"  
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              title="To Do List"
              description=""
           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tictactoe}
              title="Tic-Tac_Toe"
              description=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
