import Link from 'next/link';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>  <Link href="/">SPARKBIT</Link></div>
      <div className={styles.menu}>
        <Link href="/caseStudies">CASE STUDIES</Link>
        <Link href="/services">SERVICES</Link>
        <Link href="/meetus">MEET US</Link>
      </div>
    </nav>
  );
};

export default NavBar;
