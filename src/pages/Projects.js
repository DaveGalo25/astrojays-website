import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Stellaris",
      year: "2025",
      category: "Competition Rocket",
      description: "Our most recent project Stellaris took us to new speeds and heights. Stellaris was a 4\" diameter, 9ft tall, 40lb rocket powered by our Prometheus solid rocket engine. Stellaris was 99% student engineered, with the team manufacturing nearly all aerostructures and avionic systems in-house. We launched Stellaris in the Mojave Desert at the 2025 FAR 51025 Unlimited Competition where it reached a maximum speed of Mach 1.2, reached an altitude of 17943ft, and pulled over 20g's at Max-Q. Using aerodynamic simulations, we predicted an apogee of 18,000 ft, placing us 2nd in the competition.",
      specs: {
        length: "9 ft",
        diameter: "4 in",
        weight: "47 lbs",
        motor: "PN-02 (M2500)",
        altitude: "18,000 ft",
        maxSpeed: "Mach 1.1 (770mph)",
        maxAcceleration: "20g"
      },
      achievements: [
        "2nd Place at FAR 51025 Competition",
        "99% student engineered",
        "Reached Mach 1.2 speed",
        "Altitude of 17,943 ft",
        "Custom Prometheus motor"
      ],
      image: "/IMG_0251.jpeg",
      status: "Completed"
    },
    {
      id: 2,
      name: "IREC '26 Rocket",
      year: "2026",
      category: "Competition Rocket",
      description: "Our rocket project for 2026 is an exciting one! We plan on attending the International Rocket Engineering Competition next summer in Texas. The currently untitled rocket is currently still in the design phase, but is projected to reach speeds exceeding Mach 2, and a target altitude of 30,000ft, which is the cruising altitude for most airliners!",
      specs: {
        length: "14 ft",
        diameter: "6 in",
        weight: "~100 lbs",
        motor: "O6000 (Predicted)",
        altitude: "30,000 ft (Projected)",
        maxSpeed: "Mach 1.8 (1330mph)",
        maxAcceleration: "20g"
      },
      achievements: [
        "IREC 2026 Competition Entry",
        "Target altitude of 30,000 ft",
        "Projected Mach 2+ speeds",
        "Largest rocket ever built",
        "Advanced propulsion system"
      ],
      image: "/9A944662-AD85-4E37-8D80-C6F616CF1912_4_5005_c.jpeg",
      status: "In Development"
    },
    {
      id: 3,
      name: "Baja Blast",
      year: "2023",
      category: "Two-Stage Rocket",
      description: "Baja Blast was our first attempt at a two-stage rocket. Implementing extremely complex avionics systems to control stage separation was the highlight of this vehicle. We designed custom PCBs using Kalman Filtering to accurately determine the orientation, velocity, and acceleration of the rocket to control the stage separation event.",
      specs: {
        length: "12 ft",
        diameter: "4 in",
        weight: "~50 lbs",
        motor: "K1200 and K375",
        altitude: "10,000 ft (Predicted)",
        maxSpeed: "Mach 0.8",
        maxAcceleration: "8g"
      },
      achievements: [
        "First two-stage rocket",
        "Custom avionics system",
        "Kalman Filter implementation",
        "Complex stage separation",
        "Advanced PCB design"
      ],
      image: "/baja-blast-rocket.png",
      status: "Completed"
    },
    {
      id: 4,
      name: "Strugglebus",
      year: "2022",
      category: "Competition Rocket",
      description: "Strugglebus was our first ever competition rocket, launching at the Mojave Desert FAR Launch Site in 2022. Powered by an Aerotech L1000 solid rocket motor, Strugglebus reached an altitude of 10,000ft, and a speed of Mach 0.8, setting a club record at the time and placing second at the FAR Unlimited Competition.",
      specs: {
        length: "9 ft",
        diameter: "3 in",
        weight: "~30 lbs",
        motor: "L1000",
        altitude: "10,000 ft",
        maxSpeed: "Mach 0.8",
        maxAcceleration: "10g"
      },
      achievements: [
        "2nd Place at FAR Competition",
        "First competition rocket",
        "Club altitude record",
        "Commercial motor success",
        "Foundation for future rockets"
      ],
      image: "/8F93DD8F-229D-455D-9A2F-3B01853F254F.png",
      status: "Completed"
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
              {project.specs.maxSpeed && (
                <li className="spec-item">
                  <span className="spec-label">Max Speed:</span>
                  <span className="spec-value">{project.specs.maxSpeed}</span>
                </li>
              )}
              {project.specs.maxAcceleration && (
                <li className="spec-item">
                  <span className="spec-label">Max Acceleration:</span>
                  <span className="spec-value">{project.specs.maxAcceleration}</span>
                </li>
              )}
            </ul>
          </div>
          
          <div className="project-image-container">
            {project.image && project.image.startsWith('/') ? (
              <img 
                src={project.image} 
                alt={`${project.name} rocket`} 
                className="project-rocket-image"
              />
            ) : (
              <div className="project-emoji">{project.image}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects">

      <div className="projects-hero">
        <div className="container">
          <h1>Our Rockets</h1>
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
              Each rocket represents a unique engineering challenge and learning opportunity. 
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
                <div className="stat-number">3</div>
                <div className="stat-label">Competitions</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">18,000</div>
                <div className="stat-label">Max Altitude (ft)</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Mach 1.1</div>
                <div className="stat-label">Max Speed</div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Projects; 