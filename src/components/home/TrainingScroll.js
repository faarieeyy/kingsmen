"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "../../app/page.module.css";

const stages = [
  {
    id: "01",
    title: "SELECTION",
    subtitle: "Meticulous Vetting & Merit-Based Recruitment",
    desc: "We recruit our personnel in accordance with rigorous parameters laid down in our recruitment policy. This includes education, age, physical endurance, and integrity testing. All candidates undergo extensive 5-tier verification, criminal record vetting, and police clearances before induction.",
    img: "/group-photos-web/team-security-02.webp"
  },
  {
    id: "02",
    title: "TRAINING",
    subtitle: "Ex-Servicemen Led Tactical & Emergency Drills",
    desc: "Before deployment, every Kingsmen officer undertakes comprehensive training designed by Ex-Army and Air Force commanders. Beyond core guarding discipline, personnel are trained in emergency first aid, industrial firefighting, self-defence, and access control technologies.",
    img: "/group-photos-web/team-group-01.webp"
  },
  {
    id: "03",
    title: "SUPERVISION",
    subtitle: "24/7 Field Inspections & Command Center Audits",
    desc: "Supervision ensures uncompromised standards. Dedicated field officers and mobile patrolling squads conduct unannounced day and night surprise inspections. Our central command center operates 24/7 in English and Hindi to guarantee immediate support for any incident.",
    img: "/group-photos-web/team-group-02.webp"
  }
];

export default function TrainingScroll() {
  const containerRef = useRef(null);

  return (
    <section className={`section ${styles.scrollSection}`} ref={containerRef}>
      <div className="container">
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <h2 className={styles.introStatement} style={{ marginBottom: "12px" }}>
            <span>OPERATIONAL</span>{" "}
            <span style={{ color: "#FFD700" }}>EXCELLENCE</span>
          </h2>
          <div className="gold-line" style={{ width: "80px", margin: "0 auto 16px auto" }}></div>
          <p style={{ maxWidth: "680px", margin: "0 auto", color: "rgba(255, 255, 255, 0.75)", fontSize: "0.95rem" }}>
            The three foundational pillars that make Kingsmen the most disciplined security and facility force in Bangalore.
          </p>
        </div>

        <div className={styles.scrollContainer} style={{ overflow: "hidden" }}>
          {stages.map((stage, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={stage.id}
                className={styles.scrollItem}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  alignItems: "center",
                  gap: "40px",
                  padding: "40px 0",
                  borderBottom: index < stages.length - 1 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
                }}
              >
                {/* Text Block - Slides in from Left on Even (0, 2), from Right on Odd (1) */}
                <motion.div
                  className={styles.scrollText}
                  initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ order: isEven ? 2 : 1 }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.78rem",
                      fontWeight: "700",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#FFD700",
                      marginBottom: "10px",
                    }}
                  >
                    PILLAR {stage.id}
                  </span>
                  <h3
                    style={{
                      fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                      fontWeight: "800",
                      color: "var(--white)",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    {stage.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "rgba(255, 215, 0, 0.85)",
                      marginBottom: "16px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {stage.subtitle}
                  </div>
                  <p
                    style={{
                      fontSize: "clamp(0.92rem, 1.1vw, 1.02rem)",
                      lineHeight: "1.75",
                      color: "rgba(255, 255, 255, 0.82)",
                      margin: 0,
                    }}
                  >
                    {stage.desc}
                  </p>
                </motion.div>

                {/* Image Block - Slides in from Right on Even (0, 2), from Left on Odd (1) */}
                <motion.div
                  className={styles.scrollImageWrapper}
                  initial={{ opacity: 0, x: isEven ? -80 : 80, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    order: isEven ? 1 : 2,
                    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={stage.img}
                    alt={stage.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 60%, rgba(5, 16, 36, 0.5) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
