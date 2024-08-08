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
            title: "Cross-platform",
            content: "We specialize in building cross-platform (Flutter) apps from one codebase, building mobile and tablet apps for iOS, Android, desktop, and web applications."
        },
        {
            title: "Native Android & iOS",
            content: "We build high-performance native apps for iOS (Swift) and Android (Kotlin/Java) to ensure complex requirements convert to seamless user experiences."
        },
        {
            title: "Concept & prototyping",
            content: "We help you conceptualize your app ideas in a discovery phase to design and visualize the core features and functions in UX in an interactive prototype."
        },
        {
            title: "App UI/UX design",
            content: "Our design team balances beautiful aesthetics with meaningful experiences that are easy to use and focused on user retention and conversions."
        },
        {
            title: "Testing & QA",
            content: "We provide quality assurance testing from unit, integration, and system testing to performance, usability, and compatibility testing to meet the highest standards."
        },
        {
            title: "App Store management",
            content: "We publish and distribute your apps to various Android app stores in China, iOS Appstore, and the Google Play Store, helping you navigate compliance."
        }
    ];



    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>MOBILE APP DEVELOPMENT</h2>

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