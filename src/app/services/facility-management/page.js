import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "Facility Management & Housekeeping in Bangalore",
  description: "Integrated facility management and housekeeping for corporate offices, apartments, warehouses, industry, factories, educational institutions, and commercial shops.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/group-photos-web/team-group-01.webp" alt="Facility Management & Housekeeping" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>FACILITY MANAGEMENT</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Integrated Facility</span></FadeIn>
              <FadeIn delay={0.4}><span>& Housekeeping</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Complete housekeeping and maintenance solutions for corporate offices, apartments, warehouses, industries, and educational institutions.
              </p>
              <Link href="/contact" className="primary-btn">
                REQUEST FREE SITE ASSESSMENT
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn y={30}>
            <span className={styles.sectionNumber}>INDUSTRIES WE SERVE</span>
            <h2 className={styles.introStatement} style={{ marginBottom: '60px' }}>
              PRISTINE. FUNCTIONAL. EFFICIENT.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Sectors We Serve</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Corporate offices</li>
                <li>• Apartments</li>
                <li>• Warehouses, Industry and factory</li>
                <li>• Educational Institutions</li>
                <li>• Commercial Shops</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Beyond security, Kingsmen delivers comprehensive facility management and housekeeping solutions designed to keep your corporate, industrial, and residential spaces immaculate and fully operational.
              </p>
              <p>
                Our integrated approach combines expert housekeeping, deep cleaning, and operational support. We tailor our facility management contracts to meet the specific demands of your site, ensuring an optimal environment for your staff, residents, or customers.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
