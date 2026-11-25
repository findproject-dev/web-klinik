"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FACILITIES } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type FacilityType = typeof FACILITIES[0];

function FacilitySvgIcon({ id }: { id: string }) {
  const icons: Record<string, React.ReactNode> = {
    "ruang-tunggu": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1"/><path d="M5 18v2"/><path d="M19 18v2"/><path d="M5 9V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/></svg>,
    "ruang-konsultasi": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
    "ruang-pemeriksaan": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>,
    "ruang-tindakan": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>,
    "pemeriksaan-penunjang": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
    "ruang-imunisasi": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m14.5 4.5 5 5"/><path d="m18 8 2.5-2.5a1.41 1.41 0 0 0 0-2l-1-1a1.41 1.41 0 0 0-2 0L15 5"/><path d="m13 7-8.5 8.5a2.12 2.12 0 0 0-.6 1.5V19h2a2.12 2.12 0 0 0 1.5-.6L16 10"/><path d="M7 15l2 2"/></svg>,
    "apotek": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>,
    "parkir": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>,
    "toilet": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>,
    "aksesibilitas": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="4" r="2"/><path d="m18 10-6-1-6 1"/><path d="m6 21 3-9 3 2 3-2 3 9"/></svg>,
  };
  return <>{icons[id] || icons["ruang-tunggu"]}</>;
}

