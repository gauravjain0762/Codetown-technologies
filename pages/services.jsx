"use client";

import styles from "./styles/services.module.css";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRobot,
  FaCloud,
  FaChartLine,
} from "react-icons/fa";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <section className={styles.servicesPage}>
        {/* BACKGROUND GLOW */}
        <div className={styles.bgGlow}></div>

        {/* HEADER */}
        <div className={styles.header}>
          <p className={styles.tag}>OUR EXPERTISE</p>
          <h1>
            Architecting the <br />
            <span>Luminous</span> <br /> <span style={{color: "#22d3ee"}}>Future.</span>
          </h1>
          <p className={styles.subtext}>
            We transcend standard engineering. We build scalable, modern systems
            and digital experiences for the next generation.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {/* BIG CARD */}
          <div className={`${styles.card} ${styles.large}`}>
            <FaCode className={styles.icon} />
            <h3>Web Architecture</h3>
            <p>
              High-scale applications built on modern frameworks. We specialize
              in distributed systems <br /> that handle millions of request with
              sub-millisecond latency.
            </p>
            <div className={styles.tags}>
              <span>Microservices</span>
              <span>REST</span>
              <span>APIs</span>
            </div>
          </div>

          <div className={styles.card}>
            <FaMobileAlt className={styles.icon} />
            <h3>Mobile Engineering</h3>
            <p>
              Native performance across every platform. <br />
              Swift, Kotlin and Flutter perfection.
            </p>
            <div className={styles.tags}>
              <span>Flutter</span>
              <span>Kotlin</span>
              <span>Swift</span>
            </div>
          </div>

          <div className={styles.card}>
            <FaPaintBrush className={styles.icon} />
            <h3>UI/UX Strategy</h3>
            <p>
              Editorial Design that priortizes user immersion. We create digital
              artifacts, not just interfaces.
            </p>
            <div className={styles.tags}>
              <span>Figma</span>
              <span>UX Research</span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.large}`}>
            <FaRobot className={styles.icon} />
            <h3>Python & AI</h3>
            <p>
              Learning models and automated logic that evolve with your data. We
              build intelligence that scales. <br />
              From intelligent workflows to advanced predictions, we deliver
              solutions built for the future.
            </p>
            <div className={styles.tags}>
              <span>AI</span>
              <span>ML</span>
              <span>Automation</span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.large}`}>
            <FaCloud className={styles.icon} />
            <h3>Cloud & DevOps</h3>
            <p>
              Infrastructure automation for zero-downtime deployments. CI/CD
              pipelines that work as hard as you do.
            </p>
            <div className={styles.tags}>
              <span>AWS</span>
              <span>Docker</span>
              <span>CI/CD</span>
            </div>
          </div>

          <div className={styles.card}>
            <FaChartLine className={styles.icon} />
            <h3>Digital Marketing</h3>
            <p>
              Data-driven growth through SEO and precision ppc. We turn
              engineering excellence into market dominance.
            </p>
            <div className={styles.tags}>
              <span>SEO</span>
              <span>SEM</span>
              <span>Analytics</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h2>Ready to initiate the protocol?</h2>
          <p>Connect with us to discuss your project.</p>

          <div className={styles.buttons}>
            <button className={styles.primary}>Start Configuration</button>
            {/* <button className={styles.secondary}>View Our Codex</button> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
