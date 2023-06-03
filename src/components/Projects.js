import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import cicImage from "../assets/img/cic.jpg";
import uteImg from "../assets/img/UTE.jpg";
import hackyouthImg from "../assets/img/HackYouth.jpg";
import uehImg from "../assets/img/UEH.jpg";
import iebImg from "../assets/img/IEB.jpg";
import uitbImg from "../assets/img/UIT.jpg";
import unKnowAwardImage from "../assets/img/unKnowAward.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Creative Idea Challenge 2022",
      description:
        "Cuộc thi khởi nghiệp sáng tạo thường niên cho sinh viên. Được tổ chức bởi ĐHQG-HCM, Có sự hỗ trợ từ Sở KH&CN TP.HCM và Quỹ Khởi nghiệp ĐHQG-HCM.",
      imgUrl: cicImage,
    },
    {
      title: "UTE Hackathon 2023",
      description: "Hackathon HCMUTE Mở Rộng 2023 là cuộc thi học thuật sôi động và hấp dẫn dành cho sinh viên IT và các ngành khác tại Tp.HCM, diễn ra tại UTE ",
      imgUrl: uteImg,
    },
    {
      title: "HackYouth 2023",
      description: "HackYouth - Hackathon đầu tiên của UpYouth là một sự kiện kéo dài 2 ngày, được tạo ra với các nguồn lực tốt nhất để các doanh nhân tài năng tạo ra các giải pháp thực tế cho các vấn đề xã hội thực tế. Chúng tôi chào đón thanh thiếu niên từ khắp nơi tại Việt Nam, với cả lĩnh vực công nghệ và kinh doanh",
      imgUrl: hackyouthImg,
    },
    {
      title: "UEH Biztech Hackathon 2022",
      description: "Là cuộc thi business và hackathon dành cho sinh viên tại Trường Đại học UEH. Cuộc thi tìm kiếm giải pháp công nghệ sáng tạo cho các vấn đề cuộc sống với chủ đề năm nay là \"Giải pháp số cho biến đổi khí hậu\".",
      imgUrl: uehImg,
    },
    {
      title: "IEB (Impact Entrepreneurship Bootcamp)",
      description: "chương trình do tổ chức Lead The Change phối hợp với công ty PNJ tổ chức. Chương trình được thiết kế với các hội thảo chuyên sâu, cuộc thi và 4 vòng thử thách. Sau IEB, các thí sinh sẽ có nền tảng trở thành những nhà lãnh đạo tương lai với kỹ năng khởi nghiệp, chuyên môn và kinh nghiệm.",
      imgUrl: iebImg,
    },
    {
      title: "Game UIT Hackathon 2022",
      description: "Là cuộc thi lập trình Game và Ứng dụng trong 24 giờ, tổ chức bởi khoa Công nghệ Phần mềm - Đại học Công nghệ Thông tin, ĐHQG-TPHCM. Cuộc thi thu hút sự tham gia của các bạn học sinh, học viên và sinh viên yêu thích công nghệ trên toàn quốc.",
      imgUrl: uitbImg,
    },
    
    {
      title: "Thanh niên tiên tiến lĩnh vực học tâp - Sáng tạo - Nghiên cứu khoa học",
      description: "",
      imgUrl: unKnowAwardImage,
    },
  ];

  return (
    <section className="project" id="projects">
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
                  <h2>Giải thưởng & Vinh danh</h2>
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
                          {projects.slice(6).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
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
