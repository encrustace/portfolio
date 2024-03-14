import Image from "next/image";
import styles from "./page.module.css";
import { links, texts } from "@/utils/data";

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <a className={styles.resume} href={links.resume} target="__blank">
          resume
        </a>
        <div className={styles.hi}>
          <p>Hi, I'm Imran</p>
          <div className={styles.wave}>
            <Image src="/wave.svg" fill={true} />
          </div>
        </div>
        <p className={styles.stack}>Web Developer</p>
        <div className={styles.linksBox}>
          <a className={styles.link} href={links.github} target="__blank">
            <div className={styles.linkIcon}>
              <Image src="/github.svg" fill={true} />
            </div>
            github
          </a>
          <a className={styles.link} href={links.linkedin} target="__blank">
            <div className={styles.linkIcon}>
              <Image src="/linkedin.svg" fill={true} />
            </div>
            linkedin
          </a>
          <a className={styles.link} href={links.twitter} target="__blank">
            <div className={styles.linkIcon}>
              <Image src="/twitter.svg" fill={true} />
            </div>
            twitter
          </a>
        </div>
        <p className={styles.desc}>{texts.about}</p>
        <div className={styles.divider}></div>
        <div className={styles.timeline}>
          <div className={`${styles.step} ${styles.leftStep}`}>
            <div className={styles.textbox}>
              <p className={styles.date}>23.01.2020</p>
              <p>Capgemini</p>
            </div>
            <div className={styles.circle}></div>
          </div>
          <div className={`${styles.step} ${styles.rightStep}`}>
            <div className={styles.circle}></div>
            <div className={styles.textbox}>
              <p className={styles.date}>21.08.2020</p>
              <p>Telematics portal</p>
            </div>
          </div>


          <div className={`${styles.step} ${styles.rightStep}`}>
            <div className={styles.circle}></div>
            <div className={styles.textbox}>
              <p className={styles.date}>15.01.2022</p>
              <p>Batch processing system</p>
            </div>
          </div>

          <div className={`${styles.step} ${styles.leftStep}`}>
            <div className={styles.textbox}>
              <p className={styles.date}>08.08.2022</p>
              <p>Infosys</p>
            </div>
            <div className={styles.circle}></div>
          </div>

          <div className={`${styles.step} ${styles.rightStep}`}>
            <div className={styles.circle}></div>
            <div className={styles.textbox}>
              <p className={styles.date}>15.08.2022</p>
              <p>Telecom dashboard</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
