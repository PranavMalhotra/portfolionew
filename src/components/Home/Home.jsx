import React, { useState } from 'react';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faGithub, faAws } from '@fortawesome/free-brands-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { SiMongodb, SiPostman, SiJenkins, SiBitbucket, SiExpress, SiFigma, SiTypescript, SiJira } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { SiFirebase } from 'react-icons/si';
import MouseEffect from './MouseEffect';
import Experience from '../Experience/Experience';
import Certifications from '../Certifications/Certifications';



const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const projects = [
    { title: "Tourism Website", className: "row1item1", url: "https://github.com/PranavMalhotra/Toronto-Tourism" },
    { title: "Jeopardy Quiz Game", className: "row1item2", url: "https://github.com/PranavMalhotra/Jeopardy-Game" },
    { title: "Dragon Ball Game", className: "row2item1", url: "https://github.com/PranavMalhotra/Dragon-Ball-Game" },
    { title: "Dictionary", className: "row2item2", url: "https://github.com/PranavMalhotra/Dictionary" },
    { title: "To-Do List", className: "row3item1", url: "https://github.com/PranavMalhotra/To-Do-List-App" },
    { title: "Translator App", className: "row3item2", url: "https://github.com/PranavMalhotra/Translator-App" },
    { title: "Explorez - Travel App", className: "row4item1", url: "https://github.com/matinadongol/TravelTracker" },
    { title: "Calculator", className: "row4item2", url: "https://github.com/PranavMalhotra/Calculator" },
    { title: "Youtube Clone", className: "row5item1", url: "https://github.com/PranavMalhotra/YoutubeClone" },
    { title: "Pet Adoption App", className: "row5item2", url: "https://github.com/PranavMalhotra/Pet-Adoption-App-UI-UX-" },
    { title: "Pokemon Card Generator", className: "row6item1", url: "https://github.com/PranavMalhotra/PokemonCardGenerator" },
  ];

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    
    <div className="home-container">
      <MouseEffect />


      <div className="main-screen">
        <div className="linkedin-icon">
          <a
            href="https://www.linkedin.com/in/pranav2798"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
        </div>

        <div className="icon-row">
          <div className="icon-wrapper document-icon">
            <a
              href="/portfolionew/Pranav_Malhotra_Resume.pdf"
              download
              aria-label="Download Resume"
            >
              <i className="fa-solid fa-file-lines fa-3x"></i>
            </a>
          </div>

          <div className="profile-picture">
            <img
              src="/portfolionew/IMG_6789.png"
              alt="Profile of Pranav"
            />
          </div>

          <div className="icon-wrapper contact-icon">
            <button onClick={togglePopup} aria-label="Contact Information">
              <i className="fa-solid fa-id-badge fa-3x"></i>
            </button>
          </div>
        </div>

        <div className="github-icon">
          <a
            href="https://github.com/PranavMalhotra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-square-github fa-3x"></i>
          </a>
        </div>

        {isPopupOpen && (
          <div className="popup-backdrop">
            <div className="popup">
              <h3>Contact Information</h3>
              <p>Email: <a href="mailto:malhotrapranav298@gmail.com">malhotrapranav298@gmail.com</a></p>
              <p>Phone: (437) 799-6788</p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/pranav2798" target="_blank" rel="noopener noreferrer">linkedin.com/in/pranavmalhotra</a></p>
              <button onClick={togglePopup} className="close-btn">Close</button>
            </div>
          </div>
        )}
      </div>


      <div className="Intro">
      <h1 className="typewriter">Hi, I'm Pranav Malhotra</h1>

  <div className="content">
    <section className="video-project">
      <video
        width="300"
        height="400"
        autoPlay
        muted
        loop
        style={{border: "1px solid rgba(0, 0, 0, 0.1)" }}
      >
        <source src="/portfolionew/CardVideo.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>

    <section className="about-me">
      <h2>About Me</h2>
      <p>
      I'm a passionate Full Stack Developer and UI/UX Designer with a talent for creating responsive, 
      visually appealing web applications. My expertise lies in JavaScript frameworks like React, 
      along with modern web development practices. I enjoy bringing user-centered designs to life!
      <br></br>
      Apart from development, I have a passion for Sports, Art, Cars, DIY projects, Fitness, Food, and spending time outdoors. 
      These interests keep me energized and inspire creativity, 
      helping me bring fresh perspectives and problem-solving skills to my work.
      </p>
    </section>

  </div>
  

  <div className="skills-container">
  <h2> Skills </h2>
  <div className="skills-category">
    <div className = "categoryName">
    <h3>Frontend</h3>
    </div>
    <div className="skills">
      <div className="skill-item">
        <FontAwesomeIcon icon={faHtml5} className="skill-icon html" />
        <span className="icon-name">HTML5</span>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css" />
        <span className="icon-name">CSS3</span>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faJsSquare} className="skill-icon js" />
        <span className="icon-name">JavaScript</span>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faReact} className="skill-icon react" />
        <span className="icon-name">React</span>
      </div>
      <div className="skill-item">
        <SiTypescript className="skill-icon typescript" /> {/* Corrected this line */}
        <span className="icon-name">TypeScript</span>
      </div>
    </div>
  </div>

  <div className="skills-category">
  <div className = "categoryName">
    <h3>Backend</h3>
    </div>
    <div className="skills">
      <div className="skill-item">
        <FontAwesomeIcon icon={faNodeJs} className="skill-icon nodejs" />
        <span className="icon-name">Node.js</span>
      </div>
      <div className="skill-item">
        <SiExpress className="skill-icon express" />
        <span className="icon-name">Express</span>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faJava} className="skill-icon java" />
        <span className="icon-name">Java</span>
      </div>
      <div className="skill-item">
        <SiPostman className="skill-icon postman" />
        <span className="icon-name">Postman</span>
      </div>
    </div>
  </div>

  <div className="skills-category">
  <div className = "categoryName">
    <h3>DevOps</h3>
    </div>
    <div className="skills">
      <div className="skill-item">
        <FontAwesomeIcon icon={faAws} className="skill-icon aws" />
        <span className="icon-name">AWS</span>
      </div>
      <div className="skill-item">
        <SiJenkins className="skill-icon jenkins" />
        <span className="icon-name">Jenkins</span>
      </div>
      <div className="skill-item">
        <SiJira className="skill-icon jira" />
        <span className="icon-name">Jira</span>
      </div>
      <div className="skill-item">
        <SiBitbucket className="skill-icon bitbucket" />
        <span className="icon-name">Bitbucket</span>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faGithub} className="skill-icon github" />
        <span className="icon-name">GitHub</span>
      </div>
    </div>
  </div>

  <div className="skills-category">
  <div className = "categoryName">
    <h3>Database</h3>
    </div>
    <div className="skills">
      <div className="skill-item">
        <FaDatabase className="skill-icon sql" />
        <span className="icon-name">SQL</span>
      </div>
      <div className="skill-item">
        <SiFirebase className="skill-icon firebase" />
        <span className="icon-name">Firebase</span>
      </div>
      <div className="skill-item">
        <SiMongodb className="skill-icon mongodb" />
        <span className="icon-name">MongoDB</span>
      </div>
    </div>
  </div>

  <div className="skills-category">
  <div className = "categoryName">
    <h3>UI/UX</h3>
    </div>
    <div className="skills">
      <div className="skill-item">
        <FontAwesomeIcon icon={faPalette} className="skill-icon uiux" />
        <span className="icon-name">UI/UX</span>
      </div>
      <div className="skill-item">
        <SiFigma className="skill-icon figma" />
        <span className="icon-name">Figma</span>
      </div>
    </div>
  </div>
</div>
</div>

<Experience />

      <div className="projpage-container">
        <h1> Projects </h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.url}
              className={`project-item ${project.className}`}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
            >
              <h2>{project.title}</h2>
            </a>
          ))}
        </div>
      </div>
    
      <Certifications/>
    </div>
  );
};

export default Home;
