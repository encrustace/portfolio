"use client"
import styles from "./page.module.css";
import { contact } from "@/utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLocation, faEarth, faKey } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {

  return (
    <div className={styles.main}>
      <div className={styles.address}>
        <div className={styles.textBox}><FontAwesomeIcon icon={faUser} />{contact.name}</div>
        <div className={styles.textBox}><FontAwesomeIcon icon={faEnvelope} />{contact.email}</div>
        <div className={styles.textBox}><FontAwesomeIcon icon={faLocation} />{contact.country}</div>
        <div className={styles.textBox}><FontAwesomeIcon icon={faEarth} />{contact.planet}</div>
        <div className={styles.textBox}><FontAwesomeIcon icon={faKey} />{contact.publikKey}</div>
      </div>
    </div>
  );
}
