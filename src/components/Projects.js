// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* Example project */}
        <div className="project">
          <h3>Project Title</h3>
          <p>Description of the project.</p>
          <a href="[Project-Link]" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
};

export default Projects;
