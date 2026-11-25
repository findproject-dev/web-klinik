import Link from "next/link";
import Logo from "@/components/Logo";
import { CLINIC_INFO, SERVICES, buildWaUrl, WA_MESSAGES } from "@/lib/data";

const FEATURED_SERVICES = SERVICES.filter((s) => s.featured).slice(0, 6);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--color-deep-teal)", color: "white" }}
      role="contentinfo"
    >
      <div className="container-custom" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem 2.5rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <Logo size={36} inverted />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.125rem", lineHeight: 1.2 }}>
                Klinik<br />
                <span style={{ color: "rgba(220, 235, 227, 0.9)" }}>Sehatara</span>
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {CLINIC_INFO.tagline}<br />
              Klinik Pratama kesehatan keluarga yang melayani masyarakat Bandung dengan profesional dan penuh kepedulian.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={buildWaUrl(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", color: "white", transition: "background 0.2s ease", textDecoration: "none" }}
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", color: "white", transition: "background 0.2s ease", textDecoration: "none" }}
                aria-label="Email"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem" }}>
              Navigasi
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/", label: "Beranda" },
                { href: "/tentang-kami", label: "Tentang Kami" },
                { href: "/layanan", label: "Layanan" },
                { href: "/tim-medis", label: "Tim Medis" },
                { href: "/fasilitas", label: "Fasilitas" },
                { href: "/hubungi-kami", label: "Hubungi Kami" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem" }}>
              Layanan
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FEATURED_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href="/layanan" className="footer-link">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem" }}>
              Kontak
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {/* Address */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ flexShrink: 0, marginTop: "2px" }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  {CLINIC_INFO.address}
                </span>
              </div>

              {/* WhatsApp */}
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href={`https://wa.me/${CLINIC_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                  +62 811-2345-678
                </a>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.88 5.88l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href={`tel:${CLINIC_INFO.phone}`} style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                  {CLINIC_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href={`mailto:${CLINIC_INFO.email}`} style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                  {CLINIC_INFO.email}
                </a>
              </div>

              {/* Hours */}
              <div style={{ marginTop: "0.5rem", padding: "1rem", background: "rgba(255,255,255,0.06)", borderRadius: "10px" }}>
                <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.625rem" }}>
                  Jam Operasional
                </p>
                {CLINIC_INFO.operationalHours.map((h, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.825rem", color: "rgba(255,255,255,0.7)", marginBottom: "0.25rem" }}>
                    <span>{h.day}</span>
                    <span style={{ color: "rgba(220,235,227,0.9)", fontWeight: 600 }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.825rem", color: "rgba(255,255,255,0.4)" }}>
            &copy; {year} Klinik Sehatara. Seluruh hak cipta dilindungi.
          </p>
          <p style={{ fontSize: "0.825rem", color: "rgba(255,255,255,0.4)" }}>
            {CLINIC_INFO.type} &mdash; {CLINIC_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
