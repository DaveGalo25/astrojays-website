import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Phoenix I",
      year: "2024",
      category: "Competition Rocket",
      description: "Our flagship competition rocket designed for the Spaceport America Cup. Features advanced composite structures, custom propulsion system, and integrated telemetry.",
      specs: {
        length: "8.5 ft",
        diameter: "6 in",
        weight: "45 lbs",
        motor: "Custom N-Class",
        altitude: "10,000 ft"
      },
      achievements: [
        "Spaceport America Cup 2024 Participant",
        "Advanced composite construction",
        "Custom motor development",
        "Integrated flight computer"
      ],
      image: "🚀",
      status: "Completed"
    },
    {
      id: 2,
      name: "Nova II",
      year: "2023",
      category: "Research Rocket",
      description: "Experimental rocket featuring hybrid propulsion technology and deployable payload systems. Designed to test new materials and recovery mechanisms.",
      specs: {
        length: "6.2 ft",
        diameter: "4 in",
        weight: "28 lbs",
        motor: "Hybrid H-Class",
        altitude: "6,500 ft"
      },
      achievements: [
        "Hybrid propulsion system",
        "Deployable payload bay",
        "Advanced recovery system",
        "Material testing platform"
      ],
      image: "🚀",
      status: "Completed"
    },
    {
      id: 3,
      name: "Stellar I",
      year: "2023",
      category: "Educational Rocket",
      description: "Designed as a learning platform for new team members. Features modular design allowing for easy component testing and educational demonstrations.",
      specs: {
        length: "4.8 ft",
        diameter: "3 in",
        weight: "15 lbs",
        motor: "Commercial I-Class",
        altitude: "3,200 ft"
      },
      achievements: [
        "Modular design system",
        "Educational platform",
        "Multiple successful flights",
        "Team training tool"
      ],
      image: "🚀",
      status: "Active"
    },
    {
      id: 4,
      name: "Orion III",
      year: "2024",
      category: "High Performance",
      description: "High-performance rocket designed for maximum altitude and speed. Features advanced aerodynamics and lightweight composite construction.",
      specs: {
        length: "7.1 ft",
        diameter: "5.5 in",
        weight: "32 lbs",
        motor: "Commercial M-Class",
        altitude: "12,500 ft"
      },
      achievements: [
        "Maximum altitude record",
        "Advanced aerodynamics",
        "Lightweight construction",
        "High-speed flight"
      ],
            image: "🚀",
      status: "In Development"
    }
  ];

  const renderProjectCard = (project) => (
    <div key={project.id} className="project-card">
      <div className="project-header">
        <div className="project-info">
          <h3 className="project-name">{project.name}</h3>
          <div className="project-meta">
            <span className="project-year">{project.year}</span>
            <span className="project-category">{project.category}</span>
            <span className={`project-status ${project.status.toLowerCase()}`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <p className="project-description">
          {project.description}
        </p>
        
        <div className="project-bottom">
          <div className="project-specs">
            <h4>Technical Specifications</h4>
            <ul className="specs-list">
              <li className="spec-item">
                <span className="spec-label">Length:</span>
                <span className="spec-value">{project.specs.length}</span>
              </li>
              <li className="spec-item">
                <span className="spec-label">Diameter:</span>
                <span className="spec-value">{project.specs.diameter}</span>
              </li>
              <li className="spec-item">
                <span className="spec-label">Weight:</span>
                <span className="spec-value">{project.specs.weight}</span>
              </li>
              <li className="spec-item">
                <span className="spec-label">Motor:</span>
                <span className="spec-value">{project.specs.motor}</span>
              </li>
              <li className="spec-item">
                <span className="spec-label">Altitude:</span>
                <span className="spec-value">{project.specs.altitude}</span>
              </li>
            </ul>
          </div>
          
          <div className="project-image-container">
            <img 
              src="/01_58_51a_remotesite-2-frame-8.jpg.avif" 
              alt="Rocket launch" 
              className="project-rocket-image"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects">
      <div className="projects-banner-wrapper">
        <img 
          src="/01_58_51a_remotesite-2-frame-8.jpg.avif" 
          alt="Horizontal rocket launch with smoke trail" 
          className="projects-banner"
        />
      </div>
      <div className="projects-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>
            Explore our portfolio of rockets and engineering projects, from educational 
            platforms to competition vehicles pushing the boundaries of collegiate rocketry.
          </p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="projects-intro">
            <h2>Rocket Portfolio</h2>
            <p>
              Each project represents a unique engineering challenge and learning opportunity. 
              From our first educational rockets to our latest competition vehicles, every 
              design incorporates lessons learned and new innovations.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map(renderProjectCard)}
          </div>

          <div className="projects-stats">
            <h2>Project Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Rockets Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Successful Flights</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">12,500</div>
                <div className="stat-label">Max Altitude (ft)</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Competitions</div>
              </div>
            </div>
          </div>

          <div className="future-projects">
            <h2>Future Projects</h2>
            <div className="future-grid">
              <div className="future-card">
                <h3>Mars Mission Simulator</h3>
                <p>
                  Developing a rocket system to simulate Mars landing conditions, 
                  including parachute deployment and autonomous navigation.
                </p>
                <div className="future-timeline">Expected: 2025</div>
              </div>
              <div className="future-card">
                <h3>Reusable Rocket System</h3>
                <p>
                  Designing a rocket with controlled descent and landing capabilities, 
                  inspired by commercial space industry developments.
                </p>
                <div className="future-timeline">Expected: 2025</div>
              </div>
              <div className="future-card">
                <h3>Advanced Propulsion Lab</h3>
                <p>
                  Building a dedicated facility for testing new propulsion technologies 
                  and materials in controlled environments.
                </p>
                <div className="future-timeline">Expected: 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 