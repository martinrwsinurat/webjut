import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/potoku3.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);  //state dan props
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  //state
  const [index, setIndex] = useState(1);
  const toRotate = [ "Mahasiswa", "Informatika", "2023" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])
//state
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              //kondisional ren
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> 
                <span className="tagline">Selamat Datang</span>
                <h1>{`Martin Rizki wendi Sinurat`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "", "", "" ]'><span className="wrap">{text}</span></span></h1>
                  <p> saya merupakan salah satu mahasiswa di institut teknologi nasional bandung saya harap dapat menjadi orang yang memahami setiap pembelajaran yang didapat supaya dapat mempratekkan ilmu di pekerjaan dan berbagi ilmu terhadap orang lain juga serta juga katif mengikuti organisasi,sekian perkenalan dari diriku.  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
