import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            {/* Optional: bisa taruh gambar di sini */}
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <h2 style={{ color: '#0b0c38' }}>Mari Kita bekerja sama <br /> <span style={{ color: '#0b0c38' }}>Gas Gas Gas</span></h2>
                  <h1 style={{ color: '#f3ce3c', fontWeight: 'bold' }}>Kontak Pribadi Lets goo</h1>
                  <div className="contact-info" style={{ marginTop: '30px' }}>
                    <p>📧 martinrizkiwendi@gmail.com</p>
                    <p>🔗 Martin Rizki Wendi Sinurat (LinkedIn)</p>
                    <p>📱 +62 890 123 456 678</p>
                    <p>📸 @martinrws_20 (Instagram)</p>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
