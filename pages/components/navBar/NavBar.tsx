import Link from 'next/link';
import styles from './NavBar.module.css'
import { useState } from 'react';

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className={styles.nav}>

      <div className={styles.menu}>
        {/* <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`} style={{ display: "flex", maxWidth: "1440px", width: "100%", position: 'relative', margin: "0 auto" }}> */}

        <div style={{ width: "25%" }}>
          <Link href="/" className={styles.logo}>
            SUMFACTOR
          </Link>
        </div>

        <div style={{ width: "27%" }}> <Link href="/caseStudies">CASE STUDIES</Link></div>
        <div style={{ width: "25%" }}> <Link href="/services">SERVICES</Link></div>
        <div style={{ width: "23%" }}><Link href="/meetus">MEET US</Link></div>

      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.logo}>Sumfactor</div>
        <img src="./hamburger.svg" alt="ham" height="30px" width="30px" />
      </div>

      {isMenuOpen && (
        <div className={`${isMenuOpen ? styles.showMenu : ''}`} style={{ width: "75%", display: "flex" }}>
          <div style={{ width: "33.33%" }}>
            <Link href="/caseStudies">CASE STUDIES</Link>
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
