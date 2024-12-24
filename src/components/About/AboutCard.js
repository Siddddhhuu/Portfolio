import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhesh Jadhav </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently employed as a Jr. Software Developer at IndSoft.
            <br />
            I have completed B.Tech in Computer Engineering at Viva Institute of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity"> 
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do some great things, to get something great things!"{" "}
          </p>
          <footer className="blockquote-footer">Siddhesh Jadhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
