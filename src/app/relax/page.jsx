"use client";
import styles from "./page.module.css";
import React, { useEffect, useRef } from "react";

export default function Relax() {
  const canvasRef = useRef(null);
  // Create array to hold raindrops
  var raindrops = [];

  // Function to create raindrops
  function createRaindrop() {
    return {
      x: Math.random() * canvasRef.current.width * 15,
      y: 0,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 10 + 10,
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
      var ctx = canvasRef.current.getContext("2d");
      // Set canvas size
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      // ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      for (var i = 0; i < raindrops.length; i++) {
        var raindrop = raindrops[i];
        ctx.beginPath();
        ctx.moveTo(raindrop.x, raindrop.y);
        ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
        ctx.strokeStyle = "white";
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

  useEffect(() => {
    initRainDrop();
  }, []);

  return <canvas className={styles.canvas} ref={canvasRef}></canvas>;
}
