import styles from "./styles/Hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      
      {/* NAVBAR */}
      <div className={styles.navbar}>
        <Link href="/" className="logo">
        <Image
        src="https://res.cloudinary.com/dbazlbkfj/image/upload/v1774359871/Logo_vcrauz.png"
        alt="Codetown logo"
        width={200}
        height={40}
        />
        </Link>

        <div className={styles.links}>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button className={styles.cta}><Link href="/contact" style={{ color: "#12263f"}}>Get Started</Link></button>
      </div>

      {/* HERO */}
      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.badge}>
            ● NEXT-GEN DIGITAL FOUNDRY
          </span>

          <h1>
            Web. Mobile.
            <br />
            <span>Python &</span>
            <br />
            <span>Intelligence.</span>
          </h1>

          <p>
            We architect high-performance digital ecosystems. From neural
            networks to mobile dominance, we transform complex visions into
            luminous digital realities.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}><Link href="/contact" style={{ color: "#283340"}}>Initialize Project →</Link></button>
            <button className={styles.secondary}><Link href="/portfolio" style={{ color: "#cbd5e1"}}>View Portfolio</Link></button>
          </div>
        </div>

        {/* RIGHT */}
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