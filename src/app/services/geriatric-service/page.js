import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "Specialized Geriatric Care & Senior Security in Bangalore | Kingsmen",
  description: "Compassionate geriatric patient assistance, elderly safety monitoring, and healthcare facility security for hospitals, residences, and senior living homes in Bangalore.",
};

const capabilities = [
  {
    title: "Compassionate & Patient-Trained Staff",
    desc: "Caregivers and security assistants trained in elderly empathy, gentle mobility assistance, fall prevention, and respectful communication.",
  },
  {
    title: "Emergency Medical & CPR First Aid",
    desc: "Personnel certified in basic life support, vitals monitoring, oxygen cylinder assistance, and rapid ambulance coordination.",
  },
  {
    title: "24/7 Home & Bedside Vigilance",
    desc: "Round-the-clock shift-based attendance for seniors living independently, ensuring medications are taken on time and emergencies are averted.",
  },
  {
    title: "Wander Prevention & Dementia Security",
    desc: "Specialized protocols for seniors suffering from Alzheimer's or memory loss, securing entryways and garden perimeters with care.",
  },
];

const sectorsServed = [
  "Multi-Specialty Hospitals & Recovery Wards",
  "Assisted Living & Senior Care Residences",
  "Individual Gated Homes & Villa Communities",
  "Post-Operative Rehabilitation Centers",
  "Memory Care & Dementia Daycare Facilities",
];

export default function Page() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero} style={{ minHeight: "55vh" }}>
        <div className={styles.heroBackground}>
          <Image
            src="/services-images/geriatric.webp"
            alt="Geriatric Care and Security"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2} y={20}>
              <span className={styles.eyebrow}>SPECIALIZED CARE</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3} y={20}>
                <span>COMPASSIONATE</span>{" "}
                <span className={styles.goldText}>GERIATRIC SERVICE.</span>
              </FadeIn>
            </h1>
            <FadeIn delay={0.4} y={20}>
              <p className={styles.supportCopy}>
                Dedicated patient care, mobility support, and 24/7 security vigilance for senior citizens in hospitals, rehabilitation centers, and residences.
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
              DEDICATED SENIOR SAFETY & CARE ECOSYSTEM
            </h2>
            <p style={{ maxWidth: "750px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "48px", lineHeight: "1.6" }}>
              Caring for aging parents and seniors requires patience, professional training, and unwavering alertness. Kingsmen provides vetted, compassionate personnel trained for senior well-being.
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
                Where We Deploy Geriatric Personnel
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
                CONSULT WITH CARE ADVISOR
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
