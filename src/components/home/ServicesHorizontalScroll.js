"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./ServicesHorizontalScroll.module.css";

const services = [
  {
    num: "01",
    category: "GUARDING & DEFENSE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "SECURITY SERVICES",
    tagline: "Armed & unarmed guarding, 24/7 campus patrol & access control.",
    items: [
      "Corporate Offices & Tech Parks",
      "Gated Societies & Apartments",
      "Warehouses, Industry & Factories",
      "Educational & Commercial Campuses"
    ],
    img: "/authentic-photos/guard-formation-portrait.webp",
    link: "/services/security-service"
  },
  {
    num: "02",
    category: "FACILITY & HYGIENE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-5.5 4.5 2 7-6.5-4.5-6.5 4.5 2-7L3 9h7z" />
      </svg>
    ),
    title: "FACILITY MANAGEMENT",
    tagline: "Integrated corporate housekeeping, sanitation & asset care.",
    items: [
      "Corporate Housekeeping",
      "Technical Facility Maintenance",
      "Deep Sanitization & Pest Control",
      "Waste & Vendor Management"
    ],
    img: "/services-images/facility.webp",
    link: "/services/facility-management"
  },
  {
    num: "03",
    category: "SPECIALIZED CARE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "GERIATRIC SERVICE",
    tagline: "Compassionate, certified eldercare & patient assistance.",
    items: [
      "In-Home Dedicated Patient Care",
      "Post-Operative Recovery Support",
      "Hospital & Clinical Assistance",
      "Assisted Senior Living Homes"
    ],
    img: "/services-images/geriatric.webp",
    link: "/services/geriatric-service"
  },
  {
    num: "04",
    category: "ELECTRONIC SURVEILLANCE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "CCTV SERVICES",
    tagline: "Smart AI video analytics, perimeter sensors & 24/7 audits.",
    items: [
      "AI Smart Video Analytics",
      "Command Center Remote Monitoring",
      "Perimeter Intrusion Detection",
      "Enterprise Cloud & NVR Backups"
    ],
    img: "/services-images/cctv.webp",
    link: "/services/cctv"
  },
  {
    num: "05",
    category: "INDUSTRIAL MANPOWER",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "MAN POWER SERVICE",
    tagline: "Thoroughly verified workforce for warehousing & manufacturing.",
    items: [
      "Dark Stores & Quick Fulfillment",
      "Logistics & Warehouse Operations",
      "Manufacturing & Factory Labor",
      "Packaging & Loading Crews"
    ],
    img: "/services-images/manpower.webp",
    link: "/services/man-power"
  }
];

export default function ServicesHorizontalScroll() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
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

  // Inertia spring smoothing for liquid horizontal slide
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange]);

  const handleCardClick = (idx, e) => {
    // On touch devices: first tap toggles details open, second tap navigates
    if (window.matchMedia("(hover: none)").matches) {
      if (activeCard !== idx) {
        e.preventDefault();
        setActiveCard(idx);
      }
    }
  };

  return (
    <section ref={targetRef} className={styles.scrollWrapper}>
      <div className={styles.stickyContainer}>
        <div className="container" style={{ width: "100%", marginBottom: "0.5rem" }}>
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <span className={styles.eyebrow}>SERVICES HUB</span>
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
                <Link
                  key={idx}
                  href={service.link}
                  className={styles.cardLink}
                  onClick={(e) => handleCardClick(idx, e)}
                >
                  <div className={`${styles.card} ${activeCard === idx ? styles.cardActive : ""}`}>
                    {/* Background photo */}
                    <div className={styles.cardBg}>
                      <Image 
                        src={service.img} 
                        alt={service.title} 
                        fill 
                        style={{ objectFit: "cover" }} 
                        sizes="(max-width: 768px) 85vw, 420px"
                      />
                    </div>

                    {/* Gradient overlay: darkens on touch/hover */}
                    <div className={styles.cardOverlay} />
                    
                    {/* Card Content */}
                    <div className={styles.cardContent}>
                      {/* Meta header row (category & index) */}
                      <div className={styles.cardMetaRow}>
                        <div className={styles.badgeGroup}>
                          <span className={styles.serviceIcon}>{service.icon}</span>
                          <span className={styles.categoryBadge}>{service.category}</span>
                        </div>
                        <span className={styles.cardNumber}>{service.num}</span>
                      </div>

                      {/* Main Heading: ALWAYS SHOWN */}
                      <h3 className={styles.cardTitle}>{service.title}</h3>

                      {/* Default state hint */}
                      <div className={styles.hoverPrompt}>
                        <span>EXPLORE DETAILS</span>
                        <span className={styles.hoverPlus}>+</span>
                      </div>

                      {/* Details Drawer: REVEALED ON TOUCH / HOVER */}
                      <div className={styles.detailsDrawer}>
                        <p className={styles.tagline}>{service.tagline}</p>

                        <ul className={styles.cardList}>
                          {service.items.map((item, itemIdx) => (
                            <li key={itemIdx} className={styles.cardListItem}>
                              <span className={styles.bulletDash}>—</span>
                              <span className={styles.itemText}>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className={styles.cardFooter}>
                          <span className={styles.exploreText}>VIEW FULL SERVICE</span>
                          <span className={styles.hoverArrow}>→</span>
                        </div>
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
