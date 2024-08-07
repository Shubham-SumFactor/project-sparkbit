import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css'
import { useState } from 'react';

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveRoute = (route: any) => {
    return router.pathname === route;
  };

  return (
    <header className={`${styles.nav} ${isActiveRoute('/caseStudies') ? styles.activeBackground : ''}`}>

      <div className={`${styles.menu} ${isActiveRoute('/caseStudies') ? styles.activeMenuBackground : ''}`}>

        <div style={{ width: "25%" }}>
          <Link href="/" className={router.pathname === '/' ? styles.activeLink : ''} style={{ fontSize: '1.2rem', fontWeight: '700' }}>
            SUMFACTOR
          </Link>
        </div>

        <div style={{ width: "27%" }}> <Link href="/caseStudies" className={router.pathname === '/caseStudies' ? styles.activeLink : ''}>Projects</Link></div>
        <div style={{ width: "25%" }}> <Link href="/services" className={router.pathname === '/services' ? styles.activeLink : ''}>SERVICES</Link></div>
        <div style={{ width: "23%" }}><Link href="/meetus" className={router.pathname === '/meetus' ? styles.activeLink : ''}>MEET US</Link></div>

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
        // <div className={`${isMenuOpen ? styles.showMenu : ''}`} style={{ width: "75%", display: "flex" }}>
        <div
          className={`${isMenuOpen ? styles.showMenu : ''} ${isActiveRoute('/caseStudies') ? styles.activeBackground : ''
            }`}
          style={{ width: "75%", display: "flex" }}
        >
          <div style={{ width: "33.33%" }}>
            <Link href="/caseStudies">PROJECTS</Link>
          </div>
          <div style={{ width: "33.33%" }}>
            <Link href="/services">SERVICES</Link>
          </div>
          <div style={{ width: "33.33%" }}>
            <Link href="/meetus">MEET US</Link>
          </div>
        </div>)}


    </header>
  );
};

export default NavBar;
