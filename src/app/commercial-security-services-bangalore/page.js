import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Commercial Security Services in Bangalore",
  description: "Commercial building and retail security services in Bangalore. Protecting assets and ensuring safety for customers and staff.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/authentic-photos/techpark-security-patrol.webp" alt="Commercial Security Services in Bangalore" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>COMMERCIAL SECURITY</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Commercial Security Services</span></FadeIn>
              <FadeIn delay={0.4}><span>in Bangalore</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Commercial building and retail security services in Bangalore. Protecting assets and ensuring safety for customers and staff.
              </p>
              <Link href="/security-audit-bangalore" className="primary-btn">
                REQUEST FREE SITE ASSESSMENT
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn y={30}>
            <h2 className={styles.introStatement} style={{ marginBottom: '60px' }}>
              OPERATIONAL EXCELLENCE & EXPERTISE
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Retail Loss Prevention & Anti-Theft</li>\n                <li>• Mall & Commercial Complex Patrolling</li>\n                <li>• Multi-Tenant Access Management</li>\n                <li>• Customer-Friendly Crowd Control</li>\n                <li>• After-Hours Property Surveillance</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Retail spaces and commercial buildings require security that deters theft while welcoming genuine customers. We deploy highly trained personnel to monitor storefronts, shopping malls, and commercial complexes.
              </p>
              <p>
                Our teams excel at loss prevention, crowd control during peak hours, and managing multi-tenant commercial spaces to ensure the safety of all patrons and property.
              </p>
              <h3 style={{ marginTop: '30px', color: 'var(--accent)', marginBottom: '15px', fontSize: '1.2rem' }}>Our Deployment Process:</h3>
              <ol style={{ paddingLeft: '20px', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                <li>Comprehensive Site Assessment</li>
                <li>Customized Deployment Plan</li>
                <li>Rigorous Verification & Induction</li>
                <li>Deployment & 24/7 Supervision</li>
              </ol>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}