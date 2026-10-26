import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "Industrial & Logistics Manpower Services in Bangalore | Kingsmen",
  description: "Disciplined, police-verified manpower deployment for dark stores, warehouses, manufacturing units, and industrial factories across Bangalore.",
};

const capabilities = [
  {
    title: "100% Police & Identity Verified",
    desc: "Rigorous Aadhaar, background, and previous employer checks to ensure reliable, honest personnel on your production floor and fulfillment centers.",
  },
  {
    title: "Dark Store & Rapid Fulfillment Support",
    desc: "Trained pickers, packers, sorters, and loading staff accustomed to high-speed SLA environments and strict shift adherence.",
  },
  {
    title: "Dock Loading & Material Handlers",
    desc: "Physically fit, safety-briefed personnel for unloading heavy freight, inventory stacking, and dock dispatch coordination.",
  },
  {
    title: "Strict Shift Supervision & Zero Absenteeism",
    desc: "Kingsmen field supervisors handle daily roll-calls, standby relievers, and operational compliance to prevent line halts.",
  },
];

const sectorsServed = [
  "E-Commerce Dark Stores & Hyperlocal Delivery Hubs",
  "Central Distribution Centers & Cold Storage Warehouses",
  "Automotive & Engineering Manufacturing Facilities",
  "FMCG Packaging & Processing Plants",
  "Industrial Industrial Parks & Fabrication Yards",
];

export default function Page() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero} style={{ minHeight: "55vh" }}>
        <div className={styles.heroBackground}>
          <Image
            src="/services-images/manpower.webp"
            alt="Industrial Man Power Deployment"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2} y={20}>
              <span className={styles.eyebrow}>WORKFORCE SOLUTIONS</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3} y={20}>
                <span>RELIABLE MAN POWER</span>{" "}
                <span className={styles.goldText}>DEPLOYMENT.</span>
              </FadeIn>
            </h1>
            <FadeIn delay={0.4} y={20}>
              <p className={styles.supportCopy}>
                Skilled, verified, and heavily supervised industrial workforce for dark stores, logistics centers, warehouses, and factories across Bangalore.
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
              DISCIPLINED INDUSTRIAL WORKFORCE SUPPLY
            </h2>
            <p style={{ maxWidth: "750px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "48px", lineHeight: "1.6" }}>
              Industrial and logistics productivity hinges on dependable manpower. We supply trained, disciplined personnel backed by active on-site supervision and rapid reliever rosters.
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
                Industries Supplied with Kingsmen Manpower
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
                REQUEST MANPOWER PROPOSAL
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
