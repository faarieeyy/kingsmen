"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./ServicesSection.module.css";

const divisions = [
  {
    badge: "DIVISION 01",
    category: "SECURITY & DEFENSE",
    title: "SECURITY SERVICES",
    tagline: "Armed & unarmed guarding, CCTV surveillance solutions, and industrial manpower deployment across Bangalore.",
    image: "/authentic-photos/guard-formation-portrait.webp",
    services: [
      {
        name: "Security Service",
        link: "/services/security-service",
        sectors: [
          "Corporate offices",
          "Apartments",
          "Dark stores, Warehouses, Industry & factory",
          "Educational Institutions",
          "Commercial Shops"
        ]
      },
      {
        name: "CCTV Services",
        link: "/services/cctv",
        sectors: [
          "Corporate offices",
          "Apartments"
        ]
      },
      {
        name: "Man Power Service",
        link: "/services/man-power",
        sectors: [
          "For Dark stores",
          "Warehouse",
          "Industry",
          "Factories"
        ]
      }
    ]
  },
  {
    badge: "DIVISION 02",
    category: "FACILITY & CARE",
    title: "FACILITY MANAGEMENT",
    tagline: "Integrated corporate housekeeping, facility maintenance, and specialized geriatric care services.",
    image: "/authentic-photos/corporate-reception-guard.webp",
    services: [
      {
        name: "Facility Management & Housekeeping",
        link: "/services/facility-management",
        sectors: [
          "Corporate offices",
          "Apartments",
          "Warehouses, Industry & factory",
          "Educational Institutions",
          "Commercial Shops"
        ]
      },
      {
        name: "Geriatric Service",
        link: "/services/geriatric-service",
        sectors: [
          "Hospitals",
          "Individual residences",
          "Old age homes"
        ]
      }
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.eyebrow}>SERVICES HUB</span>
            <h2 className={styles.introStatement}>OUR SERVICES</h2>
            <p className={styles.subtitle}>
              Explore our complete range of security and facility management services tailored for businesses and residences in Bangalore.
            </p>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {divisions.map((division, idx) => (
            <motion.div
              key={idx}
              className={styles.divisionCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Card Background using ONLY the original images */}
              <div className={styles.cardBg}>
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={idx === 0}
                />
              </div>
              <div className={styles.cardOverlay}></div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <div className={styles.divisionHeader}>
                  <div className={division.badgeRow || styles.divisionBadgeRow}>
                    <span className={styles.divisionBadge}>{division.badge}</span>
                    <span className={styles.divisionCategory}>{division.category}</span>
                  </div>
                  <h3 className={styles.divisionTitle}>{division.title}</h3>
                  <p className={styles.divisionTagline}>{division.tagline}</p>
                </div>

                <div className={styles.servicesList}>
                  {division.services.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      href={service.link}
                      className={styles.serviceSubCard}
                    >
                      <div className={styles.subCardHeader}>
                        <h4 className={styles.serviceName}>{service.name}</h4>
                        <span className={styles.arrowLink}>→</span>
                      </div>
                      <div className={styles.sectorsBox}>
                        <span className={styles.sectorsLabel}>Sectors Covered:</span>
                        <div className={styles.chipsWrapper}>
                          {service.sectors.map((sector, secIdx) => (
                            <span key={secIdx} className={styles.sectorChip}>
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
