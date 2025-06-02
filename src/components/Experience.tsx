
import { useEffect, useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Software Engineer - Frontend",
      company: "IndiaGold",
      location: "Gurugram, IN | Remote",
      period: "Sep 2024 – Present",
      achievements: [
        "Optimized image delivery by migrating assets to Amazon S3, reducing image file sizes by 40%",
        "Achieved 30% cost reduction by replacing Next.js image with direct S3 URLs and implementing Srcset"
      ],
      colorClass: "green",
      link: "indiagold.co"
    },
    {
      title: "Software Engineer - Frontend",
      company: "InFeedo",
      location: "Gurugram, IN | Remote", 
      period: "Jul 2023 – Sep 2024",
      achievements: [
        "Designed and implemented a resilient exit management module that comprehensively records employee departure information, reasons for leaving, and the probability of rejoining. Leveraged React.js and Redux for seamless functionality, while integrating Highcharts to present data visually, enhancing the platform’s user-friendliness and providing valuable insights contributing to a 15% increase in platform revenue",
        "Developed complex reusable UI Components like Tooltip, Info Modal, Toast, and ScoreCard in the Design System which is getting used across the dashboard resulting in a 40% reduction in development time",
        "Played a pivotal role in the team that successfully revamped the entire dashboard, leading to a 25% increase in user interaction with analytics features and easy decision-making for clients.",
        "Optimized frontend performance, reducing page load times by 30%, resulting in enhanced user satisfaction and retention rates."
      ],
      colorClass: "blue",
      link: "infeedo.ai"
    },
    {
      title: "SDE Intern",
      company: "DotPe",
      location: "Gurugram, IN | Remote",
      period: "Aug 2022 – Jun 2023",
      achievements: [
        "Implemented an innovative Credit Note feature, helping efficient handling of return products by issuing credits for future purchases. This resulted in streamlined financial transactions and a 15% rise in customer satisfaction.",
        "Elevated the merchant experience on the Point of Sale (POS) system by leading the design and implementation of key features, including Consolidated Eway Bill, Out-of-Stock Module, and Shrinkage Activity. These enhancements resulted in a 20 percent increase in user engagement and a notable 15 percent improvement in transaction efficiency.",
        "Improved loading speed by implementing lazy loading, and pagination, hence reducing initial loading wait time by up to 97.5%"
      ],
      colorClass: "purple",
      link: "dotpe.in"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            Experience
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="timeline-dot"></div>

              <div className={`timeline-content ${isVisible ? 'visible' : ''}`} 
                   style={{ transitionDelay: `${index * 300}ms` }}>
                <div className="experience-card">
                  <div className={`experience-period ${exp.colorClass}`}>
                    {exp.period}
                  </div>
                  
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">
                     <a
                        href={`https://${exp.link}`}
                        className="experience-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', cursor: 'pointer' }}
                    >
                        {exp.company}
                    </a>
                  </h4>
                  <p className="experience-location">{exp.location}</p>
                  
                  <ul className="achievement-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        <span className="achievement-bullet">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
