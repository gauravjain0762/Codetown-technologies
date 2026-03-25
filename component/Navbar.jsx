"use client";

import Link from "next/link";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Link href="/">
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
        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : ""}
        >
          About
        </Link>

        <Link
          href="/services"
          className={pathname === "/services" ? styles.active : ""}
        >
          Services
        </Link>

        <Link
          href="/portfolio"
          className={pathname === "/portfolio" ? styles.active : ""}
        >
          Portfolio
        </Link>
      </div>

      {/* BUTTON */}
      <button className={styles.btn}>
        <Link href="/contact" className={styles.btn}>
  Contact
</Link>
      </button>
    </div>
  );
}