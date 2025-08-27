import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section 
        className="hero hero-bg"
        style={{ background: "url('/IMG_0528.jpeg') center center/cover no-repeat" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content hero-centered">
          <h1 className="hero-title">Astrojays Rocket Team</h1>
          <p className="hero-subtitle">Johns Hopkins University's Premier Student Rocketry Organization</p>
          <p className="hero-description">
            We design, build, and launch high-power rockets at the leading edge of innovation, 
            competing in collegiate rocketry challenges and advancing aerospace engineering education.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Meet the Team</Link>
            <Link to="/projects" className="btn btn-secondary">View Projects</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>25+</h3>
            <p>Active Members</p>
          </div>
          <div className="stat-item">
            <h3>20+</h3>
            <p>Rockets Built</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Competitions</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Hours of Design</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              The Astrojays Rocket Team is a student-run, cross-disciplinary organization at 
              Johns Hopkins University dedicated to advancing aerospace engineering through 
              hands-on experience in rocket design, construction, and launch operations. 
              We emphasize innovation, safety, and educational excellence while competing 
              in national and international rocketry challenges.
            </p>

            <div className="mission-highlights">
              <div className="highlight">
                <h4>Innovation</h4>
                <p>Pushing the boundaries of collegiate rocketry with cutting-edge technology</p>
              </div>
              <div className="highlight">
                <h4>Education</h4>
                <p>Providing hands-on engineering experience beyond the classroom</p>
              </div>
              <div className="highlight">
                <h4>Collaboration</h4>
                <p>Working across disciplines to achieve ambitious engineering goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="achievements">
        <div className="container">
          <h2>Recent Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Competition Success</h3>
              <p>Successfully competed in the 2024 Spaceport America Cup with our latest rocket design</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🔬</div>
              <h3>Technical Innovation</h3>
              <p>Developed advanced propulsion systems and composite structures</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">👥</div>
              <h3>Team Growth</h3>
              <p>Expanded to over 25 active members across multiple engineering disciplines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="team-photo">
        <div className="container">
          <div className="team-photo-content">
            <img src="/DSC_7038.jpg" alt="Astrojays team members with rockets in front of Shriver Hall" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Join Our Mission</h2>
          <p>Support the next generation of aerospace engineers and help us reach new heights</p>
          <Link to="/support" className="btn btn-primary">Support the Team</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 