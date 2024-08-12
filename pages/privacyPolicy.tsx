import Link from 'next/link';
import Image from 'next/link';
import styles from '../styles/privacyPolicy.module.css'
import NavBar from './components/navBar/NavBar';
import ContactUs from './components/contactUs/ContactUs';

const PrivacyPolicy = () => {

    return (

        <div className={styles.container}>

            <main className={styles.main}>

                <NavBar />
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        Privacy policy
                    </h1>
                    <div className={styles.graphicElement}></div>
                </div>

                <section className={styles.about}>
                    <h2>Effective Date</h2>
                    <p>
                        2019
                    </p>
                </section>

                <section className={styles.about}>
                    <h2>ABOUT</h2>
                    <p>
                        Sumfactor Software Inc. operates the website www.sumfactor.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information that we receive from users of our Service.
                    </p>
                </section>

                <section className={styles.founder}>
                    <h2>Information We Collect</h2>
                    <span className={styles.founderContent}>
                        <h3>Personal Data</h3>
                        <p>
                            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This includes, but is not limited to:

                            <ul>
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                        </ul>
                        
                        </p>
                       

                        <br />
                        <h3>Usage Data</h3>
                        <p>
                            We may also collect information on how the Service is accessed and used. This Usage Data may include information
                        </p>

                    </span>

                </section>



            </main>

            <ContactUs />


        </div>

    );
};

export default PrivacyPolicy;
