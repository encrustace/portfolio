"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className={styles.main}>
      <Link
        href="/about"
        className={`${styles.link} ${
          (pathname === "/about" || pathname === "/") && styles.selected
        }`}
      >
        about.
      </Link>

      <Link
        href="/skills"
        className={`${styles.link} ${
          pathname === "/skills" && styles.selected
        }`}
      >
        skills.
      </Link>

      <Link
        href="/contact"
        className={`${styles.link} ${pathname === "/contact" && styles.selected}`}
      >
        contact.
      </Link>
    </div>
  );
}
