import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../../page.module.css";

export const metadata = {
  title: "Geriatric Service in Bangalore",
  description: "Specialized geriatric care and security services for hospitals, individual residences, and old age homes.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/group-photos-web/team-security-01.webp" alt="Geriatric Services" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>GERIATRIC SERVICE</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Compassionate Geriatric</span></FadeIn>
              <FadeIn delay={0.4}><span>Care Services</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Specialized geriatric care and security services for hospitals, individual residences, and old age homes, providing safety and peace of mind.
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
              COMPASSIONATE. SAFE. SECURE.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Sectors We Serve</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Hospitals</li>
                <li>• Individual residences</li>
                <li>• Old age homes</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Our geriatric services are designed to provide the highest level of care, safety, and security for the elderly. We understand the unique vulnerabilities and requirements of older adults, whether they reside at home, in an assisted living facility, or are undergoing hospital care.
              </p>
              <p>
                Our personnel are specially trained in compassionate care, emergency response, and ensuring a safe, supportive environment that grants peace of mind to families and healthcare providers alike.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
