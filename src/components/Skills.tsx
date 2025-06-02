import { useEffect, useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
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

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 98, colorClass: "teal" },
        { name: "TypeScript", level: 98, colorClass: "violet" },
        { name: "JavaScript", level: 98, colorClass: "amber" },
        { name: "Next.js", level: 95, colorClass: "lime" },
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Structures", level: 99, colorClass: "emerald" },
        { name: "Algorithms", level: 99, colorClass: "indigo" },
        { name: "System Design", level: 90, colorClass: "rose" },
        { name: "OOP", level: 95, colorClass: "violet" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Node.js", level: 90, colorClass: "lime" },
        { name: "Java", level: 90, colorClass: "orange" },
        { name: "C++", level: 85, colorClass: "sky" },
        { name: "SQL", level: 85, colorClass: "fuchsia" },
      ]
    }
  ];

  const achievements = [
    { title: "LeetCode Knight", value: "1877 Rating", icon: "🏆" },
    { title: "GFG Rank", value: "#1 Institute", icon: "🥇" },
    { title: "Problems Solved", value: "1100+", icon: "💻" },
    { title: "DSA Instructor", value: "Multiple Platforms", icon: "👨‍🏫" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            Skills
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`skill-category ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="skill-category-title">
                {category.title}
              </h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${skill.colorClass}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`achievement-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${600 + (index * 100)}ms` }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-title">{achievement.title}</div>
              <div className="achievement-value">{achievement.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
