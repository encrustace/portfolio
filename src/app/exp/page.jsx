import styles from "./page.module.css";
import Image from "next/image";
import { data } from "../../../public/data";

export default function ExperiencePage() {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.text}>{data.college}</div>
        <div className={styles.icon}>
          <Image src="/images/college.svg" alt="College" fill={true} />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.icon}>
          <Image src="/images/capgemini.svg" alt="Capgemini" fill={true} />
        </div>
        <div className={styles.text}>{data.capgemini}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.text}>{data.infosys}</div>
        <div className={styles.icon}>
          <Image src="/images/infosys.svg" alt="Infosys" fill={true} />
        </div>
      </div>
    </div>
  );
}
