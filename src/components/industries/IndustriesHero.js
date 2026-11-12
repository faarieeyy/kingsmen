"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./IndustriesHero.module.css";

const sectorPills = [
  { id: "sector-corporate", label: "Corporate & Tech Parks" },
  { id: "sector-residential", label: "Residential & Gated" },
  { id: "sector-warehouses", label: "Warehouses & Logistics" },
  { id: "sector-industrial", label: "Manufacturing Plants" },
  { id: "sector-commercial", label: "Retail & Commercial" },
  { id: "sector-schools", label: "Educational Campuses" },
  { id: "sector-hospitals", label: "Hospitals & Healthcare" },
];

export default function IndustriesHero() {
  const containerRef = useRef(null);

  // Track scroll position through the hero section directly in sync with Lenis
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform for the authentic photo
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Clean fade-out and upward lift for hero copy — dissolves BEFORE user reaches sector section
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -40]);

  // Dynamic atmospheric veil that gently intensifies on scroll
  const dynamicVeilOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 0.75]);

  // Smooth scroll handler for quick navigation pills using Lenis
  const handlePillClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.scrollTo(target, { offset: -100, duration: 1.2 });
      } else {
        const navOffset = 90;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section ref={containerRef} className={styles.heroSection}>
      {/* 3D Depth Parallax Background Image */}
      <motion.div
        className={styles.bgWrapper}
        style={{
          y: bgY,
          scale: bgScale,
        }}
      >
        <Image
          src="/authentic-photos/guard-formation-portrait.webp"
          alt="Kingsmen Elite Security Personnel Formation Bangalore"
          fill
          className={styles.bgImage}
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Atmospheric lighting gradients */}
      <div className={styles.ambientGradient} />

      {/* Dynamic Scroll Darkening Veil */}
      <motion.div
        className={styles.dynamicVeil}
        style={{ opacity: dynamicVeilOpacity }}
      />

      {/* Hero Headline and Value Proposition */}
      <div className={styles.contentContainer}>
        <motion.div
          className={styles.heroContent}
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Sector Expertise
            </span>
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>INDUSTRIES</span> <span className={styles.goldText}>WE PROTECT.</span>
          </motion.h1>

          <motion.p
            className={styles.supportCopy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Specialized security protocols and trained personnel across Bangalore.
          </motion.p>

          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/security-audit-bangalore" className={styles.heroBtn}>
              REQUEST ASSESSMENT
              <span>→</span>
            </Link>
            <Link href="/contact" className={styles.heroBtnSecondary}>
              CONTACT EXPERTS
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Quick-Navigation Dock at the Transition Seam */}
      <div className={styles.dockWrapper}>
        <div className={styles.dockContainer}>
          <div className={styles.dockTitle}>
            <span>⚡ SECTORS</span>
          </div>
          <div className={styles.dockPills}>
            {sectorPills.map((pill) => (
              <a
                key={pill.id}
                href={`#${pill.id}`}
                onClick={(e) => handlePillClick(e, pill.id)}
                className={styles.dockPill}
              >
                <span>{pill.label}</span>
                <span className={styles.dockPillArrow}>↓</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Architectural Transition Seam: Glowing gold horizon & ambient cone */}
      <div className={styles.transitionHorizon} />
      <div className={styles.ambientCone} />
    </section>
  );
}
