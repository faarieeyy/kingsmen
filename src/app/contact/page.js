"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import pageStyles from "../page.module.css";
import contactStyles from "./contact.module.css";

const leadership = [
  {
    name: "Suresh P",
    role: "CEO (Ex-Air Force)",
    phone: "+91 80882 64187",
    tel: "+918088264187",
    img: "/images/suresh-p.webp",
  },
  {
    name: "Tushar Sunny",
    role: "Managing Director",
    phone: "+91 99161 07029",
    tel: "+919916107029",
    img: "/images/tushar-sunny.webp",
  },
  {
    name: "Cleny Shynu",
    role: "Admin & HR",
    phone: "+91 97312 64348",
    tel: "+919731264348",
    img: "/images/cleny-shynu.webp",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    phone: "",
    service: "Security Guard Services",
    message: "",
  });

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Full-Screen Sticky Hero Banner with Card Stack Overlay */}
      <section className={`${pageStyles.hero} ${pageStyles.fullHero} ${pageStyles.stickyHero}`}>
        <div className={pageStyles.heroBackground}>
          <Image
            src="/authentic-photos/contact-hero-salute-crouzet.webp"
            alt="Kingsmen Security Officers Saluting at Crouzet Facility"
            fill
            style={{ objectFit: "cover", objectPosition: "center bottom" }}
            priority
          />
        </div>
        <div className="container" style={{ width: "100%" }}>
          <div className={pageStyles.heroContent} style={{ maxWidth: "800px" }}>
            <FadeIn delay={0.2} y={20}>
              <span className={pageStyles.eyebrow}>GET IN TOUCH</span>
            </FadeIn>
            <FadeIn delay={0.3} y={20}>
              <h1 className={pageStyles.headline} style={{ marginBottom: "16px", marginTop: "12px" }}>
                <span>CONTACT</span>{" "}
                <span style={{ color: "#FFD700" }}>OUR TEAM</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.4} y={20}>
              <p className={pageStyles.supportCopy}>
                Reach out to our leadership directly or submit your query for prompt assistance.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator for the full-screen hero */}
        <div className={pageStyles.heroScrollIndicator}>
          <span>SCROLL TO SUBMIT QUERY</span>
          <span className={pageStyles.heroScrollArrow}>↓</span>
        </div>
      </section>

      {/* Main Details & Query Panel Section as Card Stack Overlay */}
      <section className={`${pageStyles.stackOverlay} section`}>
        <div className="container">
          <div className={pageStyles.introGrid}>
            {/* Left: Simple Query Form */}
            <FadeIn delay={0.2} x={-20}>
              <div className={contactStyles.queryPanel}>
                <h2 className={contactStyles.queryPanelTitle}>SUBMIT A QUERY</h2>
                <p className={contactStyles.queryPanelSub}>
                  Enter your details and an operations officer will contact you.
                </p>

                {submitted ? (
                  <div className={contactStyles.querySuccess}>
                    <strong>Thank you, {query.name || "Sir/Madam"}.</strong>
                    <p style={{ marginTop: "4px" }}>
                      Your query has been received. We will contact you at <strong>{query.phone}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={contactStyles.formGrid}>
                      <div className={contactStyles.formField}>
                        <label htmlFor="name">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your Name"
                          className={contactStyles.formInput}
                          value={query.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={contactStyles.formField}>
                        <label htmlFor="phone">Phone *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="+91 Phone Number"
                          className={contactStyles.formInput}
                          value={query.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className={contactStyles.formField} style={{ marginBottom: "14px" }}>
                      <label htmlFor="service">Service</label>
                      <select
                        id="service"
                        name="service"
                        className={contactStyles.formSelect}
                        value={query.service}
                        onChange={handleChange}
                      >
                        <option value="Security Guard Services">Security Guard Services</option>
                        <option value="Facility Management & Housekeeping">Facility Management & Housekeeping</option>
                        <option value="CCTV Installation & Surveillance">CCTV Installation & Surveillance</option>
                        <option value="Manpower Deployment">Manpower Deployment</option>
                        <option value="Geriatric Patient Care">Geriatric Patient Care</option>
                      </select>
                    </div>

                    <div className={contactStyles.formField} style={{ marginBottom: "18px" }}>
                      <label htmlFor="message">Message (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Location or requirements..."
                        className={contactStyles.formTextarea}
                        value={query.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className={contactStyles.querySubmitBtn}>
                      SUBMIT QUERY
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Right: Direct Contacts with Verified Photos + Head Office */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <FadeIn delay={0.3} x={20}>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px", color: "var(--white)" }}>
                    DIRECT CONTACTS
                  </h3>
                  <div className="gold-line" style={{ marginBottom: "18px", width: "50px" }}></div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {leadership.map((person, idx) => (
                      <div key={idx} className={contactStyles.contactCardItem}>
                        <div className={contactStyles.contactAvatar}>
                          <Image
                            src={person.img}
                            alt={person.name}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="48px"
                          />
                        </div>
                        <div className={contactStyles.contactInfo}>
                          <div className={contactStyles.contactName}>{person.name}</div>
                          <div className={contactStyles.contactRole}>{person.role}</div>
                          <a href={`tel:${person.tel}`} className={contactStyles.contactTel}>
                            {person.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Head Office Card */}
              <FadeIn delay={0.4} y={15}>
                <div
                  style={{
                    backgroundColor: "rgba(8, 20, 44, 0.55)",
                    padding: "24px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px", color: "var(--white)", textTransform: "uppercase" }}>
                    Head Office
                  </h4>
                  <p style={{ marginBottom: "18px", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)", fontSize: "0.9rem" }}>
                    NOVEL MSR OFFICE<br />
                    Marathahalli, Bangalore - 560037, Karnataka
                  </p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <a
                      href="https://wa.me/919916107029"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-btn"
                      style={{ padding: "9px 18px", fontSize: "0.8rem" }}
                    >
                      WHATSAPP US
                    </a>
                    <Link
                      href="/security-audit-bangalore"
                      className={pageStyles.secondaryBtn}
                      style={{ padding: "9px 18px", fontSize: "0.8rem" }}
                    >
                      SITE ASSESSMENT
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
