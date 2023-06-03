import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; 
import cicImage from "../assets/img/cic.jpg";
import hcmusImage from "../assets/img/HCMUS.jpg"
import cnnImage from "../assets/img/CNN.jpg";
import sabImage from "../assets/img/sab.png";
import travelImage1 from "../assets/img/travel/1.jpg"
import travelImage2 from "../assets/img/travel/2.jpg"
import travelImage3 from "../assets/img/travel/3.jpg"
import travelImage4 from "../assets/img/travel/4.jpg"
import travelImage5 from "../assets/img/travel/5.jpg"
import travelImage6 from "../assets/img/travel/6.jpg"
import travelImage7 from "../assets/img/travel/7.jpg"
import travelImage8 from "../assets/img/travel/8.jpg"
import travelImage9 from "../assets/img/travel/9.jpg"
import travelImage10 from "../assets/img/travel/10.jpg"
import travelImage11 from "../assets/img/travel/11.jpeg"
import travelImage12 from "../assets/img/travel/12.jpg"
import travelImage13 from "../assets/img/travel/13.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Travel = () => {
  const projects = [
    {
      title: "Đà Lạt-Cơm Nhà Nha",
      description:
        "",
      imgUrl: travelImage11,
    },
    {
      title: "Hà Nội - Diễn đàn đầu tư",
      description:
        "",
      imgUrl: travelImage3,
    },
    
    {
      title: "Bạc Liêu",
      description:
        "",
      imgUrl: travelImage13,
    },
    {
      title: "Đà Lạt - Cùng Vân Mây",
      description:
        "",
      imgUrl: travelImage12,
    },
    {
      title: "Cần Giờ",
      description:
        "",
      imgUrl: travelImage1,
    },
    {
      title: "Vũng Tàu",
      description:
        "",
      imgUrl: travelImage6,
    },
    {
      title: "Hà Nội - Hackyouth",
      description:
        "",
      imgUrl: travelImage9,
    },
    {
      title: "Đà Lạt - 20CLC6",
      description:
        "",
      imgUrl: travelImage2,
    },
 
    {
      title: "Đồng Nai - Hội trại ban cán sự",
      description:
        "",
      imgUrl: travelImage4,
    },
    
    {
      title: "Vũng Tàu - 20CLC6",
      description:
        "",
      imgUrl: travelImage5,
    },
   
    {
      title: "Đồng Nai - CIC",
      description:
        "",
      imgUrl: travelImage8,
    },
  
    {
      title: "Hồ Dầu Tiến",
      description:
        "",
      imgUrl: travelImage10,
    },  
 
  
  ];

  return (
    <section className="project" id="travel">
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
                  <h2>Đâu đó</h2>
                  <p>
                    
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
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
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0,6).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(6,12).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {projects.slice(12).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
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
