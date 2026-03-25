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
  <Link href="/contact" className={styles.primary}>
    Schedule a Consultation
  </Link>

  <Link href="/portfolio" className={styles.secondary}>
    View Our Portfolio
  </Link>
</div>
      </div>
    </section>
  );
}