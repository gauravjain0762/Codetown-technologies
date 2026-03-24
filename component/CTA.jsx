import styles from "./styles/CTA.module.css";
import Link from "next/link";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.card}>
        <h2>Ready to build your digital legacy?</h2>

        <p>
          Let's discuss how our technical expertise can transform your business
          vision into a high-performance reality.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            <Link href="/contact" style={{ color: "#cbd5e1"}}>
            Schedule a Consultation
            </Link>
          </button>

          <button className={styles.secondary}>
            <Link href="/portfolio" style={{ color: "#cbd5e1"}}>
            View Our Portfolio
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}