import styles from "./styles/CTA.module.css";
import Link from "next/link";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.cta}>
          <h2>Ready to build your digital legacy?</h2>
          <p> Let's discuss how our technical expertise can transform your business
          vision into a high-performance reality.</p>

          <div className={styles.buttons}>
            <button className={styles.primary}>Schedule a Consultation</button>
          </div>
      </div>
    </section>
  );
}
