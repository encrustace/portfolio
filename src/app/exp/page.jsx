import styles from "./page.module.css";
import Image from "next/image";
import college from "../../../public/images/college.svg";
import capgemini from "../../../public/images/capgemini.svg";
import infosys from "../../../public/images/infosys.svg";
import { data } from "../../utils/data";

export default function ExperiencePage() {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.text}>{data.college}</div>
        <Image src={college} className={styles.icon} alt="College" />
      </div>
      <div className={styles.box}>
        <Image src={capgemini} className={styles.icon} alt="Capgemini" />
        <div className={styles.text}>{data.capgemini}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.text}>{data.infosys}</div>
        <Image src={infosys} className={styles.icon} alt="Infosys" />
      </div>
    </div>
  );
}
