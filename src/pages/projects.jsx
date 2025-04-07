import React from 'react';
import ProjectCard from './ProjectCard';
import  './project.css';

const projects = [
  {
    title: 'Troovely',
    image: '/assets/images/toovely.png',
    description: (
      <>
        <span>Tech stack: HTML, CSS, JavaScript, Bootstrap-5</span>
        <div>
          <span>About:</span>
          <ul>
            <li>Real estate page</li>
            <li>Easier to find for buyers</li>
            <li>Most trustworthy</li>
          </ul>
        </div>
      </>
    ),
    liveLink: 'https://jianlukamei.github.io/troovely_real-estate/',
    repoLink: 'https://github.com/jianlukamei/troovely_real-estate'
  },
  {
    title: 'RCFD',
    subtitle: 'Rongmei Christian Fellowship Delhi',
    image: '/assets/images/pastor.jpg.png',
    description: (
      <>
        <span>Tech stack: HTML, CSS, JavaScript, Bootstrap-5</span>
        <div>
          <span>About:</span>
          <ul>
            <li>Gather and praise God</li>
            <li>Gospel message in Rongmei dialect</li>
            <li>Build of Rongmei Christian fellowship in Christ as one</li>
          </ul>
        </div>
      </>
    ),
    liveLink: 'https://jianlukamei.github.io/rcfd/',
    repoLink: 'https://github.com/jianlukamei/rcfd',
  },
  {
    title: 'Portfolio',
    image: '/assets/images/portfolio.png',
    description: (
      <>
        <span>Tech stack: HTML, CSS, JavaScript, Bootstrap-5</span>
        <div>
          <span>About:</span>
          <ul>
            <li>I am Jianlu Kamei, a passionate front-end developer</li>
            <li>Currently working as an intern in Liangtuang company</li>
          </ul>
        </div>
      </>
    ),
    liveLink: 'https://jkamei323.github.io/my_portfolio/',
    repoLink: 'https://github.com/jianlukamei/react-portfolio'
  }
];

function Projects() {
  return (
    <div id="projects" className="bg-black">
      <div className="container">
        <div className="text-center pt-5 pb-3">
          <span className="text-center fs-2 text-light project">
            My <span className="text-primary">Projects</span>
          </span>
        </div>
        <div className="row px-4">
          {projects.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;