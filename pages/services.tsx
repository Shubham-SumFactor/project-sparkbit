import Link from 'next/link';
import Image from 'next/link';
import styles from '../styles/services.module.css'
import NavBar from './components/navBar/NavBar';
import ServicesCard from './components/servicesCard/servicesCard';
import MLProcessSection from './components/mlCard/MLProcessSection';
import ProjectYear from './components/projectYear/projectYear';
import TechnologyCard from './components/technologyCard/technologyCard';
import TeamAddOns from './components/teamAddOns/teamAddOns';
import ContactUs from './components/contactUs/ContactUs';
import ServicesCardWeb from './components/servicesCardWeb/servicesCardWeb';

const Services = () => {

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
                        Solutions we provide
                    </h1>
                    <div className={styles.graphicElement}>

                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="1039" height="580" viewBox="0 0 1039 580">
                            <defs>
                                <path id="path1" d="M163.13 452.172c89.541 0 162.129-72.607 162.129-162.172S252.671 127.828 163.13 127.828C73.588 127.828 1 200.435 1 290s72.588 162.172 162.13 162.172Z"></path>
                                <path id="path2" d="M638.346 536.731c89.542 0 162.13-110.465 162.13-246.731S727.888 43.269 638.346 43.269 476.216 153.734 476.216 290s72.588 246.731 162.13 246.731Z"></path>
                            </defs>
                            <use href="#path1" className={styles.animationPath} stroke="#000" strokeWidth=".5" strokeMiterlimit="10" strokeDasharray="5 5"></use>
                            <use href="#path1" className={`${styles.animationPath} ${styles.animationPathS1}`} stroke="#fff" strokeWidth="1" strokeMiterlimit="10" strokeDasharray="5 5"></use>
                            <path d="M400.727 494.462c89.542 0 162.13-91.541 162.13-204.462 0-112.921-72.588-204.462-162.13-204.462S238.597 177.079 238.597 290c0 112.921 72.588 204.462 162.13 204.462Z" stroke="#000" strokeWidth=".5" strokeMiterlimit="10"></path>
                            <use href="#path2" className={styles.animationPath} stroke="#000" strokeWidth=".5" strokeMiterlimit="10" strokeDasharray="5 5"></use>
                            <use href="#path2" className={`${styles.animationPath} ${styles.animationPathS2}`} stroke="#fff" strokeWidth="1" strokeMiterlimit="10" strokeDasharray="5 5"></use>
                            <path d="M875.943 579c89.542 0 162.127-129.39 162.127-289S965.485 1 875.943 1c-89.542 0-162.13 129.39-162.13 289s72.588 289 162.13 289ZM163.13 290 836.57 9.432M163.13 290l668.841 278.268" stroke="#000" strokeWidth=".5" strokeMiterlimit="10"></path>
                            <path d="M424.5 406a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" fill="#000" className={styles.animationPoint}></path>
                            <path d="M638.346 106.099c7.543 0 13.658-6.115 13.658-13.658 0-7.543-6.115-13.658-13.658-13.658-7.543 0-13.658 6.115-13.658 13.658 0 7.543 6.115 13.658 13.658 13.658Z" fill="#FBFBFB" stroke="#000" strokeWidth=".5" strokeMiterlimit="10"></path>
                        </svg>

                    </div>
                </div>

                <ServicesCard />

                <ServicesCardWeb />

                <TechnologyCard />

                <TeamAddOns />

            </main>

            <ContactUs />


        </div>

    );
};

export default Services;
