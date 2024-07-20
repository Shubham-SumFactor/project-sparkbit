// pages/index.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

const caseStudies = [
  {
    title: "AUTOMATED HUMAN BODY ASSESSMENT",
    description: "Recognizing postural disorders and assigning corrective exercises based on a 3D scan",
    image: "/humanAssesment.webp"
  },
  {
    title: "AI CAMERA-BASED DRIVING ANALYSIS TOOL",
    description: "Analyzing a high volume of multi-sensorial time-series data to detect hazardous driver behavior",
    image: "/driving.webp"
  },
  {
    title: "UNIQUE E-COMMERCE SYSTEM",
    description: "Migration and development of a luxury Italian brands E-commerce to support global sales and shipping",
    image: "/Ecommerce.webp"
  },
  {
    title: "MILITARY-GRADE COMMUNICATION TOOL",
    description: "Distributed system to support maritime missions operating offline at sea with data exchange based on custom military protocols",
    image: "/military.webp"
  },
  {
    title: "SUPPORTING BUSINESS SCALABILITY WITH MACHINE LEARNING scalability",
    description: "Cutting the development and operations costs by implementing ML-heavy automation and introducing modern system architecture",
    image: "/supportingBusiness.webp"
  },
  {
    title: "MACHINE LEARNING FOR RECEIPE RECOMMENDATION",
    description: "Building an NLP-based system to understand cooking ingredients and refine users’ dishes",
    image: "/receipe.webp"
  },
];


export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleCaseStudyClick = (index : any) => {
    setActiveIndex(index); 
  };

  return (

    <div className={styles.container}>
      <Head>
        <title>Sparkbit Clone</title>
        <meta name="description" content="Sparkbit clone created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {/* navbar starts here */}
        <nav className={styles.nav}>
          <div className={styles.logo}>SPARKBIT</div>
          <div className={styles.menu}>
            <span>CASE STUDIES</span>
            <span>SERVICES</span>
            <span>MEET US</span>
          </div>
        </nav>
        {/* nav bar ends  */}

        {/* hero or banner here */}
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Your partner<br />in challenging<br />projects
          </h1>
          <div className={styles.graphicElement}></div>
        </section>
        {/* hero or banner end here */}

        {/* about and case study starts*/}
        <section className={styles.about}>
          <h2>ABOUT</h2>
          <p>
            At Sparkbit, we leverage our solid engineering background and
            conceptual work capabilities rooted in academia to partner with
            innovative companies and develop advanced data-processing systems.
          </p>
        </section>

        <section className={styles.caseStudies} >
          <h2>CASE STUDIES</h2>
          <h3>
            Take a look at the diverse challenges we have solved
          </h3>
        </section>
        {/* about and case study ends */}

        <section className={styles.caseStudiesSection}>
          <div className={styles.caseStudiesList}>
            {caseStudies.map((study, index) => (
              <h3
                key={index}
                className={`${styles.caseStudyTitle} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => handleCaseStudyClick(index)}
              >
                {study.title}
              </h3>
            ))}
          </div>
          <div className={styles.caseStudyContent}>
            <h2>{caseStudies[activeIndex].title}</h2>
            <p>{caseStudies[activeIndex].description}</p>
            <img src={caseStudies[activeIndex].image} alt={caseStudies[activeIndex].title} />
          </div>
        </section>

      </main>
    </div>
  )
}