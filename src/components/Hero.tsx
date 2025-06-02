
import { ArrowDown } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="hero-name">
              Shikhar Gupta
            </span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="typing-container">
              <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=FFFFFF&center=true&vCenter=true&width=260&lines=Frontend+Engineer;React+Specialist;JavaScript+Enthusiast;UI%2FUX+Craftsman;DSA+Master" alt="Typing SVG" style={{height: "100px", marginTop: "16px"}}/>
            </span>
          </div>

          <p className="hero-description">
            Passionate about creating exceptional digital experiences with modern technologies. 
            Building innovative solutions with expertise in React, TypeScript, and scalable frontend architectures.
          </p>

          <div className="hero-buttons">
            <button
              onClick={scrollToAbout}
              className="hero-button-primary"
            >
              Discover My Journey
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-button-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <button
            onClick={scrollToAbout}
            className="scroll-button"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
