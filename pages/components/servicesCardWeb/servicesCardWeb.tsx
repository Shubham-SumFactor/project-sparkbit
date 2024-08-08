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
            content: "We create websites that deliver a consistent experience across various operating systems, browsers, and devices. The goal is to ensure that users can access and interact with the website seamlessly, regardless of the platform they are using."
        },
        {
            title: "UI/UX Design",
            content: "We focused on intuitive design, seamless user interaction, and efficient user experience. Maintain a clear visual structure with proper spacing and margins. We used a color palette that reflects the brand and enhances readability and used tools like Sketch, Figma, and Adobe XD for wireframing and prototyping."
        },
        {
            title: "Live websites",
            content: "We have deployed websites on various platforms with careful planning, configuration, and testing by choosing the right platform and following best practices. Distributes content across global networks to reduce latency with CDN. Provides advanced services for high performance and security. Minify CSS, JavaScript, and HTML files to improve load time."
        },
        {
            title: "Testing & QA",
            content: "We have tested the number of websites Ensure that whole website functions work as expected. Evaluate the website's speed, scalability, and stability under various conditions. Verifies that the website works across different browsers, devices, and operating systems. Whenever new code changes do not adversely affect existing functionalities."
        },
        {
            title: "Concept & prototyping",
            content: "We conducted user research to understand the needs, preferences, and behaviors of your target audience and determine industry trends and best practices. Based on that, plan the type and structure of content to be presented on the website. Organize the content into categories and hierarchies for easy navigation and then prioritize the features based on their importance and feasibility."
        },
        {
            title: "App Store management",
            content: "We publish and distribute your apps to various Android app stores in China, iOS Appstore, and the Google Play Store, helping you navigate compliance."
        }
    ];



    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Website development</h2>

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