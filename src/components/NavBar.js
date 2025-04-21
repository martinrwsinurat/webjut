import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/martin.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg'; // Instagram icon
import navIcon2 from '../assets/img/nav-icon2.svg'; // LinkedIn icon
import navIcon3 from '../assets/img/nav-icon3.svg'; // GitHub icon
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
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
              <a href="https://www.instagram.com/martinrws_20?igsh=MWc4ODNtN2RuYTRxcA==" target="_blank" rel="noopener noreferrer">
                <button className="vvd"><span>Kamu Tertarik</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
