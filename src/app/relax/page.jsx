"use client"
import styles from "./page.module.css";
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause, faThunderstorm, faTent } from "@fortawesome/free-solid-svg-icons";

export default function Relax() {
    const tentAudioRef = useRef(null);
    const thunderAudioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const playPauseMaster = () => {
        if (tentAudioRef.current) {
            if (playing) {
                tentAudioRef.current.pause();
                setPlaying(false)
            } else {
                tentAudioRef.current.play();
                setPlaying(true)
            }
        }
        if (thunderAudioRef.current) {
            if (playing) {
                thunderAudioRef.current.pause();
                setPlaying(false)
            } else {
                thunderAudioRef.current.play();
                setPlaying(true)
            }
        }
    }
    const handleTimeUpdate = (audioRef, threshold) => {
        if (audioRef.current && audioRef.current.currentTime >= threshold) {
            audioRef.current.currentTime = 1;
        }
    };

    const playPause = (audioRef) => {
        console.log("imran", audioRef)
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }

    useEffect(() => {

    })


    return (
        <div className={styles.main}>
            <audio ref={tentAudioRef} onTimeUpdate={()=>handleTimeUpdate(tentAudioRef, 13)}>
                <source src={`/audios/tent_rain.ogg`} type="audio/ogg" />
            </audio>
            <audio ref={thunderAudioRef} onTimeUpdate={()=>handleTimeUpdate(thunderAudioRef, 11)}>
                <source src={`/audios/thunder_rain.ogg`} type="audio/ogg" />
            </audio>
            <div className={styles.soundsBox}>
                <button className={styles.button} onClick={() => playPause(tentAudioRef)}><FontAwesomeIcon className={styles.soundButton} style={{ color: "red" }} icon={faTent} /></button>
                <button className={styles.button} onClick={() => playPause(thunderAudioRef)}><FontAwesomeIcon className={styles.soundButton} icon={faThunderstorm} /></button>
            </div>
            <button className={styles.button} onClick={playPauseMaster}><FontAwesomeIcon className={styles.playPauseBtn} icon={playing ? faCirclePause : faCirclePlay} /></button>
        </div>
    );
};