export default function FasilitasClient() {
  useScrollReveal();
  const [activeFacility, setActiveFacility] = useState<FacilityType | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveFacility(null);
      } else if (e.key === "ArrowRight" && activeFacility) {
        const curIdx = FACILITIES.findIndex((f) => f.id === activeFacility.id);
        const nextIdx = (curIdx + 1) % FACILITIES.length;
        setActiveFacility(FACILITIES[nextIdx]);
      } else if (e.key === "ArrowLeft" && activeFacility) {
        const curIdx = FACILITIES.findIndex((f) => f.id === activeFacility.id);
        const prevIdx = (curIdx - 1 + FACILITIES.length) % FACILITIES.length;
        setActiveFacility(FACILITIES[prevIdx]);
      }
    };
    if (activeFacility) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeFacility]);

  return (
    <>
      {/* Hero Banner */}
      <section
        className="page-hero-banner"
        aria-labelledby="facility-hero-heading"
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
                Infrastruktur &amp; Sarana
              </span>
            </div>

            <h1
              id="facility-hero-heading"
              className="text-display"
              style={{ color: "white", marginBottom: "1.25rem" }}
            >
              Fasilitas Bersih, Higienis, dan Nyaman
            </h1>

            <p
              className="text-body-lg"
              style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7 }}
            >
              Setiap sudut klinik dirancang untuk menciptakan ketenangan pikiran bagi pasien dan keluarga. Bersih terawat, memenuhi standar sanitasi medis, serta ramah bagi seluruh kelompok usia.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-pad bg-ivory" aria-labelledby="facility-grid-heading">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }} data-reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
              10 Sarana Pelayanan Utama
            </span>
            <h2 id="facility-grid-heading" className="section-title">
              Jelajahi Fasilitas Klinik Sehatara
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Klik pada kartu fasilitas untuk membuka tampilan detail dan perbesaran visual melalui Lightbox.
            </p>
          </div>

          {/* Asymmetric & Responsive Facility Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {FACILITIES.map((fac, idx) => (
              <div
                key={fac.id}
                className="card"
                data-reveal
                data-reveal-delay={String((idx % 3) * 100)}
                onClick={() => setActiveFacility(fac)}
                style={{
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveFacility(fac);
                  }
                }}
                aria-label={`Buka detail fasilitas ${fac.name}`}
              >
                {/* Visual Image / Photo */}
                <div
                  style={{
                    position: "relative",
                    height: "210px",
                    width: "100%",
                    overflow: "hidden",
                    background: `linear-gradient(135deg, ${fac.color} 0%, #B8D4C8 100%)`,
                  }}
                >
                  <Image
                    src={fac.image}
                    alt={`Fasilitas ${fac.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                    style={{ objectFit: "cover" }}
                  />

                  <span
                    style={{
                      position: "absolute",
                      bottom: "0.875rem",
                      right: "0.875rem",
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(6px)",
                      borderRadius: "50px",
                      padding: "0.3rem 0.75rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-primary-teal)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Lihat Foto
                  </span>
                </div>

                {/* Text Content */}
                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        fontSize: "1.125rem",
                        color: "var(--color-dark-text)",
                        marginBottom: "0.625rem",
                      }}
                    >
                      {fac.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-secondary-text)",
                        lineHeight: 1.6,
                      }}
                    >
                      {fac.description}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      color: "var(--color-primary-teal)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Buka Lightbox &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standar Kebersihan & Kenyamanan Banner */}
      <section className="section-pad bg-white-custom" aria-label="Standar Higienitas Fasilitas">
        <div className="container-custom">
          <div
            style={{
              background: "var(--color-sage-green)",
              borderRadius: "28px",
              padding: "3.5rem 3rem",
            }}
            className="two-col-grid"
            data-reveal
          >
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
                Kenyamanan Pasien
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
                  color: "var(--color-deep-teal)",
                  marginBottom: "1rem",
                }}
              >
                Standar Higienitas &amp; Sanitasi Terjaga 24/7
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--color-dark-text)", lineHeight: 1.65 }}>
                Kebersihan ruangan dibersihkan dan disinfeksi secara berkala setiap hari. Sirkulasi udara dilengkapi air-purifier berfilter HEPA untuk memastikan lingkungan pelayanan kesehatan yang aman dan bebas kontaminasi.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Desinfeksi Rutin", desc: "Pembersihan berkala di seluruh area kontak publik dan ruang pemeriksaan dokter." },
                { title: "Ramah Pengguna Kursi Roda", desc: "Akses ramp landai, pintu lebar, dan toilet khusus disabilitas yang nyaman." },
                { title: "Area Tunggu Bebas Asap Rokok", desc: "Kawasan tanpa rokok demi kesehatan ibu, bayi, dan seluruh pengunjung." },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    padding: "1rem 1.25rem",
                    boxShadow: "0 2px 10px rgba(23,107,104,0.06)",
                  }}
                >
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-deep-teal)", marginBottom: "0.25rem" }}>
                    ✓ {item.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-secondary-text)", lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeFacility && (
        <div
          className="lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveFacility(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox tampilan fasilitas ${activeFacility.name}`}
        >
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              maxWidth: "760px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveFacility(null)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                zIndex: 10,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease",
              }}
              aria-label="Tutup lightbox"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Visual Hero Inside Lightbox */}
            <div
              style={{
                position: "relative",
                height: "420px",
                width: "100%",
                overflow: "hidden",
                background: "#0c1d1a",
              }}
            >
              <Image
                src={activeFacility.image}
                alt={`Foto Fasilitas ${activeFacility.name}`}
                fill
                sizes="(max-width: 800px) 100vw, 760px"
                style={{ objectFit: "cover" }}
                priority
              />

              {/* Prev & Next in Lightbox */}
              <button
                onClick={() => {
                  const idx = FACILITIES.findIndex((f) => f.id === activeFacility.id);
                  const prevIdx = (idx - 1 + FACILITIES.length) % FACILITIES.length;
                  setActiveFacility(FACILITIES[prevIdx]);
                }}
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.85)",
                  color: "var(--color-dark-text)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
                aria-label="Fasilitas sebelumnya"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const idx = FACILITIES.findIndex((f) => f.id === activeFacility.id);
                  const nextIdx = (idx + 1) % FACILITIES.length;
                  setActiveFacility(FACILITIES[nextIdx]);
                }}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.85)",
                  color: "var(--color-dark-text)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
                aria-label="Fasilitas berikutnya"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Description & Metadata */}
            <div style={{ padding: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem" }}>
                <span className="badge badge-teal">Fasilitas Klinik Sehatara</span>
                <span style={{ fontSize: "0.825rem", color: "var(--color-secondary-text)" }}>
                  {FACILITIES.findIndex((f) => f.id === activeFacility.id) + 1} dari {FACILITIES.length}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "var(--color-dark-text)",
                  marginBottom: "0.75rem",
                }}
              >
                {activeFacility.name}
              </h3>

              <p style={{ fontSize: "0.95rem", color: "var(--color-secondary-text)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                {activeFacility.description}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(35,140,131,0.1)",
                }}
              >
                <span style={{ fontSize: "0.825rem", color: "var(--color-secondary-text)" }}>
                  Tekan <kbd style={{ padding: "0.15rem 0.4rem", background: "#f0f0f0", borderRadius: "4px" }}>Esc</kbd> untuk menutup atau tanda panah keyboard untuk beralih.
                </span>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveFacility(null)}
                >
                  Tutup Tampilan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
