import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; 
import cicImage from "../assets/img/cic.jpg";
import hcmusImage from "../assets/img/HCMUS.jpg"
import cnnImage from "../assets/img/CNN.jpg";
import sabImage from "../assets/img/sab.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Orginization = () => {
  const projects = [
    {
      title: "University of Science",
      description:
        "",
      imgUrl: hcmusImage,
    },
    {
      title: "SAB in HCMUS",
      description:
        "",
      imgUrl: sabImage,
    },
    {
      title: "Cơm Nhà Nha",
      description:
        "",
      imgUrl: cnnImage,
    },
  
  ];

  return (
    <section className="project" id="orginization">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Tổ chức</h2>
                  <p>
                    
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                     
                    >
                      <Nav.Item >
                        <Nav.Link eventKey="first"   className="cursor_pointer">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second"  className="cursor_pointer">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"  className="cursor_pointer">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                    
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
