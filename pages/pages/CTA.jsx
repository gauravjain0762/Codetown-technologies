import styles from "../styles/Portfolio.module.css";
import Link from "next/link";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
  <div className={styles.ctaButtons}>
  
  <Link href="/contact" className={styles.primaryBtn}>
    Start Your Project
  </Link>

  <button className={styles.secondaryBtn}>
    View Our Process
  </button>

</div>
</section>
  );
}