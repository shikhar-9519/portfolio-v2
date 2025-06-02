
import { useEffect, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '2000+', label: 'DSA Problems Solved' },
    { value: '1877', label: 'LeetCode Rating' },
    { value: '100k+', label: 'YouTube Views' },
    { value: '2.5k+', label: 'Subscribers' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            About Me
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          <div className={`education-card ${isVisible ? 'visible' : ''}`}>
            <h3 className="education-title">Education</h3>
            <div>
              <h4 className="education-degree">
                Bachelor of Technology - Computer Science
              </h4>
              <p className="education-school">GL Bajaj Institute of Technology and Management</p>
              <p className="education-details">Aug 2019 - Jun 2023 | CGPA: 8.58/10</p>
            </div>
          </div>

          <div className={`about-content ${isVisible ? 'visible' : ''}`}>
            <p className="about-text">
              I'm a passionate Frontend Engineer with expertise in building scalable, user-centric applications. 
              With experience at companies like IndiaGold, InFeedo, and DotPe, I've consistently delivered 
              solutions that drive business growth and enhance user experience.
            </p>
            
            <p className="about-text">
              My journey in tech is marked by being a Knight on LeetCode with a rating of 1877, 
              ranking #1 at my institute on GeeksforGeeks, and maintaining a YouTube channel 
              with 100k+ views where I share DSA knowledge.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`stat-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
