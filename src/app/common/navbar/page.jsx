"use client";
import { useRef, useState } from "react";
import styles from "./page.module.css";
import { links } from "@/utils/data";
import Relax from "@/app/relax/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
  const tentAudioRef = useRef(null);
  const thunderAudioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playPauseMaster = () => {
    if (tentAudioRef.current) {
      if (playing) {
        tentAudioRef.current.pause();
        setPlaying(false);
      } else {
        tentAudioRef.current.play();
        setPlaying(true);
      }
    }
    if (thunderAudioRef.current) {
      if (playing) {
        thunderAudioRef.current.pause();
        setPlaying(false);
      } else {
        thunderAudioRef.current.play();
        setPlaying(true);
      }
    }
  };

  const handleTimeUpdate = (audioRef, threshold) => {
    if (audioRef.current && audioRef.current.currentTime >= threshold) {
      audioRef.current.currentTime = 1;
    }
  };

  return (
    <div className={styles.main}>
      {playing && <Relax />}
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          HOME
        </Link>
        <a href={links.linkedin} target="blank" className={styles.link}>
          LI
        </a>

        <a href={links.twitter} target="blank" className={styles.link}>
          TW
        </a>

        <a href={links.github} target="blank" className={styles.link}>
          GH
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.copyright}>
        <p>&copy;/2024</p>
      </div>
    </div>
  );
}
