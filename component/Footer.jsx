import styles from "./styles/Footer.module.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
        <Image
        src="https://res.cloudinary.com/dbazlbkfj/image/upload/v1774359871/Logo_vcrauz.png"
        alt="Codetown logo"
        width={200}
        height={40}
        />
        </Link>
        <br />
        <br />
          <p>
            A premium digital agency dedicated to engineering high-end software
            solutions for visionary companies.
          </p>

          <div className={styles.icons}>
  <a
    href="https://www.linkedin.com/company/code-town-technologies/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>
</div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4>NAVIGATION</h4>
          <ul>
            <li><Link href="/" style={{ color: "#cbd5e1"}}>Home</Link></li>
            <li><Link href="/portfolio" style={{ color: "#cbd5e1"}}>Portfolio</Link></li>
            <li><Link href="/services" style={{ color: "#cbd5e1"}}>Services</Link></li>
            <li><Link href="/contact" style={{ color: "#cbd5e1"}}>Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        {/* CONTACT */}
<div className={styles.contact}>
  <h4>CONTACT</h4>
  <ul>
    <li className={styles.emailItem}>
      <FaEnvelope className={styles.mailIcon} />
      <a href="mailto:hr@codeTownTechnologies.com">
        hr@codeTownTechnologies.com
      </a>
    </li>
  </ul>
</div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        © 2024 CodeTown. Architecting the Digital Monolith.
      </div>
    </footer>
  );
}