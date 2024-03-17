import styles from "./page.module.css";
import { contact } from "@/utils/data";

export default function ContactPage() {
  return (
    <div className={styles.main}>
      <div className={styles.address}>
        <p className={styles.addressHeader}>Reach me:</p>
        <p className={styles.text}>Name: <span>{contact.name}</span></p>
        <p className={styles.text}>Email: <span>{contact.email}</span></p>
        <p className={styles.text}>Country: <span>{contact.country}</span></p>
        <p className={styles.text}>Planet: <span>{contact.planet}</span></p>
        <p className={styles.text}>Public key:<div className={styles.publicKey}><p>{contact.publikKey}</p></div></p>
      </div>
      <div className={styles.form}>
        <p>Let's chat:</p>
        <input className={styles.input} placeholder="Name" />
        <input className={styles.input} placeholder="Email" />
        <input className={styles.input} placeholder="Phone" />
        <textarea className={styles.message} placeholder="Message" />
        <button className={styles.sendBtn}>Send (Coming soon...)</button>
      </div>
    </div>
  );
}
