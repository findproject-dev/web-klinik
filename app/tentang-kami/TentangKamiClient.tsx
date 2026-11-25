"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CLINIC_INFO, HISTORY, VALUES, buildWaUrl, WA_MESSAGES } from "@/lib/data";

function openBooking() {
  window.dispatchEvent(new CustomEvent("openBooking"));
}

export default function TentangKamiClient() {
  useScrollReveal();

  return (
    <>
      {/* 1. Hero Banner */}
      <section
        className="page-hero-banner"
        aria-labelledby="about-hero-heading"
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

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
                Tentang Klinik Sehatara
              </span>
            </div>

            <h1
              id="about-hero-heading"
              className="text-display"
              style={{ color: "white", marginBottom: "1.25rem" }}
            >
              Mendedikasikan Diri untuk Kesehatan Seluruh Keluarga
            </h1>

            <p
              className="text-body-lg"
              style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7 }}
            >
              Berdiri sejak tahun 2020 di Sukajadi Bandung, Klinik Sehatara adalah fasilitas pelayanan kesehatan tingkat pratama yang mengedepankan profesionalisme, kehangatan empati, dan transparansi biaya bagi masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Profil dan Filosofi Pelayanan */}
      <section className="section-pad bg-white-custom" aria-labelledby="profile-heading">
        <div className="container-custom">
          <div
            className="two-col-grid"
          >
            <div data-reveal>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>
                Filosofi Pelayanan
              </span>
              <h2 id="profile-heading" className="section-title" style={{ marginBottom: "1rem" }}>
                Pelayanan Ramah, Pendekatan Komprehensif
              </h2>
              <div className="divider" style={{ marginBottom: "1.5rem" }} />

              <p className="text-body-lg" style={{ marginBottom: "1.25rem" }}>
                Kami percaya bahwa fasilitas kesehatan keluarga harus menjadi tempat yang menenangkan, ramah anak, dan memberikan kepastian perawatan medis tanpa rasa cemas.
              </p>
              <p className="text-body" style={{ marginBottom: "1.25rem" }}>
                Filosofi kami berakar pada <em>Family-Oriented Care</em>—memandang setiap pasien sebagai individu berharga dalam konteks keluarganya. Dokter kami meluangkan waktu untuk mendengar setiap keluhan dengan seksama, melakukan diagnosis objektif, dan memberikan edukasi pencegahan yang mudah dimengerti.
              </p>
              <p className="text-body">
                Klinik Sehatara berkomitmen memberikan pelayanan medis berbasis etika kedokteran yang murni tanpa pembebanan tindakan atau obat yang tidak perlu.
              </p>
            </div>

            <div data-reveal="right">
              <div
                style={{
                  position: "relative",
                  borderRadius: "28px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                  marginBottom: "1.75rem",
                  height: "300px",
                }}
              >
                <Image
                  src="/images/general/general-patient-consultation.webp"
                  alt="Dokter Klinik Sehatara berdiskusi ramah dengan pasien"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(23,107,104,0.6) 0%, transparent 50%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.25rem",
                    right: "1.25rem",
                    color: "white",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "50px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-heading)",
                      display: "inline-block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    STANDAR PELAYANAN
                  </span>
                  <p style={{ fontSize: "0.875rem", margin: 0, opacity: 0.95 }}>
                    Konsultasi menyeluruh berorientasi kenyamanan keluarga
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg, var(--color-sage-green) 0%, #C4DDD1 100%)",
                  borderRadius: "24px",
                  padding: "2rem",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {[
                    "Tenaga medis dokter umum bersertifikasi kompetensi dan izin praktik aktif.",
                    "Fasilitas ruang tindakan dan obat-obatan esensial terstandarisasi.",
                    "SOP higienitas dan sterilisasi alat medis yang ketat.",
                    "Pemberian informasi edukasi dan estimasi biaya di awal.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        fontSize: "0.9375rem",
                        color: "var(--color-dark-text)",
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--color-primary-teal)",
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visi & Misi */}
      <section className="section-pad bg-ivory" aria-labelledby="vision-mission-heading">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }} data-reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>
              Arah & Tujuan
            </span>
            <h2 id="vision-mission-heading" className="section-title">
              Visi dan Misi Kami
            </h2>
            <div className="divider divider-center" />
          </div>

          <div
            className="two-col-grid"
          >
            {/* Visi */}
            <div
              className="card"
              data-reveal
              style={{
                padding: "2.5rem 2.25rem",
                display: "flex",
                flexDirection: "column",
                borderTop: "4px solid var(--color-primary-teal)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "0.3rem 0.875rem",
                  background: "rgba(35,140,131,0.1)",
                  borderRadius: "50px",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  color: "var(--color-primary-teal)",
                  marginBottom: "1.25rem",
                  width: "fit-content",
                }}
              >
                VISI KAMI
              </div>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "var(--color-dark-text)",
                  lineHeight: 1.6,
                }}
              >
                Menjadi fasilitas pelayanan kesehatan keluarga yang terpercaya dengan mengutamakan kualitas pelayanan, keselamatan pasien, dan kemudahan akses kesehatan.
              </p>
            </div>

            {/* Misi */}
            <div
              className="card"
              data-reveal
              data-reveal-delay="150"
              style={{
                padding: "2.5rem 2.25rem",
                display: "flex",
                flexDirection: "column",
                borderTop: "4px solid var(--color-deep-teal)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "0.3rem 0.875rem",
                  background: "rgba(23,107,104,0.1)",
                  borderRadius: "50px",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  color: "var(--color-deep-teal)",
                  marginBottom: "1.25rem",
                  width: "fit-content",
                }}
              >
                MISI KAMI
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Memberikan pelayanan kesehatan yang profesional dan berorientasi pada kebutuhan pasien.",
                  "Menciptakan lingkungan pelayanan yang nyaman dan ramah keluarga.",
                  "Meningkatkan kualitas pelayanan melalui pengembangan tenaga medis dan fasilitas.",
                  "Memberikan informasi pelayanan dan biaya secara transparan.",
                ].map((misi, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "var(--color-sage-green)",
                        color: "var(--color-deep-teal)",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        fontSize: "0.875rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nilai Utama Pelayanan */}
      <section className="section-pad bg-white-custom" aria-labelledby="values-heading">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }} data-reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>
              Prinsip Kerja
            </span>
            <h2 id="values-heading" className="section-title">
              Nilai Utama Pelayanan
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Empat pilar nilai yang dipegang teguh oleh seluruh dokter dan staf Klinik Sehatara setiap hari.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="card"
                data-reveal
                data-reveal-delay={String(idx * 100)}
                style={{ padding: "2rem 1.75rem" }}
              >
                <div
                  className="icon-box icon-box-lg"
                  style={{
                    marginBottom: "1.25rem",
                    background: "rgba(35,140,131,0.1)",
                    color: "var(--color-primary-teal)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "var(--color-dark-text)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {val.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sejarah Klinik (Timeline sejak 2020) */}
      <section className="section-pad bg-sage" aria-labelledby="history-heading">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }} data-reveal>
            <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>
              Perjalanan Kami
            </span>
            <h2 id="history-heading" className="section-title">
              Sejarah Klinik Sehatara
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Dedikasi pelayanan kesehatan primer yang terus bertumbuh sejak tahun 2020 di Bandung.
            </p>
          </div>

          <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                bottom: "16px",
                left: "24px",
                width: "2px",
                background: "var(--color-primary-teal)",
                opacity: 0.3,
              }}
              aria-hidden="true"
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {HISTORY.map((h, idx) => (
                <div
                  key={h.year}
                  data-reveal
                  data-reveal-delay={String(idx * 100)}
                  style={{ display: "flex", gap: "2rem", alignItems: "flex-start", position: "relative" }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "white",
                      border: "3px solid var(--color-primary-teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: "0.875rem",
                      color: "var(--color-primary-teal)",
                      flexShrink: 0,
                      boxShadow: "0 4px 12px rgba(23,107,104,0.15)",
                    }}
                  >
                    {h.year}
                  </div>
                  <div
                    className="card"
                    style={{
                      flex: 1,
                      padding: "1.5rem 1.75rem",
                      background: "white",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        color: "var(--color-dark-text)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {h.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-secondary-text)", lineHeight: 1.6 }}>
                      {h.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Komitmen Keselamatan Pasien */}
      <section className="section-pad bg-white-custom" aria-labelledby="safety-heading">
        <div className="container-custom">
          <div
            className="two-col-grid"
          >
            <div data-reveal>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>
                Komitmen Keselamatan
              </span>
              <h2 id="safety-heading" className="section-title" style={{ marginBottom: "1rem" }}>
                Keselamatan &amp; Kenyamanan Pasien Adalah Prioritas Mutlak
              </h2>
              <div className="divider" style={{ marginBottom: "1.5rem" }} />
              <p className="text-body-lg" style={{ marginBottom: "1.25rem" }}>
                Di Klinik Sehatara, keselamatan pasien bukan sekadar slogan, melainkan budaya operasional yang diterapkan dalam setiap alur tindakan medis dan higienitas fasilitas.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    title: "Protokol Sterilisasi Ketat",
                    desc: "Semua instrumen medis melalui prosedur sterilisasi dan penggunaan alat habis pakai sekali pakai (disposable) berstandar medis.",
                  },
                  {
                    title: "Keamanan Obat & Resep Rasional",
                    desc: "Pengelolaan obat sesuai kaidah farmasi yang baik dengan prinsip penggunaan obat rasional tanpa polifarmasi yang tidak perlu.",
                  },
                  {
                    title: "Privasi Rekam Medis",
                    desc: "Data medis dan riwayat pemeriksaan pasien dijaga kerahasiaannya dengan standar etika medis yang ketat.",
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--color-primary-teal)",
                        marginTop: "8px",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9375rem", color: "var(--color-dark-text)", marginBottom: "0.25rem" }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: "0.875rem", color: "var(--color-secondary-text)", lineHeight: 1.55 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal="right">
              {/* Foto Higienitas & Pelayanan Medis */}
              <div
                style={{
                  position: "relative",
                  height: "220px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <Image
                  src="/images/general/general-health-checkup.webp"
                  alt="Pemeriksaan medis higienis dan terstandarisasi di Klinik Sehatara"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* 7. Informasi Legalitas */}
              <div
                style={{
                  background: "var(--color-warm-ivory)",
                  border: "1.5px solid rgba(35,140,131,0.2)",
                  borderRadius: "24px",
                  padding: "2.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(23,107,104,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-deep-teal)",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.125rem", color: "var(--color-dark-text)" }}>
                      Informasi Legalitas Usaha
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: "var(--color-secondary-text)" }}>
                      Data perizinan operasional fasilitas
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    ["Jenis Fasilitas Kesehatan", CLINIC_INFO.legal.jenisUsaha],
                    ["Badan Usaha / Pengelola", CLINIC_INFO.legal.pengelola],
                    ["Nomor Induk Berusaha (NIB)", CLINIC_INFO.legal.nib],
                    ["Sertifikat Standar Operasional", CLINIC_INFO.legal.sertifikatStandar],
                    ["Status Akreditasi", CLINIC_INFO.legal.statusAkreditasi],
                  ].map(([label, val]) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        padding: "0.625rem 0",
                        borderBottom: "1px solid rgba(35,140,131,0.08)",
                        fontSize: "0.875rem",
                      }}
                    >
                      <span style={{ color: "var(--color-secondary-text)", maxWidth: "50%" }}>{label}</span>
                      <span
                        style={{
                          color: "var(--color-dark-text)",
                          fontWeight: 600,
                          fontFamily: "var(--font-heading)",
                          textAlign: "right",
                        }}
                      >
                        {val}
                      </span>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "0.775rem", color: "var(--color-secondary-text)", marginTop: "1.25rem", lineHeight: 1.5 }}>
                  *Data perizinan ditampilkan secara transparan sebagai wujud akuntabilitas profesional dalam melayani masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Booking CTA */}
      <section
        style={{ background: "var(--color-deep-teal)", padding: "4.5rem 0", color: "white", textAlign: "center" }}
      >
        <div className="container-custom" data-reveal>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
            Siap Menjadi Mitra Kesehatan Keluarga Anda
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", maxWidth: "520px", margin: "0 auto 2rem", lineHeight: 1.65 }}>
            Daftarkan janji temu Anda sekarang dan dapatkan layanan konsultasi kesehatan yang hangat dan profesional di Klinik Sehatara Bandung.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-white btn-lg" onClick={openBooking}>
              Buat Janji Temu
            </button>
            <a
              href={buildWaUrl(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
