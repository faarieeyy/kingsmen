"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [heroDone, setHeroDone] = useState(!isHomePage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (isHomePage) {
        // Video plays through 0 to ~70% of the hero scroller height (~2000px)
        // Navbar fades in only after video playback completes
        const heroHeight = window.innerHeight * 2.2;
        setHeroDone(window.scrollY >= heroHeight);
      } else {
        setHeroDone(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const showNavbar = !isHomePage || heroDone;

  return (
    <header 
      className={`navbar ${scrolled ? "scrolled" : ""} ${!showNavbar ? "navbar-hidden" : "navbar-visible"}`}
    >
      <div className="nav-container">
        <div className="logo">
          <Link href="/">KINGSMEN</Link>
        </div>
        
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/about-us">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <a href="https://wa.me/919916107029" className="whatsapp-link">WhatsApp</a>
          <Link href="/security-audit-bangalore" className="primary-btn">FREE SITE ASSESSMENT</Link>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-links">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/team" onClick={() => setMobileMenuOpen(false)}>Team</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
          <div className="mobile-nav-actions">
            <a href="https://wa.me/919916107029" className="whatsapp-link mobile-whatsapp" onClick={() => setMobileMenuOpen(false)}>
              💬 Chat on WhatsApp
            </a>
            <Link href="/security-audit-bangalore" className="primary-btn mobile" onClick={() => setMobileMenuOpen(false)}>
              FREE SITE ASSESSMENT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
