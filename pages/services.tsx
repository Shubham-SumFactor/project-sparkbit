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
                        Software development solutions
                    </h1>
                    <div className={styles.graphicElement}></div>
                </div>

                <ServicesCard />

                <TechnologyCard />

                <TeamAddOns />

            </main>

            <ContactUs />


        </div>

    );
};

export default Services;
