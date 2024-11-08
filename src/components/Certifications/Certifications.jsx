import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Express JS',
      platform: 'LinkedIn'
    },
    {
      title: 'User Experience',
      platform: 'LinkedIn'
    },
    {
      title: 'Web APIs',
      platform: 'LinkedIn'
    },
    {
      title: 'JavaScript: Async',
      platform: 'LinkedIn'
    },
    {
      title: 'Node.js',
      platform: 'LinkedIn'
    },
    {
      title: 'Node.js Essential',
      platform: 'LinkedIn'
    },
    {
      title: 'TypeScript',
      platform: 'LinkedIn'
    },
    {
      title: 'Git from Scratch',
      platform: 'LinkedIn'
    },
    {
      title: 'Digital Marketing',
      platform: 'Udemy'
    },
    {
      title: 'JavaScript',
      platform: 'Udemy'
    }
  ];

  return (
    <div className="certifications-container">
      <h2>Licenses & Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            <div className="cert-details">
              <h3>{cert.title}</h3>
              <p>{cert.platform} | Issued {cert.issueDate}</p>
              {cert.skills && (
                <p>
                  <strong>Skills:</strong> {cert.skills.join(' · ')}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
