import Link from 'next/link';
import Image from 'next/link';
import styles from '../styles/MeetUs.module.css'
import NavBar from './components/navBar/NavBar';
import TeamSlider from './components/teamSlider/TeamSlider';
import ContactUs from './components/contactUs/ContactUs';

const MeetUs = () => {

 

    return (

        <div className={styles.container}>

            <main className={styles.main}>

                <NavBar />
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        Get to know us better
                    </h1>
                    <div className={styles.graphicElement}></div>
                </div>

                <section className={styles.about}>
                    <h2>ABOUT</h2>
                    <p>
                        We're software development experts that support your ambitious business goals with knowledge and proactivity. Meet the Sparkbit team.
                    </p>
                </section>

                <section className={styles.founder}>
                    <h2>FOUNDERS</h2>
                    <span className={styles.founderContent}>
                        <h3>OUR FOUNDERS</h3>
                        <p>
                            The idea of Sparkbit came from our founders - alumni of top technical universities in Poland and software engineers with two decades of professional experience. Complementing each other in areas of interest - organizing processes, scientific research, and delivery - they allowed Sparkbit to become a friendly workplace for exceptional developers.
                        </p>
                        <p>
                            Through the last eight years, they have run numerous challenging projects for various clients, from ML scaleups to one of the Big Four companies, telematics enterprises, blockchain startups, and governmental military organizations.
                        </p>
                        <img className={styles.founderImage} src="/founders.webp" alt="founders" />

                    </span>

                </section>


                <section className={styles.founder}>
                    <h2>SPARKBIT TEAM</h2>
                    <span >
                        <h3>Our Team</h3>
                        <p>
                            We're very careful when choosing our teammates to keep the highest quality of technical skills and match our organizational culture. We hire only the top 1% of candidates with Computer Science or Mathematics degrees. We're a team of geeks, but professional excellence is only the first threshold. We want our people to be honest, take responsibility for their work, and try to go the extra mile to deliver the best solution.
                        </p>


                    </span>

                </section>

                <TeamSlider />

                <section className={styles.founder}>
                    <h2>FELLOWSHIP</h2>
                    <span >
                        <h3>Sparkbit Fellowship</h3>
                        <p>
                            We're very serious about professional development and investing in the team. We believe that working in a knowledgeable and cordial environment is the best way to earn competence. That's why we have a defined and structured 10-month training plan to help our talented but less experienced colleagues achieve self-sufficiency.
                        </p>

                        <br></br>

                        <p>
                            Through raising technical skills in chosen areas, pairing with senior mentors, and being exposed to actual clients' projects, our novices quickly gather skillsets up to our high standard.
                        </p>


                    </span>

                </section>


                <section className={styles.founder}>
                    <h2>OUR CULTURE</h2>
                    <span >

                        {/* <h3>Sparkbit Fellowship</h3> */}
                        <p>
                        We do serious engineering work but <br /> always try to keep a cozy, informal <br /> atmosphere with room for focus on the <br /> creative side and sharing knowledge with <br /> our teammates.
                        </p>
                        
                    </span>

                </section>

                <ContactUs /> 
            </main>

        </div>

    );
};

export default MeetUs;
