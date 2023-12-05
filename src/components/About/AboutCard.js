import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, I am <span className="purple">Henry Abkin </span>
            from <span className="purple"> Brisbane, Australia.</span>
            <br />
            I have just graduated with a Bachelor of Computer Science majoring in Machine Learning from the Universiy of Queensland (UQ).
            <br />
            I am currently looking for an internship or other opportunities within the fields of machine learning and data science.
            <br />
            <br />
            Apart from coding, I also enjoy...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing and composing music
            </li>
            <li className="about-activity">
              <ImPointRight /> Bartending
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
