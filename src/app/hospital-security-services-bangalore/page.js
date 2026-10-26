import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Hospital Security Services in Bangalore",
  description: "Healthcare and hospital security services in Bangalore. Sensitive, responsive, and 24/7 protection for medical facilities.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/group-photos-web/team-group-01.webp" alt="Hospital Security Services in Bangalore" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>HOSPITAL SECURITY</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Hospital Security Services</span></FadeIn>
              <FadeIn delay={0.4}><span>in Bangalore</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Healthcare and hospital security services in Bangalore. Sensitive, responsive, and 24/7 protection for medical facilities.
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
                <li>• Emergency Room & ICU Access Control</li>\n                <li>• Crowd Management & Distressed Visitor Handling</li>\n                <li>• Pharmacy & Sensitive Area Protection</li>\n                <li>• Ambulance Traffic Management</li>\n                <li>• Infection Control Compliance Support</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Hospitals are high-stress, 24/7 environments that require a nuanced approach to security. Our guards are trained to handle crowds, distressed visitors, and sensitive medical situations with empathy and firmness.
              </p>
              <p>
                We secure critical areas like ICUs, emergency rooms, and pharmacies while ensuring smooth traffic flow and adherence to strict hygiene and safety protocols.
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