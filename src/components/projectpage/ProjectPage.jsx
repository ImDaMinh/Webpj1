import React, { useEffect } from 'react';
import './ProjectPage.css';

function ProjectPage() {
  useEffect(() => {
    const animate = () => {
      const letters = document.querySelectorAll(".bounce-char");

      letters.forEach((el, i) => {
        el.style.animation = "none";
        el.offsetHeight; // force reflow
        el.style.animation = `bounce-char 0.6s ease`;
        el.style.animationDelay = `${i * 0.1}s`;
      });
    };

    animate(); // chạy lần đầu khi load

    const interval = setInterval(() => {
      animate(); // chạy lại mỗi 4s
    }, 5000); // 👈 chỉnh tại đây: chạy lại mỗi 4 giây

    return () => clearInterval(interval);
  }, []);


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
          <h1 className="hero-title">
            { "Where would you like to go ?".split("").map((char, i) => (
              <span
                key={i}
                className={`bounce-char${char === " " ? " space-char" : ""}`}
                style={{ "--i": i }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}

          </h1>
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
          <p>Alonzi is a platform that helps you discover exciting places in Paris.  </p>
          <p>We combine an interactive map, AI recommendations, and real-time updates.</p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: alonzi.paris@gmail.com  </p>
          <p>Discord: @alonzi_support  </p>
          <p>Address: 123 Rue de Paris, France</p>
        </div>
        <div className="footer-col">
          <h4>Else</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Help Center</p>
        </div>
      </footer>
    </div>
  );
}

export default ProjectPage;
