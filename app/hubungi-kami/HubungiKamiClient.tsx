"use client";

import { useState } from "react";
import { CLINIC_INFO, WA_MESSAGES } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function openBooking() {
  window.dispatchEvent(new CustomEvent("openBooking"));
}

export default function HubungiKamiClient() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Pertanyaan Layanan",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    // Direct to WhatsApp
    const waText = encodeURIComponent(
      `Halo Klinik Sehatara,%0A%0ASaya ingin bertanya informasi berikut:%0ANama: ${formData.name}%0ANomor Kontak: ${formData.phone || "—"}%0ATopik: ${formData.subject}%0A%0APesan:%0A${formData.message}%0A%0ATerima kasih.`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${waText}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Banner */}
      <section
        className="page-hero-banner"
        aria-labelledby="contact-hero-heading"
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
                Informasi &amp; Kontak Resmi
              </span>
            </div>

            <h1
              id="contact-hero-heading"
              className="text-display"
              style={{ color: "white", marginBottom: "1.25rem" }}
            >
              Kami Siap Membantu Anda dan Keluarga
            </h1>

            <p
              className="text-body-lg"
              style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7 }}
            >
              Memiliki pertanyaan mengenai layanan, jadwal dokter, atau rute menuju lokasi? Jangan ragu untuk menghubungi customer care Klinik Sehatara atau langsung berkunjung ke klinik kami di Sukajadi, Bandung.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-pad bg-ivory" aria-labelledby="contact-main-heading">
        <div className="container-custom">
          <div
            className="two-col-grid"
            style={{ alignItems: "start" }}
          >
            {/* Left: Contact Info & Operational Hours */}
            <div data-reveal>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
                Akses Komunikasi
              </span>
              <h2 id="contact-main-heading" className="section-title" style={{ marginBottom: "1rem" }}>
                Saluran Informasi &amp; Lokasi
              </h2>
              <div className="divider" style={{ marginBottom: "2rem" }} />

              {/* Cards Kontak */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                {/* Alamat */}
                <div
                  className="card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="icon-box icon-box-md" style={{ flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-dark-text)", marginBottom: "0.25rem" }}>
                      Alamat Klinik
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-secondary-text)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                      {CLINIC_INFO.address}
                    </p>
                    <a
                      href={CLINIC_INFO.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "var(--color-primary-teal)",
                        textDecoration: "none",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      Buka di Google Maps Directions &rarr;
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div
                  className="card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="icon-box icon-box-md" style={{ flexShrink: 0, background: "rgba(37, 211, 102, 0.15)", color: "#25D366" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-dark-text)", marginBottom: "0.25rem" }}>
                      WhatsApp Resmi
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-secondary-text)", marginBottom: "0.5rem" }}>
                      Respon cepat selama jam operasional klinik
                    </p>
                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${WA_MESSAGES.general}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Chat WhatsApp Sekarang
                    </a>
                  </div>
                </div>

                {/* Telepon & Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className="card" style={{ padding: "1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.375rem" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-teal)" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.88 5.88l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9rem" }}>Telepon</h4>
                    </div>
                    <a href={`tel:${CLINIC_INFO.phone}`} style={{ fontSize: "0.875rem", color: "var(--color-secondary-text)", textDecoration: "none" }}>
                      {CLINIC_INFO.phone}
                    </a>
                  </div>

                  <div className="card" style={{ padding: "1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.375rem" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-teal)" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9rem" }}>Email</h4>
                    </div>
                    <a href={`mailto:${CLINIC_INFO.email}`} style={{ fontSize: "0.875rem", color: "var(--color-secondary-text)", textDecoration: "none" }}>
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div
                  className="card"
                  style={{
                    padding: "1.5rem",
                    borderLeft: "4px solid var(--color-primary-teal)",
                  }}
                >
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1rem", color: "var(--color-dark-text)", marginBottom: "0.75rem" }}>
                    Jam Buka &amp; Layanan Operasional
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {CLINIC_INFO.operationalHours.map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.875rem",
                          paddingBottom: "0.375rem",
                          borderBottom: "1px solid rgba(35,140,131,0.06)",
                        }}
                      >
                        <span style={{ color: "var(--color-secondary-text)" }}>{h.day}</span>
                        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-dark-text)" }}>
                          {h.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Inquiry Form */}
            <div data-reveal="right">
              <div
                className="card"
                style={{
                  padding: "2.5rem 2rem",
                  background: "white",
                  border: "1.5px solid rgba(35,140,131,0.15)",
                }}
              >
                <div style={{ marginBottom: "1.5rem" }}>
                  <span className="badge badge-teal" style={{ marginBottom: "0.5rem" }}>
                    Formulir Pertanyaan
                  </span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.25rem", color: "var(--color-dark-text)" }}>
                    Kirim Pesan Langsung
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-secondary-text)", marginTop: "0.25rem" }}>
                    Pesan akan otomatis diteruskan ke admin WhatsApp resmi Klinik Sehatara.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label className="form-label" htmlFor="c-name">
                      Nama Lengkap <span style={{ color: "#e53e3e" }}>*</span>
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      className="form-input"
                      placeholder="Masukkan nama Anda"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="c-phone">
                      Nomor WhatsApp / HP
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      className="form-input"
                      placeholder="Contoh: 0812-xxxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="c-subject">
                      Topik Pertanyaan
                    </label>
                    <select
                      id="c-subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Pertanyaan Layanan Medis">Pertanyaan Layanan Medis</option>
                      <option value="Jadwal Praktik Dokter">Jadwal Praktik Dokter</option>
                      <option value="Informasi Biaya / Transparansi">Informasi Biaya / Transparansi</option>
                      <option value="Panduan Persiapan Pemeriksaan">Panduan Persiapan Pemeriksaan</option>
                      <option value="Lokasi dan Akses Parkir">Lokasi dan Akses Parkir</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="c-message">
                      Isi Pesan <span style={{ color: "#e53e3e" }}>*</span>
                    </label>
                    <textarea
                      id="c-message"
                      className="form-input"
                      rows={4}
                      placeholder="Tuliskan pertanyaan Anda secara jelas..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", display: "flex", gap: "0.5rem" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Kirim Pertanyaan ke WhatsApp
                  </button>

                  {submitted && (
                    <p style={{ fontSize: "0.825rem", color: "#16a34a", textAlign: "center", fontWeight: 600 }}>
                      ✓ Pesan Anda telah diarahkan ke WhatsApp Klinik Sehatara.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="section-pad bg-white-custom" aria-labelledby="map-section-heading">
        <div className="container-custom">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
            data-reveal
          >
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
                Peta Lokasi
              </span>
              <h2 id="map-section-heading" className="section-title">
                Lokasi Klinik di Google Maps
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--color-secondary-text)", marginTop: "0.25rem" }}>
                Berada di jalur strategis Jl. Sukajadi Bandung, mudah diakses kendaraan pribadi maupun transportasi umum.
              </p>
            </div>

            <a
              href={CLINIC_INFO.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Buka Petunjuk Arah
            </a>
          </div>

          <div
            className="map-container"
            data-reveal
            style={{
              boxShadow: "var(--shadow-card)",
              border: "2px solid rgba(35,140,131,0.15)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4765!2d107.5841!3d-6.9034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a84a46f6d%3A0x0!2zNsKwNTQnMTIuMiJTIDEwN8KwMzUnMTIuMiJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              title="Peta Interaktif Lokasi Klinik Sehatara Bandung"
              style={{ width: "100%", height: "450px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Booking CTA Bar */}
      <section
        style={{
          background: "var(--color-deep-teal)",
          padding: "4rem 0",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container-custom" data-reveal>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              marginBottom: "1rem",
            }}
          >
            Ingin Segera Berkonsultasi dengan Dokter?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "520px",
              margin: "0 auto 2rem",
              lineHeight: 1.6,
            }}
          >
            Gunakan sistem booking janji temu online kami untuk memilih tanggal dan jam konsultasi tanpa repot mengantri.
          </p>
          <button className="btn btn-white btn-lg" onClick={openBooking}>
            Buat Janji Temu Sekarang
          </button>
        </div>
      </section>
    </>
  );
}
