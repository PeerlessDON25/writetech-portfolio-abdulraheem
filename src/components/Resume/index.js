import React from 'react';
import styles from './styles.module.css';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <header className={styles.header}>
        <h1>AbdulRaheem Olurode</h1>
        <p className={styles.contact}>
          Lagos, Nigeria | abdraheemolu2020@gmail.com<br />
          <a href="https://linkedin.com/in/abdulraheem-olurode25" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn Profile
          </a>{' '}
          |{' '}
          <a href="https://github.com/PeerlessDON25" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub Portfolio
          </a>
        </p>
      </header>

      <section className={styles.section}>
        <h2>Technical Writer & Documentation Engineer</h2>
        <p>
          Accomplished Technical writer with experience in creating clear, user-focused documentation for developers. 
          Skilled in API documentation, technical writing, and developer advocacy. Passionate about making complex 
          technical concepts accessible through well-structured documentation and tutorials. Currently open to new 
          opportunities and available to start immediately.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Professional Experience</h2>
        
        <div className={styles.experience}>
          <h3>Technical Content Writer</h3>
          <p className={styles.company}> Revive Digital Solutions| March 2025 – September 2025</p>
          <ul>
            <li>Researched and wrote web content and product details to help developers build faster</li>
            <li>Created clear, concise documentation that reduced support tickets by 40% and improved developer experience</li>
            <li>Collaborated with developers to understand technical concepts and translate them into user-friendly content</li>
          </ul>
        </div>
      
        
      
        <div className={styles.experience}>
          <h3>Technical Writer & Documentation Lead</h3>
          <p className={styles.company}>TechCrush | May 2025</p>
          <ul>
            <li>Reduced development ambiguity by 40% through comprehensive app requirement documentation</li>
            <li>Created ecosystem documentation covering server architecture, database schemas, and APIs</li>
            <li>Implemented version-controlled documentation system, reducing support tickets by 50%</li>
          </ul>
        </div>

       

        <div className={styles.experience}>
          <h3>Open Source Contributor (Volunteer)</h3>
          <p className={styles.company}>Technical Writing Mentorship Program | May 2025 – Present</p>
          <ul>
            <li>Migrated documentation to Docusaurus, standardizing templates and improving navigation</li>
            <li>Optimized page performance by replacing hosted images with local assets and normalizing metadata</li>
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Education</h2>
        <div className={styles.education}>
          <h3>Bachelor Degree in Information Technology</h3>
          <p>Nigerian University of Technology and Management | 2020 - 2025</p>
          <p>Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Web Development</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          <p>
            <strong>Technical:</strong> API Documentation, Technical Writing, User Guides, OpenAPI/Swagger, Markdown, REST APIs
          </p>
          <p>
            <strong>Technologies:</strong> JavaScript, React, Git, Docusaurus, VS Code, Postman, Swagger
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.project}>
          <h3>API Documentation Portal</h3>
          <p>Developed comprehensive API documentation for an AI/ML startup using OpenAPI and Swagger UI, reducing integration time by 40%.</p>
          <p><strong>Technologies:</strong> OpenAPI, Swagger UI, Docusaurus, GitHub Actions</p>
        </div>
        <div className={styles.project}>
          <h3>Refract Documentation</h3>
          <p>Created and maintained developer documentation for Refract, focusing on clear API references and integration guides. Improved developer experience with practical examples and troubleshooting guides.</p>
          <p><strong>Technologies:</strong> Markdown, Docusaurus, OpenAPI, React, GitHub</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
