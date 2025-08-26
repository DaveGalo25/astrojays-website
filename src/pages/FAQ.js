import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const faqData = [
    {
      id: 'general',
      title: 'General Questions',
      questions: [
        {
          q: 'Do I need any prior experience with rockets or engineering to join?',
          a: 'Not at all! We welcome members from all academic backgrounds and experience levels. Most of our successful members and leaders started with zero rocketry experience. We provide training and mentorship to help everyone learn.'
        },
        {
          q: 'What majors are represented in the club?',
          a: 'While we have many aerospace, mechanical, and electrical engineering students, we also have members studying computer science, physics, mathematics, and even BME! Rocketry is interdisciplinary and benefits from diverse experiences.'
        },
        {
          q: 'When and where do you meet?',
          a: 'We hold general body meetings (GBM) every Sunday at 2pm at Hackerman Hall room B17 (Basement lecture hall). Each GBM is followed by workshop hours at our Wyman Park Building space (Wyman G42). We also have additional workshop hours throughout the week held by individual subsystem leaders where you can come in. Check our Discord for the most current schedule.'
        },
        {
          q: 'Is there a membership fee?',
          a: 'No! However, if you wish to go through the rocketry certification program through MDRA, you will have to pay the club a security deposit equal to the price of the rocket kit you are building. Once you successfully complete the rocket\'s construction, the security deposit will be returned in full.'
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects and Activities',
      questions: [
        {
          q: 'What kind of rockets does the club build?',
          a: 'We work on various projects including high-power "sport" rockets, competition rockets for FAR/IREC contests. Our projects incorporate experimental solid and liquid propulsion systems, and recovery system development. New members typically start with smaller projects before moving to advanced systems.'
        },
        {
          q: 'Do we compete in competitions?',
          a: 'Yes! We regularly participate in competitions like the Friends of Amateur Rocketry (FAR) Unlimited Competition in June, where we take a trip out to the FAR desert launch site in California. This year, we have our eyes set on competing in the International Rocket Engineering Competition (IREC), the largest aerospace competition in the world!'
        },
        {
          q: 'Can I work on my own rocket project?',
          a: 'Absolutely! We encourage personal projects and provide you a large workspace with tools and mentorship. Many members build their own rockets for certification flights or just for fun!'
        },
        {
          q: 'Is rocketry safe?',
          a: 'Safety is our top priority. We follow Tripoli Association Rocketry (TAR), ITAR and FAA regulations, and closely adhere to Baltimore City Fire/Safety Codes. We have our own fleshed-out procedures when handling potentially harmful chemicals and materials. All new members must undergo the WSE online lab safety training course before they can be granted full membership.'
        }
      ]
    },
    {
      id: 'commitment',
      title: 'Commitment and Time',
      questions: [
        {
          q: 'How much time commitment is expected?',
          a: 'It varies by your involvement level. Attending general meetings and workshops takes about 2 hours per week. Active project participation might require 5 hours weekly. Things tend to ramp up during competition season at the end of the year, where members typically commit 10-15 hours per week.'
        },
        {
          q: 'Can I participate even if I have a busy course load?',
          a: 'Yes! We understand academic priorities. Many members participate part-time, help with specific tasks, or take breaks during exam periods. You can scale your involvement based on your availability.'
        },
        {
          q: 'Do you have activities for beginners?',
          a: 'Throughout the first couple of meetings, we run beginner workshops on topics like basic rocket science principles, software tools (CAD, simulation), electronics, and hands-on building sessions. New members are paired with experienced mentors.'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources and Facilities',
      questions: [
        {
          q: 'What tools and workspace are available?',
          a: 'We have access to the entire WSE machine shop including Bandsaw, Drill Press, 3D printers, Laser cutters, Lathe, Mill, Waterjet, Wire EDM, Arbor Press, and more! We also have a large variety of hand tools and power tools at our space in Wyman G42. Members receive training on equipment use and safety procedures.'
        },
        {
          q: 'Do I need to buy my own tools or materials?',
          a: 'Basic hand tools may be helpful but not required. The club provides specialized tools and bulk materials for team projects. For personal projects, you\'ll mostly need to source your own materials, though we can help with group/bulk purchases.'
        },
        {
          q: 'What software do you use?',
          a: 'Common tools include OpenRocket and RASAero for flight simulation, SolidWorks for CAD/CAM, ANSYS for CFD, MATLAB/Python for data analysis and acquisition, and various electronics design software like Arduino IDE, KiCAD, and more! We have experienced mentors who are more than willing to provide training on these platforms.'
        }
      ]
    },
    {
      id: 'launch',
      title: 'Launch Operations',
      questions: [
        {
          q: 'Where and how often do we launch rockets?',
          a: 'We typically launch at the Maryland-Delaware Rocketry Association launch site (about an hour drive away on the DelMarVa peninsula) once a month. We also attend regional launches and competitions. Transportation is usually provided or coordinated by the club.'
        },
        {
          q: 'Can I launch my rocket on the first launch day?',
          a: 'If you have a rocket ready to go by the first launch (likely early October), you are more than welcome to launch it! You\'ll need to have your rocket undergo a safety inspection before any launch attempt.'
        },
        {
          q: 'What sizes of rockets can we launch?',
          a: 'We launch Class II rockets, which are rockets with a engine impulse between 100Ns and 40,000Ns. Members can start off with smaller model rockets if they choose, or start with the larger High-Power rockets which are quite large (can be up to 100lbs for our competition rockets)'
        }
      ]
    },
    {
      id: 'involvement',
      title: 'Getting Involved',
      questions: [
        {
          q: 'How do I choose which team or project to join?',
          a: 'Attend a few meetings and workshop hours to learn about current projects, and try to get some hands-on experience in each subsystem before choosing which one to settle down in. Connect with your subteam leads about your interests and availability. We\'ll help match you with appropriate opportunities. If you find yourself wanting to switch between subsystems, that is also something you can do and is not a problem!'
        },
        {
          q: 'Who should I contact with questions?',
          a: 'Reach out to any/all of our officers: President, Vice President, Secretary, Safety Officer, and New Member Coordinator. You can find their contact information on our Members page.'
        },
        {
          q: 'How can I stay updated on club activities?',
          a: 'Join our Discord server, follow our social media accounts, and check your email regularly. We also maintain a website with announcements and resources.'
        },
        {
          q: 'Are there leadership opportunities?',
          a: 'Yes! We have elected officer positions, project design leads (PDL), and various coordinator roles. Leadership positions are great for developing project management and technical skills.'
        }
      ]
    },
    {
      id: 'other',
      title: 'Other Questions',
      questions: [
        {
          q: 'Can graduate students join?',
          a: 'Absolutely! We welcome both undergraduate and graduate students. Graduate students often serve as mentors and technical advisors.'
        },
        {
          q: 'Do you collaborate with other clubs or organizations?',
          a: 'We work with engineering clubs, astronomy clubs, and sometimes partner with local aerospace companies for projects and career events.'
        },
        {
          q: 'What career paths do club alumni pursue?',
          a: 'Our alumni have gone on to intern and work at SpaceX, NASA, Boeing, Lockheed Martin, Blue Origin, and many other aerospace companies, as well as in related fields like defense, automotive, and technology.'
        }
      ]
    }
  ];

  return (
    <div className="faq">
      <div className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about joining the Astrojays Rocket Team, 
            our projects, meetings, and how to get involved.
          </p>
        </div>
      </div>

      <div className="faq-content">
        <div className="container">
          <div className="faq-intro">
            <h2>Everything You Need to Know</h2>
            <p>
              Whether you're a complete beginner or an experienced engineer, 
              we've got answers to help you understand what we do and how to join.
            </p>
          </div>

          <div className="faq-sections">
            {faqData.map((section) => (
              <div key={section.id} className="faq-section">
                <button 
                  className={`faq-section-header ${openSections[section.id] ? 'open' : ''}`}
                  onClick={() => toggleSection(section.id)}
                >
                  <h3>{section.title}</h3>
                  <span className="faq-toggle">+</span>
                </button>
                
                <div className={`faq-section-content ${openSections[section.id] ? 'open' : ''}`}>
                  {section.questions.map((item, index) => (
                    <div key={index} className="faq-item">
                      <h4 className="faq-question">{item.q}</h4>
                      <p className="faq-answer">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <h2>Still Have Questions?</h2>
            <p>
              Can't find what you're looking for? Feel free to reach out to us directly!
            </p>
            <div className="contact-options">
              <div className="contact-option">
                <h4>📧 Email Us</h4>
                <p><a href="mailto:hopkinsrocketry@gmail.com">hopkinsrocketry@gmail.com</a></p>
              </div>
              <div className="contact-option">
                <h4>📱 Social Media</h4>
                <p><a href="https://www.instagram.com/hopkinsrocketry/" target="_blank" rel="noopener noreferrer">@hopkinsrocketry</a></p>
              </div>
              <div className="contact-option">
                <h4>🏢 Visit Us</h4>
                <p>Wyman G42, Johns Hopkins University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
