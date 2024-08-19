import styles from "./page.module.css";
import { skills } from "../../utils/data";
import Image from "next/image";

export default function Skills() {
  return (
    <div className={styles.main}>
      {skills.map((item) => {
        return <p key={item} className={styles.label}>{item}</p>;
      })}
    </div>
  );
}
