import styles from "./page.module.css";
import { skills } from "../../utils/data";

export default function Skills() {
  const keys = Object.keys(skills);
  return (
    <div className={styles.main}>
      {keys.map((key) => {
        return (
          <div key={key} className={styles.stack}>
            <p className={styles.stackName}>{key}</p>
            <div className={styles.skillDiv}>
              {skills[key].map((skill) => {
                return (
                  <p key={skill} className={styles.skill}>
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
