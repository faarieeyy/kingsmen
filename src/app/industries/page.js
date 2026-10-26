import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Industries We Serve | Kingsmen Security & Facility Management",
  description: "Specialized security and facility management solutions for corporate offices, apartments, warehouses, commercial hubs, hospitals, and educational institutions in Bangalore.",
};

const industryCards = [
  {
    title: "Corporate & Tech Parks",
    href: "/corporate-security-services-bangalore",
    image: "/group-photos-web/team-security-01.webp",
    desc: "Elite front-desk reception, biometric access control, and 24/7 patrol for IT parks and MNC facilities.",
    features: [
      "Access control & visitor management",
      "Executive protection & perimeter patrol",
      "24/7 CCTV surveillance desk",
    ],
    delay: 0.1,
  },
  {
    title: "Residential & Gated Communities",
    href: "/apartment-security-services-bangalore",
    image: "/group-photos-web/team-group-01.webp",
    desc: "Vigilant gate management, vehicle verification, and resident safety for apartment societies and villas.",
    features: [
      "Visitor & delivery screening",
      "Night patrols & club house safety",
      "Emergency first response & fire drills",
    ],
    delay: 0.2,
  },
  {
    title: "Warehouses & Logistics Hubs",
    href: "/warehouse-security-services-bangalore",
    image: "/group-photos-web/team-security-02.webp",
    desc: "Rigorous dock surveillance, material dispatch verification, and loss prevention across fulfillment centers.",
    features: [
      "Loading dock & truck tracking",
      "Inventory loss prevention",
      "Material gate pass verification",
    ],
    delay: 0.3,
  },
  {
    title: "Industrial & Manufacturing Plants",
    href: "/industrial-security-services-bangalore",
    image: "/group-photos-web/team-group-02.webp",
    desc: "Strict labor discipline, industrial safety compliance, and round-the-clock boundary protection.",
    features: [
      "Factory gate & labor attendance checks",
      "Hazardous zone & fire watch",
      "Asset & equipment safeguarding",
    ],
    delay: 0.4,
  },
  {
    title: "Commercial & Retail Centers",
    href: "/commercial-security-services-bangalore",
    image: "/group-photos-web/team-group-03.webp",
    desc: "Customer-friendly presence, crowd management, and shoplifting deterrence for retail stores and malls.",
    features: [
      "Footfall & crowd flow regulation",
      "Shoplifting & shrinkage deterrence",
      "Parking & valet security supervision",
    ],
    delay: 0.5,
  },
  {
    title: "Schools & Educational Institutions",
    href: "/school-security-services-bangalore",
    image: "/group-photos-web/team-security-01.webp",
    desc: "Thoroughly vetted personnel dedicated to student safety, bus bay supervision, and campus access control.",
    features: [
      "Student pickup/drop monitoring",
      "Strict visitor verification protocols",
      "Campus perimeter & hall monitoring",
    ],
    delay: 0.6,
  },
  {
    title: "Hospitals & Healthcare Facilities",
    href: "/hospital-security-services-bangalore",
    image: "/group-photos-web/team-group-02.webp",
    desc: "Sensitive patient care support, emergency ward order maintenance, and doctor/staff protection.",
    features: [
      "Emergency ward crowd control",
      "24/7 staff & doctor safeguarding",
      "Pharmacy & restricted ward access",
    ],
    delay: 0.7,
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero} style={{ minHeight: "55vh" }}>
        <div className={styles.heroBackground}>
          <Image
            src="/group-photos-web/team-security-01.webp"
            alt="Industries We Serve"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2} y={20}>
              <span className={styles.eyebrow}>SECTOR EXPERTISE</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3} y={20}>
                <span>INDUSTRIES</span>{" "}
                <span className={styles.goldText}>WE PROTECT.</span>
              </FadeIn>
            </h1>
            <FadeIn delay={0.4} y={20}>
              <p className={styles.supportCopy}>
                Specialized security protocols and trained personnel tailored to the distinct operational demands of businesses, campuses, and communities across Bangalore.
              </p>
              <Link href="/security-audit-bangalore" className="primary-btn">
                REQUEST SITE ASSESSMENT
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Sector Grid */}
      <section className="section" style={{ backgroundColor: "var(--navy-midnight)" }}>
        <div className="container">
          <FadeIn y={20}>
            <h2 className={styles.introStatement} style={{ marginBottom: "16px" }}>
              TAILORED DEPLOYMENT FOR EVERY SECTOR
            </h2>
            <p style={{ maxWidth: "720px", color: "rgba(255, 255, 255, 0.75)", marginBottom: "48px", lineHeight: "1.6" }}>
              Different facilities face unique threats. Kingsmen designs sector-specific standard operating procedures (SOPs), specialized training, and supervisory regimens for each industry.
            </p>
          </FadeIn>

          <div className={styles.servicesSplit}>
            {industryCards.map((ind, idx) => (
              <Link key={idx} href={ind.href} className={styles.serviceCardLink}>
                <FadeIn delay={ind.delay} y={25} className={styles.serviceFadeIn}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceBg}>
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className={styles.serviceOverlay}></div>

                    <div className={styles.hoverArrow} aria-hidden="true">
                      <span>↗</span>
                    </div>

                    <div className={styles.serviceContent}>
                      <h3 className={styles.serviceTitle}>{ind.title}</h3>
                      <p style={{ fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "14px", lineHeight: "1.4" }}>
                        {ind.desc}
                      </p>
                      <ul className={styles.serviceList}>
                        {ind.features.map((feat, featIdx) => (
                          <li key={featIdx}>
                            <span>•</span>
                            <div>{feat}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </Link>
            ))}
          </div>

          {/* Quick Assessment CTA banner */}
          <div style={{ marginTop: "70px" }}>
            <FadeIn y={20}>
              <div
                style={{
                  backgroundColor: "rgba(5, 16, 36, 0.75)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "var(--radius-lg)",
                  padding: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "24px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.6rem", marginBottom: "8px", color: "var(--white)", textTransform: "uppercase" }}>
                    Need a Custom Security Plan for Your Facility?
                  </h3>
                  <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.8)", maxWidth: "600px" }}>
                    Our senior commanders conduct on-site vulnerability audits across Bangalore with zero obligation.
                  </p>
                </div>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <Link href="/security-audit-bangalore" className="primary-btn">
                    SCHEDULE AUDIT
                  </Link>
                  <Link href="/contact" className={styles.secondaryBtn}>
                    TALK TO AN EXPERT
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}