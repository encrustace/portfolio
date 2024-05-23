import styles from "./page.module.css";
import { skills } from "../../utils/data";
import Image from "next/image";

export default function Skills() {
  const keys = Object.keys(skills);
  return (
    <div className={styles.main}>
      {skills.map((item, index) => {
        return (<div key={index} className={styles.skillDiv}>
          <div className={styles.icon}>
            <Image src={`/images/${item}.svg`} fill={true} alt={item} />
          </div>
          <p className={styles.label}>{item}</p>
        </div>)
      })}
    </div>
  );
}
