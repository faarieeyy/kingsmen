import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "Professional Security Guard Services in Bangalore | Kingsmen",
  description: "Licensed, PSARA-compliant security guard deployment for corporate offices, tech parks, industrial facilities, warehouses, and gated residential communities across Bangalore.",
};

const capabilities = [
  {
    title: "Rigorous Military & Ex-Servicemen Leadership",
    desc: "Founded by Ex-Army officers and led by Ex-Air Force leadership, our training and discipline standards mirror armed forces precision.",
  },
  {
    title: "100% Police & Background Verified",
    desc: "Comprehensive 5-tier verification covering criminal background, residential history, physical fitness, and credential authenticity.",
  },
  {
    title: "24/7 Field Patrols & Control Room",
    desc: "Continuous round-the-clock patrol supervision with unannounced night inspections to maintain peak alertness on every post.",
  },
  {
    title: "Emergency First Response & Fire Safety",
    desc: "Guards certified in basic first aid, CPR, emergency evacuation coordination, and initial firefighting response.",
  },
];

const sectorsSecured = [
  "Corporate Tech Parks & Global Capability Centers",
  "Gated Residential Communities & Premium Villas",
  "E-Commerce Dark Stores & Central Fulfillment Centers",
  "Heavy Manufacturing Plants & Industrial Units",
  "Educational Campuses & International Schools",
  "Commercial High Streets, Malls & Retail Showrooms",
];

export default function Page() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero} style={{ minHeight: "55vh" }}>
        <div className={styles.heroBackground}>
          <Image
            src="/authentic-photos/guard-uniform-cadres.webp"
            alt="Professional Manned Security Guard Services"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2} y={20}>
              <span className={styles.eyebrow}>MANNED GUARDING</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3} y={20}>
                <span>PROFESSIONAL</span>{" "}
                <span className={styles.goldText}>SECURITY SERVICES.</span>
              </FadeIn>
            </h1>
            <FadeIn delay={0.4} y={20}>
              <p className={styles.supportCopy}>
                Heavily supervised, smartly uniformed security guards deployed across Bangalore. Protecting personnel, property, and physical assets with total discipline.
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
              DISCIPLINED PROTECTION ARCHITECTURE
            </h2>
            <p style={{ maxWidth: "750px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "48px", lineHeight: "1.6" }}>
              Every security deployment begins with site-specific risk modeling. Our guards are specifically briefed and trained on post orders tailored to your facility.
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
            {capabilities.map((cap, idx) => (
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
                Sectors We Secure in Bangalore
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "14px",
                }}
              >
                {sectorsSecured.map((sector, idx) => (
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
                REQUEST GUARD QUOTE
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
