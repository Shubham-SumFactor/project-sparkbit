import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css'
import { useState } from 'react';
import Image from 'next/image';

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveRoute = (route: any) => {
    return router.pathname === route;
  };

  const handlePrivatePolicy = () => {
    router.push('/privacyPolicy');
  };
  const handleContactUs = () => {
    router.push('/meetus');
  };

  return (
    <header className={`${styles.nav} ${isActiveRoute('/caseStudies') ? styles.activeBackground : ''}`}>

      <div className={`${styles.menu} ${isActiveRoute('/caseStudies') ? styles.activeMenuBackground : ''}`}>

        <div style={{ width: "25%" }}>
          <Link href="/" className={router.pathname === '/' ? styles.activeLink : ''} style={{ fontSize: '1.2rem', fontWeight: '700' }}>
            SUMFACTOR
          </Link>
        </div>

        <div style={{ width: "25%" }}> <Link href="/caseStudies" className={router.pathname === '/caseStudies' ? styles.activeLink : ''}>Projects</Link></div>
        <div style={{ width: "25%" }}> <Link href="/services" className={router.pathname === '/services' ? styles.activeLink : ''}>SERVICES</Link></div>
        <div style={{ width: "25%" }}><Link href="/meetus" className={router.pathname === '/meetus' ? styles.activeLink : ''}>MEET US</Link></div>

      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div >
          <Link href="/" className={router.pathname === '/' ? styles.activeLink : ''} style={{ fontSize: '1.2rem', fontWeight: '400' }}>
            SUMFACTOR
          </Link>
        </div>
        <div>
          <img
            src={isActiveRoute('/caseStudies') ? "./hamburgerWhite.svg" : "./hamburger.svg"}
            alt="ham"
            height="30px"
            width="30px"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className={`${isMenuOpen ? styles.showMenu : ''} ${isActiveRoute('/caseStudies') ? styles.activeBackground : ''}`}
        // style={{ width: "75%", display: "flex", flexDirection: "column" }}
        >
          <div style={{ width: "33.33%", padding: "2rem 0" }}>
            <Link href="/caseStudies">PROJECTS</Link>
          </div>
          <div style={{ width: "33.33%", padding: "2rem 0" }}>
            <Link href="/services">SERVICES</Link>
          </div>
          <div style={{ width: "33.33%", padding: "2rem 0" }}>
            <Link href="/meetus">MEET US</Link>

            <button className={styles.contactUsButton} onClick={handleContactUs}>
              <span style={{ whiteSpace: "nowrap" }}> Contact us </span>
              <Image src="/leftArrowImage.svg" alt="contactUs" height={15} width={15} className={styles.contactUsArrow} />
            </button>
          </div>

          <div className={styles.smLinks}>
            <div>
              <Link href="https://in.linkedin.com/company/sumfactor" target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </Link>
            </div>
            <div>CONSULTATION</div>

          </div>


    <div style={{width:"100%", display:"flex", fontSize:"13px", marginTop:"3rem", justifyContent:"space-between"}}>
            
            <div style={{ display: "flex", width: '50%', flexDirection: 'column',  paddingTop: "3rem" }}>

              <div className={styles.privatePolicy} onClick={handlePrivatePolicy}>PRIVACY POLICY</div>

              <div style={{paddingTop:"5px"}}>
                <Link href="mailto:info@sumfactor.com"> <span style={{fontSize:"13px"}}> CONTACT: <br></br>info@sumfactor.com</span></Link>
              </div>


            </div>

            <div style={{width:"50%",  paddingTop: "3rem"}}>
              <Link href="https://maps.app.goo.gl/Upx4xf84eKRRWu5H7" target="_blank" rel="noopener noreferrer">
                The Hive Co-working and Business Centre,
                Plot 191,
                Industrial Area Phase 2, Chandigarh, India – 160002
              </Link>
            </div>

          </div>
        </div>)}


    </header>
  );
};

export default NavBar;
