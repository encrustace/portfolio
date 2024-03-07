import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.main}>
            <p className={styles.notfound}>404</p>
            <div className={styles.candle}>
                <div className={styles.blinkingGlow}></div>
                <div className={styles.thread}></div>
                <div className={styles.glow}></div>
                <div className={styles.flame}></div>
            </div>
        </div>
    )
}