"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  // const router = useRouter();
  // const [scrollDirection, setScrollDirection] = useState('up');
  // const [prevScrollY, setPrevScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > prevScrollY) {
  //       setScrollDirection("down");
  //     } else if (currentScrollY < prevScrollY) {
  //       setScrollDirection("up");
  //     }
  //     setPrevScrollY(currentScrollY);
  //     console.log(event);
  //     console.log(pathname);
  //     if (prevScrollY === "up") {
  //       if (pathname === "/" || pathname === "/about") {
  //         router.push("/skills");
  //       }
  //       if (pathname === "/skills") {
  //         router.push("/exp");
  //       }
  //     } else {
  //       if (pathname === "/exp") {
  //         router.push("/skills");
  //       }
  //       if (pathname === "/skills") {
  //         router.push("/about");
  //       }
  //     }
  //   };

  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
        href="/exp"
        className={`${styles.link} ${pathname === "/exp" && styles.selected}`}
      >
        exp.
      </Link>
    </div>
  );
}
