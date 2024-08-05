import React, { useEffect, useRef, useState } from 'react';
import styles from './servicesCard.module.css';

const ServicesCard = () => {

    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const steps = [
        {
            title: "01. Defining the technical problem for a specific business need",
            content: "We work with a clients to achieve a high-level overview of the ML application and classify possible technical areas, always considering various approaches to building the infrastructure and developing the ML model."
        },
        {
            title: "02. Conducting in-depth research/prior art analysis",
            content: "We don't reinvent the wheel; we identify state-of-the-art research papers for related problems and analyze the strengths and limitations of the described approaches."
        },
        {
            title: "03. Selecting the solution technology",
            content: "We identify the most efficient approach based on the problem, the research, and constraints (such as a limited data set). We don't strive for the fanciest solution: sometimes, a heuristic approach may be a better choice than sophisticated deep learning."
        },
        {
            title: "04. Developing and managing the data set",
            content: "The importance of a good data set is quite often underestimated. It is often expensive and time-consuming to build. It is also difficult to manage it and ensure the data is consistent. We bring creativity in designing data augmentations and experience in data governance and management."
        },
        {
            title: "05. Designing, building, and training the model",
            content: "It's common to validate dozens of model variations and run hundreds of training experiments. We combine ML skills with engineering excellence and passion for automation to keep this dynamic and highly experimental work under control."
        },
        {
            title: "06. Deploying and integrating the model",
            content: "ML research results are only useful if they deliver business value to users. We deploy the models and expose APIs that other engineers can use without any knowledge of ML."
        }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>SCOPE OF AN ML PROJECT</h2>

            <div className={isMobile ? styles.sliderContainer : styles.grid}>
                {isMobile ? (
                    <div className={styles.slider} ref={sliderRef}>
                        {steps.map((step, index) => (
                            <div key={index} className={styles.slide}>
                                <h3>{step.title}</h3>
                                <p>{step.content}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    steps.map((step, index) => (
                        <div key={index} className={styles.gridItem}>
                            <h3>{step.title}</h3>
                            <p>{step.content}</p>
                        </div>
                    ))
                )}
            </div>

        
        </div>
    );
};

export default ServicesCard;