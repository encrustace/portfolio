import styles from "./page.module.css";
import { data } from "../../utils/data";

export default function About() {
  return (
    <div className={styles.main}>
      <p className={styles.hi}>hi, my name is</p>
      <div className={styles.divider}></div>
      <p className={styles.name}>imran khan.</p>
      <p className={styles.shortdesc}>{data.shortDesc}</p>
      <p className={styles.description}>{data.desc}</p>
    </div>
  );
}
