// pages/index.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react';
import TestimonialSlider from './components/testimonial/testimonial';
import ContactUs from './components/contactUs/ContactUs';
import Image from 'next/image';
import NavBar from './components/navBar/NavBar';
import { useRouter } from 'next/router';

const caseStudies = [
  {
    title: "Web & Mobile solutions",
    description: "Operational Transformation for Sonoma Valley Transport. Develop web & mobile solutions to replace outdated systems with enhance functionality.",
    image: "https://suttabazaar.com/wp-content/uploads/2024/08/svt-1.png"
    // image: "/sumfactor/SVTLOGO1.png"
  },
  {
    title: "Prev. mobile application",
    description: "The project focuses on developing Prev, an innovative app that delivers pregnancy-avoidance pills based on health metrics.",
    image: "/sumfactor/prev-homepage.png"
    // image: "/sumfactor/prevImage.jpg"
  },
  {
    title: "Labnear mobile application",
    description: "Bringing Labnear's innovative vision to life through a fully functional iOS app.",
    image: "/sumfactor/labnearImage.jpeg"
    // image: "/sumfactor/labNear.png"
  },
  // {
  //   title: "Military-grade communication tool",
  //   description: "Distributed system to support maritime missions operating offline at sea with data exchange based on custom military protocols",
  //   image: "/military.webp"
  // },
  // {
  //   title: "Supporting business scalability with machine learning",
  //   description: "Cutting the development and operations costs by implementing ML-heavy automation and introducing modern system architecture",
  //   image: "/supportingBusiness.webp"
  // },
  // {
  //   title: "Machine Learning for receipe recommendation",
  //   description: "Building an NLP-based system to understand cooking ingredients and refine users’ dishes",
  //   image: "/receipe.webp"
  // },
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : caseStudies.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < caseStudies.length - 1 ? prev + 1 : 0));
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

  const contactUsRef = useRef<HTMLDivElement | null>(null);

  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      const offset = 80; 
      const elementPosition = contactUsRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const router = useRouter();

  const handleNavigation = () => {
    router.push('/caseStudies');
  };

  const handleServices = () => {
    router.push('/services');
  };

  const handleMeetUs = () => {
    router.push('/meetus');
  };

  return (

    <div className={styles.container}>

      <div className={styles.mainContent}>
        <main className={styles.main}>
          <NavBar />

          {/* <div className={styles.gridContainer}> */}

          {/* <div className="vertical-lines">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div> */}
          {/* hero or banner here */}

          <section className={styles.hero}>
            <h1 className={styles.title}>
              Your partner<br />in challenging<br />projects
            </h1>
            <div className={styles.graphicElement}>

            </div>

            <button className={styles.scrollCircle} onClick={scrollToAbout}>
              <Image src="/leftArrowImage.svg" alt="downArrow" height={18} width={18} className={styles.scrollButton} />
            </button>

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
              <img src={caseStudies[activeIndex].image} alt={caseStudies[activeIndex].title} className={styles.caseStudyContentImg} />
              <div className={styles.mobileNavigation}>
                <div>
                  <button onClick={handlePrev} className={styles.leftArrow}>
                    <Image src="/leftArrowImage.svg" alt="leftArrow" height={15} width={15} className={styles.rotatedArrow} />
                  </button>
                </div>

                <div>
                  <button onClick={handleNext} className={styles.rightArrow}>
                    <Image src="/leftArrowImage.svg" alt="leftArrow" height={15} width={15} className={styles.rightRotatedArrow} />
                  </button>
                </div>
              </div>

              <div className={styles.readThisAndServiceButton}>

                <button className={styles.readThisButton}>
                  {/* <span> Read this case </span>
                  <Image src="/leftArrowImage.svg" alt="rightarrow" height={15} width={18} className={styles.readThisButtonArrow} /> */}
                </button>


                <button className={styles.serviceButton} onClick={handleNavigation}>
                  <span>See all projects</span>
                  <Image src="/leftArrowImage.svg" alt="rightarrow" height={15} width={15} className={styles.ourServicesArrow} />
                </button>

              </div>

            </div>
          </section>


          <section className={styles.caseStudies} style={{ marginBottom: "0", marginTop: "0px" }} >
            <h2>SERVICES</h2>
            <span >
              <div>
                <h4 className={styles.whatWeDoText}>
                  What we do
                </h4>
              </div>
              <div>
                <img className={styles.servicesImage} src="/3circles.svg" alt="whatwedo" />
              </div>
            </span>

          </section>

          {/* services section */}
          <div>
            <section className={styles.serviceSection} >
              <div></div>
              <div className={styles.serviceCard}>
                <h2>Machine Learning</h2>
                <p>The full ML project life-cycle, from dataset building to model architecture definition and training to deployment (both in the cloud and on edge). Techniques from areas such as CV and NLP and their applications to various business problems.</p>
              </div>

              <div className={styles.serviceCard}>
                <h2>Architecture & Backend</h2>
                <p>Systems for data analysis and processing, including high-frequency data, time-series or IoT data. Focusing on reliability and scalability of solutions while maintaining low operating costs.</p>
              </div>

              <div className={styles.serviceCard}>
                <h2>R&D Prototypes</h2>
                <p>Unique problems requiring the development of new techniques or algorithms and excellent programming skills. Some of these problems will prove unsolvable, others will lead to the best innovations.</p>
              </div>

              {/* <button className={styles.serviceButton2}>
              <span>Our services</span>
              <Image src="/leftArrowImage.svg" alt="rightArrow" height={15} width={15} className={styles.ourServicesArrow} />
            </button> */}

            </section>

            <button className={styles.serviceButton3} onClick={handleServices}>
              <span>Our services</span>
              <Image src="/leftArrowImage.svg" alt="rightArrow" height={15} width={15} className={styles.ourServicesArrow} />
            </button>
          </div>
          {/* services section */}

          {/* challenges section */}
          <section className={styles.challenges} style={{ marginBottom: "10px" }} >
            <h2></h2>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <h3>
                Facing other challenges?
              </h3>
              <p>There's a technical challenge in a different area you can't quite label? Contact us and work it out together.</p>

              <button className={styles.contactUsButton} onClick={scrollToContactUs}>
                <span> Contact us </span>
                <Image src="/leftArrowImage.svg" alt="whatwedo" height={15} width={15} className={styles.contactUsArrow} />
              </button>

            </span>
          </section>
          {/* challenges section ends*/}


          {/* Our strength starts */}
          <section className={styles.ourApproach}>
            <div className={styles.containerStrength}>
              <h2 className={styles.sideHeading}>OUR STRENGTHS</h2>
              <div className={styles.content}>
                <h1 className={styles.mainHeading}>What makes us different</h1>
                <h1 className={styles.subHeading}>Our approach</h1>
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
              <p>We have an experienced team of developers with PhDs and Masters in Mathematics and Computer Science.</p>
              <p>We possess a solid mindset shaped by algorithmic and mathematical education based on the renowned Polish scientific school.</p>


              <button className={styles.contactUsButton} style={{ marginTop: "2rem" }} onClick={handleMeetUs}>
                <span> Meet us </span>
                <Image src="/leftArrowImage.svg" alt="whatwedo" height={15} width={15} className={styles.ourServicesArrow} />
              </button>

            </span>
          </section>
          {/* the team section ends */}


          {/* testimonail section  starts*/}
          <TestimonialSlider />
          {/* testimonail section  ends*/}
          {/* </div> */}
        </main>
      </div>
      <div className="hide-vertical-lines" ref={contactUsRef}>
        <ContactUs />
      </div>

    </div>
  )
}