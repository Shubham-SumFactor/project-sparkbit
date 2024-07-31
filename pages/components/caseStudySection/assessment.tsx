import React from 'react';
import styles from './assessment.module.css';

interface AutomatedAssessmentProps {
  sideHeading: string;
  title: string;
  description: string;
  readMoreLink: string;
  graphImage: string;
}


const AutomatedAssessment : React.FC<AutomatedAssessmentProps> = ({ sideHeading ,title, description, readMoreLink, graphImage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>{sideHeading}</div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={readMoreLink} className={styles.readMore}>Read this case →</a>
      </div>
      <div className={styles.graph}>
        <img src={graphImage} alt="Graph" />
      </div>
    </div>
  );
};

export default AutomatedAssessment;