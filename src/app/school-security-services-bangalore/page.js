import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "School Security Services in Bangalore",
  description: "Education and school security services in Bangalore. Ensuring a safe and secure learning environment for students and staff.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/images/hero.jpg" alt="School Security Services in Bangalore" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>SCHOOL SECURITY</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>School Security Services</span></FadeIn>
              <FadeIn delay={0.4}><span>in Bangalore</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Education and school security services in Bangalore. Ensuring a safe and secure learning environment for students and staff.
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
            <span className={styles.sectionNumber}>SAFE EDUCATIONAL ENVIRONMENTS</span>
            <h2 className={styles.introStatement} style={{ marginBottom: '60px' }}>
              TRAINED. VERIFIED. SUPERVISED.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Strict Campus Access & Boundary Control</li>\n                <li>• Student Drop-off/Pick-up Traffic Management</li>\n                <li>• Child Safety & Vigilance Training</li>\n                <li>• Emergency & Evacuation Procedures</li>\n                <li>• Thoroughly Vetted & Verified Personnel</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Protecting students, staff, and educational infrastructure is a profound responsibility. We provide specialized school security services focusing on vigilance, child safety, and strict campus access control.
              </p>
              <p>
                Our personnel are thoroughly vetted and trained to handle the unique dynamics of educational institutions, ensuring a secure environment where learning can thrive without compromise.
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