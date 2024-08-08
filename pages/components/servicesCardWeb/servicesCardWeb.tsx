import React, { useEffect, useRef, useState } from 'react';
import styles from './servicesCardWeb.module.css';

const ServicesCardWeb = () => {

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
            title: "Cross-platform",
            content: "We create websites with a consistent experience across various operating systems, browsers, and devices, ensuring seamless user access and interaction regardless of the platform."
        },
        {
            title: "UI/UX Design",
            content: "We prioritize intuitive design and efficient user experience, utilizing tools like Sketch, Figma, and Adobe XD for wireframing and prototyping, with a clear visual structure, brand-reflective color palettes, and proper spacing."
        },
        {
            title: "Live websites",
            content: "We deploy websites with meticulous planning, configuration, and testing, utilizing CDN for reduced latency, and ensuring high performance and security through best practices and file minification."
        },
        {
            title: "Testing & QA",
            content: "We verify website functionality, speed, scalability, and stability under various conditions, ensuring compatibility across browsers, devices, and operating systems while safeguarding existing functionalities with thorough testing"
        },
        {
            title: "Concept & prototyping",
            content: "We conduct user research to understand target audience needs, plan content structure, organize content for easy navigation, and prioritize features based on importance and feasibility."
        },
        // {
        //     title: "App Store management",
        //     content: "We publish and distribute your apps to various Android app stores in China, iOS Appstore, and the Google Play Store, helping you navigate compliance."
        // }
    ];



    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>WEBSITE DEVELOPMENT</h2>

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

export default ServicesCardWeb;