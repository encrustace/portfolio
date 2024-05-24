"use client"
import styles from "./page.module.css";
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause, faThunderstorm, faTent } from "@fortawesome/free-solid-svg-icons";

export default function Relax() {
    const tentAudioRef = useRef(null);
    const thunderAudioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const canvasRef = useRef(null)
    // Create array to hold raindrops
    var raindrops = [];

    // Function to create raindrops
    function createRaindrop() {
        return {
            x: Math.random() * canvasRef.current.width * 15,
            y: 0,
            length: Math.random() * 20 + 10,
            speed: Math.random() * 10 + 10
        };
    }

    // Function to update raindrops
    function updateRaindrops() {
        for (var i = 0; i < raindrops.length; i++) {
            var raindrop = raindrops[i];
            raindrop.y += raindrop.speed;
            if (canvasRef.current && raindrop.y > canvasRef.current.height) {
                raindrop.y = 0;
            }
        }
    }

    // Function to draw raindrops
    function drawRaindrops() {
        if (canvasRef.current) {
            var ctx = canvasRef.current.getContext('2d');
            // Set canvas size
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;

            // ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            for (var i = 0; i < raindrops.length; i++) {
                var raindrop = raindrops[i];
                ctx.beginPath();
                ctx.moveTo(raindrop.x, raindrop.y);
                ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
                ctx.strokeStyle = 'white';
                ctx.stroke();
            }
        }
    }
    function initRainDrop() {
        for (var i = 0; i < 500; i++) {
            raindrops.push(createRaindrop());
        }
        setInterval(function () {
            updateRaindrops();
            drawRaindrops();
        }, 50);
    }

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
        initRainDrop();
    }, [])


    return (
        <div className={styles.main}>
            <canvas className={styles.canvas} ref={canvasRef}></canvas>
            <div className={styles.musicBox}>
                <audio ref={tentAudioRef} onTimeUpdate={() => handleTimeUpdate(tentAudioRef, 13)}>
                    <source src={`/audios/tent_rain.ogg`} type="audio/ogg" />
                </audio>
                <audio ref={thunderAudioRef} onTimeUpdate={() => handleTimeUpdate(thunderAudioRef, 11)}>
                    <source src={`/audios/thunder_rain.ogg`} type="audio/ogg" />
                </audio>
                <div className={styles.soundsBox}>
                    <button className={styles.button} onClick={() => playPause(tentAudioRef)}><FontAwesomeIcon className={styles.soundButton} style={{ color: "red" }} icon={faTent} /></button>
                    <button className={styles.button} onClick={() => playPause(thunderAudioRef)}><FontAwesomeIcon className={styles.soundButton} icon={faThunderstorm} /></button>
                </div>
                <button className={styles.button} onClick={playPauseMaster}><FontAwesomeIcon className={styles.playPauseBtn} icon={playing ? faCirclePause : faCirclePlay} /></button>
            </div>
        </div>
    );
};
