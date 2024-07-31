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
                    sideHeading="Machine Learning"
                    title="Automated human body assessment"
                    description="Recognizing postural disorders and assigning corrective exercises based on a 3D scan"
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/mlImage1.svg"
                />

                <AutomatedAssessment
                    sideHeading="R&D PROTOTYPES"
                    title="AI Camera-based driving analysis tool"
                    description="Analyzing a high volume of multi-sensorial time-series data to detect hazardous driver behavior"
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/image2.svg"
                />

                <AutomatedAssessment
                    sideHeading="ARCHITECTURE & BACKEND"
                    title="Unique E-commerce System"
                    description="Migration and development of a luxury Italian brands E-commerce to support global sales and shipping"
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/image3.svg"
                />

                <AutomatedAssessment
                    sideHeading="ARCHITECTURE & BACKEND"
                    title="Backend of a prototype telematics system"
                    description="Collecting and processing various data to translate it into individual user score"
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/image4.svg"
                />

                <AutomatedAssessment
                    sideHeading="R&D PROTOTYPES"
                    title="Military-grade communication tool"
                    description="Distributed system to support maritime missions operating offline at sea with data exchange based on custom military protocols"
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/image5.svg"
                />

                <AutomatedAssessment
                    sideHeading="MACHINE LEARNING"
                    title="Supporting business scalability with Machine Learning"
                    description="Cutting the development and operations costs by implementing ML-heavy automation and introducing modern system architecture"
                    readMoreLink="/case-study"
                    graphImage="/caseStudy/image6.svg"
                />

                <AutomatedAssessment
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
                />

            </main>

            <ContactUs />


        </div>

    );
};

export default CaseStudies;
