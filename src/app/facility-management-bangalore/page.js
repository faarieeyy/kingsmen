import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Facility Management Company in Bangalore",
  description: "Integrated facility management services in Bangalore. Maintenance, operations and housekeeping for pristine environments.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/images/facility.jpg" alt="Facility Management Company in Bangalore" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>FACILITY MANAGEMENT</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Facility Management Company</span></FadeIn>
              <FadeIn delay={0.4}><span>in Bangalore</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Integrated facility management services in Bangalore. Maintenance, operations and housekeeping for pristine environments.
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
            <span className={styles.sectionNumber}>INTEGRATED FACILITY SOLUTIONS</span>
            <h2 className={styles.introStatement} style={{ marginBottom: '60px' }}>
              TRAINED. VERIFIED. SUPERVISED.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Comprehensive Corporate Housekeeping</li>\n                <li>• Technical Maintenance & Operations</li>\n                <li>• Pest Control & Sanitization Services</li>\n                <li>• Waste Management Solutions</li>\n                <li>• Vendor & Contractor Supervision</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Beyond security, Kingsmen delivers comprehensive facility management solutions designed to keep your corporate and residential spaces pristine, functional, and efficient.
              </p>
              <p>
                Our integrated approach combines expert housekeeping, technical maintenance, and operational support. We tailor our facility management contracts to meet the specific operational demands of your site.
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