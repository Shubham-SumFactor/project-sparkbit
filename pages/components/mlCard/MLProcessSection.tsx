import React, { useEffect, useRef, useState } from 'react';
import styles from './MLProcessSection.module.css';

const processes = [
  {
    title: "DATA ENGINEERING",
    description: "All the data is divided into datasets and stored in a central repository. Data management and maintenance are straightforward, and different ML models can be trained and validated on identical data samples for easier comparison.",
    icon: "grid"
  },
  {
    title: "ML MODEL ENGINEERING",
    description: "We put ML models under version control. All the pipelines are automated, and test environments are customized and isolated. It makes experiment results reproducible, so we can focus on running more experiments and developing the most promising approaches.",
    icon: "star"
  },
  {
    title: "COMPARING EXPERIMENTS RESULTS",
    description: "Performance metrics defining the ML model's business usability are automatically collected and uploaded to the visual analytic dashboard. All the stakeholders have access to it, which speeds up choosing the approach we want to pursue.",
    icon: "wave"
  },
  {
    title: "ML OPERATIONS",
    description: "Model deployment is automated and supports various integration and testing techniques.",
    icon: "graph"
  }
];

const MLProcessSection = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobileContainer : ''}`}>
      {processes.map((process, index) => (
        <div key={index} className={styles.processCard}>
          <div className={styles.iconContainer}>
            <div className={`${styles.icon} ${styles[process.icon]}`}></div>
          </div>
          <div>
            <h3>{process.title}</h3>
            <p>{process.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MLProcessSection;