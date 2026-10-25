"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./HeroVideoScroll.module.css";

const TOTAL_FRAMES = 181;

export default function HeroVideoScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll 0 -> 0.72 to video playback from frame 0 -> TOTAL_FRAMES - 1
  // This ensures the entire video plays smoothly and purely FIRST without any text overlay!
  const frameIndexMotion = useTransform(scrollYProgress, [0, 0.72], [0, TOTAL_FRAMES - 1], {
    clamp: true,
  });

  // Video overlay gradient is 0% during playback (completely transparent, exact video colors).
  // Only when user scrolls past 0.72 (video is fully finished) does a dark gradient fade in behind the text for readability.
  const overlayOpacity = useTransform(scrollYProgress, [0.72, 0.82], [0, 0.85]);

  // Main brand content ONLY fades in after the video has finished playing!
  const contentOpacity = useTransform(scrollYProgress, [0.74, 0.84, 1], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.74, 0.84], ["40px", "0px"]);

  // Render a specific frame image onto the canvas with cover-fit and image smoothing enabled
  const drawFrame = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    if (!iw || !ih) return;

    // Precise cover algorithm keeping original aspect ratio
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = Math.round((cw - nw) / 2);
    const ny = Math.round((ch - nh) / 2);

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, nx, ny, nw, nh);
  };

  // Preload frames based on current device aspect ratio (Desktop vs Mobile)
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let active = true;
    const folder = isMobileDevice ? "/hero-frames-mobile" : "/hero-frames";
    const images = [];
    imagesRef.current = images;

    // Resize canvas to internal display buffer
    const resizeCanvas = () => {
      if (canvasRef.current) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        
        // Re-draw current frame
        const currentIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameIndexMotion.get())));
        const currentImg = imagesRef.current[currentIdx] || imagesRef.current[0];
        if (currentImg && currentImg.complete) {
          drawFrame(currentImg);
        }
      }
    };
    resizeCanvas();

    let loaded = 0;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const numStr = String(i).padStart(4, "0");
      img.src = `${folder}/frame_${numStr}.webp`;

      img.onload = () => {
        if (!active) return;
        loaded++;
        setLoadedCount(loaded);

        // Draw initial frame as soon as frame 0 loads
        if (i === 0 && canvasRef.current) {
          drawFrame(img);
        }

        if (loaded >= Math.min(25, TOTAL_FRAMES)) {
          setIsReady(true);
        }
      };

      images.push(img);
    }

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      active = false;
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileDevice]);

  // Update canvas on scroll
  useEffect(() => {
    const unsubscribe = frameIndexMotion.on("change", (latest) => {
      const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(latest)));
      const img = imagesRef.current[frameIdx];
      if (img && img.complete) {
        requestAnimationFrame(() => drawFrame(img));
      }
    });

    return () => unsubscribe();
  }, [frameIndexMotion]);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.stickyContainer}>
        {/* Canvas background for silky frame scrubbing */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Ambient aesthetic gradients for cinematic feel - only darkens after video finishes */}
        <motion.div className={styles.overlay} style={{ opacity: overlayOpacity }} />

        {/* Main Brand Content: Appears ONLY AFTER the full video has played! */}
        <motion.div
          className={styles.contentLayer}
          style={{ opacity: contentOpacity, y: contentY, pointerEvents: "auto" }}
        >
          <div className="container">
            <span className={styles.eyebrow}>PREMIER SECURITY & FACILITY MANAGEMENT</span>
            <h1 className={styles.headline}>
              <span>SECURITY.</span>
              <span>DISCIPLINE.</span>
              <span className={styles.goldText}>TRUST.</span>
            </h1>
            <p className={styles.supportCopy}>
              Elite protection, modern surveillance, and comprehensive facility management deployed across Bangalore.
            </p>
            <div className={styles.actions}>
              <Link href="/security-audit-bangalore" className="primary-btn">
                REQUEST FREE SITE ASSESSMENT
              </Link>
              <Link href="/services" className={styles.secondaryBtn}>
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Subtle scroll progress bar at the bottom */}
        <div className={styles.progressTrack}>
          <motion.div
            className={styles.progressBar}
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </div>
  );
}
