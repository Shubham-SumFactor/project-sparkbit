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
                    <div className={styles.graphicElement}>
                        <svg width="796" height="686" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 796 686">
                            <defs>
                                <path id="pathHeroCS1" d="M281.179 79.269H1M281.179 606.731H1"></path>
                                <path id="pathHeroCS2" d="M500.104 8.355h280.18M500.104 678.007h280.18"></path>
                            </defs>
                            <path d="M398.121 538.215c-107.751 0-195.086-87.309-195.086-195.034s87.335-195.034 195.086-195.034" stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10" strokeDasharray="5 5"></path>
                            <path d="M398.12 148.147c163.913 0 296.806 87.309 296.806 195.034S562.033 538.215 398.12 538.215" stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10"></path>
                            <path d="M398.12 538.215C178.787 538.215 1 450.906 1 343.181s177.787-195.034 397.12-195.034" stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10" strokeDasharray="5 5"></path>
                            <path d="M398.12 148.147c219.334 0 397.121 87.309 397.121 195.034S617.454 538.215 398.12 538.215" stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10"></path>
                            <path d="M398.12 148.147c107.751 0 195.086 87.309 195.086 195.034S505.871 538.215 398.12 538.215" stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10"></path>
                            <path d="M398.12 538.215c-135.831 0-245.958-87.309-245.958-195.034S262.289 148.147 398.12 148.147" stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10" strokeDasharray="5 5"></path>
                            <path d="M398.12 148.147c60.378 0 109.335 87.309 109.335 195.034S458.498 538.215 398.12 538.215V148.147Z" stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10"></path>
                            <use href="#pathHeroCS1" className={styles.animationPath} stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10" strokeDasharray="5 5"></use>
                            <use href="#pathHeroCS1" className={`${styles.animationPath} ${styles.animationPathCs1}`} stroke="#000" strokeWidth="1"></use>
                            <use href="#pathHeroCS2" className={styles.animationPath} stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10"></use>
                            <use href="#pathHeroCS2" className={`${styles.animationPath} ${styles.animationPathCs2}`} stroke="#000" strokeWidth="1"></use>
                            <path d="M279.478 87.209a7.373 7.373 0 0 0 0-14.746 7.374 7.374 0 1 0 0 14.746ZM279.478 613.537a7.373 7.373 0 1 0 0-14.746 7.374 7.374 0 1 0 0 14.746ZM787.648 685a7.373 7.373 0 1 0 0-14.746 7.373 7.373 0 0 0 0 14.746ZM781.976 15.746A7.373 7.373 0 1 0 781.977 1a7.373 7.373 0 0 0-.001 14.746Z" fill="#000" stroke="#FBFBFB" strokeWidth=".5" strokeMiterlimit="10"></path>
                        </svg>
                    </div>
                </div>


                <AutomatedAssessment
                    sideHeading="Operational Transformation for Sonoma Valley Transport"
                    title="Web & Mobile Solutions"
                    description="Develop web & mobile solutions to replace outdated systems with enhance functionality."
                    readMoreLink="/caseStudies"
                    graphImage="/sumfactor/svt-inner-portfolio.png"
                />

                <AutomatedAssessment
                    sideHeading="Infrastructure transformation (DevOps)"
                    title=" Infrastructure Migration At BookAirportCab"
                    description="Migrating BookAirportCab's infrastructure to Docker-based architecture V1 for enhanced scalability and performance."
                    readMoreLink="/caseStudies"
                    graphImage="/sumfactor/bookCab.png"
                />

                <AutomatedAssessment
                    sideHeading=" Mobile Solutions For IFE"
                    title=" Infrastructure Transformation For In-Flight Entertainment In Spicejet And Yeti Airlines"
                    description="Enhance in-flight entertainment using Android-based IFE devices."
                    readMoreLink="/caseStudies"
                    graphImage="/sumfactor/spiceScreen.png"
                />

                <AutomatedAssessment
                    sideHeading="Pagan Almanac Android & iOS Application"
                    title="Pagan Almanac Android & iOS Application"
                    description="Expanding the iOS-based Pagan Almanac to Android while maintaining seamless functionality and user experience."
                    readMoreLink="/caseStudies"
                    graphImage="/sumfactor/paganLogo.webp"
                />

                <AutomatedAssessment
                    sideHeading="iOS Application"
                    title="Prev."
                    description="The project focuses on developing Prev, an innovative app that delivers pregnancy-avoidance pills based on health metrics."
                    readMoreLink="/caseStudies"
                    graphImage="/sumfactor/prev.jpeg"
                />

                <AutomatedAssessment
                    sideHeading="Mobile Application"
                    title="Labnear Mobile Application "
                    description="Bringing Labnear's innovative vision to life through a fully functional iOS app."
                    readMoreLink="/caseStudies"
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
