// pages/index.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react';
import TestimonialSlider from './components/testimonial/testimonial';
import ContactUs from './components/contactUs/ContactUs';
import Link from 'next/link';
import NavBar from './components/navBar/NavBar';

const caseStudies = [
  {
    title: "Automated human body assessment",
    description: "Recognizing postural disorders and assigning corrective exercises based on a 3D scan",
    image: "/humanAssesment.webp"
  },
  {
    title: "AI camera-based driving analysis tool",
    description: "Analyzing a high volume of multi-sensorial time-series data to detect hazardous driver behavior",
    image: "/driving.webp"
  },
  {
    title: "Unique E-commerce system",
    description: "Migration and development of a luxury Italian brands E-commerce to support global sales and shipping",
    image: "/Ecommerce.webp"
  },
  {
    title: "Military-grade communication tool",
    description: "Distributed system to support maritime missions operating offline at sea with data exchange based on custom military protocols",
    image: "/military.webp"
  },
  {
    title: "Supporting business scalability with machine learning",
    description: "Cutting the development and operations costs by implementing ML-heavy automation and introducing modern system architecture",
    image: "/supportingBusiness.webp"
  },
  {
    title: "Machine Learning for receipe recommendation",
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

  const handleCaseStudyClick = (index: any) => {
    setActiveIndex(index);
  };

  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      const offset = 80;
      const elementPosition = aboutRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (

    <div className={styles.container}>
      <Head>
        <title>Sumfactor</title>
        <meta name="description" content="Sumfactor created with Next.js" />
        <link rel="icon" href="/faviconSumfactor.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />

        {/* <div className={styles.gridContainer}> */}

        <div className="vertical-lines">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        {/* hero or banner here */}

        <section className={styles.hero}>
          <h1 className={styles.title}>
            Your partner<br />in challenging<br />projects
          </h1>
          <div className={styles.graphicElement}>

          </div>

          <div className={styles.scrollCircle}>
            <div className={styles.scrollButton} onClick={scrollToAbout}>
              <img src="/down-arrow1.svg" alt="whatwedo" height="15px" width='40px' />
            </div>
          </div>
        </section>
        {/* hero or banner end here */}

        {/* about and case study starts*/}
        <section className={styles.about} ref={aboutRef}>
          <h2>ABOUT</h2>
          <p>
            At Sumfactor, we leverage our solid engineering background and
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

            <div className={styles.readThisAndServiceButton}>
              <div style={{ display: 'flex', alignContent: "center", alignItems: 'center' }}>
                <span className={styles.readThisButton}>
                  Read this case
                </span>
                <span className={styles.readThisButtonArrow} style={{ alignSelf: 'center', alignItems: "center", marginLeft: '15px', paddingBottom: "5px" }}>
                  <img src="/rightArrow.svg" alt="whatwedo" height="16px" width='20px' />
                </span>
              </div>

              <button className={styles.serviceButton}>
                <div style={{ alignSelf: "center" }}>
                  See all case studies
                </div>
                <span className={styles.ourServicesArrow} style={{ alignSelf: "center", marginLeft: '15px', paddingBottom: "6px" }}>
                  <img src="/rightArrow.svg" alt="whatwedo" height="16px" width='20px' />
                </span>
              </button>

            </div>

          </div>
        </section>


        <section className={styles.caseStudies} style={{ marginBottom: "0", marginTop: "0px" }} >
          <h2>SERVICES</h2>
          <span style={{ display: "flex", flexDirection: "column", position: 'relative' }}>
            <h4 className={styles.whatWeDoText}>
              What we do
            </h4>
            <img className={styles.servicesImage} src="/3circles.svg" alt="whatwedo" />
          </span>

        </section>

        {/* services section */}
        <section className={styles.serviceSection}>
          <div className={styles.serviceCard}>
            <h2>Machine Learning</h2>
            <p>The full ML project life-cycle, from dataset building to model architecture definition and training to deployment (both in the cloud and on edge). Techniques from areas such as CV and NLP and their applications to various business problems.</p>
          </div>
          <div className={styles.serviceCard}>
            <h2>Architecture & Backend</h2>
            <p>Systems for data analysis and processing, including high-frequency data, time-series or IoT data. Focusing on reliability and scalability of solutions while maintaining low operating costs.</p>
          </div>
          <div className={styles.serviceCard2}>
            <h2>R&D Prototypes</h2>
            <p>Unique problems requiring the development of new techniques or algorithms and excellent programming skills. Some of these problems will prove unsolvable, others will lead to the best innovations.</p>
          </div>

          <button className={styles.serviceButton2}>
            <div>Our services</div>
            <div style={{ marginLeft: '15px' }} className={styles.ourServicesArrow}>
              <img src="/rightArrow.svg" alt="whatwedo" height="20px" width="20px" />
            </div>
          </button>

        </section>


        {/* services section */}

        {/* challenges section */}
        <section className={styles.challenges} style={{ marginBottom: "10px" }} >
          <h2></h2>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <h3>
              Facing other challenges?
            </h3>
            <p>There's a technical challenge in a different area you can't quite label? Contact us and work it out together.</p>

            <button className={styles.contactUsButton}>
              Contact us
              <span style={{ marginLeft: '15px' }} className={styles.contactUsArrow}>
                <img src="/down-arrow1.svg" alt="whatwedo" height="16px" width='20px' />

              </span>
            </button>
          </span>
        </section>
        {/* challenges section ends*/}


        {/* Our strength starts */}
        <section className={styles.ourApproach}>
          <div className={styles.containerStrength}>
            <h3 className={styles.sideHeading}>OUR STRENGTHS</h3>
            <div className={styles.content}>
              <h1 className={styles.mainHeading}>What makes us different</h1>
              <h2 className={styles.subHeading}>Our approach</h2>
              <p>
                We know how to adapt scientific knowledge and academic concepts to business problem-solving on a project level by conducting extensive research and prior-art analysis.
              </p>
              <p>
                We bring an engineering point of view to the project from day one by implementing CI/CD pipelines, setting up environments and automation, providing data exploration, visualizations, and tracking all the essential metrics.
              </p>
            </div>
          </div>
        </section>
        {/* Our strength ends */}


        {/* the team section starts */}
        <section className={styles.team} style={{ marginBottom: "10px" }} >
          <h2></h2>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <h3>
              The team
            </h3>
            <p>We have an experienced team see developers with PhDs and Masters in Mathematics and Computer Science.</p>
            <p>We possess a solid mindset shaped by algorithmic and mathematical education based on the renowned Polish scientific school.</p>


            <button className={styles.contactUsButton} style={{ marginTop: '2rem' }}>
              Meet us
              <span style={{ marginLeft: '15px' }} className={styles.ourServicesArrow}>
                <img src="/rightArrow.svg" alt="whatwedo" height="20px" width="20px" />
              </span>
            </button>

          </span>
        </section>
        {/* the team section ends */}


        {/* testimonail section  starts*/}
        <TestimonialSlider />
        {/* testimonail section  ends*/}
        {/* </div> */}
      </main>
      <ContactUs />

    </div>
  )
}