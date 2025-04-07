import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

function Navbar() {
  return (
    <header className="bg-black">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-semibold" href="#">
            <span className="fs-1 jk">JK</span> <span className='navbar-brand'> amei</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-pills ms-auto">
              <li className="nav-item">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link fs-6"
                  activeClass="active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link fs-6"
                  activeClass="active"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link fs-6"
                  activeClass="active"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link fs-6"
                  activeClass="active"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item liresume">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  href="/assets/Jianlu_CV.pdf"
                className="btn Resume px-4"
                target="_blank"
                download>
                 <i className="fa-regular fa-file-pdf text-danger"></i> Resume
                </Link>
              </li>
            </ul>
        
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;