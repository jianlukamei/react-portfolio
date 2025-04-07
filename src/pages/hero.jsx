import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div id="home" className="bg-black py-5">
      <div className="container">
        <h1 className="text-white-50 fw-semibold text-center display-6 Frontend">
          Frontend Developer
        </h1>
        <div className="row pt-5 align-items-center hero-section ">
          <div className="col-md-7">
            <div className="text-start p-3">
              <p className="text-light fw-normal fs-6 pt-2 px-3">
                Passionate about technology and innovation, currently gaining
                hands-on experience as an intern at Liangtuang technologies.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <img
                src="/assets/images/hero.jpg"
                alt="hero-img"
                className="w-75 rounded-4 hero-img " 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;