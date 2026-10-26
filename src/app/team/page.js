import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";
import TeamSection from "@/components/about/TeamSection";
import TeamHeroScroll from "@/components/about/TeamHeroScroll";

export const metadata = {
  title: "Our Team | Kingsmen Security",
  description: "Meet the experienced professionals behind Kingsmen Security.",
};

export default function TeamPage() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh', paddingBottom: '60px' }}>
        <div className={styles.heroBackground}>
          <Image src="/authentic-photos/boardroom-executive-strategy.webp" alt="Kingsmen Executive Leadership and Management Team" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.heroContent} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '150px' }}>
            <h1 className={styles.headline} style={{ 
                fontFamily: 'var(--font-heading), sans-serif', 
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '4px',
                fontSize: 'clamp(3.5rem, 6vw, 6rem)',
                textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                marginBottom: '10px'
            }}>
              <FadeIn delay={0.2} y={20}><span>OUR</span></FadeIn>
              <FadeIn delay={0.3} y={20}><span style={{ color: 'var(--accent)' }}>EXPERTS.</span></FadeIn>
            </h1>
            
            <FadeIn delay={0.5} y={20}>
              <p style={{ 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                letterSpacing: '2px',
                color: 'var(--white)',
                textTransform: 'uppercase'
              }}>
                The People Behind Kingsmen
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--navy-midnight)', paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', backgroundColor: 'rgba(5, 16, 36, 0.5)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <FadeIn y={20}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '30px', fontSize: '1.5rem', textAlign: 'center' }}>Commitment to Excellence</h3>
            </FadeIn>
            
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
              <FadeIn delay={0.2} y={20}>
                <li style={{ marginBottom: '25px', position: 'relative', paddingLeft: '35px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.5rem', lineHeight: '1.2' }}>•</span>
                  <strong>Highly Motivated Experts:</strong> Seasoned professionals dedicated to safeguarding clients with extensive training in security protocols.
                </li>
              </FadeIn>
              <FadeIn delay={0.4} y={20}>
                <li style={{ marginBottom: '25px', position: 'relative', paddingLeft: '35px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.5rem', lineHeight: '1.2' }}>•</span>
                  <strong>Proactive Approach:</strong> Focused on threat detection, prevention, and continuous adaptation to emerging security challenges.
                </li>
              </FadeIn>
              <FadeIn delay={0.6} y={20}>
                <li style={{ position: 'relative', paddingLeft: '35px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.5rem', lineHeight: '1.2' }}>•</span>
                  <strong>Comprehensive Protection:</strong> Ensuring security for corporate entities, residential complexes, and events across Bangalore.
                </li>
              </FadeIn>
            </ul>
          </div>
        </div>
      </section>

      <TeamSection showHeader={true} />
    </>
  );
}
