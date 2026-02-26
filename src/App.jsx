import React, { useState } from 'react';
import './App.css';
import Profilecard from './components/Profilecard'; // Fixed path (removed space)

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [showProfileCard, setShowProfileCard] = useState(false);

  return (
    <div className="portfolio-container">
      {/* Header with Profile - Now using your Profilecard */}
      <header className="header">
        <Profilecard /> {/* This replaces the profile-section div */}
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

      {/* Content Section - Keep as is */}
      <div className="content-section">
        {activeTab === 'about' && (
          <div className="about-card">
            <h2>About Me</h2>
            <p>
              Hello! I'm Russel, a student passionate of Science, new technology.very curious,I have an account on LinkedIn were you can find and follow me in my journey in
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

        {/* Rest of your tabs remain the same... */}
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
        <button 
          className="social-btn portfolio"
          onClick={() => {
            setShowProfileCard(!showProfileCard);
            // Scroll to profile card
            const element = document.querySelector('.Profile-card-container');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Portfolio
        </button>
      </div>

      {/* Optional: Show profile card conditionally */}
      {showProfileCard && (
        <div className="profile-card-popup">
          <Profilecard />
        </div>
      )}
    </div>
  );
}

export default App;