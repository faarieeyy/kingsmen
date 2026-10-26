import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "Facility Management & Housekeeping Services in Bangalore | Kingsmen",
  description: "Comprehensive facility management, mechanized housekeeping, deep sanitization, and asset maintenance for corporate campuses, warehouses, and apartments in Bangalore.",
};

const capabilities = [
  {
    title: "Mechanized Housekeeping & Deep Sanitization",
    desc: "Industrial single-disc scrubbers, HEPA vacuuming, automated floor polishers, and hospital-grade eco-friendly chemicals for spotless premises.",
  },
  {
    title: "Electromechanical & MEP Maintenance",
    desc: "Proactive HVAC inspection, diesel generator operations, plumbing maintenance, and uninterrupted electrical switchboard monitoring.",
  },
  {
    title: "Waste Management & Sustainability",
    desc: "Systematic solid waste segregation, wet-waste composting coordination, and statutory compliance with municipal environmental guidelines.",
  },
  {
    title: "Dedicated On-Site Facility Manager",
    desc: "Senior facility executive assigned to oversee day-to-day operations, vendor audits, inventory tracking, and client SLA compliance.",
  },
];

const sectorsServed = [
  "Corporate IT Campuses & Commercial Office Complexes",
  "Residential Gated High-Rise Communities & Societies",
  "Large Logistics Centers, Dark Stores & Warehouses",
  "Manufacturing Plants & Pharmaceutical Production Facilities",
  "Educational Institutions, Colleges & Universities",
  "Hospitals, Specialty Clinics & Healthcare Centers",
];

export default function Page() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero} style={{ minHeight: "55vh" }}>
        <div className={styles.heroBackground}>
          <Image
            src="/services-images/facility.webp"
            alt="Facility Management & Housekeeping"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2} y={20}>
              <span className={styles.eyebrow}>INTEGRATED SERVICES</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3} y={20}>
                <span>FACILITY MANAGEMENT</span>{" "}
                <span className={styles.goldText}>& HOUSEKEEPING.</span>
              </FadeIn>
            </h1>
            <FadeIn delay={0.4} y={20}>
              <p className={styles.supportCopy}>
                Complete mechanized housekeeping, building maintenance, and operational support keeping your commercial, industrial, and residential premises pristine.
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
              ENTERPRISE FACILITY OPERATIONS & CARE
            </h2>
            <p style={{ maxWidth: "750px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "48px", lineHeight: "1.6" }}>
              A clean, well-maintained workspace boosts operational productivity and leaves a lasting impression on clients and residents. Kingsmen delivers end-to-end facility solutions.
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
                Facilities Managed Across Bangalore
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
                REQUEST FACILITY QUOTE
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
