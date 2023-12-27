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
            <br />
            Having recently graduated with a Bachelor of Computer Science majoring in Machine Learning at the University of Queensland, I am an enspired machine learning engineer eager to gain hands-on experience in the industry. I am actively seeking an internship or graduate program in machine learning, artificial intelligence, or data science to gain vital real world skills.
            <br />
            <br />
            Throughout my academic journey, I have gained experience in various data science projects, honing my skills in Python, R, SQL, and data visualization tools such as Tableau. Additionally, I have developed proficiency in machine learning frameworks like TensorFlow and PyTorch. Driven by a passion for data science and machine learning, I am a quick learner and possess a strong aptitude for creative problem-solving.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
