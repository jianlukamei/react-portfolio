import React from 'react';
import './about.css';


function About() {
  return (
    <div id="about" className="about-section bg-black py-5">
      <div className="container">
        <div className="text-center  pb-3">
          <span className="about fs-2 ">
            About <span className="text-primary">Me</span>
          </span>
        </div>
        <div className="row align-items-center g-0 pt-4">
          <div className="col-md-4 text-center">
            <div>
              <img
                src="/assets/images/kamei.png"
                alt="Profile Picture"
                className="profile-img mb-3"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="about-section pe-5">
              <p className="text-light fw-normal fs-6 px-3">
                Passionate about technology and innovation, currently gaining
                hands-on experience as an intern at Liamtra. Eager to explore
                new challenges in web development and software engineering,
                continuously improving my skills to create impactful digital
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;