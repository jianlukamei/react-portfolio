import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ProjectCard({ project }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card bg-dark text-white custom-card mb-4">
      <img src={project.image} className="card-img custom-img" alt={project.title} />
      <div className="card-img-overlay d-flex flex-column justify-content-between">
        <h3 className="card-title mt-5 pt-5 fw-semibold">
          {project.title}
          {project.subtitle && (
            <><br /><span className="fs-6 fw-light">{project.subtitle}</span></>
          )}
        </h3>
        <Button variant="primary" onClick={handleShow}>
          Know more
        </Button>
        <Modal show={show} onHide={handleClose} className="modal">
          <Modal.Header closeButton>
            <Modal.Title className="text-primary fw-semibold">
              {project.title}
              {project.subtitle && (
                <span className="text-capitalize small text-dark"> {project.subtitle}</span>
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">{project.description}</Modal.Body>
          <Modal.Footer className="d-flex justify-content-evenly align-items-center">
            <a href={project.liveLink} className="btn btn-primary">
              <i className="fa-solid fa-link"></i> Live link
            </a>
            <a href={project.repoLink} className="btn btn-primary">
              <i className="fa-brands fa-github icon text-light"></i> Git repo
            </a>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ProjectCard;