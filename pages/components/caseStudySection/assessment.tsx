import React from 'react';
import styles from './assessment.module.css';
import Image from 'next/image';


interface AutomatedAssessmentProps {
  sideHeading: string;
  title: string;
  description: string;
  readMoreLink: string;
  graphImage: string;
}


const AutomatedAssessment: React.FC<AutomatedAssessmentProps> = ({ sideHeading, title, description, readMoreLink, graphImage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>{sideHeading}</div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {/* <a href={readMoreLink} className={styles.readMore}>Read this case →</a> */}
        <button className={styles.readThisButton} onClick={() => window.location.href = readMoreLink}>
          <span>Read this case</span>
          <Image src="/caseStudyArrow.svg" alt="rightarrow" height={15} width={18} className={styles.readThisButtonArrow} />
        </button>

      </div>
      <div className={styles.graph}>
        <img src={graphImage} alt="Graph" />
      </div>
    </div>
  );
};

export default AutomatedAssessment;