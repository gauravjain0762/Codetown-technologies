import Link from "next/link";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logo}>
       <Link href="/" className="logo">
        <Image
        src="https://res.cloudinary.com/dbazlbkfj/image/upload/v1774359871/Logo_vcrauz.png"
        alt="Codetown logo"
        width={200}
        height={40}
        />
        </Link>
      </div>

      {/* NAV LINKS */}
      <div className={styles.navLinks}>
        {/* <Link href="/">Home</Link> */}
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
      </div>

      {/* BUTTON */}
      <button className={styles.btn}><Link href="/contact">Contact</Link></button>
    </div>
  );
}