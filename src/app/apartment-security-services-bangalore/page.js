import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Apartment Security Services in Bangalore",
  description: "Gated community and apartment security services in Bangalore. 24/7 protection, visitor management, and peace of mind.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/authentic-photos/guard-profile-lineup.webp" alt="Apartment and Residential Security Services in Bangalore" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>APARTMENT SECURITY</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Apartment Security Services</span></FadeIn>
              <FadeIn delay={0.4}><span>in Bangalore</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Gated community and apartment security services in Bangalore. 24/7 protection, visitor management, and peace of mind.
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
                <li>• Digital Visitor Management Integration</li>\n                <li>• 24/7 Gate & Access Control</li>\n                <li>• Night Patrolling & Perimeter Checks</li>\n                <li>• Fire Safety & Emergency Response</li>\n                <li>• Courteous Resident Interaction</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Securing an apartment complex requires a balance of vigilance and hospitality. Kingsmen provides specialized security teams for gated communities that prioritize resident safety while managing visitors efficiently.
              </p>
              <p>
                Our personnel are trained in modern visitor management systems, access control, and emergency response, ensuring peace of mind for all residents around the clock.
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