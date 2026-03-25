import styles from "./styles/Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
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

        {/* LEGAL */}
        <div>
          <h4>LEGAL</h4>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4>CONTACT</h4>
          <ul>
            <li>
                <a href="mailto:hr@codeTownTechnologies.com" style={{ color: "#cbd5e1"}}>
                    hr@codeTownTechnologies.com</a>
                    </li>
            {/* <li>+1 (555) 902-1029</li> */}
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