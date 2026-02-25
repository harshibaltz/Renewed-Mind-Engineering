
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="portfolio-container">
      {/* Header with Profile */}
      <header className="header">
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src="../public/IMG_20251225_115023_968@1642939910.jpg" 
              alt="Profile" 
              className="profile-image"
              title = "View my About"
            />
            <div className="online-indicator"></div>
          </div>
          <h1 className="name">Russel Valdez</h1>
          <p className="title">I am a student from the university of Buea, at the faculty of Engineering and Technology i am a curious student like to discover new things when ever i have the possibility right now am studying modeling,software skills, like frontend development.</p>
        </div>
      </header>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button 
          className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          <span>👤</span> About
        </button>
        <button 
          className={`nav-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          <span>💻</span> Skills
        </button>
        <button 
          className={`nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <span>🚀</span> Projects
        </button>
        <button 
          className={`nav-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          <span>📧</span> Contact
        </button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {activeTab === 'about' && (
          <div className="about-card">
            <h2>About Me</h2>
            <p>
              Hello! I'm Russel, a stundent passionate  of Science, new technology.very curious,I have an account on LinkedIn were you can find and follow me in my journey in
              web applications,3D modeling and many more.
            </p>
            <div className="info-grid">
              <div className="info-item">
                <strong>📍 Location:</strong> Buea, Malingo
              </div>
              <div className="info-item">
                <strong>💼 Experience:</strong> 1 Years
              </div>
              <div className="info-item">
                <strong>🎓 Education:</strong> Computer Engineering
              </div>
              <div className="info-item">
                <strong>🌐 Languages:</strong> English, Italic
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-card">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript/ES6</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Git/GitHub</li>
                  <li>VS Code</li>
                  <li>Docker</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="projects-card">
            <h2>My Projects</h2>
            <div className="projects-grid">
              <div className="project-item">
                <h3>Waste Management System</h3>
                <p>Plastic-Waste-Management-System full stack web app</p>
                <button className="project-btn">View Project →</button>
              </div>
              <div className="project-item">
                <h3>Personal Portfolio</h3>
                <p>A simple Frontend application describing my skills...</p>
                <button className="project-btn">View Project →</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="contact-card">
            <h2>Get in Touch</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:stormemrv@gmail.com">stormemrv@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+237691013165">+237 691 013 165</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="#">LinkedIn</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🐱</span>
                <a href="#">GitHub</a>
              </div>
            </div>
            
            {/* Contact Form */}
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        )}
      </div>

      {/* Social Buttons */}
      <div className="social-buttons">
        <button className="social-btn github">GitHub</button>
        <button className="social-btn linkedin">LinkedIn</button>
        <button className="social-btn twitter">Twitter</button>
        <button className="social-btn portfolio">Portfolio</button>
      </div>
    </div>
  );
}

export default App;
