import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Security & Facility Management Services in Bangalore",
  description: "Explore our complete range of security and facility management services tailored for businesses and residences in Bangalore.",
};

const serviceCards = [
  {
    title: "Security Service",
    href: "/services/security-service",
    image: "/authentic-photos/guard-formation-portrait.webp",
    items: [
      "Corporate offices",
      "Apartments",
      "Dark stores, Warehouses, Industry and factory",
      "Educational Institutions",
      "Commercial Shops"
    ],
    delay: 0.1
  },
  {
    title: "Facility Management & Housekeeping",
    href: "/services/facility-management",
    image: "/services-images/facility.webp",
    items: [
      "Corporate offices",
      "Apartments",
      "Warehouses, Industry and factory",
      "Educational Institutions",
      "Commercial Shops"
    ],
    delay: 0.2
  },
  {
    title: "Geriatric Service",
    href: "/services/geriatric-service",
    image: "/services-images/geriatric.webp",
    items: [
      "Hospitals",
      "Individual residences",
      "Old age homes"
    ],
    delay: 0.3
  },
  {
    title: "CCTV Services",
    href: "/services/cctv",
    image: "/services-images/cctv.webp",
    items: [
      "Corporate offices",
      "Apartments"
    ],
    delay: 0.4
  },
  {
    title: "Man Power Service",
    href: "/services/man-power",
    image: "/services-images/manpower.webp",
    items: [
      "For Dark stores",
      "Warehouse",
      "Industry",
      "Factories"
    ],
    delay: 0.5
  }
];

export default function Page() {
  return (
    <>
      {/* Full-Screen Sticky Hero Banner with Card Stack Overlay */}
      <section className={`${styles.hero} ${styles.fullHero} ${styles.stickyHero}`}>
        <div className={styles.heroBackground}>
          <Image
            src="/authentic-photos/guard-formation-lineup.webp"
            alt="Kingsmen Security & Facility Services"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
          />
        </div>
        <div className="container" style={{ width: "100%" }}>
          <div className={styles.heroContent} style={{ maxWidth: "800px" }}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>SERVICES HUB</span>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h1 className={styles.headline}>Our Services</h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className={styles.supportCopy}>
                Explore our complete range of security and facility management services tailored for businesses and residences in Bangalore.
              </p>
              <div style={{ marginTop: "24px" }}>
                <Link href="/security-audit-bangalore" className="primary-btn">
                  REQUEST FREE SITE ASSESSMENT
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator for the full-screen hero */}
        <div className={styles.heroScrollIndicator}>
          <span>SCROLL TO EXPLORE</span>
          <span className={styles.heroScrollArrow}>↓</span>
        </div>
      </section>

      {/* Main Portfolio Section as Card Stack Overlay */}
      <section className={`${styles.stackOverlay} section`}>
        <div className="container">
          <FadeIn y={30}>
            <h2 className={styles.introStatement} style={{ marginBottom: "50px" }}>
              COMPREHENSIVE SERVICE PORTFOLIO
            </h2>
          </FadeIn>

          <div className={styles.servicesSplit}>
            {serviceCards.map((service, idx) => (
              <Link key={idx} href={service.href} className={styles.serviceCardLink}>
                <FadeIn delay={service.delay} y={25} className={styles.serviceFadeIn}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceBg}>
                      <Image
                        src={service.image}
                        alt={service.title}
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
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <ul className={styles.serviceList}>
                        {service.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <span>—</span>
                            <div>{item}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}