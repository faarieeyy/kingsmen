import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Security & Facility Management Case Studies",
  description: "Read how Kingsmen delivers real-world security and facility management solutions for clients across Bangalore.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/images/facility.jpg" alt="Security & Facility Management Case Studies" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>OUR WORK</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Security & Facility</span></FadeIn>
              <FadeIn delay={0.4}><span>Management Case Studies</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Read how Kingsmen delivers real-world security and facility management solutions for clients across Bangalore.
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
            <span className={styles.sectionNumber}>PROVEN OPERATIONAL SUCCESS</span>
            <h2 className={styles.introStatement} style={{ marginBottom: '60px' }}>
              TRAINED. VERIFIED. SUPERVISED.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>• Corporate Campus Security Overhauls</li>\n                <li>• Industrial Plant Theft Reduction Programs</li>\n                <li>• Gated Community Access Modernization</li>\n                <li>• Large-Scale Event Crowd Management</li>\n                <li>• Integrated Facility Management Transitions</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                With over 25 years of experience, Kingsmen has successfully secured and managed hundreds of facilities across Bangalore, ranging from massive industrial plants to premium corporate offices.
              </p>
              <p>
                Explore our case studies to see how our rigorous training, continuous supervision, and strategic deployment have solved complex security and facility management challenges for our clients.
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