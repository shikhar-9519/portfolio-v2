
import { useEffect, useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
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

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
}

  const projects = [
    {
      title: "DSA Tutorials - Chrome Extension",
      description: "A Chrome extension with 250+ users that simplifies DSA learning by embedding a 'Watch Tutorial' button on GeeksforGeeks and LeetCode, providing direct access to YouTube tutorials within modal.",
      tech: ["ReactJS", "Tailwind CSS", "Rapid API"],
      date: "Nov 2024",
      features: [
        "250+ active users",
        "Seamless integration with coding platforms",
        "Dark mode toggle for improved usability",
        "Responsive modal interface"
      ],
      colorClass: "green",
      demoLink: "https://www.linkedin.com/posts/shikhar-gupta-98a15b197_dsa-problemsolving-leetcode-activity-7279020820679565312-6j4D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4eYLoBwEcZ3SVtedZOhupQLh6Gq7i4m3U",
      sourceCode: "https://github.com/shikhar-9519/gfg-chrome-extension",
    },
    {
      title: "PlayTube",
      description: "A web application with features inspired by popular video-sharing platforms like YouTube. Built with modern web technologies for an engaging user experience.",
      tech: ["ReactJS", "Tailwind CSS", "Rapid API", "Redux"],
      date: "May 2022",
      features: [
        "Intuitive navigation and search functionality",
        "Full video playback controls",
        "Suggested video lists and recommendations",
        "Light/Dark mode toggles",
        "Shimmer effect for loading states"
      ],
      colorClass: "red",
      demoLink: "https://shikhar-9519.github.io/playtube/",
      sourceCode: "https://github.com/shikhar-9519/playtube",
    },
    {
        title: "House Recommender",
        description: "A logic-focused web app that helps users find the best house based on proximity to gyms, restaurants, and hospitals. Users input the number of rows and columns, then place houses and amenities on the grid. The app calculates and suggests the most optimal house based on the shortest total distance to all amenities.",
        tech: ["ReactJS", "TypeScript", "Tailwind CSS", "Algorithm Design"],
        date: "Feb 2024",
        features: [
            "Interactive grid for custom placement of houses and amenities",
            "Real-time calculation of optimal house location",
            "Supports multiple amenities and dynamic grid sizes",
            "Visual feedback for best house suggestion",
            "Clean, responsive UI"
        ],
        colorClass: "red",
        demoLink: "https://house-recommendation-eight.vercel.app/",
        sourceCode: "https://github.com/shikhar-9519/house-recommendation",
    },
    {
    title: "DSA Memoizer",
    description: "A Chrome extension to track, review, and revisit DSA problems from LeetCode and GeeksforGeeks efficiently. DSA Memoizer helps you build real mastery, not just streaks. Turn “I saw the solution” into “I own the solution.”",
    tech: ["ReactJS", "TypeScript", "Chrome Extension APIs", "Tailwind CSS"],
    date: "April 2025",
    features: [
        "Smart reminder system for revisiting problems after taking help",
        "Button on LeetCode/GFG problem pages for easy marking",
        "Automatic reminders after 4 days to retry problems without help",
        "Daily 'Today's Problems' list for focused revision",
        "Mark as Solved or Resolve Again for spaced repetition",
        "Seamless, lightweight UI that blends with coding platforms"
    ],
    colorClass: "green",
    demoLink: "https://youtu.be/pzdOmKXoyaY",
    sourceCode: "https://github.com/shikhar-9519/dsa-memoizer",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            Projects
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`project-date ${project.colorClass}`}>
                {project.date}
              </div>

              <h3 className="project-title">
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="features-section">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-bullet">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <button onClick={()=>handleLinkClick(project.demoLink)} className="project-button project-button-primary">
                  Demo
                </button>
                <button  onClick={()=>handleLinkClick(project.sourceCode)} className="project-button project-button-secondary">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p className="projects-footer-text">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <button onClick={()=>handleLinkClick('https://github.com/shikhar-9519?tab=repositories')} className="view-all-button">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
