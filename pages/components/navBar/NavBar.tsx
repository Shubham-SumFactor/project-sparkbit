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
      {/* <nav > */}

        {/* <div className={styles.logo}>
        <Link href="/">SPARKBIT</Link>
      </div> */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
          <Link href="/">SUMFACTOR</Link>
          <Link href="/caseStudies">CASE STUDIES</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/meetus">MEET US</Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      {/* </nav> */}
    </header>
  );
};

export default NavBar;
