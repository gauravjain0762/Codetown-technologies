"use client";

import Link from "next/link";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* HAMBURGER */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV LINKS */}
      <div
        className={`${styles.navLinks} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >
        <Link
          href="/"
          className={pathname === "/" ? styles.active : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : ""}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>

        <Link
          href="/services"
          className={pathname === "/services" ? styles.active : ""}
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>

        <Link
          href="/portfolio"
          className={pathname === "/portfolio" ? styles.active : ""}
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </Link>

      </div>

      {/* DESKTOP BUTTON */}
      <button className={styles.btn}>
        <Link href="/contact" className={styles.btn}>
          Contact Us
        </Link>
      </button>
    </div>
  );
}