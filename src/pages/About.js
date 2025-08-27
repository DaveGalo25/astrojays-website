import React from 'react';
import './About.css';

const About = () => {
  const executiveBoard = [
    {
      name: "Granger Maher",
      position: "President",
      major: "Mechanical Engineering '27",
      department: "Leadership",
      photo: "/1722097476559.jpeg"
    },
    {
      name: "Ashwin Narayanan",
      position: "Chief Engineer",
      major: "Mechanical Engineering '27",
      department: "Leadership",
      photo: "/1749590493979.jpeg"
    }
  ];

  const propulsionTeam = [
    {
      name: "Granger Maher",
      position: "Liquid Propulsion Lead",
      major: "Mechanical Engineering '27",
      department: "Propulsion",
      photo: "/1722097476559.jpeg"
    },
    {
      name: "Ashwin Narayanan",
      position: "Solid Propulsion Lead",
      major: "Mechanical Engineering '27",
      department: "Propulsion",
      photo: "/1749590493979.jpeg"
    },
    {
      name: "Brennan McGrann",
      position: "Propulsion Member",
      major: "Chemical Engineering '28",
      department: "Propulsion",
      photo: "/1741271562191.jpeg"
    },
    {
      name: "Brianna Bledsoe",
      position: "Propulsion Member",
      major: "Mechanical Engineering '27",
      department: "Propulsion",
      photo: "/1738817199378.jpeg"
    },
  ];

  const structuresTeam = [
    {
      name: "Timothy Liang",
      position: "Structures Lead",
      major: "Mechanical Engineering '28",
      department: "Structures",
      photo: "/DSC_7015.jpg"
    },
    {
      name: "Andrew Ahn",
      position: "Structures Member",
      major: "Mechanical Engineering '25",
      department: "Structures",
      photo: "/andrew_ahn.jpeg"
    },
    {
      name: "Jacob Kim",
      position: "Structures Member",
      major: "Mechanical Engineering '26",
      department: "Structures",
      photo: "/1732053382682.jpeg"
    },
    {
      name: "Ethan Dunn",
      position: "Structures Member",
      major: "Mechanical Engineering '27",
      department: "Structures",
      photo: "/1694121368252.jpeg"
    },

  ];

  const avionicsTeam = [
    {
      name: "David Galotto",
      position: "Avionics Lead",
      major: "Electrical Engineering '28",
      department: "Avionics",
      photo: "/DSC_7031.jpg"
    },
    {
      name: "Eric Gendlin",
      position: "Avionics Member",
      major: "Mechanical Engineering '28",
      department: "Avionics",
      photo: "/DSC_7032.jpg"
    },
    {
      name: "Jecia Mao",
      position: "Avionics Member",
      major: "Electrical Engineering '28",
      department: "Avionics",
      photo: "/1754797367552.jpeg"
    },
    {
      name: "Johnny Shi",
      position: "Avionics Member",
      major: "Electrical Engineering '27",
      department: "Avionics"
    },
  ];



  const renderTeamSection = (title, members, color) => (
    <div className="team-section">
      <h3 className={`section-title ${color}`}>{title}</h3>
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-photo">
              {member.photo ? (
                <img src={member.photo} alt={`${member.name}`} className="member-photo-img" />
              ) : (
                <div className="photo-placeholder">
                  <span>👤</span>
                </div>
              )}
            </div>
            <div className="member-info">
              <h4 className="member-name">{member.name}</h4>
              <p className="member-position">{member.position}</p>
              <p className="member-major">{member.major}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="about">
              <div className="about-hero">
          <div className="container">
            <h1>Meet the Team</h1>
            <p>
              We are a passionate team of undergraduate engineers at Johns Hopkins University, 
              dedicated to pushing the boundaries of collegiate rocketry through innovation, 
              collaboration, and hands-on learning.
            </p>
          </div>
        </div>

      <div className="about-content">
        <div className="container">
          <section className="team-intro">
            <h2>Who We Are</h2>
            <p>
              The Astrojays Rocket Team is a student-run, cross-disciplinary organization 
              that focuses on innovation in collegiate high power rocketry and international 
              rocketry competitions. Since our founding, we've created projects that inspire 
              team members and push the boundaries of what's possible in student rocketry.
            </p>
            <p>
              We emphasize simplicity, design for manufacturing, frequent hardware testing, 
              ownership, and launching as often as possible. Our team engages students with 
              experimental motor design, composite structures, control systems, telemetry, 
              high performance, and propulsion projects.
            </p>
          </section>

          <section className="executive-board">
            <h2>Executive Board</h2>
            <div className="executive-grid">
              {executiveBoard.map((member, index) => (
                <div key={index} className="executive-card">
                  <div className="executive-photo">
                    {member.photo ? (
                      <img src={member.photo} alt={`${member.name}`} className="executive-photo-img" />
                    ) : (
                      <div className="photo-placeholder">
                        <span>👤</span>
                      </div>
                    )}
                  </div>
                  <div className="executive-info">
                    <h3 className="executive-name">{member.name}</h3>
                    <p className="executive-position">{member.position}</p>
                    <p className="executive-major">{member.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="team-departments">
            <h2>Meet the Team</h2>
            {renderTeamSection("Propulsion", propulsionTeam, "propulsion")}
            {renderTeamSection("Structures", structuresTeam, "structures")}
            {renderTeamSection("Avionics", avionicsTeam, "avionics")}
          </section>

          <section className="join-team">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for passionate students who want to learn about rocket 
              engineering and contribute to our mission. No prior experience is required - 
              we provide training and mentorship for all new members.
            </p>
            <div className="join-info">
              <div className="join-card">
                <h4>📧 Contact Us</h4>
                <p>Email: <a href="mailto:hopkinsrocketry@gmail.com">hopkinsrocketry@gmail.com</a></p>
                <p>Instagram: <a href="https://www.instagram.com/hopkinsrocketry/" target="_blank" rel="noopener noreferrer">@hopkinsrocketry</a></p>
              </div>
              <div className="join-card">
                <h4>🏢 Location</h4>
                <p>Johns Hopkins University</p>
                <p>Baltimore, Maryland</p>
              </div>
              <div className="join-card">
                <h4>⏰ Meetings</h4>
                <p>Weekly on Mondays</p>
                <p>6:00 PM - 8:00 PM</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About; 