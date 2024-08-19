import Link from "next/link";
import  { Orbitron }  from "next/font/google";
import styles from "./page.module.css";
import { texts } from "@/utils/data";

const font = Orbitron({ subsets: ["latin"] });

export default function Home(){
    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <p className={styles.name}>{texts.name}</p>
                <p>{texts.about}</p>
                <p>{texts.working} <a className={styles.company} href="https://in.linkedin.com/company/globant" target="blank">{texts.company}</a></p>
            </div>
            <div className={`${styles.right} ${font.className}`}>
                <Link className={styles.nav_link} href={"about"}>ABOUT</Link>
                <Link className={styles.nav_link} href={"skills"}>SKILLS</Link>
                <Link className={styles.nav_link} href={"contact"}>CONTACT</Link>
            </div>
        </div>
    )
}