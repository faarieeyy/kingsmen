import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "Security Service in Bangalore",
  description: "Professional security services for corporate offices, apartments, dark stores, warehouses, industry, factories, educational institutions, and commercial shops.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/group-photos-web/team-security-02.webp" alt="Security Service in Bangalore" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>SECURITY SERVICE</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Comprehensive Security</span></FadeIn>
              <FadeIn delay={0.4}><span>Solutions</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Professional security services for corporate offices, apartments, dark stores, warehouses, industry, factories, educational institutions, and commercial shops.
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
              TRAINED. VERIFIED. SUPERVISED.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Sectors We Secure</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Corporate offices</li>
                <li>• Apartments</li>
                <li>• Dark stores, Warehouses, Industry and factory</li>
                <li>• Educational Institutions</li>
                <li>• Commercial Shops</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Our security services are tailored to meet the unique challenges of diverse environments. From protecting corporate assets to ensuring the safety of residents in apartment complexes, we deploy highly trained personnel equipped to handle any situation.
              </p>
              <p>
                We specialize in securing high-risk environments such as dark stores, warehouses, and industrial factories, implementing robust protocols to prevent theft, vandalism, and unauthorized access.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
