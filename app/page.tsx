"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES, DOCTORS, WHY_ITEMS, TRUST_ITEMS, CLINIC_INFO, buildWaUrl, WA_MESSAGES } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    stethoscope: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
    heart: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    droplet: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>,
    activity: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    shield: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    baby: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 12h.01M15 12h.01M10 16s.5 1 2 1 2-1 2-1"/><path d="M12 2a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9"/></svg>,
    "file-text": <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>,
    bandage: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m7.21 15 2.04-2.73L7.5 10 5 12.5a3.54 3.54 0 0 0 5 5L12.5 15l-2.27-1.75L12.96 11 15 13.21a3 3 0 0 0 0-4.24L12.03 6a3 3 0 0 0-4.24 0L4 9.77a3.54 3.54 0 0 0 0 5L7.21 15z"/></svg>,
    users: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    clipboard: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>,
  };
  return <>{icons[name] || icons.stethoscope}</>;
}

function openBooking() {
  window.dispatchEvent(new CustomEvent("openBooking"));
}

export default function HomePage() {
  useScrollReveal();

  const featuredDoctors = DOCTORS.filter((d) => d.featured).slice(0, 3);
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 6);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="home-hero-section"
        aria-labelledby="hero-heading"
      >
        <div style={{ position: "absolute", top: "8%", right: "3%", width: "520px", height: "520px", background: "rgba(35,140,131,0.06)", borderRadius: "50%", pointerEvents: "none" }} aria-hidden="true" />
        <div style={{ position: "absolute", bottom: "0", left: "-5%", width: "360px", height: "360px", background: "rgba(220,235,227,0.45)", borderRadius: "50%", pointerEvents: "none" }} aria-hidden="true" />

        <div className="container-custom home-hero-container" style={{ width: "100%", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div
            className="hero-grid"
          >
            {/* Left Column */}
            <div>
              <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 1rem", background: "rgba(35,140,131,0.1)", borderRadius: "50px", marginBottom: "1.75rem" }}>
                <span style={{ width: "6px", height: "6px", background: "var(--color-primary-teal)", borderRadius: "50%", display: "block" }} aria-hidden="true" />
                <span className="eyebrow">KLINIK PRATAMA &amp; KESEHATAN KELUARGA</span>
              </div>

              <h1 id="hero-heading" className="text-display" data-reveal data-reveal-delay="100" style={{ color: "var(--color-dark-text)", marginBottom: "1.5rem" }}>
                Perawatan Terbaik untuk{" "}
                <span style={{ color: "var(--color-primary-teal)", display: "inline-block", position: "relative" }}>
                  Anda dan Keluarga
                  <span style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%", height: "3px", background: "var(--color-soft-orange)", borderRadius: "2px" }} aria-hidden="true" />
                </span>
              </h1>

              <p className="text-body-lg" data-reveal data-reveal-delay="200" style={{ marginBottom: "2.25rem", maxWidth: "520px" }}>
                Klinik Sehatara hadir untuk memberikan pelayanan kesehatan primer yang profesional, hangat, transparan, dan mudah dijangkau bagi seluruh keluarga Anda di Bandung.
              </p>

              <div data-reveal data-reveal-delay="300" className="hero-cta-group" style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.75rem" }}>
                <button className="btn btn-primary btn-lg" onClick={openBooking} aria-label="Buat janji temu sekarang">
                  Buat Janji Temu
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                <Link href="/layanan" className="btn btn-secondary btn-lg">
                  Jelajahi Layanan
                </Link>
              </div>

              {/* Quick stats / Trust indicators */}
              <div data-reveal data-reveal-delay="400" style={{ display: "flex", gap: "2.25rem", flexWrap: "wrap" }}>
                {TRUST_ITEMS.map((item) => (
                  <div key={item.label} style={{ textAlign: "left" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.25rem", color: "var(--color-primary-teal)", lineHeight: 1 }}>{item.value}</div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--color-secondary-text)", marginTop: "0.25rem" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Real Photography */}
            <div data-reveal="right" style={{ position: "relative" }}>
              <div
                className="hero-img-frame"
              >
                <Image
                  src="/images/hero/hero-family-consultation.webp"
                  alt="Dokter Klinik Sehatara sedang berkonsultasi ramah dengan keluarga di ruang periksa modern"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center 25%" }}
                />
              </div>

              {/* Floating Card: Operational Hours */}
              <div
                className="hero-floating-card-1"
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  left: "-1.5rem",
                  background: "white",
                  borderRadius: "18px",
                  padding: "1rem 1.35rem",
                  boxShadow: "0 12px 36px rgba(23,107,104,0.18)",
                  minWidth: "220px",
                  border: "1px solid rgba(35,140,131,0.12)",
                }}
                aria-label="Jam operasional klinik"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <div style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%" }} aria-hidden="true" />
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.825rem", color: "var(--color-dark-text)" }}>Pelayanan Aktif</span>
                </div>
                <div style={{ fontSize: "0.775rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>
                  <div>Sen – Jum: <strong style={{ color: "var(--color-dark-text)" }}>07.30 – 20.00</strong></div>
                  <div>Sabtu: <strong style={{ color: "var(--color-dark-text)" }}>07.30 – 17.00</strong></div>
                  <div>Minggu: <strong style={{ color: "var(--color-dark-text)" }}>08.00 – 14.00</strong></div>
                </div>
              </div>

              {/* Floating Card: Location Badge */}
              <div
                className="hero-floating-card-2"
                style={{
                  position: "absolute",
                  top: "1.75rem",
                  right: "-1.25rem",
                  background: "var(--color-primary-teal)",
                  borderRadius: "16px",
                  padding: "0.875rem 1.25rem",
                  boxShadow: "0 12px 36px rgba(23,107,104,0.3)",
                  color: "white",
                  maxWidth: "200px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span style={{ fontSize: "0.775rem", fontFamily: "var(--font-heading)", fontWeight: 800 }}>Sukajadi, Bandung</span>
                </div>
                <p style={{ fontSize: "0.75rem", opacity: 0.9, lineHeight: 1.4 }}>Jl. Sukajadi No. 112</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            .hero-grid > div:last-child { margin-top: 1rem; }
          }
        `}</style>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section style={{ background: "var(--color-primary-teal)", padding: "2.75rem 0" }} aria-label="Indikator kepercayaan">
        <div className="container-custom">
          <div className="trust-strip-grid">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} style={{ textAlign: "center", padding: "0.75rem" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.85rem", color: "white", lineHeight: 1 }}>{item.value}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", marginTop: "0.375rem", fontFamily: "var(--font-heading)", fontWeight: 600 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="section-pad bg-white-custom" aria-labelledby="intro-heading">
        <div className="container-custom">
          <div
            className="two-col-grid"
          >
            {/* Left: Real Clinic Photo */}
            <div data-reveal="left" style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  position: "relative",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <Image
                  src="/images/general/general-clinic-ambiance.webp"
                  alt="Suasana interior ruang tunggu dan pelayanan Klinik Sehatara yang bersih dan terawat"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div
                className="intro-floating-badge"
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  right: "1.5rem",
                  background: "white",
                  borderRadius: "16px",
                  padding: "1rem 1.35rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "1.5px solid rgba(35,140,131,0.12)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--color-primary-teal)", fontSize: "1.5rem" }}>2020</div>
                  <div style={{ fontSize: "0.775rem", color: "var(--color-secondary-text)", lineHeight: 1.4 }}>
                    <strong style={{ color: "var(--color-dark-text)" }}>Berdiri Sejak 2020</strong><br />
                    Fasilitas Kesehatan Keluarga
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div data-reveal>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>Tentang Kami</span>
              <h2 id="intro-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>Lebih Dekat,<br />Lebih Peduli.</h2>
              <div className="divider" />
              <p className="text-body-lg" style={{ marginBottom: "1.25rem" }}>
                Klinik Sehatara adalah klinik pratama kesehatan keluarga yang didirikan pada tahun 2020 di kawasan Sukajadi, Bandung. Kami hadir untuk menjadi mitra kesehatan terpercaya bagi setiap keluarga.
              </p>
              <p className="text-body" style={{ marginBottom: "2rem" }}>
                Dengan pendekatan pelayanan yang hangat dan profesional, kami berkomitmen untuk memberikan perawatan terbaik kepada seluruh anggota keluarga—dari bayi hingga lansia—dalam satu fasilitas yang nyaman dan mudah diakses.
              </p>
              <Link href="/tentang-kami" className="btn btn-primary">
                Kenali Klinik Kami
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="section-pad bg-ivory" aria-labelledby="services-heading">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }} data-reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>Layanan Kami</span>
            <h2 id="services-heading" className="section-title" style={{ marginBottom: "1rem" }}>Layanan Kesehatan Unggulan</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Kami menyediakan berbagai layanan kesehatan primer yang komprehensif untuk memenuhi kebutuhan seluruh keluarga Anda.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "1.75rem", marginBottom: "3rem" }}>
            {featuredServices.map((service, i) => (
              <div
                key={service.id}
                className="card"
                data-reveal
                data-reveal-delay={String((i % 3) * 100 + 100)}
                style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* Photo header */}
                <div style={{ height: "160px", position: "relative", overflow: "hidden" }}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "white", borderRadius: "50px", padding: "0.25rem 0.75rem", fontSize: "0.75rem", fontWeight: 700, fontFamily: "var(--font-heading)", color: "var(--color-primary-teal)", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
                    {service.category}
                  </div>
                </div>

                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3 className="text-h4" style={{ marginBottom: "0.5rem" }}>{service.name}</h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-secondary-text)", lineHeight: 1.6, marginBottom: "1.25rem" }}>{service.shortDesc}</p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.875rem", borderTop: "1px solid rgba(35,140,131,0.1)" }}>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.95rem", color: "var(--color-primary-teal)" }}>{service.priceLabel}</span>
                    <Link href="/layanan" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-primary-teal)", textDecoration: "none", fontFamily: "var(--font-heading)" }}>
                      Lihat Detail →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }} data-reveal>
            <Link href="/layanan" className="btn btn-secondary">
              Lihat Semua Layanan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DOCTOR HIGHLIGHT ===== */}
      <section className="section-pad bg-white-custom" aria-labelledby="doctors-heading">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }} data-reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>Tim Medis Kami</span>
            <h2 id="doctors-heading" className="section-title" style={{ marginBottom: "1rem" }}>Dokter Pilihan</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Ditangani oleh dokter umum berpengalaman yang berkomitmen memberikan pelayanan terbaik.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {featuredDoctors.map((doc, i) => (
              <div
                key={doc.id}
                className="card"
                data-reveal
                data-reveal-delay={String(i * 150)}
                style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* Doctor Portrait Photo */}
                <div style={{ height: "260px", position: "relative", overflow: "hidden", background: doc.photoColor }}>
                  <Image
                    src={doc.image}
                    alt={`Foto profil ${doc.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  />
                  <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)", borderRadius: "50px", padding: "0.25rem 0.625rem", fontSize: "0.75rem", fontWeight: 700, color: "#16a34a", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16a34a" }} />
                    Aktif Praktik
                  </div>
                </div>

                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <span className="badge badge-teal" style={{ marginBottom: "0.5rem", display: "inline-flex" }}>{doc.specialization}</span>
                    <h3 className="text-h4" style={{ marginBottom: "0.25rem" }}>{doc.name}</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-primary-teal)", fontWeight: 600, marginBottom: "0.5rem" }}>{doc.expertise}</p>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-secondary-text)", lineHeight: 1.5, marginBottom: "1rem" }}>{doc.bio}</p>
                  </div>

                  <div>
                    <div style={{ borderTop: "1px solid rgba(35,140,131,0.1)", paddingTop: "0.875rem", marginBottom: "1rem" }}>
                      <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-secondary-text)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.375rem" }}>Jadwal Praktik</p>
                      {doc.schedule.slice(0, 2).map((s) => (
                        <div key={s.day} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.825rem", marginBottom: "0.25rem" }}>
                          <span style={{ color: "var(--color-secondary-text)" }}>{s.day}</span>
                          <span style={{ color: "var(--color-dark-text)", fontWeight: 700, fontFamily: "var(--font-heading)" }}>{s.hours} WIB</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                      onClick={openBooking}
                    >
                      Buat Janji
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }} data-reveal>
            <Link href="/tim-medis" className="btn btn-secondary">
              Lihat Semua Dokter
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-pad bg-sage" aria-labelledby="why-heading">
        <div className="container-custom">
          <div
            className="two-col-grid"
          >
            <div data-reveal>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>Mengapa Klinik Sehatara</span>
              <h2 id="why-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>Kepercayaan yang Kami Jaga</h2>
              <div className="divider" />
              <p className="text-body" style={{ marginBottom: "2.5rem" }}>
                Kami memahami bahwa kesehatan adalah amanah terbesar. Oleh karena itu, setiap aspek pelayanan kami dirancang untuk memberikan pengalaman terbaik bagi pasien dan keluarga.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {WHY_ITEMS.map((item, i) => (
                  <div key={item.title} data-reveal data-reveal-delay={String(i * 100)} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div
                      className="icon-box icon-box-lg"
                      style={{ background: item.color, flexShrink: 0 }}
                    >
                      <ServiceIcon name={item.icon} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-dark-text)", marginBottom: "0.375rem" }}>{item.title}</h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal="right" style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  aspectRatio: "4/4.5",
                  position: "relative",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <Image
                  src="/images/general/general-doctor-patient.webp"
                  alt="Dokter Klinik Sehatara berinteraksi ramah dengan pasien lansia dan keluarga"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FACILITIES PREVIEW ===== */}
      <section className="section-pad bg-white-custom" aria-labelledby="facilities-heading">
        <div className="container-custom">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }} data-reveal>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>Fasilitas Kami</span>
              <h2 id="facilities-heading" className="section-title">Lingkungan Bersih &amp; Nyaman</h2>
            </div>
            <Link href="/fasilitas" className="btn btn-secondary">
              Lihat Fasilitas →
            </Link>
          </div>

          <div
            className="facility-preview-grid"
          >
            {[
              { label: "Ruang Tunggu Nyaman", src: "/images/facilities/facility-waiting-room.webp" },
              { label: "Ruang Konsultasi", src: "/images/facilities/facility-consultation-room.webp" },
              { label: "Area Pemeriksaan", src: "/images/facilities/facility-examination-room.webp" },
              { label: "Ruang Tindakan Medis", src: "/images/facilities/facility-procedure-room.webp" },
              { label: "Area Imunisasi Anak", src: "/images/facilities/facility-immunization-room.webp" },
            ].map((item, i) => (
              <div
                key={item.label}
                data-reveal
                data-reveal-delay={String(i * 100)}
                style={{ borderRadius: "18px", position: "relative", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />
                <span style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)", borderRadius: "8px", padding: "0.35rem 0.75rem", fontSize: "0.8rem", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-dark-text)" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .facility-preview-grid { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
            .facility-preview-grid > div { height: 180px !important; }
            .facility-preview-grid > div:first-child { grid-row: auto !important; height: 220px !important; grid-column: 1 / -1; }
          }
        `}</style>
      </section>

      {/* ===== BOOKING CTA ===== */}
      <section
        style={{ background: "var(--color-deep-teal)", padding: "5rem 0", position: "relative", overflow: "hidden" }}
        aria-labelledby="cta-heading"
      >
        <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "600px", height: "600px", background: "rgba(255,255,255,0.03)", borderRadius: "50%", pointerEvents: "none" }} aria-hidden="true" />
        <div style={{ position: "absolute", bottom: "-30%", left: "-5%", width: "400px", height: "400px", background: "rgba(255,255,255,0.03)", borderRadius: "50%", pointerEvents: "none" }} aria-hidden="true" />

        <div className="container-custom" style={{ textAlign: "center", position: "relative" }}>
          <div data-reveal>
            <span style={{ display: "inline-block", padding: "0.375rem 1rem", background: "rgba(255,255,255,0.1)", borderRadius: "50px", fontSize: "0.75rem", fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(220,235,227,0.9)", marginBottom: "1.5rem" }}>
              Layanan Tersedia 7 Hari
            </span>
            <h2 id="cta-heading" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", marginBottom: "1.25rem", lineHeight: 1.1 }}>
              Kesehatan Tidak<br />Perlu Ditunda.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
              Jadwalkan kunjungan Anda sekarang dan dapatkan pelayanan kesehatan profesional dari tim dokter kami.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn btn-white btn-lg" onClick={openBooking}>
                Buat Janji Temu Sekarang
              </button>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hubungi WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION PREVIEW ===== */}
      <section className="section-pad bg-ivory" aria-labelledby="location-heading">
        <div className="container-custom">
          <div
            className="two-col-grid"
            style={{ alignItems: "start" }}
          >
            <div data-reveal>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>Lokasi Kami</span>
              <h2 id="location-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>Mudah Ditemukan, Mudah Dijangkau</h2>
              <div className="divider" style={{ marginBottom: "1.5rem" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className="icon-box icon-box-sm" style={{ flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-dark-text)", marginBottom: "0.25rem" }}>Alamat</p>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>{CLINIC_INFO.address}</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className="icon-box icon-box-sm" style={{ flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-dark-text)", marginBottom: "0.5rem" }}>Jam Operasional</p>
                    {CLINIC_INFO.operationalHours.map((h, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", maxWidth: "280px", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                        <span style={{ color: "var(--color-secondary-text)" }}>{h.day}</span>
                        <span style={{ color: "var(--color-dark-text)", fontWeight: 600, fontFamily: "var(--font-heading)" }}>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
                <a
                  href={CLINIC_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
                  Petunjuk Arah
                </a>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${WA_MESSAGES.location}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Tanya Lokasi
                </a>
              </div>
            </div>

            <div data-reveal="right" className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4765!2d107.5841!3d-6.9034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a84a46f6d%3A0x0!2zNsKwNTQnMTIuMiJTIDEwN8KwMzUnMTIuMiJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                title="Lokasi Klinik Sehatara di Google Maps"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: "100%", height: "400px", border: "none", borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
