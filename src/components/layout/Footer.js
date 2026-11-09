import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              KINGSMEN <span className={styles.goldLogo}>SECURITY</span>
            </div>
            <p className={styles.brandDesc}>
              KINGSMEN (IND) SERVICES PRIVATE LIMITED
              <br />
              Professional Security & Integrated Facility Management Services in Bangalore.
            </p>
            <div className={styles.complianceBadge}>
              <span className={styles.complianceDot} />
              <span>PSARA Certified & ISO Compliant</span>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services" className={styles.linkItem}>Our Services</Link>
              </li>
              <li>
                <Link href="/industries" className={styles.linkItem}>Industries Served</Link>
              </li>
              <li>
                <Link href="/about-us" className={styles.linkItem}>About Kingsmen</Link>
              </li>
              <li>
                <Link href="/team" className={styles.linkItem}>Leadership & Team</Link>
              </li>
              <li>
                <Link href="/contact" className={styles.linkItem}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Audit */}
          <div>
            <h3 className={styles.columnTitle}>Information</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/security-audit-bangalore" className={styles.linkItem}>Request Site Audit</Link>
              </li>
              <li>
                <Link href="/case-studies" className={styles.linkItem}>Case Studies</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={styles.linkItem}>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className={styles.linkItem}>Terms of Service</Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className={styles.linkItem}>XML Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Direct Leadership Contacts */}
          <div>
            <h3 className={styles.columnTitle}>Direct Contacts</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Suresh P • CEO (Ex-Air Force)</span>
                <a href="tel:+918088264187" className={styles.contactLink}>+91 80882 64187</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Tushar Sunny • Managing Director</span>
                <a href="tel:+919916107029" className={styles.contactLink}>+91 99161 07029</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactRole}>Operations & HR Desk</span>
                <a href="tel:+919731264348" className={styles.contactLink}>+91 97312 64348</a>
              </div>
              <a
                href="https://wa.me/919916107029"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <span>💬 Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Compact Standard Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} Kingsmen (IND) Services Private Limited. All rights reserved.
          </div>
          <div>
            Bangalore, Karnataka • 24/7 Command Center
          </div>
        </div>
      </div>
    </footer>
  );
}
