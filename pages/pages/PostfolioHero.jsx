"use client";

import styles from "../styles/Portfolio.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.tag}>ARCHITECTING THE FUTURE</span>

          <h1>
            Engineering <br />
            <span>Digital</span> <br />
            <span>Excellence.</span>
          </h1>

          <p>
            We architect robust digital ecosystems using cutting-edge Python AI,
            high-performance web architecture, and seamless mobile experiences.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          
          {/* MAIN CARD */}
          <div className={styles.mainCard}>
            <Image
              src="/images/projects/Hero1.jpg"
              alt="dashboard"
              fill
              className={styles.img}
            />
          </div>

          {/* FLOATING CODE CARD */}
          <div className={styles.codeCard}>
            <Image
              src="/images/projects/Hero3.jpg"
              alt="code"
              fill
              className={styles.img}
            />
          </div>

        </div>
      </div>
    </section>
  );
}