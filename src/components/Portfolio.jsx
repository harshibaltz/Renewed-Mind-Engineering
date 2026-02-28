import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Waste Management System</h3>
          <p>Full-stack web app for plastic waste management.</p>
          <button>View Project</button>
        </div>
        <div className="project-card">
          <h3>Personal Portfolio</h3>
          <p>This very website built with React!</p>
          <button>View Project</button>
        </div>
        <div className="project-card">
          <h3>3D Modeling Showcase</h3>
          <p>A collection of my 3D work.</p>
          <button>View Project</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;