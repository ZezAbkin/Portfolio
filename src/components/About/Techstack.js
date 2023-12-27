import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiJava,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiRor,
  DiMysql,
} from "react-icons/di";
import {
  SiTableau,
  SiR,
  SiMicrosoftazure,
  SiPytorch,
  SiTensorflow,
  SiLinux,
  SiVisualstudiocode,
  SiGnubash,
  SiGithub,
  SiNumpy,
  SiPandas
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Python
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Java
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            MySQL
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiR/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            R Language
          </p>
        </blockquote>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Git
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Azure
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTableau/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Tableau
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Pytorch
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Tensorflow
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            NumPy
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPandas/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Pandas
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Linux
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Bash
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            VS Code
          </p>
        </blockquote>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            GitHub
          </p>
        </blockquote>
      </Col>

    </Row>
  );
}

export default Techstack;
