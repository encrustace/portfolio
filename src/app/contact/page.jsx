"use client";
import styles from "./page.module.css";
import { texts, links } from "@/utils/data";
import { Orbitron } from "next/font/google";

const font = Orbitron({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <div className={styles.main}>
      <p className={`${styles.hello} ${font.className}`}>Hello.</p>
      <p className={styles.pitch}>{texts.intro}</p>
      <p>
        Email: <a href={`mailto:${texts.email}`}>{texts.email}</a>
        <br />
        On the Internet: <a href={links.linkedin}>LinkedIn</a> /{" "}
        <a href={links.github}>GitHub</a> / <a href={links.twitter}>Twitter</a>
      </p>
    </div>
  );
}
