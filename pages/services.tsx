import Link from 'next/link';
import Image from 'next/link';
import styles from '../styles/services.module.css'
import NavBar from './components/navBar/NavBar';
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
                        Software development <br></br>solutions
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
                                <div className={styles.scrollCircle}>
                                    <div className={styles.scrollButton} >
                                        <img src="/down-arrow1.svg" alt="whatwedo" height="15px" width='20px' />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.area}>
                                <h3>Architecture & Backend</h3>
                                <div className={styles.scrollCircle}>
                                    <div className={styles.scrollButton} >
                                        <img src="/down-arrow1.svg" alt="whatwedo" height="15px" width='20px' />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.area}>
                                <h3>R&D Prototypes</h3>
                                <div className={styles.scrollCircle}>
                                    <div className={styles.scrollButton} >
                                        <img src="/down-arrow1.svg" alt="whatwedo" height="15px" width='20px' />
                                    </div>
                                </div>
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
                
            </main>

            {/* <ContactUs /> */}


        </div>

    );
};

export default Services;
