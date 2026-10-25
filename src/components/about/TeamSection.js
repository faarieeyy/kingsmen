import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./TeamSection.module.css";

const teamMembers = [
  { name: "Sunny P.V (Ex- Army)", role: "Founder", img: "/images/sunny-pv.webp" },
  { name: "Tushar Sunny", role: "Managing Director", img: "/images/tushar-sunny.webp" },
  { name: "Tony Sunny", role: "Director", img: "/images/tony-sunny.webp" },
  { name: "Suresh P (Ex- Airforce)", role: "Chief Executive Officer", img: "/images/suresh-p.webp" },
  { name: "Cleny Shynu", role: "Admin Head", img: "/images/cleny-shynu.webp" },
  { name: "Anto Uday Kumar", role: "General Manager", img: "/images/anto-uday-kumar.webp" },
  { name: "Issac (Ex-Army)", role: "Management Advisory", img: "/images/issac.webp" },
  { name: "Jagadish Reddy", role: "Trainee Manager", img: "/images/jagadish-reddy.webp" },
  { name: "Sandeep (Ex-Army)", role: "Chief Protection Officer", img: "/images/sandeep.webp" },
  { name: "Somenath", role: "Sales Head", img: "/images/somenath.webp" },
  { name: "Ravi", role: "Field Officer", img: "/images/ravi.webp" },
  { name: "Senthil", role: "Field Officer", img: "/images/senthil.webp" },
];

export default function TeamSection({ showHeader = true }) {
  return (
    <section className="section" style={{ backgroundColor: 'var(--navy-midnight)' }}>
      <div className="container">
        {showHeader && (
          <div className={styles.header}>
            <FadeIn y={20}>
              <h2 className={styles.title}>Our Team.</h2>
            </FadeIn>
          </div>
        )}

        <div className={styles.grid}>
          {teamMembers.map((member, idx) => (
            <FadeIn key={idx} delay={0.08 * (idx % 3)} y={30} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    style={{ objectFit: "cover", objectPosition: "center top" }} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
