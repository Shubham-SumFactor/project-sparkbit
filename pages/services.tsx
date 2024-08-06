import Link from 'next/link';
import Image from 'next/link';
import styles from '../styles/services.module.css'
import NavBar from './components/navBar/NavBar';
import ServicesCard from './components/servicesCard/servicesCard';
import MLProcessSection from './components/mlCard/MLProcessSection';
import ProjectYear from './components/projectYear/projectYear';

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


                <section className={styles.about}>
                    <h2>ABOUT</h2>
                    <div className={styles.content}>
                        <p>
                            These are the three main areas in which we operate, although a
                            challenging project may be anything our client finds innovative and
                            difficult. If this is your case, send us a message.
                        </p>
                        <p>Let's chat about it.</p>

                        <div className={styles.areas}>
                            <div className={styles.area}>
                                <h3>Machine Learning</h3>
                                <button className={styles.scrollCircle} >
                                    <img src="/leftArrowImage.svg" alt="downArrow" height={18} width={18} className={styles.scrollButton} />
                                </button>
                            </div>
                            <div className={styles.area}>
                                <h3>Architecture & Backend</h3>
                                <button className={styles.scrollCircle} >
                                    <img src="/leftArrowImage.svg" alt="downArrow" height={18} width={18} className={styles.scrollButton} />
                                </button>
                            </div>
                            <div className={styles.area}>
                                <h3>R&D Prototypes</h3>
                                <button className={styles.scrollCircle} >
                                    <img src="/leftArrowImage.svg" alt="downArrow" height={18} width={18} className={styles.scrollButton} />
                                </button>
                            </div>

                        </div>
                    </div>
                </section>

                <section className={styles.threeCircles}>
                    <img className={styles.servicesImage} src="/3circles.svg" alt="whatwedo" />
                </section>

                <section className={styles.machineLearning}>
                    <h2>
                        Machine Learning
                    </h2>
                    <p>
                        We build robust and scalable Machine Learning solutions. We automate data processing and develop models and algorithms that become our clients' core IP. Knowing that the ML project can be complex and unpredictable, we lead you through it with a fully-managed process.
                    </p>
                </section>

                <ServicesCard />

                <section className={styles.workflow} >
                    <h2>OUR ML WORKFLOW</h2>
                    <div>
                        <p>
                            Machine learning projects are all about experimentation, rapidly testing various ideas, some of which are successful and others leading nowhere. We run hundreds of experiments with different hyperparameters, model variants, and training sets. After several months we need to identify which experiment performed best and which model variant was used there.
                        </p>

                        <p style={{ paddingTop: '10px' }}>
                            Usually, things get even more complex, as systems often use not one but a chain of linked models. We can control it only when following a well-defined, strict process supported by proper tooling - our ML Ops framework.
                        </p>
                    </div>
                </section>

                <MLProcessSection />

                <ProjectYear />
            </main>

            {/* <ContactUs /> */}


        </div>

    );
};

export default Services;
