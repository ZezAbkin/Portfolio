import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import venueguard from "../../Assets/Projects/VenueGuard.png";
import vit from "../../Assets/Projects/ViT.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={venueguard}
              isBlog={false}
              title="VenueGuard"
              description="VenueGuard is an application for security guards that aids them in keeping the venue smoke free. It detects and saves clips of people smoking cigarettes in realtime, showing a coloured box around the cigarette. This was achieved through computer vision, particulary the YOLOv8 model. I worked in a team of 6, where I was solely in charge of training and testing the YOLOv8 model."
              ghLink="https://github.com/mrlijing/DECO3801_GUI"
              demoLink="https://youtu.be/u-pCH6FVSjg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vit}
              isBlog={false}
              title="Alzhiemers ViT Classifier"
              description="This is an application which uses a Vision Transformer (ViT) trained on the ADNI dataset to classify brains with alzheimers. The ViT architecture was built by analysing the article: https://arxiv.org/abs/2010.11929. I used a university supercomputer to train this model and was a contribution to an open source project. More information is provided in the readme file on github."
              ghLink="https://github.com/shakes76/PatternAnalysis-2023/tree/topic-recognition/recognition/alzheimer-transformer"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
