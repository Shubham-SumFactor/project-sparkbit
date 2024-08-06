// components/CaseStudies.js
import React from 'react';
import styles from './projectYear.module.css';

const architectureStudies = [
  { project: "Unique E-commerce System", industry: "E-commerce", years: "2018-2022" },
  { project: "Backend of a prototype telematics system", industry: "Telematics", years: "2014-2020" },
  { project: "Military-grade communication tool", industry: "Governmental / Military", years: "2021-2022" }
];

const rdStudies = [
  { project: "Automated human body assessment" },
  { project: "AI Camera-based driving analysis tool" },
  { project: "Personalized Videos For Marketing Campaigns" }
];

const ProjectYear = () => {
    return (
        <div className={styles.outerContainer}>
          <div className={styles.container}>
            <h1 className={styles.title}>Selected Architecture & Backend Case Studies</h1>
            <div className={styles.grid}>
              <div className={styles.header}>PROJECT</div>
              <div className={styles.header}>INDUSTRY</div>
              <div className={styles.header}>YEARS</div>
              <div className={styles.header}></div>
              {architectureStudies.map((study, index) => (
                <React.Fragment key={index}>
                  <div>{study.project}</div>
                  <div>{study.industry}</div>
                  <div>{study.years}</div>
                  <div className={styles.arrow}>→</div>
                </React.Fragment>
              ))}
            </div>
            {/* <button className={styles.button}>See all case studies →</button> */}
    
            <h2 className={styles.mobileTitle}>Selected ML Case Studies</h2>
            <div className={styles.mobileList}>
              {rdStudies.map((study, index) => (
                <div key={index} className={styles.mobileItem}>
                  <span>{study.project}</span>
                  <span className={styles.arrow}>→</span>
                </div>
              ))}
            </div>
            <button className={styles.button}>See all case studies →</button>
          </div>
        </div>
      );
};

export default ProjectYear;