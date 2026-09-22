import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">KINGSMEN</h2>
            <p className="footer-desc">
              KINGSMEN (IND) SERVICES PRIVATE LIMITED
              <br /><br />
              Professional Security & Facility Management Services.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Navigation</h3>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/about-us">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/careers">Careers</Link>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Suresh P, CEO: +91 80882 64187</p>
            <p>Tushar Sunny, MD: +91 9916107029</p>
            <p>Cleny Shynu, HR: +91 97312 64348</p>
            <a href="https://wa.me/919916107029" className="whatsapp-link">WhatsApp</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="gold-line"></div>
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/sitemap.xml">Sitemap</Link>
            </div>
            <div className="footer-statement">
              SECURITY. DISCIPLINE. TRUST.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
