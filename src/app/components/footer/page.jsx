import styles from "./page.module.css";
import Image from "next/image";
import linkedin from "../../../../public/images/linkedin.svg";
import github from "../../../../public/images/github.svg";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.social}>
        <a
          href="https://linkedin.com/in/encrustace/"
          target="__blank"
          className={styles.link}
        >
          <Image src={linkedin} className={styles.image} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/encrustace"
          target="__blank"
          className={styles.link}
        >
          <Image src={github} className={styles.image} alt="Github"/>
        </a>
      </div>
      <div className={styles.resume}><p>
        for more info please download my&nbsp;
        <a href="https://docs.google.com/document/d/1rms7C_-1esNneY-Q8y-VConcEexneW3xTqM3flcAlZ4/edit?usp=sharing" target="__blank">
          resume
        </a>
        </p>
      </div>
      <div className={styles.resumeMobile}>
        <a href="https://docs.google.com/document/d/1rms7C_-1esNneY-Q8y-VConcEexneW3xTqM3flcAlZ4/edit?usp=sharing" target="__blank">
          resume
        </a>
      </div>
    </div>
  );
}
