
import { useEffect, useState } from 'react';
import { Mail, User, Linkedin } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
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

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "sgupta.9519@gmail.com",
      link: "mailto:sgupta.9519@gmail.com"
    },
    {
      icon: <User size={24} />,
      label: "Phone",
      value: "+91-8957566790",
      link: "tel:+918957566790"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/shikhar-gupta-98a15b197/"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            Get In Touch
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-container">
          <div className={`contact-intro ${isVisible ? 'visible' : ''}`}>
            <p className="contact-intro-text">
              I'm always interested in discussing new opportunities, innovative projects, or just having a conversation about technology. 
              Feel free to reach out if you'd like to connect!
            </p>
          </div>

          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className={`contact-card ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <div className="contact-icon">
                  {contact.icon}
                </div>
                <h3 className="contact-label">{contact.label}</h3>
                <p className="contact-value">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          <div className={`contact-cta ${isVisible ? 'visible' : ''}`}>
            <div className="cta-card">
              <h3 className="cta-title">Let's Build Something Amazing Together</h3>
              <p className="cta-description">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you.
              </p>
              <a
                href="mailto:sgupta.9519@gmail.com"
                className="cta-button"
              >
                Send Me a Message
              </a>
            </div>

            <div className="footer-text">
              <p>
                © 2024 Shikhar Gupta. Built with React, TypeScript, and lots of ☕
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
