"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "../../app/page.module.css";

const stages = [
  {
    id: "01",
    title: "SELECTION",
    desc: "We recruit our personnel in accordance with the parameters laid down in our recruitment policy in addition to their individual strengths. This includes education, age, physical fitness and background. All employees are subjected to vigorous vetting processes. Further we carry out thorough verification and background checks on service records of each employee including police verifications etc.",
    img: "/images/hero.jpg"
  },
  {
    id: "02",
    title: "TRAINING",
    desc: "Before deployment, it is mandatory for all Kingsmen (Ind) Services Pvt Ltd personnel to undertake basic security training, which imparts the necessary skills to perform duties at their allotted posts. In addition to lessons on basic guarding skills, they are taught the rudiments of first aid, firefighting and self-defence. The training process is ongoing and progressive throughout the employees career to refresh.",
    img: "/images/facility.jpg"
  },
  {
    id: "03",
    title: "SUPERVISION",
    desc: "We also realize that Supervision is equally important in order to provide quality service. In this regard, we have a strong operation team comprising of managers, field officers and patrolling supervisors who are constantly checking on our assignments and guards. Control room staffed 24 hrs by Hindi and English speaking personnel so that both clients and guards can obtain assistance at any time.",
    img: "/images/patrol.jpg"
  }
];

export default function TrainingScroll() {
  const containerRef = useRef(null);
  
  return (
    <section className={`section ${styles.scrollSection}`} ref={containerRef}>
      <div className="container">
        <div style={{ marginBottom: "60px" }}>
          <span className={styles.sectionNumber}>04</span>
          <h2 className={styles.introStatement}>OPERATIONAL EXCELLENCE</h2>
          <div className="gold-line" style={{ width: "100px", marginTop: "20px" }}></div>
        </div>

        <div className={styles.scrollContainer}>
          {stages.map((stage, index) => (
            <motion.div 
              key={stage.id} 
              className={styles.scrollItem}
              initial={{ opacity: 0.2, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.scrollText}>
                <span className={styles.sectionNumber}>{stage.id}</span>
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </div>
              <div className={styles.scrollImageWrapper}>
                <Image 
                  src={stage.img} 
                  alt={stage.title} 
                  fill 
                  style={{ objectFit: "cover" }} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
