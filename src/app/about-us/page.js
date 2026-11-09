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
      {/* Clean Organic Hero Banner (No sticky stack overlay) */}
      <section className={styles.hero} style={{ minHeight: "62vh", paddingBottom: "70px" }}>
        <div className={styles.heroBackground}>
          <Image
            src="/authentic-photos/boardroom-leadership-meeting.webp"
            alt="Kingsmen Executive Leadership and Operations Team in Bangalore"
            fill
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
            priority
          />
        </div>
        <div className="container" style={{ width: "100%" }}>
          <div className={styles.heroContent} style={{ maxWidth: "780px" }}>
            <FadeIn delay={0.2} y={20}>
              <span className={styles.eyebrow}>ABOUT KINGSMEN</span>
            </FadeIn>
            <h1 className={styles.headline} style={{ marginTop: "12px", marginBottom: "16px" }}>
              <FadeIn delay={0.3} y={20}>
                <span>COMMITTED TO DELIVER</span>{" "}
                <span className={styles.goldText}>QUALITY SERVICES.</span>
              </FadeIn>
            </h1>
          </div>
        </div>
      </section>

      {/* 25 Years Legacy Section with Solid Dark Blue Background */}
      <section
        className="section"
        style={{
          backgroundColor: "var(--navy-midnight)",
          position: "relative",
          zIndex: 2,
          paddingTop: "90px",
          paddingBottom: "90px",
        }}
      >
        <div className="container">
          <div className={styles.introGrid}>
            <FadeIn x={-40} delay={0.2}>
              <span className={styles.sectionNumber}>OVER 25 YEARS</span>
              <div className="gold-line" style={{ marginBottom: "26px", width: "50px" }}></div>
              <h2 className={styles.introStatement}>
                EXPERIENCE IN THE SECURITY FIELD.
              </h2>
            </FadeIn>

            <FadeIn x={40} delay={0.3} className={styles.introInfo}>
              <p>
                We take pride in having being founded by Mr. Sunny PV (Ex-Army) personnel,
                who has instilled in us the values of hard work, dedication, and commitment to excellence.
              </p>
              <p>
                Our team is led by experienced professionals who have served the nation with distinction.
                Mr. Suresh, an Ex-Air Force personnel, brings his expertise and discipline to our operations.
              </p>
              <div style={{ marginTop: "36px" }}>
                <Link href="/security-audit-bangalore" className="primary-btn">
                  REQUEST FREE SITE ASSESSMENT
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Team Section in Rich Dark Blue */}
      <TeamSection showHeader={true} />
    </>
  );
}
