import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Security & Facility Management Services in Bangalore",
  description: "Explore our complete range of security and facility management services tailored for businesses and residences in Bangalore.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/images/patrol.jpg" alt="Our Services" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>SERVICES HUB</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Our</span></FadeIn>
              <FadeIn delay={0.4}><span>Services</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Explore our complete range of security and facility management services tailored for businesses and residences in Bangalore.
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
            <span className={styles.sectionNumber}>TOTAL SECURITY & DETECTIVE SOLUTIONS</span>
            <h2 className={styles.introStatement} style={{ marginBottom: '60px' }}>
              TRAINED. VERIFIED. SUPERVISED.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Armed & Unarmed Guarding Services</li>\n                <li>• VIP Mobile Squad & Bodyguards</li>\n                <li>• Security Consultancy & Audits</li>\n                <li>• Integrated Facility Management</li>\n                <li>• Fire Fighting & Karate Training</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Kingsmen offers a comprehensive suite of security and facility management services. Whether you need elite bodyguards, a VIP mobile squad, or integrated housekeeping, we are your single point of contact.
              </p>
              <p>
                Our dual expertise in manpower deployment and facility operations ensures that your premises are not only impeccably secure but also immaculately maintained.
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