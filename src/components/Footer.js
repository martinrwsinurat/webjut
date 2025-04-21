import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm"; // props (pemanggilan komponen child: MailchimpForm)
import logo from "../assets/img/martin.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg"; // Instagram icon
import navIcon2 from "../assets/img/nav-icon2.svg"; // LinkedIn icon
import navIcon3 from "../assets/img/nav-icon3.svg"; // GitHub icon

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                            <a href="https://www.instagram.com/martinrws_20?igsh=MWc4ODNtN2RuYTRxcA==" target="_blank" rel="noopener noreferrer">
                              <img src={navIcon1} alt="Instagram" />
                            </a>
                            <a href="https://id.linkedin.com/in/martin-rizki-wendi-55443a234" target="_blank" rel="noopener noreferrer">
                              <img src={navIcon2} alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/martinrwsinurat" target="_blank" rel="noopener noreferrer">
                              <img src={navIcon3} alt="GitHub" />
                            </a>
                          </div>
            <p>© 2024 Martin Rizki Wendi Sinurat</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
