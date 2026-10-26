import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Frequently Asked Questions | Kingsmen",
  description: "Answers to your common questions regarding security guards, facility management, pricing, and deployment.",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/authentic-photos/classroom-security-training.webp" alt="Frequently Asked Questions - Kingsmen Knowledge Base" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>KNOWLEDGE BASE</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>Frequently Asked</span></FadeIn>
              <FadeIn delay={0.4}><span>Questions</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                Answers to your common questions regarding security guards, facility management, pricing, and deployment.
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
                <li>• How are your security guards trained?</li>\n                <li>• Do you provide 24/7 supervision?</li>\n                <li>• What is the process for replacing a guard?</li>\n                <li>• Do you offer integrated security and FM?</li>\n                <li>• How quickly can you deploy a team?</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                Choosing the right security and facility management partner is a critical decision. We have compiled answers to the most common questions regarding our deployment process, training, and pricing.
              </p>
              <p>
                Transparency is a core value at Kingsmen. If you cannot find the answer to your specific query below, our operational team is always available for a direct consultation.
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