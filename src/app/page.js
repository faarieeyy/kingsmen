"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import TrainingScroll from "@/components/home/TrainingScroll";
import ServicesHorizontalScroll from "@/components/home/ServicesHorizontalScroll";
import HeroVideoScroll from "@/components/home/HeroVideoScroll";

export default function Home() {
  return (
    <>
      {/* 01 - HERO WITH SILKY SMOOTH VIDEO SCROLL ANIMATION */}
      <HeroVideoScroll />

      {/* 02 - COMPANY INTRODUCTION BENTO BOX */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.bentoGrid}>
            
            <motion.div 
              className={`${styles.bentoCard} ${styles.bentoMain}`}
              initial={{ opacity: 0, y: 100, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.introStatement}>
                COMPREHENSIVE SECURITY SOLUTIONS.
              </h2>
              <p>
                Kingsmen is a premier security and facility management agency based in Bangalore. 
                We deploy highly trained, thoroughly verified personnel backed by continuous supervision 
                and rigorous operational discipline.
              </p>
              <p>
                From corporate campuses to industrial warehouses, we ensure your facilities remain 
                secure and fully operational 24/7.
              </p>
            </motion.div>
            
            <motion.div 
              className={styles.bentoImage}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src="/group-photos-web/team-security-01.webp" alt="Kingsmen Security Team" fill style={{ objectFit: "cover" }} />
              <motion.div className={styles.imageOverlay} 
                initial={{ scaleX: 1 }} 
                whileInView={{ scaleX: 0 }} 
                transition={{ duration: 1, delay: 0.5, ease: "circInOut" }} 
                style={{ originX: 1 }}
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 03 - SERVICES HORIZONTAL SCROLL HUB */}
      <ServicesHorizontalScroll />

      {/* SELECTION / TRAINING / SUPERVISION SCROLL ANIMATION */}
      <TrainingScroll />

    </>
  );
}

