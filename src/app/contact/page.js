import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "Contact Security Agency in Bangalore | Kingsmen",
  description: "Contact our security services team. Request a free site assessment today.",
};

export default function Contact() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className={styles.heroContent} style={{ paddingTop: '100px' }}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>GET IN TOUCH</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>CONTACT</span></FadeIn>
              <FadeIn delay={0.4}><span>OUR TEAM.</span></FadeIn>
            </h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--navy-midnight)' }}>
        <div className="container">
          <div className={styles.introGrid}>
            <FadeIn delay={0.2} x={-30}>
              <h2 className={styles.introStatement} style={{ marginBottom: '30px' }}>
                REACH OUT DIRECTLY
              </h2>
              <div className="gold-line" style={{ marginBottom: "30px", width: "100%" }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <li>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '5px' }}>Suresh P</h3>
                  <p>CEO</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+91 80882 64187</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '5px' }}>Tushar Sunny</h3>
                  <p>Managing Director</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+91 9916107029</p>
                </li>
                <li>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '5px' }}>Cleny Shynu</h3>
                  <p>Admin, HR and Hiring</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+91 97312 64348</p>
                </li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} x={30}>
              <div style={{ backgroundColor: 'var(--navy-deep)', padding: '40px', border: '1px solid var(--accent)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Head Office</h3>
                <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
                  NOVEL MSR OFFICE<br/>
                  MARTHAHALLI<br/>
                  BANGALORE - 560037
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <a href="https://wa.me/919916107029" className="primary-btn" style={{ textAlign: 'center' }}>
                    WHATSAPP OUR TEAM
                  </a>
                  <Link href="/security-audit-bangalore" className={styles.secondaryBtn} style={{ textAlign: 'center' }}>
                    REQUEST FREE SITE ASSESSMENT
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
