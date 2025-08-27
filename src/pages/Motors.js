import React from 'react';
import './Motors.css';

const Motors = () => {
  const motors = [
    {
      id: 1,
      name: "Prometheus PN-02",
      year: "2025",
      category: "Solid Propulsion",
      description: "A development of PN-01, Prometheus version 2 corrects the issues identified while testing PN-01. PN-02 uses the same casing and bulkhead design as the first version, featuring a widened nozzle throat and 6 grains of APCP propellant to limit internal chamber pressure to 400psi. PN-02 was successfully built and fired twice. Once as a static-fire test, and once as the propulsion system for the Stellaris rocket.",
      specs: {
        weight: "26 lbs",
        motorClass: "M2500",
        propellant: "Ammonium Perchlorate Composite Propellant",
        chamberPressure: "400 psi",
        nozzleThroat: "Widened design"
      },
      achievements: [
        "Successfully powered Stellaris",
        "Corrected PN-01 issues",
        "Two successful firings",
        "Competition success"
      ],
      image: "/51E1F4EE-7BE4-4673-8376-DFDA6E68AF36_4_5005_c.jpeg",
      status: "Completed"
    },
    {
      id: 2,
      name: "Prometheus PN-01",
      year: "2024",
      category: "Solid Propulsion",
      description: "Prometheus is our large scale M-Class solid rocket motor. With five 4\" diameter APCP propellant grains, PN-01 was the most ambitious motor we've ever made, weighing 26lbs with an expected 800lbf of thrust, and a chamber pressure of 800psi. Unfortunately PN-01 suffered a casing burst due to an overpressurization failure during a static-fire test.",
      specs: {
        weight: "26 lbs",
        motorClass: "M4000",
        propellant: "Ammonium Perchlorate Composite Propellant",
        thrust: "800 lbf (expected)",
        chamberPressure: "800 psi"
      },
      achievements: [
        "Most ambitious motor design",
        "Five 4\" APCP grains",
        "High thrust design",
        "Learning from failure"
      ],
      image: "/B446C10D-A9A1-462F-8780-B8ED75FABF44_4_5005_c.jpeg",
      status: "Failed"
    },
    {
      id: 3,
      name: "Hybrid BJ-01",
      year: "2019",
      category: "Hybrid Propulsion",
      description: "The first ever rocket motor developed by JHU students, BJ-01 was a Hybrid rocket engine fueled by Nitrous Oxide and Paraffin Wax. It was hot-fired successfully at a JHU APL test site in 2019.",
      specs: {
        weight: "~30 lbs",
        motorClass: "N2000",
        propellant: "NO2 + Paraffin Wax"
      },
      achievements: [
        "First student-developed motor",
        "Successfully hot-fired",
        "Hybrid propulsion system",
        "JHU APL test site validation"
      ],
      image: "/48F2CAC0-2F3B-4B7F-B5EF-E440E3FC02B9_4_5005_c.jpeg",
      status: "Completed"
    }
  ];

  const renderMotorCard = (motor) => (
    <div key={motor.id} className="motor-card">
      <div className="motor-header">
        <div className="motor-info">
          <h3 className="motor-name">{motor.name}</h3>
          <div className="motor-meta">
            <span className="motor-year">{motor.year}</span>
            <span className="motor-category">{motor.category}</span>
            <span className={`motor-status ${motor.status.toLowerCase()}`}>
              {motor.status}
            </span>
          </div>
        </div>
      </div>
      
      <div className="motor-content">
        <p className="motor-description">
          {motor.description}
        </p>
        
        <div className="motor-bottom">
          <div className="motor-specs">
            <h4>Technical Specifications</h4>
            <ul className="specs-list">
              {motor.specs.weight && (
                <li className="spec-item">
                  <span className="spec-label">Weight:</span>
                  <span className="spec-value">{motor.specs.weight}</span>
                </li>
              )}
              {motor.specs.motorClass && (
                <li className="spec-item">
                  <span className="spec-label">Motor Class:</span>
                  <span className="spec-value">{motor.specs.motorClass}</span>
                </li>
              )}
              {motor.specs.propellant && (
                <li className="spec-item">
                  <span className="spec-label">Propellant:</span>
                  <span className="spec-value">{motor.specs.propellant}</span>
                </li>
              )}
              {motor.specs.thrust && (
                <li className="spec-item">
                  <span className="spec-label">Thrust:</span>
                  <span className="spec-value">{motor.specs.thrust}</span>
                </li>
              )}
              {motor.specs.chamberPressure && (
                <li className="spec-item">
                  <span className="spec-label">Chamber Pressure:</span>
                  <span className="spec-value">{motor.specs.chamberPressure}</span>
                </li>
              )}
              {motor.specs.nozzleThroat && (
                <li className="spec-item">
                  <span className="spec-label">Nozzle Throat:</span>
                  <span className="spec-value">{motor.specs.nozzleThroat}</span>
                </li>
              )}
            </ul>
          </div>
          
          <div className="motor-image-container">
            {motor.image && motor.image !== "🚀" ? (
              <img 
                src={motor.image} 
                alt={`${motor.name} motor`} 
                className="motor-rocket-image"
              />
            ) : (
              <div className="motor-emoji">{motor.image}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="motors">

      <div className="motors-hero">
        <div className="container">
          <h1>Our Motors</h1>
          <p>
            Explore our portfolio of experimental rocket motors and propulsion systems, 
            from our first J-class motors to our ambitious O-class IREC competition motor.
          </p>
        </div>
      </div>

      <div className="motors-content">
        <div className="container">
          <div className="motors-intro">
            <h2>Propulsion Portfolio</h2>
            <p>
              Our propulsion program represents the cutting edge of collegiate experimental 
              rocketry. From solid propellant formulations to hybrid systems, each motor 
              demonstrates our commitment to innovation and hands-on engineering.
            </p>
          </div>

          <div className="motors-grid">
            {motors.map(renderMotorCard)}
          </div>

          <div className="motors-stats">
            <h2>Motor Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Motor Types</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Static Tests</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">M4000</div>
                <div className="stat-label">Largest Motor Class</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Propulsion Types</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motors;
