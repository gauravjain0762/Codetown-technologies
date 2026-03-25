"use client";

import styles from "./styles/About.module.css";
import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      
      {/* NAVBAR */}
    <Navbar />
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.left}>
          <p className={styles.tag}>OUR VISION</p>

          <h1>
            Architecting the <br />
            <span>Digital Monolith</span>
          </h1>

          <p className={styles.desc}>
            We don’t just build software; we engineer resilient digital ecosystems
            that define the future. At CodeTown, we bridge the gap between
            complex technical challenges and elegant, scalable solutions.
          </p>
        </div>

        <div className={styles.right}>
          <Image
            src="/images/about-hero.jpg"
            alt="about"
            width={400}
            height={300}
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div>
          <h2>150+</h2>
          <p>PROJECTS DELIVERED</p>
        </div>

        <div>
          <h2>98%</h2>
          <p>CLIENT RETENTION</p>
        </div>

        <div>
          <h2>12+</h2>
          <p>INDUSTRY AWARDS</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>TECHNICAL SUPPORT</p>
        </div>
      </section>

      {/* PILLARS */}
      <section className={styles.pillars}>
        <p className={styles.tag}>HOW WE WORK</p>
        <h2>The CodeTown Core Pillars</h2>

       <div className={styles.grid}>
  
  {/* ROW 1 */}
  <div className={`${styles.card} ${styles.innovation}`}>
    <h3>💡 Innovation</h3>
    <p>We push boundaries of whats's possible in the digital realm. By integerating AI-driven methodoligies and bleeding-edge frameworks. We ensure you product is never absolute.</p>
  </div>

  <div className={`${styles.card} ${styles.integrity}`}>
    <h3>🛡 Integrity</h3>
    <p>Radical transparency in every line of code and every project milestone.</p>
  </div>

  {/* ROW 2 */}
  <div className={`${styles.card} ${styles.precision}`}>
    <h3>🎯 Precision</h3>
    <p>Meticulous attention to architecture, ensuring performance at massive scale.</p>
  </div>

  <div className={`${styles.card} ${styles.collaboration}`}>
    <h3>🤝 Collaboration</h3>
    <p>We act as an extension of your team. Our success is inextricably linked to yours, fostering a culture of shared wins and continuous knowledge exchange.</p>
  </div>

</div>
      </section>
      {/* WHY PARTNER */}
<section className={styles.why}>
  
  <div className={styles.whyLeft}>
    <h2>Why Partner With Us?</h2>

    <p>
      Choosing a technology partner is a pivotal decision. We offer more than
      just development — we deliver transformation.
    </p>

    <div className={styles.quoteBox}>
      <p>
        "CodeTown transformed legacy systems into a high-performance engine."
      </p>
      <span>— CTO, Global Fintech</span>
    </div>
  </div>

  <div className={styles.whyRight}>
    
    <div className={styles.item}>
      <span>01</span>
      <div>
        <h4>Elite Engineering Talent</h4>
        <p>
          Our team consists of senior architects and developers with deep
          experience in cloud-native technologies and modern UI systems.
        </p>
      </div>
    </div>

    <div className={styles.item}>
      <span>02</span>
      <div>
        <h4>Future-Proof Architecture</h4>
        <p>
          We build systems that scale and adapt for years, not just today.
        </p>
      </div>
    </div>

    <div className={styles.item}>
      <span>03</span>
      <div>
        <h4>Security-First Culture</h4>
        <p>
          Security is embedded into every layer, ensuring compliance and trust.
        </p>
      </div>
    </div>

    <div className={styles.item}>
      <span>04</span>
      <div>
        <h4>Rapid Deployment Cycles</h4>
        <p>
          Faster releases with optimized pipelines and zero compromise on quality.
        </p>
      </div>
    </div>

  </div>

</section>

<Footer />
    </div>
  );
}