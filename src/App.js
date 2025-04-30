import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contacts</a>
      </nav>

      <header id="about" className="section about">
        <div className="about-content">
          <h3>Nice to meet you!</h3>
          <h1>Im, John Joseph Israel</h1>
          <img src="/profile.png" alt="John Joseph Israel" className="profile-image" />
          <h4>Developer/Programmer</h4>
          <div className="text">
            <p>
              Hello! John Joseph Israel, I'm a web developer dedicated to building clean, efficient, 
              and scalable digital solutions. With experience in both frontend and backend technologies, 
              I enjoy turning complex problems into simple, elegant interfaces and robust systems.
            </p>
          </div>
        </div>
      </header>

      <section id="skills" className="section skills">
        <h2>Skills</h2>
        <ul>
          <li>💻 Computer Literate</li>
          <li>🧠 Critical Thinking</li>
          <li>🎨 Basic Graphic Design</li>
          <li>👨‍💻 Basic Programming</li>
        </ul>
      </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <p>Coming soon...</p>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Facebook: <a href="https://www.facebook.com/profile.php?id=61566987343978">JOHN</a></p>
        <p>GitHub: <a href="https://github.com/Johnjsp/johnn.git">JOSEPH</a></p>
      </section>
    </div>
  );
}

export default App;