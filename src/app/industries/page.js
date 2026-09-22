import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Industries We Serve | Kingsmen Security",
  description: "Specialized security and facility management solutions for apartments, warehouses, corporates, schools, and hospitals.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/images/hero.jpg" alt="Industries We Serve" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>INDUSTRIES</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Industries We</span></FadeIn>
              <FadeIn delay={0.4}><span>Serve</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Specialized security and facility management solutions for apartments, warehouses, corporates, schools, and hospitals.
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
            <span className={styles.sectionNumber}>SPECIALIZED SECTOR EXPERTISE</span>
            <h2 className={styles.introStatement} style={{ marginBottom: '60px' }}>
              TRAINED. VERIFIED. SUPERVISED.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Corporate & Commercial IT Parks</li>\n                <li>• Manufacturing & Industrial Plants</li>\n                <li>• Logistics Hubs & Warehouses</li>\n                <li>• Hospitals & Healthcare Facilities</li>\n                <li>• Educational Institutions & Campuses</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Security is not a one-size-fits-all service. We deeply understand the nuanced operational requirements of various sectors and tailor our deployment, training, and SOPs accordingly.
              </p>
              <p>
                From the sensitive environment of a school or hospital to the rugged demands of an industrial warehouse, our specialized teams are equipped to handle industry-specific challenges with precision.
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