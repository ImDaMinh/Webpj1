import React from 'react';
import './ProjectPage.css';

function ProjectPage() {
  return (
    <div className="project-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Alonzi</div>
        <ul className="nav-links">
          <li>Features</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
        <button className="map-button">Open map</button>
      </nav>

      {/* Hero section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Where would you like to go ?</h1>
          <div className="search-box">
            <input type="text" placeholder="Search somethings..." />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="features">
        <div className="feature-box">
          <div className="icon">🤖</div>
          <h3>Smart recommendations</h3>
          <p>AI learns your preferences and suggests personalized places tailored just for you</p>
        </div>
        <div className="feature-box">
          <div className="icon">🧠</div>
          <h3>Precise Matching</h3>
          <p>Find exactly what you’re looking for with our advanced matching algorithm</p>
        </div>
        <div className="feature-box">
          <div className="icon">📡</div>
          <h3>Real-Time Updates</h3>
          <p>Stay informed with live wait times, busy hours, and local events</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-col">
          <h4>About Alonzi</h4>
          <p>jasgdhaskdhaskdjasdjkad</p>
          <p>jasgdhaskdhaskdjasdjkad</p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>jasgdhaskdhaskdjasdjkad</p>
          <p>jasgdhaskdhaskdjasdjkad</p>
        </div>
        <div className="footer-col">
          <h4>Else</h4>
        </div>
      </footer>
    </div>
  );
}

export default ProjectPage;
