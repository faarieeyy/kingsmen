import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "Advanced CCTV Surveillance in Bangalore | Kingsmen",
  description: "End-to-end CCTV installation, remote video monitoring, and smart surveillance systems for corporate campuses, warehouses, and residential societies across Bangalore.",
};

const cctvCapabilities = [
  {
    title: "High-Definition IP & AI Cameras",
    desc: "4K ultra-low-light sensors, automatic license plate recognition (ANPR), and facial detection for clear identification day and night.",
  },
  {
    title: "24/7 Command Center Monitoring",
    desc: "Round-the-clock remote video audits by dedicated surveillance officers with instant alert protocols for security dispatch.",
  },
  {
    title: "Perimeter Intrusion Detection",
    desc: "AI tripwire analytics and thermal boundary monitoring to prevent unauthorized intrusion before breach occurs.",
  },
  {
    title: "Secure Cloud & On-Premise Storage",
    desc: "Redundant NVR/DVR setups and encrypted off-site cloud backups ensuring zero data loss and tamper-proof evidence.",
  },
];

const sectorsServed = [
  "Corporate Tech Parks & Data Centers",
  "Residential Societies & Gated Villas",
  "Logistics Hubs & Warehouses",
  "Manufacturing & Industrial Plants",
  "Commercial Malls & Retail Showrooms",
  "Educational Institutions & Hospitals",
];

export default function Page() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero} style={{ minHeight: "55vh" }}>
        <div className={styles.heroBackground}>
          <Image
            src="/authentic-photos/boardroom-leadership-meeting.webp"
            alt="Kingsmen CCTV Surveillance & Electronic Security Solutions"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2} y={20}>
              <span className={styles.eyebrow}>ELECTRONIC SURVEILLANCE</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3} y={20}>
                <span>ADVANCED CCTV</span>{" "}
                <span className={styles.goldText}>SURVEILLANCE.</span>
              </FadeIn>
            </h1>
            <FadeIn delay={0.4} y={20}>
              <p className={styles.supportCopy}>
                High-definition IP camera installation, smart AI video analytics, and 24/7 remote monitoring for commercial, industrial, and residential premises across Bangalore.
              </p>
              <Link href="/security-audit-bangalore" className="primary-btn">
                REQUEST SITE ASSESSMENT
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section" style={{ backgroundColor: "var(--navy-midnight)" }}>
        <div className="container">
          <FadeIn y={20}>
            <h2 className={styles.introStatement} style={{ marginBottom: "16px" }}>
              COMPREHENSIVE VIDEO SURVEILLANCE ARCHITECTURE
            </h2>
            <p style={{ maxWidth: "750px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "48px", lineHeight: "1.6" }}>
              Modern premises require more than passive recording. Kingsmen delivers intelligent surveillance ecosystems combining enterprise-grade hardware with proactive monitoring.
            </p>
          </FadeIn>

          {/* 4 Feature Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "60px",
            }}
          >
            {cctvCapabilities.map((cap, idx) => (
              <FadeIn key={idx} delay={0.15 * idx} y={20}>
                <div
                  style={{
                    backgroundColor: "rgba(5, 16, 36, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "var(--radius-md)",
                    padding: "30px 26px",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "var(--white)",
                      marginBottom: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                    {cap.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Sectors Served Grid */}
          <FadeIn y={20}>
            <div
              style={{
                backgroundColor: "rgba(5, 16, 36, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "var(--radius-lg)",
                padding: "40px",
              }}
            >
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#FFD700", marginBottom: "20px", textTransform: "uppercase" }}>
                Sectors Protected by Kingsmen CCTV
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "14px",
                }}
              >
                {sectorsServed.map((sector, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "rgba(255, 255, 255, 0.88)",
                      fontSize: "0.95rem",
                    }}
                  >
                    <span style={{ color: "#FFD700", fontSize: "1.2rem" }}>•</span>
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA Row */}
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <FadeIn y={15}>
              <Link href="/contact" className="primary-btn" style={{ marginRight: "16px" }}>
                GET A SURVEILLANCE QUOTE
              </Link>
              <Link href="/services" className={styles.secondaryBtn}>
                VIEW ALL SERVICES
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
