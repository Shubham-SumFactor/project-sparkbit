import Link from 'next/link';
import Image from 'next/link';
import styles from '../styles/caseStudies.module.css'
import NavBar from './components/navBar/NavBar';
import ContactUs from './components/contactUs/ContactUs';
import AutomatedAssessment from './components/caseStudySection/assessment';

const CaseStudies = () => {



    return (

        <div className={styles.container}>

            <main className={styles.main}>

                <div className="vertical-lines">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <NavBar />
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        Challenging projects - delivered
                    </h1>
                    <div className={styles.graphicElement}></div>
                </div>


                <AutomatedAssessment
                    sideHeading="Operational Transformation for Sonoma Valley Transport"
                    title="Develop web and mobile applications to replace outdated systems and enhance functionality."
                    description="Managing operations with Excel sheets, hindering scalability and adaptability"
                    readMoreLink="/caseStudies"
                    graphImage="/sumfactor/SVTLOGO.jpeg"
                />

                <AutomatedAssessment
                    sideHeading="Infrastructure Migration at BookAirportCab"
                    title="Migrating BookAirportCab's infrastructure to Docker-based architecture V1 for enhanced scalability and performance."
                    description="Create a robust new architecture and migrate existing services seamlessly without downtime."
                    readMoreLink="/meetus"
                    graphImage="/sumfactor/bookCab.png"
                />

                <AutomatedAssessment
                    sideHeading="Infrastructure Transformation for In-Flight Entertainment in Spicejet and Yeti Airlines"
                    title="Enhance in-flight entertainment using Android-based IFE devices."
                    description="Driving innovative upgrades for in-flight entertainment at Spicejet and Yeti Airlines with cutting-edge Android-based IFE technology."
                    readMoreLink="/case-study"
                    graphImage="/sumfactor/spiceScreen.png"
                />

                <AutomatedAssessment
                    sideHeading="Pagan Almanac Android & iOS Adaptation"
                    title="Expanding the iOS-based Pagan Almanac to Android while maintaining seamless functionality and user experience."
                    description="The project involves the technical conversion and adaptation of Pagan Almanac to the Android platform, ensuring feature parity and client satisfaction."
                    readMoreLink="/case-study"
                    graphImage="/sumfactor/paganLogo.webp"
                />

                <AutomatedAssessment
                    sideHeading="Prev.- iOS Application"
                    title="The project focuses on developing Prev, an innovative app that delivers pregnancy-avoidance pills based on health metrics."
                    description="Utilize UIKit technology to create a user-friendly iOS app with patented backend logic."
                    readMoreLink="/case-study"
                    graphImage="/sumfactor/prev.jpeg"
                />

                <AutomatedAssessment
                    sideHeading="Labnear iOS Application"
                    title="Bringing Labnear's innovative vision to life through a fully functional iOS app."
                    description="The project aims to convert a startup vision into a robust and user-friendly iOS application to support critical patient care, especially during the COVID-19 pandemic."
                    readMoreLink="/case-study"
                    graphImage="/sumfactor/labNear.png"
                />

                {/* <AutomatedAssessment
                    sideHeading="MACHINE LEARNING"
                    title="Machine learning for recipe recommendation"
                    description="Building an NLP-based system to understand cooking ingredients and refine users’ dishes"
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/image7.svg"
                />

                <AutomatedAssessment
                    sideHeading="R&D PROTOTYPES"
                    title="Smart Parking System"
                    description="Designing advanced data analysis algorithms for calculating the probability of finding a parking spot."
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/image8.svg"
                />

                <AutomatedAssessment
                    sideHeading="R&D PROTOTYPES"
                    title="Personalized Videos For Marketing Campaigns"
                    description="Developing a system to support creating personalized video advertisements and embedding them on various digital media"
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/image9.svg"
                />

                <AutomatedAssessment
                    sideHeading="R&D PROTOTYPES"
                    title="Customer-centric telematics solution"
                    description="Modular. white-labeled telematics application to detect dangerous driving habits with a set o complex algorithms for processing high-frequency & IoT data"
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/image10.svg"
                /> */}

            </main>

            <ContactUs />


        </div>

    );
};

export default CaseStudies;
