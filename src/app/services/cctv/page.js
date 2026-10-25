import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "CCTV Installation & Monitoring in Bangalore",
  description: "Advanced CCTV surveillance solutions for corporate offices and apartments.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/group-photos-web/team-security-02.webp" alt="CCTV Services" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>CCTV SERVICES</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Advanced CCTV</span></FadeIn>
              <FadeIn delay={0.4}><span>Surveillance</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                State-of-the-art CCTV installation and monitoring solutions for corporate offices and apartments to ensure round-the-clock security.
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
              VIGILANT. RELIABLE. 24/7.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Sectors We Serve</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Corporate offices</li>
                <li>• Apartments</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                A robust security infrastructure requires advanced surveillance. We provide cutting-edge CCTV solutions tailored for modern corporate environments and residential complexes.
              </p>
              <p>
                From strategic camera placement to establishing central monitoring stations, our CCTV services act as a powerful deterrent against unauthorized access while providing crucial situational awareness and recorded evidence when needed.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
