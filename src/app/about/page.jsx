import Image from "next/image";
import styles from "./page.module.css";
import { links, texts } from "@/utils/data";
import { Orbitron } from "next/font/google";
const font = Orbitron({ subsets: ["latin"] });

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p className={`${styles.heading} ${font.className}`}>About</p>
        <p className={`${styles.quote} ${font.className}`}>{texts.aboutShort}</p>
        <p className={styles.desc}>{texts.desc}</p>
      </div>
      <div className={styles.right}>
        <Image src="/images/Imran.jpg" width={0} height={0} className={styles.imranImage} sizes="100vw"/>
      </div>
    </div>
  );
}
