"use client";

import { useState } from "react";
import Image from "next/image";
import { SERVICES, PRICE_LIST, buildWaUrl, WA_MESSAGES } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    stethoscope: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
    heart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    droplet: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>,
    activity: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    baby: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12h.01M15 12h.01M10 16s.5 1 2 1 2-1 2-1"/><path d="M12 2a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9"/></svg>,
    "file-text": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>,
    bandage: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7.21 15 2.04-2.73L7.5 10 5 12.5a3.54 3.54 0 0 0 5 5L12.5 15l-2.27-1.75L12.96 11 15 13.21a3 3 0 0 0 0-4.24L12.03 6a3 3 0 0 0-4.24 0L4 9.77a3.54 3.54 0 0 0 0 5L7.21 15z"/></svg>,
    users: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    clipboard: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>,
  };
  return <>{icons[name] || icons.stethoscope}</>;
}

function openBooking() {
  window.dispatchEvent(new CustomEvent("openBooking"));
}

type ServiceType = typeof SERVICES[0];

export default function LayananClient() {
  useScrollReveal();
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("Semua");

  const categories = ["Semua", "Konsultasi", "Pemeriksaan", "Tindakan", "Administrasi"];

  const filteredServices = categoryFilter === "Semua"
    ? SERVICES
    : SERVICES.filter((s) => s.category === categoryFilter);

  return (
    <>
      {/* Hero Banner */}
      <section
        className="page-hero-banner"
        aria-labelledby="services-hero-heading"
      >
        <div className="container-custom" style={{ position: "relative" }}>
          <div style={{ maxWidth: "720px" }} data-reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 1rem",
                background: "rgba(255, 255, 255, 0.12)",
                borderRadius: "50px",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  background: "var(--color-soft-orange)",
                  borderRadius: "50%",
                  display: "block",
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-sage-green)",
                }}
              >
                Katalog Layanan Medis
              </span>
            </div>

            <h1
              id="services-hero-heading"
              className="text-display"
              style={{ color: "white", marginBottom: "1.25rem" }}
            >
              Pelayanan Kesehatan Terpadu untuk Keluarga Anda
            </h1>

            <p
              className="text-body-lg"
              style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7 }}
            >
              Daftar lengkap layanan kesehatan primer dengan tenaga dokter umum profesional, prosedur higienis, serta transparansi biaya pelayanan.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-pad bg-ivory" aria-labelledby="catalog-heading">
        <div className="container-custom">
          {/* Header & Filter */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
            data-reveal
          >
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
                Pilihan Layanan
              </span>
              <h2 id="catalog-heading" className="section-title">
                10 Layanan Kesehatan Dasar
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="filter-scroll-container">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  style={{
                    padding: "0.5rem 1.125rem",
                    borderRadius: "50px",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    border: "1.5px solid",
                    borderColor: categoryFilter === cat ? "var(--color-primary-teal)" : "#d0ded9",
                    background: categoryFilter === cat ? "var(--color-primary-teal)" : "white",
                    color: categoryFilter === cat ? "white" : "var(--color-secondary-text)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.75rem",
              marginBottom: "3.5rem",
            }}
          >
            {filteredServices.map((service, i) => (
              <div
                key={service.id}
                className="card"
                data-reveal
                data-reveal-delay={String((i % 3) * 100)}
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Service Photo */}
                  <div
                    style={{
                      position: "relative",
                      height: "170px",
                      width: "100%",
                      borderRadius: "14px",
                      overflow: "hidden",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      style={{ objectFit: "cover" }}
                    />
                    <span
                      className="badge badge-teal"
                      style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        backdropFilter: "blur(6px)",
                        background: "rgba(23,107,104,0.85)",
                        color: "white",
                      }}
                    >
                      {service.category}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <div className="icon-box icon-box-md">
                      <ServiceIcon name={service.icon} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                        color: "var(--color-dark-text)",
                        lineHeight: 1.35,
                      }}
                    >
                      {service.name}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-secondary-text)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {service.shortDesc}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      paddingTop: "1rem",
                      borderTop: "1px solid rgba(35,140,131,0.1)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span style={{ fontSize: "0.8125rem", color: "var(--color-secondary-text)" }}>
                      Biaya layanan
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        fontSize: "1.0625rem",
                        color: "var(--color-primary-teal)",
                      }}
                    >
                      {service.priceLabel}
                    </span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedService(service)}
                      style={{ width: "100%", padding: "0.5rem 0.75rem" }}
                    >
                      Detail Layanan
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={openBooking}
                      style={{ width: "100%", padding: "0.5rem 0.75rem" }}
                    >
                      Buat Janji
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Informational Banner: Layanan Spesialis & Rujukan */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "1.75rem 2rem",
              border: "1.5px solid rgba(35,140,131,0.15)",
              display: "flex",
              alignItems: "flex-start",
              gap: "1.25rem",
              boxShadow: "var(--shadow-card)",
            }}
            data-reveal
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "rgba(235, 167, 111, 0.15)",
                color: "#c47f3d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "2px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--color-dark-text)",
                  marginBottom: "0.375rem",
                }}
              >
                Informasi Jejaring Rujukan Spesialis &amp; Layanan Lanjutan
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>
                Sesuai klasifikasi operasional Klinik Pratama, Klinik Sehatara berfokus pada pelayanan kesehatan dasar dokter umum. Untuk kebutuhan pemeriksaan dokter spesialis tertentu atau tindakan penunjang lanjutan, tim medis kami akan memberikan rekomendasi dan surat rujukan ke rumah sakit jejaring mitra terdekat di Kota Bandung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Section: Panduan Pemeriksaan CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-sage-green) 0%, #CCDEDA 100%)",
          padding: "3.5rem 0",
        }}
        aria-label="Panduan Persiapan Pemeriksaan"
      >
        <div className="container-custom">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
            }}
            data-reveal
          >
            <div style={{ maxWidth: "600px" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
                Persiapan Sebelum Datang
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "var(--color-deep-teal)",
                  marginBottom: "0.5rem",
                }}
              >
                Butuh Panduan Sebelum Pemeriksaan Kesehatan?
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--color-dark-text)", lineHeight: 1.6 }}>
                Dapatkan petunjuk persiapan puasa untuk pemeriksaan gula darah &amp; kolesterol, dokumen yang perlu dibawa, serta alur pendaftaran langsung ke WhatsApp Anda.
              </p>
            </div>

            <div>
              <a
                href={buildWaUrl(WA_MESSAGES.guide)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ boxShadow: "0 8px 24px rgba(23,107,104,0.25)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Dapatkan Panduan Pemeriksaan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Khusus Transparansi Biaya / Daftar Harga */}
      <section className="section-pad bg-white-custom" aria-labelledby="price-table-heading">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }} data-reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>
              Keterbukaan Informasi
            </span>
            <h2 id="price-table-heading" className="section-title">
              Daftar Harga &amp; Transparansi Biaya
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Kami menjunjung tinggi kejujuran biaya. Pasien berhak mengetahui estimasi biaya sebelum pemeriksaan berlangsung.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {/* Biaya Administrasi */}
            <div
              className="card"
              data-reveal
              style={{
                padding: "2rem",
                borderTop: "4px solid var(--color-primary-teal)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.125rem",
                  color: "var(--color-dark-text)",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1.5px solid rgba(35,140,131,0.1)",
                }}
              >
                Biaya Administrasi
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {PRICE_LIST.administrasi.map((item) => (
                  <div key={item.item} className="price-row">
                    <span style={{ fontSize: "0.9rem", color: "var(--color-dark-text)" }}>{item.item}</span>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-primary-teal)" }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Konsultasi */}
            <div
              className="card"
              data-reveal
              data-reveal-delay="100"
              style={{
                padding: "2rem",
                borderTop: "4px solid var(--color-primary-teal)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.125rem",
                  color: "var(--color-dark-text)",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1.5px solid rgba(35,140,131,0.1)",
                }}
              >
                Konsultasi Dokter
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {PRICE_LIST.konsultasi.map((item) => (
                  <div key={item.item} className="price-row">
                    <span style={{ fontSize: "0.9rem", color: "var(--color-dark-text)" }}>{item.item}</span>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-primary-teal)" }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pemeriksaan */}
            <div
              className="card"
              data-reveal
              data-reveal-delay="200"
              style={{
                padding: "2rem",
                borderTop: "4px solid var(--color-primary-teal)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.125rem",
                  color: "var(--color-dark-text)",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1.5px solid rgba(35,140,131,0.1)",
                }}
              >
                Pemeriksaan Medis
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {PRICE_LIST.pemeriksaan.map((item) => (
                  <div key={item.item} className="price-row">
                    <span style={{ fontSize: "0.9rem", color: "var(--color-dark-text)" }}>{item.item}</span>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-primary-teal)" }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tindakan */}
            <div
              className="card"
              data-reveal
              data-reveal-delay="300"
              style={{
                padding: "2rem",
                borderTop: "4px solid var(--color-primary-teal)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.125rem",
                  color: "var(--color-dark-text)",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1.5px solid rgba(35,140,131,0.1)",
                }}
              >
                Tindakan Medis
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {PRICE_LIST.tindakan.map((item) => (
                  <div key={item.item} className="price-row">
                    <span style={{ fontSize: "0.9rem", color: "var(--color-dark-text)" }}>{item.item}</span>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-primary-teal)" }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Keterangan Wajib Sesuai Ketentuan */}
          <div
            style={{
              background: "var(--color-warm-ivory)",
              borderRadius: "16px",
              padding: "1.5rem 1.75rem",
              border: "1.5px solid rgba(235, 167, 111, 0.4)",
              maxWidth: "840px",
              margin: "0 auto",
            }}
            data-reveal
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c47f3d" strokeWidth="2" style={{ flexShrink: 0, marginTop: "2px" }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p style={{ fontSize: "0.875rem", color: "#6a523b", lineHeight: 1.6, fontWeight: 500 }}>
                &ldquo;Biaya konsultasi dan pemeriksaan belum termasuk obat maupun tindakan tambahan apabila diperlukan. Biaya akhir akan disesuaikan dengan kebutuhan pelayanan dan hasil konsultasi tenaga medis.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Layanan Modal */}
      {selectedService && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedService(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-title"
        >
          <div className="modal-box" style={{ padding: "2rem", overflow: "hidden" }}>
            {/* Modal Image Hero */}
            <div
              style={{
                position: "relative",
                height: "200px",
                width: "calc(100% + 4rem)",
                margin: "-2rem -2rem 1.5rem -2rem",
                overflow: "hidden",
              }}
            >
              <Image
                src={selectedService.image}
                alt={selectedService.name}
                fill
                sizes="(max-width: 768px) 100vw, 650px"
                style={{ objectFit: "cover" }}
              />
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  transition: "background 0.2s ease",
                }}
                aria-label="Tutup detail layanan"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div className="icon-box icon-box-md">
                  <ServiceIcon name={selectedService.icon} />
                </div>
                <div>
                  <span className="badge badge-teal" style={{ marginBottom: "0.25rem" }}>{selectedService.category}</span>
                  <h3 id="detail-title" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.25rem", color: "var(--color-dark-text)" }}>
                    {selectedService.name}
                  </h3>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.75rem" }}>
              <div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", color: "var(--color-dark-text)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>
                  Deskripsi Layanan
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>
                  {selectedService.description}
                </p>
              </div>

              <div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", color: "var(--color-dark-text)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>
                  Tujuan Pemeriksaan
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>
                  {selectedService.purpose}
                </p>
              </div>

              {selectedService.indications && (
                <div>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", color: "var(--color-dark-text)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                    Indikasi Umum
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {selectedService.indications.map((ind) => (
                      <span key={ind} style={{ fontSize: "0.8125rem", background: "var(--color-sage-green)", color: "var(--color-deep-teal)", padding: "0.2rem 0.625rem", borderRadius: "50px", fontWeight: 600 }}>
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.procedure && (
                <div>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", color: "var(--color-dark-text)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                    Tahapan Prosedur
                  </h4>
                  <ol style={{ paddingLeft: "1.25rem", margin: 0, fontSize: "0.875rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>
                    {selectedService.procedure.map((step, idx) => (
                      <li key={idx} style={{ marginBottom: "0.25rem" }}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", background: "var(--color-warm-ivory)", padding: "1rem", borderRadius: "12px" }}>
                <div>
                  <span style={{ fontSize: "0.775rem", color: "var(--color-secondary-text)", display: "block" }}>Persiapan</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-dark-text)" }}>{selectedService.preparation}</span>
                </div>
                <div>
                  <span style={{ fontSize: "0.775rem", color: "var(--color-secondary-text)", display: "block" }}>Estimasi Waktu</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-dark-text)" }}>{selectedService.duration}</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "rgba(35,140,131,0.08)", borderRadius: "12px" }}>
                <div>
                  <span style={{ fontSize: "0.8125rem", color: "var(--color-secondary-text)", display: "block" }}>Biaya Mulai Dari</span>
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.25rem", color: "var(--color-primary-teal)" }}>
                    {selectedService.priceLabel}
                  </span>
                </div>
                {selectedService.notes && (
                  <span style={{ fontSize: "0.775rem", color: "var(--color-secondary-text)", maxWidth: "50%", textAlign: "right" }}>
                    *{selectedService.notes}
                  </span>
                )}
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                className="btn btn-secondary"
                style={{ flex: 1 }}
                onClick={() => setSelectedService(null)}
              >
                Tutup
              </button>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => {
                  setSelectedService(null);
                  openBooking();
                }}
              >
                Buat Janji Temu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
