import React from 'react';
import './Support.css';

const Support = () => {
  const sponsorshipLevels = [
    {
      name: "Bronze Sponsor",
      amount: "$500 - $1,999",
      benefits: [
        "Logo on team website",
        "Mention in social media posts",
        "Thank you letter",
        "Team photo with sponsor recognition"
      ],
      color: "#cd7f32"
    },
    {
      name: "Silver Sponsor",
      amount: "$2,000 - $4,999",
      benefits: [
        "All Bronze benefits",
        "Logo on team uniforms",
        "Featured in team presentations",
        "Invitation to launch events",
        "Quarterly team updates"
      ],
      color: "#c0c0c0"
    },
    {
      name: "Gold Sponsor",
      amount: "$5,000 - $9,999",
      benefits: [
        "All Silver benefits",
        "Logo on rocket body",
        "Naming rights for a rocket component",
        "VIP access to competitions",
        "Annual team dinner invitation",
        "Custom team merchandise"
      ],
      color: "#ffd700"
    },
    {
      name: "Platinum Sponsor",
      amount: "$10,000+",
      benefits: [
        "All Gold benefits",
        "Rocket naming rights",
        "Exclusive team tour",
        "Speaking opportunity at events",
        "Dedicated team member liaison",
        "Priority access to team talent"
      ],
      color: "#e5e4e2"
    }
  ];

  const donationMethods = [
    {
      title: "Online Donation",
      description: "Make a secure online donation through our university portal",
      icon: "💳",
      action: "Donate Online",
      preferred: true
    },
    {
      title: "Check Donation",
      description: "Send a check made payable to Johns Hopkins University",
      icon: "📄",
      action: "Download Form",
      preferred: false
    },
    {
      title: "Corporate Sponsorship",
      description: "For businesses interested in sponsorship opportunities",
      icon: "🏢",
      action: "Contact Us",
      preferred: false
    }
  ];

  return (
    <div className="support">
      <div className="support-hero">
        <div className="container">
          <h1>Support Astrojays</h1>
          <p>
            Your support enables us to push the boundaries of collegiate rocketry, 
            provide hands-on engineering education, and represent Johns Hopkins University 
            in national and international competitions.
          </p>
        </div>
      </div>

      <div className="support-content">
        <div className="container">
          {/* Why Support Section */}
          <section className="why-support">
            <h2>Why Support Us?</h2>
            <div className="reasons-grid">
              <div className="reason-card">
                <div className="reason-icon">🎓</div>
                <h3>Educational Excellence</h3>
                <p>
                  We provide hands-on engineering experience that goes beyond the classroom, 
                  preparing students for successful careers in aerospace and related fields.
                </p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">🚀</div>
                <h3>Innovation</h3>
                <p>
                  Our projects push the boundaries of what's possible in collegiate rocketry, 
                  developing cutting-edge technologies and engineering solutions.
                </p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">🌍</div>
                <h3>Future Impact</h3>
                <p>
                  By supporting student rocketry, you're investing in the next generation 
                  of aerospace engineers who will shape the future of space exploration.
                </p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">🏆</div>
                <h3>University Pride</h3>
                <p>
                  Help us represent Johns Hopkins University on the national stage, 
                  competing against top engineering programs from around the world.
                </p>
              </div>
            </div>
          </section>

          {/* Sponsorship Levels */}
          <section className="sponsorship">
            <h2>Sponsorship Levels</h2>
            <p className="section-description">
              We offer various sponsorship levels to recognize and thank our supporters. 
              Each level includes different benefits and recognition opportunities.
            </p>
            <div className="sponsorship-grid">
              {sponsorshipLevels.map((level, index) => (
                <div key={index} className="sponsorship-card">
                  <div className="sponsorship-header" style={{ borderColor: level.color }}>
                    <h3 className="sponsorship-name">{level.name}</h3>
                    <div className="sponsorship-amount">{level.amount}</div>
                  </div>
                  <div className="sponsorship-benefits">
                    <h4>Benefits Include:</h4>
                    <ul>
                      {level.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>
                          <span className="benefit-icon">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Donation Methods */}
          <section className="donation-methods">
            <h2>How to Support</h2>
            <div className="methods-grid">
              {donationMethods.map((method, index) => (
                <div key={index} className={`method-card ${method.preferred ? 'preferred' : ''}`}>
                  {method.preferred && <div className="preferred-badge">Recommended</div>}
                  <div className="method-icon">{method.icon}</div>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                  <button className="method-button">
                    {method.action}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Section */}
          <section className="impact">
            <h2>Your Impact</h2>
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="impact-number">$25,000+</div>
                <div className="impact-label">Annual Budget</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">25+</div>
                <div className="impact-label">Students Supported</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">5</div>
                <div className="impact-label">Rockets Built</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">3</div>
                <div className="impact-label">Competitions</div>
              </div>
            </div>
            <div className="impact-description">
              <p>
                Your support directly funds rocket materials, competition travel, 
                testing equipment, and educational resources. Every dollar helps us 
                continue our mission of advancing aerospace engineering education.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-support">
            <h2>Get in Touch</h2>
            <p>
              Interested in supporting our team? We'd love to discuss sponsorship 
              opportunities and answer any questions you may have.
            </p>
            <div className="contact-info">
              <div className="contact-card">
                <h4>📧 Email</h4>
                <p>astrojays@jhu.edu</p>
                <p>For general inquiries and sponsorship opportunities</p>
              </div>
              <div className="contact-card">
                <h4>📱 Social Media</h4>
                <p>@astrojays_rocket</p>
                <p>Follow us for updates and behind-the-scenes content</p>
              </div>
              <div className="contact-card">
                <h4>🏢 Office</h4>
                <p>Johns Hopkins University</p>
                <p>Baltimore, Maryland</p>
              </div>
            </div>
          </section>


        </div>
      </div>
    </div>
  );
};

export default Support; 