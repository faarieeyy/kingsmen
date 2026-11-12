"use client";
import { useEffect, useRef, useState, useCallback } from "react";
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
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Direct 1:1 mapping with Lenis smooth scroll progress
  // Plays smoothly through all 181 frames over 0 -> 0.72 of the scroll track
  const frameIndexMotion = useTransform(scrollYProgress, [0, 0.72], [0, TOTAL_FRAMES - 1], {
    clamp: true,
  });

  // Video overlay gradient: completely transparent during playback, fades in as video concludes
  const overlayOpacity = useTransform(scrollYProgress, [0.72, 0.82], [0, 0.85]);

  // Main brand content fades in seamlessly once video playback has finished
  const contentOpacity = useTransform(scrollYProgress, [0.74, 0.84, 1], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.74, 0.84], ["35px", "0px"]);

  // Render a frame image onto the canvas with crisp high-DPR cover-fit
  const drawFrame = useCallback((img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    if (!iw || !ih) return;

    // Cover math preserving aspect ratio
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = Math.round((cw - nw) / 2);
    const ny = Math.round((ch - nh) / 2);

    ctx.drawImage(img, nx, ny, nw, nh);
  }, []);

  // Helper to get target frame or closest loaded neighbor to prevent any freeze/skip
  const getBestFrame = useCallback((targetIdx) => {
    const images = imagesRef.current;
    if (!images || !images.length) return null;

    // 1. Exact frame match if complete
    if (images[targetIdx]?.complete && images[targetIdx]?.naturalWidth > 0) {
      return images[targetIdx];
    }

    // 2. Search backward first (natural continuity), then forward
    for (let offset = 1; offset < 30; offset++) {
      const prev = targetIdx - offset;
      if (prev >= 0 && images[prev]?.complete && images[prev]?.naturalWidth > 0) {
        return images[prev];
      }
      const next = targetIdx + offset;
      if (next < TOTAL_FRAMES && images[next]?.complete && images[next]?.naturalWidth > 0) {
        return images[next];
      }
    }

    return images[0]?.complete ? images[0] : null;
  }, []);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload frames with prioritized 2-phase loading (keyframes first for instant readiness)
  useEffect(() => {
    let active = true;
    const folder = isMobileDevice ? "/hero-frames-mobile" : "/hero-frames";
    const images = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    // Canvas buffer sizing with up to 2.5x DPR for Retina / 2K / 4K fidelity
    const resizeCanvas = () => {
      if (canvasRef.current) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
        canvasRef.current.width = Math.round(window.innerWidth * dpr);
        canvasRef.current.height = Math.round(window.innerHeight * dpr);

        const currentIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameIndexMotion.get())));
        const bestImg = getBestFrame(currentIdx);
        if (bestImg) {
          drawFrame(bestImg);
        }
      }
    };
    resizeCanvas();

    let loadedCountLocal = 0;

    const loadSingleImage = (index) => {
      const img = new Image();
      const numStr = String(index).padStart(4, "0");
      img.src = `${folder}/frame_${numStr}.webp`;

      img.onload = () => {
        if (!active) return;
        images[index] = img;
        loadedCountLocal++;
        setLoadedCount(loadedCountLocal);

        if (index === 0 && canvasRef.current) {
          drawFrame(img);
        }

        if (loadedCountLocal >= 15) {
          setIsReady(true);
        }
      };

      images[index] = img;
    };

    // Phase 1: Load every 4th keyframe first (fast scrub coverage in <400ms)
    for (let i = 0; i < TOTAL_FRAMES; i += 4) {
      loadSingleImage(i);
    }

    // Phase 2: Immediately fill in all intermediate frames
    const phase2Timer = setTimeout(() => {
      if (!active) return;
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (i % 4 !== 0) {
          loadSingleImage(i);
        }
      }
    }, 50);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      active = false;
      clearTimeout(phase2Timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileDevice, drawFrame, getBestFrame, frameIndexMotion]);

  // Synchronized RAF render loop directly driven by Lenis and scroll updates
  useEffect(() => {
    let rafId = null;
    let lastRenderedIdx = -1;

    const renderCurrentFrame = () => {
      const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameIndexMotion.get())));
      if (frameIdx !== lastRenderedIdx) {
        const img = getBestFrame(frameIdx);
        if (img) {
          drawFrame(img);
          lastRenderedIdx = frameIdx;
        }
      }
      rafId = null;
    };

    const scheduleRender = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(renderCurrentFrame);
      }
    };

    const unsubscribe = frameIndexMotion.on("change", scheduleRender);

    // Sync directly with Lenis scroll ticks for zero-latency frame scrubbing
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.on("scroll", scheduleRender);
    }

    return () => {
      unsubscribe();
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.off("scroll", scheduleRender);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [frameIndexMotion, getBestFrame, drawFrame]);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.stickyContainer}>
        {/* Canvas background for hardware-accelerated frame scrubbing */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Ambient aesthetic gradients for cinematic feel - only darkens after video finishes */}
        <motion.div className={styles.overlay} style={{ opacity: overlayOpacity }} />

        {/* Main Brand Content: Direct, bold, without glassy card container */}
        <motion.div
          className={styles.contentLayer}
          style={{ opacity: contentOpacity, y: contentY, pointerEvents: "auto" }}
        >
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.headline}>
                <span>SECURITY.</span>{" "}
                <span>DISCIPLINE.</span>{" "}
                <span className={styles.goldText}>TRUST.</span>
              </h1>
              <p className={styles.supportCopy}>
                Premier security and integrated facility management deployed across Bangalore.
              </p>
              <div className={styles.actions}>
                <Link href="/security-audit-bangalore" className="primary-btn">
                  REQUEST ASSESSMENT
                </Link>
                <Link href="/services" className={styles.secondaryBtn}>
                  EXPLORE SERVICES
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
