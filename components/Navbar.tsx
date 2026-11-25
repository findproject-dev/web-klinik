"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CLINIC_INFO } from "@/lib/data";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/tim-medis", label: "Tim Medis" },
  { href: "/fasilitas", label: "Fasilitas" },
  { href: "/hubungi-kami", label: "Hubungi Kami" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on navigation during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const openBooking = () => {
    const event = new CustomEvent("openBooking");
    window.dispatchEvent(event);
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`} role="banner">
        <div className="container-custom">
          <nav
            className="flex items-center justify-between"
            style={{ height: "72px" }}
            aria-label="Navigasi utama"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label="Klinik Sehatara - Beranda">
              <Logo size={36} />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.125rem", color: "var(--color-dark-text)", lineHeight: 1.2 }}>
                Klinik<br />
                <span style={{ color: "var(--color-primary-teal)" }}>Sehatara</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-secondary-text)", fontSize: "0.875rem", fontWeight: 600, fontFamily: "var(--font-heading)", textDecoration: "none" }}
              >
                {CLINIC_INFO.phone}
              </a>
              <button className="btn btn-primary btn-sm" onClick={openBooking} aria-label="Buat janji temu">
                Buat Janji Temu
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col items-center justify-center gap-1.5 rounded-xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              style={{
                width: "44px",
                height: "44px",
                background: menuOpen ? "rgba(35,140,131,0.12)" : "rgba(35,140,131,0.06)",
                border: "1px solid rgba(35,140,131,0.15)",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              <span style={{ display: "block", width: "22px", height: "2px", background: "var(--color-dark-text)", borderRadius: "2px", transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
              <span style={{ display: "block", width: "22px", height: "2px", background: "var(--color-dark-text)", borderRadius: "2px", transition: "all 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "22px", height: "2px", background: "var(--color-dark-text)", borderRadius: "2px", transition: "all 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 240, background: "rgba(23,30,30,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 250,
          width: "min(320px, 85vw)",
          background: "white",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        aria-hidden={!menuOpen}
      >
        <div style={{ padding: "1.5rem", borderBottom: "1px solid rgba(35,140,131,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <Logo size={32} />
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1rem", color: "var(--color-dark-text)" }}>
              Klinik <span style={{ color: "var(--color-primary-teal)" }}>Sehatara</span>
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", color: "var(--color-secondary-text)" }}
            aria-label="Tutup menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav style={{ padding: "1.5rem", flex: 1 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.875rem 1rem",
                    borderRadius: "12px",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    textDecoration: "none",
                    color: pathname === link.href ? "var(--color-primary-teal)" : "var(--color-dark-text)",
                    background: pathname === link.href ? "rgba(35,140,131,0.08)" : "transparent",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(35,140,131,0.1)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <button
            className="btn btn-primary"
            onClick={openBooking}
            style={{ width: "100%" }}
          >
            Buat Janji Temu
          </button>
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ width: "100%" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Kami
          </a>
        </div>
      </div>
    </>
  );
}
