import styles from "./page.module.css";

export default function Overlay({ title, message }) {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <h4>{title}</h4>
                {message}
            </div>
        </div>
    )
}