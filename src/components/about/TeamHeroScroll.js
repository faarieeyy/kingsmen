"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default function TeamHeroScroll() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade out title quickly
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  // Fade in the bullet points container immediately after
  const listContainerOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const listContainerY = useTransform(scrollYProgress, [0.1, 0.15], [50, 0]);
  
  // Show bullet points line by line, much faster
  const p1Opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const p1Y = useTransform(scrollYProgress, [0.15, 0.25], [20, 0]);
  
  const p2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const p2Y = useTransform(scrollYProgress, [0.25, 0.35], [20, 0]);
  
  const p3Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const p3Y = useTransform(scrollYProgress, [0.35, 0.45], [20, 0]);

  return (
    <section ref={containerRef} style={{ height: "300vh", position: "relative", backgroundColor: 'var(--navy-deep)' }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        
        <div className={styles.heroBackground}>
          <Image src="/group-photos-web/team-group-03.webp" alt="Kingsmen Team" fill style={{ objectFit: "cover" }} priority />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          <motion.div 
            style={{ 
              opacity: titleOpacity, 
              y: titleY,
              position: 'absolute',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <h1 className={styles.headline} style={{ 
                fontFamily: 'var(--font-heading), sans-serif', 
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '4px',
                fontSize: 'clamp(3.5rem, 6vw, 6rem)',
                textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                marginBottom: '10px'
            }}>
              <span>OUR</span> <span style={{ color: 'var(--accent)' }}>EXPERTS.</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              fontWeight: 600, 
              letterSpacing: '2px',
              color: 'var(--white)',
              textTransform: 'uppercase'
            }}>
              The People Behind Kingsmen
            </p>
          </motion.div>

          <motion.div
            style={{ 
              opacity: listContainerOpacity,
              y: listContainerY,
              position: 'absolute',
              width: '100%',
              maxWidth: '800px',
              padding: '0 10px',
            }}
          >
            <div style={{ 
              textAlign: 'left', 
              backgroundColor: 'rgba(5, 16, 36, 0.85)', 
              padding: 'clamp(20px, 4vw, 40px)', 
              borderRadius: 'var(--radius-md)', 
              backdropFilter: 'blur(12px)', 
              WebkitBackdropFilter: 'blur(12px)',
              border: 'var(--glass-border)' 
            }}>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: 'clamp(0.9rem, 2vw, 1.15rem)', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7' }}>
                
                <motion.li style={{ opacity: p1Opacity, y: p1Y, marginBottom: '16px', position: 'relative', paddingLeft: '24px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.3rem', lineHeight: '1.2' }}>•</span>
                  <strong>Highly Motivated Experts:</strong> Seasoned professionals dedicated to safeguarding clients with extensive training in security protocols.
                </motion.li>
                
                <motion.li style={{ opacity: p2Opacity, y: p2Y, marginBottom: '16px', position: 'relative', paddingLeft: '24px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.3rem', lineHeight: '1.2' }}>•</span>
                  <strong>Proactive Approach:</strong> Focused on threat detection, prevention, and continuous adaptation to emerging security challenges.
                </motion.li>
                
                <motion.li style={{ opacity: p3Opacity, y: p3Y, position: 'relative', paddingLeft: '24px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.3rem', lineHeight: '1.2' }}>•</span>
                  <strong>Comprehensive Protection:</strong> Ensuring security for corporate entities, residential complexes, and events across Bangalore.
                </motion.li>

              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
