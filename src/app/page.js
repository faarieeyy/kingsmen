"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import TrainingScroll from "@/components/home/TrainingScroll";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.8 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* 01 - HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/hero.jpg" 
            alt="Kingsmen Security Guard" 
            fill 
            style={{ objectFit: "cover" }} 
            priority
          />
        </div>
        
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className={styles.eyebrow}>
              KINGSMEN (IND) SERVICES
            </motion.span>
            
            <motion.h1 variants={itemVariants} className={styles.headline}>
              <span>SECURITY.</span>
              <span>DISCIPLINE.</span>
              <span>TRUST.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className={styles.supportCopy}>
              Professional Security & Facility Management serving Bangalore with precision, protection, and readiness.
            </motion.p>
            
            <motion.div variants={itemVariants} className={styles.heroActions}>
              <Link href="/security-audit-bangalore" className="primary-btn">
                REQUEST FREE SITE ASSESSMENT
              </Link>
              <Link href="/services" className={styles.secondaryBtn}>
                EXPLORE SERVICES
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 02 - COMPANY INTRODUCTION BENTO BOX */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.bentoGrid}>
            
            <motion.div 
              className={`${styles.bentoCard} ${styles.bentoMain}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image src="/images/facility.jpg" alt="Kingsmen Facility" fill style={{ objectFit: "cover" }} />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 03 - SECURITY + FACILITY MANAGEMENT (CURVY SPLIT) */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesSplit}>
            
            <Link href="/security-services-bangalore">
              <motion.div 
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={styles.serviceBg}>
                  <Image src="/images/patrol.jpg" alt="Security Services" fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.serviceOverlay}></div>
                <div className={styles.serviceContent}>
                  <span className={styles.sectionNumber}>02</span>
                  <h3 className={styles.serviceTitle}>SECURITY SERVICES</h3>
                  <p>Armed & Unarmed Guarding, Mobile Patrols, and Audits.</p>
                </div>
              </motion.div>
            </Link>
            
            <Link href="/facility-management-bangalore">
              <motion.div 
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.serviceBg}>
                  <Image src="/images/facility.jpg" alt="Facility Management" fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.serviceOverlay}></div>
                <div className={styles.serviceContent}>
                  <span className={styles.sectionNumber}>03</span>
                  <h3 className={styles.serviceTitle}>FACILITY MANAGEMENT</h3>
                  <p>Integrated Housekeeping, Maintenance, and Corporate Environments.</p>
                </div>
              </motion.div>
            </Link>

          </div>
        </div>
      </section>

      {/* SELECTION / TRAINING / SUPERVISION SCROLL ANIMATION */}
      <TrainingScroll />

    </>
  );
}
