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
              description="Build a website to analyze the tweets of user or company to know the sentiment ofthe tweet whether it is Positive, Negative or Neutral. Using Twitter Developer account and Python Language"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={url}
              title="Yourls"
              description="Which stands for Your Own URL Shortener, is a GUI-based project. This URL shortener isdesigned to transform lengthy links into shorter ones for easier comprehension. The project isimplemented in Python."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PG}
              title="Random Password Generator"
              description="A GUI-Based Project that Provides Users with Random Passwords.Java language is used to build this Project."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyconvertor}
              title="Currency Convertor"  
              description="This project simplifies currency conversion by allowing users to convert local amounts to international currencies with just a few clicks. It fetches the latest exchange rates using a public API and leverages the requests library for API interaction. The GUI is built using the tkinter library with components like buttons, labels, and textboxes."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              title="To Do List"
              description="This Todo List app, built with React, allows users to easily manage tasks by adding, editing, and deleting items. It features a clean, user-friendly interface and dynamically updates the task list, offering a seamless experience for organizing daily activities and staying on top of priorities."
           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tictactoe}
              title="Tic-Tac_Toe"
              description="This Tic-Tac-Toe game, built with React, offers a simple and interactive way to play the classic game. It features a responsive grid, player turn tracking, and a win condition check, providing an engaging user experience. The app is fully functional with state management handled using React hooks."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
