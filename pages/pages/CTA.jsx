import styles from "../styles/Cta.module.css";
import Link from "next/link";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.cta}>
          <h2>Ready to build your next breakthrough?</h2>
          <p>  We partner with ambitious teams to transform bold ideas into high-impact digital products. From concept to deployment, <br /> we build solutions that scale and perform.</p>

          <div className={styles.buttons}>
            <button className={styles.primary}>Start Your Project</button>
          </div>
      </div>
    </section>
  );
}
 