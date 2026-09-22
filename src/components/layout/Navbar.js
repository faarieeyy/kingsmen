"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <Link href="/">KINGSMEN</Link>
        </div>
        
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/about-us">About</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <a href="https://wa.me/919916107029" className="whatsapp-link">WhatsApp</a>
          <Link href="/security-audit-bangalore" className="primary-btn">FREE SITE ASSESSMENT</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link href="/security-audit-bangalore" className="primary-btn mobile" onClick={() => setMobileMenuOpen(false)}>FREE SITE ASSESSMENT</Link>
        </div>
      )}
    </header>
  );
}
