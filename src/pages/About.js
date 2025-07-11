import React from 'react';
import './About.css';

const About = () => {
  const executiveBoard = [
    {
      name: "Granger Maher",
      position: "President",
      major: "Mechanical Engineering '27",
      hometown: "San Francisco, California",
      department: "Leadership"
    },
    {
      name: "Sarah Johnson",
      position: "Vice President",
      major: "Aerospace Engineering '25",
      hometown: "Austin, Texas",
      department: "Leadership"
    },
    {
      name: "Ashwin Narayanan",
      position: "Chief Engineer",
      major: "Mechanical Engineering '27",
      hometown: "Mumbai, India",
      department: "Leadership"
    }
  ];

  const propulsionTeam = [
    {
      name: "David Kim",
      position: "Propulsion Lead",
      major: "Chemical Engineering '26",
      hometown: "Los Angeles, California",
      department: "Propulsion"
    },
    {
      name: "Rachel Green",
      position: "Propulsion Member",
      major: "Mechanical Engineering '27",
      hometown: "Chicago, Illinois",
      department: "Propulsion"
    },
    {
      name: "James Wilson",
      position: "Propulsion Member",
      major: "Chemical Engineering '26",
      hometown: "Boston, Massachusetts",
      department: "Propulsion"
    },
    {
      name: "Maria Garcia",
      position: "Propulsion Member",
      major: "Mechanical Engineering '27",
      hometown: "San Antonio, Texas",
      department: "Propulsion"
    },
    {
      name: "Daniel Park",
      position: "Propulsion Member",
      major: "Chemical Engineering '28",
      hometown: "Seattle, Washington",
      department: "Propulsion"
    },
    {
      name: "Aisha Patel",
      position: "Propulsion Member",
      major: "Mechanical Engineering '26",
      hometown: "Detroit, Michigan",
      department: "Propulsion"
    }
  ];

  const structuresTeam = [
    {
      name: "Lisa Park",
      position: "Structures Lead",
      major: "Civil Engineering '26",
      hometown: "Denver, Colorado",
      department: "Structures"
    },
    {
      name: "Tom Anderson",
      position: "Structures Member",
      major: "Materials Science '27",
      hometown: "Portland, Oregon",
      department: "Structures"
    },
    {
      name: "Nina Patel",
      position: "Structures Member",
      major: "Mechanical Engineering '26",
      hometown: "Atlanta, Georgia",
      department: "Structures"
    },
    {
      name: "Chris Thompson",
      position: "Structures Member",
      major: "Civil Engineering '27",
      hometown: "Minneapolis, Minnesota",
      department: "Structures"
    },
    {
      name: "Sofia Rodriguez",
      position: "Structures Member",
      major: "Mechanical Engineering '28",
      hometown: "Tampa, Florida",
      department: "Structures"
    }
  ];

  const avionicsTeam = [
    {
      name: "Kevin Zhang",
      position: "Avionics Lead",
      major: "Electrical Engineering '26",
      hometown: "New York, New York",
      department: "Avionics"
    },
    {
      name: "Amanda Foster",
      position: "Avionics Member",
      major: "Computer Engineering '27",
      hometown: "Phoenix, Arizona",
      department: "Avionics"
    },
    {
      name: "Carlos Mendez",
      position: "Avionics Member",
      major: "Electrical Engineering '26",
      hometown: "Houston, Texas",
      department: "Avionics"
    }
  ];

  const flightOpsTeam = [
    {
      name: "Jessica Lee",
      position: "Flight Operations Lead",
      major: "Mechanical Engineering '26",
      hometown: "San Diego, California",
      department: "Flight Operations"
    },
    {
      name: "Ryan Thompson",
      position: "Flight Operations Member",
      major: "Aerospace Engineering '27",
      hometown: "Dallas, Texas",
      department: "Flight Operations"
    },
    {
      name: "Sophie Martin",
      position: "Flight Operations Member",
      major: "Mechanical Engineering '26",
      hometown: "Philadelphia, Pennsylvania",
      department: "Flight Operations"
    }
  ];

  const renderTeamSection = (title, members, color) => (
    <div className="team-section">
      <h3 className={`section-title ${color}`}>{title}</h3>
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-photo">
              <div className="photo-placeholder">
                <span>👤</span>
              </div>
            </div>
            <div className="member-info">
              <h4 className="member-name">{member.name}</h4>
              <p className="member-position">{member.position}</p>
              <p className="member-major">{member.major}</p>
              <p className="member-hometown">{member.hometown}</p>
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
          <h1>About Astrojays</h1>
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
                    <div className="photo-placeholder">
                      <span>👤</span>
                    </div>
                  </div>
                  <div className="executive-info">
                    <h3 className="executive-name">{member.name}</h3>
                    <p className="executive-position">{member.position}</p>
                    <p className="executive-major">{member.major}</p>
                    <p className="executive-hometown">{member.hometown}</p>
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
            {renderTeamSection("Flight Operations", flightOpsTeam, "flight operations")}
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
                <p>Email: astrojays@jhu.edu</p>
                <p>Instagram: @astrojays_rocket</p>
              </div>
              <div className="join-card">
                <h4>🏢 Location</h4>
                <p>Johns Hopkins University</p>
                <p>Baltimore, Maryland</p>
              </div>
              <div className="join-card">
                <h4>⏰ Meetings</h4>
                <p>Weekly on Thursdays</p>
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