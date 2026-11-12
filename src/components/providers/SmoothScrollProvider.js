"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Ultra-smooth, responsive linear interpolation (lerp)
    // lerp: 0.09 gives immediate wheel response with luxurious, natural deceleration
    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      smoothWheel: true,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return <>{children}</>;
}
