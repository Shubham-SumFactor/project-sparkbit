import Link from 'next/link';
import Image from 'next/link';
import styles from '../styles/MeetUs.module.css'
import NavBar from './components/navBar/NavBar';
import TeamSlider from './components/teamSlider/TeamSlider';
import ContactUs from './components/contactUs/ContactUs';
import ImageSlider from './components/imageSlider/ImageSlider';

const MeetUs = () => {



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
                        Get to know us better
                    </h1>
                    <div className={styles.graphicElement}></div>
                </div>

                <section className={styles.about}>
                    <h2>ABOUT</h2>
                    <p>
                        We're software development experts that support your ambitious business goals with knowledge and proactivity. Meet the Sumfactor team.
                    </p>
                </section>

                <section className={styles.founder}>
                    <h2>FOUNDERS</h2>
                    <span className={styles.founderContent}>
                        <h3>Our founders</h3>
                        <p>
                            Sumfactor Software Inc. has been founded by Ajay Sharma. Ajay previously co-founded Trigma Inc., a software services company based out of India and the US. He brings together his experience of creating great customer centric products along with a young and enthusiastic team at Sumfactor.
                        </p>
                        <p>

                            Sumfactor Software Inc., founded in 2019, has been a pioneer in IT solutions, combining innovative strategies with a dynamic, young team to deliver exceptional, customer-centric products
                        </p>
                        <img className={styles.founderImage} src="/sumfactorTeam/SFfounders.jpg" alt="founders" />

                    </span>

                </section>

                <section className={styles.founder}>
                    <h2>SUMFACTOR TEAM</h2>

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
                        <h3>Sumfactor Fellowship</h3>
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
                        {/* <h3>Sumfactor Fellowship</h3> */}
                        <p>
                            We do serious engineering work but always try to keep a cozy, informal atmosphere with room for focus on the creative side and sharing knowledge with our teammates.
                        </p>
                    </span>

                </section>

                <ImageSlider />

            </main>

            <ContactUs />


        </div>

    );
};

export default MeetUs;
