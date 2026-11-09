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

  // Track scroll position through the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform for the authentic photo
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Clean fade-out and upward lift for hero card — dissolves cleanly before user reaches sector section
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  // Dynamic atmospheric veil: 0% at rest (fully bright picture), gradually dims on scroll
  const dynamicVeilOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 0.65]);

  // Smooth scroll handler for quick navigation pills
  const handlePillClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 90;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={containerRef} className={styles.heroSection}>
      {/* 3D Depth Parallax Background Image - Bright, Sharp & Prominent */}
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

      {/* Crystal-clear ambient lighting */}
      <div className={styles.ambientGradient} />

      {/* Scroll-Driven Darkening Veil (0% opacity at top) */}
      <motion.div
        className={styles.dynamicVeil}
        style={{ opacity: dynamicVeilOpacity }}
      />

      {/* Upper-Zone Hero Floating Glass Card: leaves the guards below 100% visible */}
      <div className={styles.contentContainer}>
        <motion.div
          className={styles.heroCard}
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Sector Expertise
            </span>
          </div>

          <h1 className={styles.headline}>
            <span>INDUSTRIES</span> <span className={styles.goldText}>WE PROTECT.</span>
          </h1>

          <p className={styles.supportCopy}>
            Specialized security protocols and trained personnel tailored to the distinct operational demands of businesses, campuses, and communities across Bangalore.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/security-audit-bangalore" className={styles.heroBtn}>
              REQUEST SITE ASSESSMENT
              <span>→</span>
            </Link>
            <Link href="/contact" className={styles.heroBtnSecondary}>
              SPEAK WITH A COMMANDER
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Interactive Quick-Navigation Dock at the Transition Seam */}
      <div className={styles.dockWrapper}>
        <div className={styles.dockContainer}>
          <div className={styles.dockTitle}>
            <span>⚡ SECTOR DIRECTORY</span>
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
