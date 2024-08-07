import React, { useEffect, useRef, useState } from 'react';
import styles from './technology.module.css';

const TechnologyCard = () => {

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



    const technologies = {
        "Flutter": ["Flutter", "Swift / Objective C", "Kotlin / Java", "Laravel", "Node.js"],
        "Native": ["API development", "CMS + CRM builds", "sCRM integrations", "DevOps"],
        // "API development": ["PHP + PHP Laravel", "Node.js", "Python Django"]
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Technologies</h2>


            <div className={styles.technologyGrid}>
                {Object.entries(technologies).map(([category, items]) => (
                    <div key={category} className={styles.technologyCategory}>
                        {/* <h4>{category}</h4> */}
                        <ul >
                            {items.map((item, index) => (
                                <li key={index} style={{ }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div></div>
    
            </div>

        </div>

    );
};

export default TechnologyCard;