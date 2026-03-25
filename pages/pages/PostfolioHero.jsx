import styles from "../styles/Portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/projects/Hero1.jpg",
  "/images/projects/Hero3.jpg",
];

export default function PortfolioHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className={styles.hero}>
      {/* NAVBAR */}

      {/* CONTENT */}
      <div className={styles.heroContent}>
        <div className={styles.left}>
          <span className={styles.tag}>CASE STUDIES & SHOWCASE</span>

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

        {/* RIGHT SLIDER */}
        <div className={styles.right}>
          <div className={styles.sliderCard}>
            <Image
              src={images[index]}
              alt="project"
              fill
              className={styles.img}
            />
            <span className={styles.label} style={{ color: "black", fontSize: "15px"}}>
              PYTHON & AI SOLUTIONS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}