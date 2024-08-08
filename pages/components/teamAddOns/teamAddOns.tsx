import React, { useEffect, useRef, useState } from 'react';
import styles from './teamAddOns.module.css';

const TeamAddOns = () => {

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
        "Role": ["UX + UI designer", "Project manager", "Business analyst"],
        "Position": ["Back-end developer", "QA tester", "Technical director"],
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>TEAM ADD-ONS</h2>


            <div className={styles.technologyGrid}>
                {Object.entries(technologies).map(([category, items]) => (
                    <div key={category} className={styles.technologyCategory}>
                        {/* <h4>{category}</h4> */}
                        <ul >
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div></div>
    
            </div>

        </div>

    );
};

export default TeamAddOns;