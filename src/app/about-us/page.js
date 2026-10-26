import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";
import TeamSection from "@/components/about/TeamSection";

export const metadata = {
  title: "Security Company in Bangalore | About Kingsmen",
  description: "About Kingsmen - Over 25 years of experience in the security field, founded by Ex-Army personnel.",
};

export default function AboutUs() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/group-photos-web/team-security-01.webp" alt="About Kingsmen" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.headline}>
              <FadeIn delay={0.2} y={20}>
                <span>COMMITTED TO DELIVER</span>{" "}
                <span className={styles.goldText}>QUALITY SERVICES.</span>
              </FadeIn>
            </h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--navy-midnight)' }}>
        <div className="container">
          <div className={styles.introGrid}>
            <FadeIn x={-50} delay={0.2}>
              <span className={styles.sectionNumber}>OVER 25 YEARS</span>
              <div className="gold-line" style={{ marginBottom: "30px", width: "50px" }}></div>
              <h2 className={styles.introStatement}>
                EXPERIENCE IN THE SECURITY FIELD.
              </h2>
            </FadeIn>
            
            <FadeIn x={50} delay={0.4} className={styles.introInfo}>
              <p>
                We take pride in having being founded by Mr. Sunny PV (Ex-Army) personnel, 
                who has instilled in us the values of hard work, dedication, and commitment to excellence.
              </p>
              <p>
                Our team is led by experienced professionals who have served the nation with distinction. 
                Mr. Suresh, an Ex-Air Force personnel, brings his expertise and discipline to our operations.
              </p>
              <div style={{ marginTop: '40px' }}>
                <Link href="/security-audit-bangalore" className="primary-btn">
                  REQUEST FREE SITE ASSESSMENT
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <TeamSection showHeader={true} />
    </>
  );
}
