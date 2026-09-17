import React from 'react';
import {
  ArrowRight,
  Star,
  MonitorSmartphone,
  Layout,
  Database,
  Server,
  Code2,
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Phone,
  Globe,
  Smartphone,
  Palette,
  Asterisk,
  Sun,
  Moon
} from 'lucide-react';
import { useState, useEffect } from 'react';
import './index.css';
import peterImage from './assets/me-removebg-preview.png';
import ibscImage from './assets/ibsc.png';
import itekaImage from './assets/icon-v1.png';
import cwcImage from './assets/cwc.png';
import successImage from './assets/success.jpeg';
import logoImage from './assets/logo.png';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <img src={logoImage} alt="Peter logo" className="round-logo" />
          </div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#work">Work</a>
            <a href="#hire">Hire</a>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a href="#contact" className="btn btn-primary btn-small">Get in touch</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>
              Hi, <span className="highlight-text">I am Peter,</span><br />
              A web/Mobile Developer,<br />
              Based in Burundi.
            </h1>
            <p className="hero-desc">
              I am an experienced web/mobile developer with 4+ years of experience. Collaborating with various companies and startup
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">View My Portfolio</a>
              <a href="#contact" className="btn btn-outline rounded-pill">
                Hire Me
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="green-blob"></div>
            <img src={peterImage} alt="Peter, Developer" className="hero-image" />
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="banner">
        <div className="banner-content">
          <div className="banner-item">
            <Star fill="currentColor" size={24} /> UI/UX Designer
          </div>
          <div className="banner-item">
            <Star fill="currentColor" size={24} /> Web Developer
          </div>
          <div className="banner-item">
            <Star fill="currentColor" size={24} /> Mobile App Developer
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="about-section">
        <div className="container about-content">
          <div className="about-image-wrapper">
            <img src={peterImage} alt="Peter about" className="about-image" />
          </div>
          <div className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Who is <span className="highlight-text">Peter?</span></h2>
            <p>
              Hi, I'm Peter 👋
            </p>
            <p>
              I'm a Frontend Developer passionate about building modern, responsive, and user-friendly web applications. Currently, I'm a Team Lead at BrandSpark, where I collaborate with developers to deliver scalable, high-quality software.
            </p>
            <p>
              I specialize in building web applications with React, Vue, TypeScript, and Tailwind CSS, as well as cross-platform mobile applications with React Native. I enjoy writing clean, maintainable code and creating intuitive user experiences.
            </p>
            <p>
              I'm open to remote Frontend Developer opportunities and excited to collaborate with teams building impactful products. I'm committed to continuous learning and staying up to date with modern web technologies and best practices.
            </p>
            <div className="stats-container">
              <div className="stat-box">
                <h3>5</h3>
                <p>Projects</p>
              </div>
              <div className="stat-box">
                <h3>3+</h3>
                <p>Clients</p>
              </div>
              <div className="stat-box">
                <h3>100%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="awards-section bg-light">
        <div className="container">
          <div className="award-card">
            <div className="award-content">
              <div className="award-badge">
                <Star fill="currentColor" size={16} />
                <span>National Winner</span>
              </div>
              <h3 className="award-title">Umwuga Award 2025 Edition</h3>
              <p className="award-desc">
                Achieved an outstanding <strong>98%</strong> in the ICT/Web Operator Department. This prestigious national competition recognizes excellence, technical mastery, and innovation in the web development field across the country.
              </p>
            </div>
            <div className="award-image-wrapper">
              <img src={successImage} alt="Umwuga Award 2025 Success" className="award-image" />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="skills-header">
            <h2 className="section-title text-center">Technical <span className="highlight-text">Skills</span></h2>
            <p className="text-center skills-subtitle">
              Expertise across the full development stack, from frontend interfaces to backend systems.
            </p>
          </div>

          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <div className="skill-icon-bg">
                  <Globe className="skill-icon" size={24} />
                </div>
                <h3 className="skill-title">Frontend Developer</h3>
              </div>
              <p className="skill-desc">Creating responsive and interactive user interfaces.</p>
              <div className="skill-tags">
                <span className="tag">React/Next.js</span>
                <span className="tag">Vue</span>
                <span className="tag">TailwindCSS</span>
                <span className="tag">TS</span>
              </div>
            </div>
            {/* Mobile */}
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <div className="skill-icon-bg">
                  <Smartphone className="skill-icon" size={24} />
                </div>
                <h3 className="skill-title">Mobile Development</h3>
              </div>
              <p className="skill-desc">Cross-platform mobile applications</p>
              <div className="skill-tags">
                <span className="tag">React Native</span>
                <span className="tag">Android</span>
                <span className="tag">IOS</span>
              </div>
            </div>
            {/* Backend */}
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <div className="skill-icon-bg">
                  <Server className="skill-icon" size={24} />
                </div>
                <h3 className="skill-title">Backend Development</h3>
              </div>
              <p className="skill-desc">Scalable server-side applications and APIs</p>
              <div className="skill-tags">
                <span className="tag">Node js</span>
                <span className="tag">Express</span>
                <span className="tag">RestFul APIs</span>
              </div>
            </div>
            {/* Database */}
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <div className="skill-icon-bg">
                  <Database className="skill-icon" size={24} />
                </div>
                <h3 className="skill-title">Database</h3>
              </div>
              <p className="skill-desc">Designing and optimizing database systems</p>
              <div className="skill-tags">
                <span className="tag">Mongodb</span>
                <span className="tag">Postgres</span>
                <span className="tag">Mysql</span>
              </div>
            </div>
            {/* Design & UX */}
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <div className="skill-icon-bg">
                  <Palette className="skill-icon" size={24} />
                </div>
                <h3 className="skill-title">Design & UX</h3>
              </div>
              <p className="skill-desc">End-to-end design from wireframes to prototypes.</p>
              <div className="skill-tags">
                <span className="tag">figma</span>
                <span className="tag">AI-Assisted Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO / WORK */}
      <section id="work" className="work-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">My Works</p>
            <h2 className="section-title">Selected <span className="highlight-text">Projects</span></h2>
          </div>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image-placeholder">
                <img src={ibscImage} alt="IBSC Project" className="project-thumbnail" />
              </div>
              <div className="project-info">
                <div className="project-header-row">
                  <h3>IBSC</h3>
                  <span className="badge badge-live">Live</span>
                </div>
                <p className="project-role">Frontend Developer</p>
                <p className="project-desc">A professional corporate website developed with modern frontend technologies.</p>
                <a href="https://www.ibsccompany.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image-placeholder">
                <img src={itekaImage} alt="Iteka Ride app" className="project-thumbnail contain-img" />
              </div>
              <div className="project-info">
                <div className="project-header-row">
                  <h3>Iteka Ride</h3>
                  <span className="badge badge-live">Live</span>
                </div>
                <p className="project-role">FullStack (Mobile Apps) & UI/UX</p>
                <p className="project-desc">A comprehensive ride-hailing mobile application. Engineered the entire tech stack and designed the user experience.</p>
                <a href="https://itekaride.bi/" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image-placeholder">
                <img src={cwcImage} alt="CWC Construction" className="project-thumbnail" />
              </div>
              <div className="project-info">
                <div className="project-header-row">
                  <h3>CWC</h3>
                  <span className="badge badge-pending">Not Released</span>
                </div>
                <p className="project-role">Web Developer</p>
                <p className="project-desc">A modern portfolio website built for a construction company to showcase their architectural projects and services.</p>
                <a href="https://cwc-construction-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Preview <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / HIRE ME */}
      <section id="contact" className="contact-section">
        <div className="container contact-container">
          <div className="contact-info">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's work <span className="highlight-text">together</span></h2>
            <p className="contact-desc">
              Have a project in mind or looking for a skilled developer to join your team?
              I am available for freelance work and full-time opportunities.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>hakizimana0jean@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <Phone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+257 68 68 47 04</p>
                </div>
              </div>
              <div className="contact-method">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Bujumbura, Burundi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <textarea rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="button" className="btn btn-primary btn-block">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <img src={logoImage} alt="Peter logo" className="round-logo" />
          </div>
          <div className="social-links">
            <a href="https://github.com/peter-the-fuhrer/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hakizimana-jean-pierre-649056342/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/PeterHakiz0" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
          <p className="footer-copy">&copy; 2026 Peter Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
