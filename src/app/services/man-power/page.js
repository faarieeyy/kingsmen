import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "Man Power Services in Bangalore",
  description: "Reliable manpower deployment for dark stores, warehouses, industry, and factories.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/group-photos-web/team-security-01.webp" alt="Man Power Services" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>MAN POWER SERVICE</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Reliable Man Power</span></FadeIn>
              <FadeIn delay={0.4}><span>Deployment</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Skilled, verified, and heavily supervised manpower services dedicated to dark stores, warehouses, industrial facilities, and factories.
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
              SKILLED. DEPENDABLE. READY.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Sectors We Serve</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• For Dark stores</li>
                <li>• Warehouse</li>
                <li>• Industry</li>
                <li>• Factories</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Industrial and logistics operations demand a workforce that is not only capable but thoroughly reliable. Our manpower services specialize in providing vetted, trained personnel specifically for demanding environments like dark stores, large-scale warehouses, and factories.
              </p>
              <p>
                We handle the end-to-end deployment process—from rigorous background checks and skill verification to continuous supervision—ensuring your operations run smoothly without interruption.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
