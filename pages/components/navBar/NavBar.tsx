import Link from 'next/link';
import styles from './NavBar.module.css'
import { useState } from 'react';

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className={styles.nav}>
 
      <div className={styles.logo}>
        <Link href="/">SPARKBIT</Link>
      </div>
      <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
        <Link href="/caseStudies">CASE STUDIES</Link>
        <Link href="/services">SERVICES</Link>
        <Link href="/meetus">MEET US</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
