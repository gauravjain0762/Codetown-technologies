"use client";

import styles from "./styles/Hero.module.css";
import Link from "next/link";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const line1 = "Web. Mobile.";
  const line2 = "Python &";
  const line3 = "Intelligence.";

  useEffect(() => {
    let i = 0;

    // Line 1
    const typeLine1 = setInterval(() => {
      setText1(line1.slice(0, i + 1));
      i++;
      if (i === line1.length) {
        clearInterval(typeLine1);
        setTimeout(typeLine2Start, 400);
      }
    }, 50);

    let j = 0;
    const typeLine2Start = () => {
      const typeLine2 = setInterval(() => {
        setText2(line2.slice(0, j + 1));
        j++;
        if (j === line2.length) {
          clearInterval(typeLine2);
          setTimeout(typeLine3Start, 400);
        }
      }, 50);
    };

    let k = 0;
    const typeLine3Start = () => {
      const typeLine3 = setInterval(() => {
        setText3(line3.slice(0, k + 1));
        k++;
        if (k === line3.length) {
          clearInterval(typeLine3);
          setTimeout(() => setShowCursor(false), 500); // stop cursor
        }
      }, 50);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>
            ● NEXT-GEN DIGITAL FOUNDRY
          </span>

          <h1 className={styles.typewriter}>
            <div>
              {text1}
              {text2 === "" && showCursor && <span className={styles.cursor}>|</span>}
            </div>

            <div className={styles.blue}>
              {text2}
              {text2 !== "" && text3 === "" && showCursor && <span className={styles.cursor}>|</span>}
            </div>

            <div className={styles.blue}>
              {text3}
              {text3 !== "" && showCursor && <span className={styles.cursor}>|</span>}
            </div>
          </h1>

          <p>
            We architect high-performance digital ecosystems. From neural
            networks to mobile dominance, we transform complex visions into
            luminous digital realities.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}>
              <Link href="/contact" style={{ color: "#283340" }}>
                Initialize Project →
              </Link>
            </button>
            <button className={styles.secondary}>
              <Link href="/portfolio" style={{ color: "#cbd5e1" }}>
                View Portfolio
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <p className={styles.small}>CURRENT SPRINT</p>
            <h3>AI Data Modeling</h3>
            <span className={styles.code}>0xFA2</span>
          </div>
        </div>
      </div>
    </section>
  );
}