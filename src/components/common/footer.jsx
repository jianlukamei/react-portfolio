import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="bg-black py-5 footer">
      <div className="container pt-3" id="footer">
        <div className="row align-items-center">
          <div className="col-md-4 mb-4 mb-md-0 text-start">
            <div className="p-3">
              <h5 className="text-white fw-semibold Kamei">
                <span className="fs-1 jk">JK</span>amei
              </h5>
              <p className="text-light">
                Passionate about technology and innovation, currently gaining
                hands-on experience as an intern at Liamtra. Eager to explore
                new challenges in web development and software engineering,
                continuously improving my skills to create impactful digital
                solutions.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="p-3 ps-md-5 d-flex flex-column align-items-start text-start align-items-md-start text-md-start">
              <h5 className="fw-bold Contact">Contact Info</h5>
              <ul className="list-unstyled mt-3">
                <li>
                  <a href="#" className="fs-6 text-light text-decoration-none">
                    <i className="fa-solid fa-phone text-primary"></i> +91-7005140593
                  </a>
                </li>
                <li className="my-2">
                  <a href="mailto:jianlu.liangtuang@gmail.com" className="fs-6 text-light text-decoration-none">
                    <i className="fa-solid fa-envelope text-warning"></i> jianlu.liangtuang@gmail.com
                  </a>
                </li>
                <li>
                  <span className="fs-6 text-light">
                    <i className="fa-solid fa-location-dot text-primary"></i> Vasant Kunj, South Delhi
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-start">
            <div className="p-3 d-flex flex-column text-start align-items-md-start align-items-center">
              <h5 className="Social fw-bold">My Social Accounts</h5>
              <ul className="list-unstyled gap-3 d-flex flex-wrap justify-content-center">
                <li className="icon-bg">
                  <a href="/" className="text-white-50 text-decoration-none Social">
                    <i className="fa-brands fa-linkedin-in icon"></i>
                  </a>
                </li>
                <li className="icon-bg">
                  <a href="/" className="text-white-50 text-decoration-none Social">
                    <i className="fa-brands fa-github icon"></i>
                  </a>
                </li>
                <li className="icon-bg">
                  <a href="/" className="text-white-50 text-decoration-none Social">
                    <i className="fa-brands fa-instagram icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="text-primary" />
        <div className="p-3 text-center">
          <p className="text-white-50">
            © 2025. Made by <span className="text-primary">Jianlu Kamei</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;