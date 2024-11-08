import React, { useState } from 'react';
import './Experience.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const timelineData = [
    {
      title: "Bachelor’s of Technology in Computer Science and Engineering",
      institution: "Manav Rachna International Institute",
      date: "2016 - 2020",
      details: "Focused on software engineering, algorithms, and data structures.",
      type: 'education' 
    },
    {
      title: "Post-Graduate Diploma in Mobile Application Development",
      institution: "Fanshawe College",
      date: "2023 - 2024",
      details: "Specialized in React, React Native, UI/UX, Android and iOS Development.",
      type: 'education'
    },
    {
      title: "Freelance Front-End Developer & UI/UX Designer",
      company: "Self-Employed",
      date: "2023 - Present",
      details: 
      <ul>
      <li>Built interactive features and components with React and React Native, increasing user engagement by 30%.</li>
      <li>Designed high-fidelity wireframes, reducing design revisions by 20% and aligning outcomes with client expectations.</li>
      <li>Conducted rigorous unit testing, achieving a 95% code coverage and reducing bug reports by 40%.</li>
      </ul>,
      type: 'job'
    },
    {
      title: "Web Developer Intern",
      company: "Cha-Chi Communications Pvt. Ltd.",
      date: "Jan 2024 - April 2024",
      details: <ul>
      <li>Developed dynamic and scalable web applications using React, enhancing user engagement by 30%, reducing development time by 40% through efficient component design, and advanced state management.</li>
      <li>Integrated MongoDB and Node.js for backend, optimizing database performance and ensuring data integrity.</li>
      <li>Proficiently used Git, AWS, and JIRA ensuring 90% on-time project delivery.</li>
    </ul>,
      type: 'job'
    },
    {
      title: "Technology Process Trainee",
      company: "Ameriprise Financial Pvt. Ltd.",
      date: "Mar 2022 - Dec 2022",
      details: 
      <ul>
      <li>Developed responsive web applications, increasing traffic by 25% through cross-device compatibility.</li>
      <li>Focused on intuitive and visually appealing User Interfaces using Figma and Adobe XD.</li>
      <li>Executed advanced SQL queries on AWS Athena to extract valuable insights for decision-making.</li>
    </ul>,
      type: 'job'
    },
    {
      title: "Junior Web Developer",
      company: "Om HRA Pvt. Ltd.",
      date: "Feb 2021 - Feb 2022",
      details: 
      <ul>
      <li>Assisted in designing web pages and applications, enhancing User Interface functionality.</li>
      <li>Collaborated with senior developers to implement multiple new web features, boosting user engagement by 20%.</li>
      <li>Executed CSS updates, enhancing design and responsiveness, leading to a 15% boost in user satisfaction.</li>
    </ul>,
      type: 'job'
    },
  ];

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Separate the data into education and job arrays
  const educationData = timelineData.filter(item => item.type === 'education');
  const jobData = timelineData.filter(item => item.type === 'job');

  return (
    <div className="expmain-container">
      <h2 className="experience-heading">CAREER TIMELINE</h2>

      <div className="timeline-section">
  <h3 className="section-heading">Education</h3>
  <div className="timeline education-timeline"> 
    {educationData.map((item, index) => (
      <div className="timeline-item" key={index}>
        <div className={`timeline-content education-content`}>
          <div className="icon-wrapper">
            <FaGraduationCap className="timeline-icon" />
          </div>
          <h3>{item.title}</h3>
          <h4>{item.institution}</h4>
          <span>{item.date}</span>
          <button onClick={() => toggleDetails(index)}>
            {expandedIndex === index ? 'Show Less' : 'Show More'}
          </button>
          {expandedIndex === index && (
            <div className="more-details">
              <p>{item.details}</p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

<div className="timeline-section">
  <h3 className="section-heading">Experience</h3>
  <div className="timeline job-timeline">
    {jobData.map((item, index) => (
      <div className="timeline-item" key={index}>
        <div className={`timeline-content job-content`}>
          <div className="icon-wrapper">
            <FaBriefcase className="timeline-icon" />
          </div>
          <h3>{item.title}</h3>
          <h4>{item.company}</h4>
          <span>{item.date}</span>
          <button onClick={() => toggleDetails(index)}>
            {expandedIndex === index ? 'Show Less' : 'Show More'}
          </button>
          {expandedIndex === index && (
            <div className="more-details">
              <p>{item.details}</p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Experience;
