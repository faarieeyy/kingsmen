"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./ServicesHorizontalScroll.module.css";

const services = [
  {
    num: "01",
    title: "SECURITY SERVICE",
    items: [
      "Corporate offices",
      "Apartments",
      "Dark stores, Warehouses, Industry & factory",
      "Educational Institutions",
      "Commercial Shops"
    ],
    img: "/authentic-photos/guard-formation-portrait.webp",
    link: "/services/security-service"
  },
  {
    num: "02",
    title: "FACILITY MANAGEMENT & HOUSEKEEPING",
    items: [
      "Corporate offices",
      "Apartments",
      "Warehouses, Industry & factory",
      "Educational Institutions",
      "Commercial Shops"
    ],
    img: "/services-images/facility.webp",
    link: "/services/facility-management"
  },
  {
    num: "03",
    title: "GERIATRIC SERVICE",
    items: [
      "Hospitals",
      "Individual residences",
      "Old age homes"
    ],
    img: "/services-images/geriatric.webp",
    link: "/services/geriatric-service"
  },
  {
    num: "04",
    title: "CCTV SERVICES",
    items: [
      "Corporate offices",
      "Apartments"
    ],
    img: "/services-images/cctv.webp",
    link: "/services/cctv"
  },
  {
    num: "05",
    title: "MAN POWER SERVICE",
    items: [
      "For Dark stores",
      "Warehouse",
      "Industry",
      "Factories"
    ],
    img: "/services-images/manpower.webp",
    link: "/services/man-power"
  }
];

export default function ServicesHorizontalScroll() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Scroll so the last card aligns nicely with the right side with comfortable padding
        const maxScroll = Math.max(0, totalWidth - viewportWidth + 60);
        setScrollRange(maxScroll);
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Smooth translation based on actual track width
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={targetRef} className={styles.scrollWrapper}>
      <div className={styles.stickyContainer}>
        <div className="container" style={{ width: "100%", marginBottom: "0.8rem" }}>
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <h2 className={styles.introStatement}>OUR SERVICES</h2>
              <p className={styles.subtitle}>
                Complete range of professional security and facility management solutions across Bangalore.
              </p>
            </div>
            <div className={styles.scrollIndicator}>
              <div className={styles.scrollBadge}>
                <span>SCROLL TO EXPLORE</span>
                <span className={styles.scrollArrow}>→</span>
              </div>
              <div className={styles.progressBarTrack}>
                <motion.div 
                  className={styles.progressBar} 
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }} 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.moverWrapper}>
          <motion.div style={{ x }} className={styles.scrollMover} ref={trackRef}>
            <div className={styles.track}>
              {services.map((service, idx) => (
                <Link key={idx} href={service.link} className={styles.cardLink}>
                  <div className={styles.card}>
                    <div className={styles.cardBg}>
                      <Image 
                        src={service.img} 
                        alt={service.title} 
                        fill 
                        style={{ objectFit: "cover" }} 
                        sizes="(max-width: 768px) 85vw, 400px"
                      />
                    </div>
                    <div className={styles.cardOverlay}></div>
                    
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>

                      <ul className={styles.cardList}>
                        {service.items.map((item, itemIdx) => (
                          <li key={itemIdx} className={styles.cardListItem}>
                            <span className={styles.bulletDot}></span>
                            <span className={styles.itemText}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className={styles.cardFooter}>
                        <span className={styles.exploreText}>LEARN MORE</span>
                        <span className={styles.hoverArrow}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
