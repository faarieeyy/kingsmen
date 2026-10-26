import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Free Security Assessment in Bangalore",
  description: "Request a free, comprehensive security and facility assessment for your premises in Bangalore.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/group-photos-web/team-security-01.webp" alt="Free Security & Facility Assessment in Bangalore" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>FREE ASSESSMENT</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Free Security & Facility</span></FadeIn>
              <FadeIn delay={0.4}><span>Assessment in Bangalore</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Request a free, comprehensive security and facility assessment for your premises in Bangalore.
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
                <li>• Perimeter Vulnerability Analysis</li>\n                <li>• Access Control & CCTV Evaluation</li>\n                <li>• Manpower Optimization & Deployment Strategy</li>\n                <li>• Fire Safety & Emergency Route Checks</li>\n                <li>• Detailed Post-Assessment Report</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Every facility has unique vulnerabilities. Our senior security experts provide comprehensive, no-obligation security and facility assessments to identify risks and operational gaps in your current setup.
              </p>
              <p>
                We evaluate perimeter defenses, access control systems, manpower deployment, and fire safety protocols to deliver a tailored, actionable security blueprint for your organization.
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