"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ComprehensiveBanner.module.css";

export default function ComprehensiveBanner() {
  return (
    <section className={styles.bannerSection}>
      {/* Full-bleed background image with subtle atmospheric reveal */}
      <motion.div
        className={styles.bgWrapper}
        initial={{ scale: 1.05, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/authentic-photos/comprehensive-solutions-bg.png"
          alt="Kingsmen Security and Facility Management Operations in Bangalore"
          fill
          priority
          unoptimized
          className={styles.bgImage}
        />
      </motion.div>

      {/* Cinematic curtain wipe across the blend transition */}
      <motion.div
        className={styles.blendCurtain}
        initial={{ scaleX: 1, opacity: 0.95 }}
        whileInView={{ scaleX: 0, opacity: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Luminous light sweep that glides along the blend seam on reveal */}
      <motion.div
        className={styles.blendGlow}
        initial={{ left: "28%", opacity: 0 }}
        whileInView={{ left: "60%", opacity: [0, 0.85, 0] }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
      />

      {/* Mobile viewport overlay */}
      <div className={styles.mobileOverlay} />

      {/* Live, crisp typography aligned directly within the site's container */}
      <div className="container">
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <motion.h2
              className={styles.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              COMPREHENSIVE<br className={styles.desktopBr} />SECURITY SOLUTIONS.
            </motion.h2>

            <motion.div
              className={styles.goldDivider}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            />

            <motion.p
              className={styles.bodyCopy}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              Kingsmen is a premier security and facility management agency based in Bangalore. 
              We deploy highly trained, thoroughly verified personnel backed by continuous supervision 
              and rigorous operational discipline.
            </motion.p>

            <motion.p
              className={styles.bodyCopy}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              From corporate campuses to industrial warehouses, we ensure your facilities remain 
              secure and fully operational 24/7.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
