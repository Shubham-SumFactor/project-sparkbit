// pages/index.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Sparkbit Clone</title>
        <meta name="description" content="Sparkbit clone created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <div className={styles.logo}>SPARKBIT</div>
          <div className={styles.menu}>
            <span>CASE STUDIES</span>
            <span>SERVICES</span>
            <span>MEET US</span>
          </div>
        </nav>

        <section className={styles.hero}>
          <h1 className={styles.title}>
            Your partner<br />in challenging<br />projects
          </h1>
          <div className={styles.graphicElement}></div>
        </section>

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


      </main>
    </div>
  )
}