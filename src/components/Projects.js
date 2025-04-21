import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Cl.png";
import projImg2 from "../assets/img/aman.png";
import projImg3 from "../assets/img/joki.jpg";
import projImg4 from "../assets/img/air.jpg";
import projImg5 from "../assets/img/toko.png";
import projImg6 from "../assets/img/toko2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Slider from "react-slick";

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  // 📌 List Keterangan Projek
  const projectDescriptions = [
    "Celengan Pintar merupakan projek Algoritma Lanjut yang dibuat dalam kurun waktu 3-4 minggu",
    "Projek kedua yaitu Sistem Pengamanan yang dibuat dalam kurun waktu 1 bulan untuk memenuhi Algoritma Lanjut",
    "Water Level merupakan projek IoT dengan pengerjaan 1 bulan",
    "Projek Pemrograman Basis Data membuat sebuah toko dengan memadukan database agar dapat melakukan transaksi di Depli7, lama pengerjaan 2 minggu",
    "Projek Joki Game dengan kurun waktu pengerjaan 2 bulan"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Dokumentasi Projek Di Perkuliahan</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Dokumentasi</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projek</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Keterangan</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      {/* Tab Grid */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>

                      {/* Tab Carousel */}
                      <Tab.Pane eventKey="second">
                        <Slider {...settings}>
                          {
                            projects.map((project, index) => (
                              <div key={index}>
                                <ProjectCard {...project} />
                              </div>
                            ))
                          }
                        </Slider>
                      </Tab.Pane>

                      {/* Tab List Keterangan */}
                      <Tab.Pane eventKey="third">
                        <ul>
                          {
                            projectDescriptions.map((desc, index) => (
                              <li key={index}>{desc}</li>
                            ))
                          }
                        </ul>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
