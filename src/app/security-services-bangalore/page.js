import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Security Services in Bangalore | Professional Security Agency",
  description: "Kingsmen provides total security and detective solutions in Bangalore including guarding services, VIP mobile squad, and security audits.",
};

export default function SecurityServices() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '70vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/authentic-photos/guard-formation-portrait.webp" alt="Security Services in Bangalore" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>CORE SERVICES</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>SECURITY SERVICES</span></FadeIn>
              <FadeIn delay={0.4}><span>IN BANGALORE</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                "Total security and detective solutions" tailored to corporate offices, industrial units, and residences.
              </p>
              <Link href="/security-audit-bangalore" className="primary-btn">
                REQUEST FREE SITE ASSESSMENT
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--navy-deep)' }}>
        <div className="container">
          <FadeIn y={30}>
            <div className="gold-line" style={{ marginBottom: "30px", width: "50px" }}></div>
            <h2 className={styles.introStatement} style={{ marginBottom: '60px' }}>
              SMARTLY UNIFORMED, HIGHLY TRAINED.
            </h2>
          </FadeIn>

          <div className={styles.introGrid}>
            <FadeIn delay={0.2} y={30}>
              <ul style={{ listStyle: 'none', fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ color: 'var(--accent)' }}>• Guarding Services</li>
                <li style={{ color: 'var(--accent)' }}>• Industrial Security Training</li>
                <li style={{ color: 'var(--accent)' }}>• First Aid & Fire Fighting Training</li>
                <li style={{ color: 'var(--accent)' }}>• Security Consultancy</li>
                <li style={{ color: 'var(--accent)' }}>• Karate Training</li>
                <li style={{ color: 'var(--accent)' }}>• Provision of Body guards to VIPs</li>
                <li style={{ color: 'var(--accent)' }}>• VIP Mobile Squad</li>
                <li style={{ color: 'var(--accent)' }}>• Security Audit & Investigations</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.introInfo}>
              <p>
                Kingsmen (Ind) Services Pvt Ltd. has a large number of security personnel and a big list of clients 
                which include businesses and consulates, multi national companies, corporate offices, industrial units, and residences.
              </p>
              <p>
                In respect of our guarding services, we provide smartly uniformed, highly trained and well supervised guards 
                who are responsible for the security and safety of assets, personnel and property and guard them against losses 
                due to thefts, pilferage, intrusions, fire, flooding and accidents.
              </p>
              <h3 style={{ marginTop: '30px', color: 'var(--white)', marginBottom: '15px' }}>Functions at individual premises:</h3>
              <ol style={{ paddingLeft: '20px', color: 'var(--accent)', fontSize: '1.1rem' }}>
                <li>Gate / Entrance Control</li>
                <li>Reception</li>
                <li>Internal Patrols</li>
                <li>Response Functions</li>
              </ol>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
