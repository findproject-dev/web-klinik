"use client";

import { useState } from "react";
import Image from "next/image";
import { DOCTORS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function openBooking() {
  window.dispatchEvent(new CustomEvent("openBooking"));
}

export default function TimMedisClient() {
  useScrollReveal();
  const [selectedDay, setSelectedDay] = useState<string>("Semua");

  const daysList = ["Semua", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  const filteredDoctors = selectedDay === "Semua"
    ? DOCTORS
    : DOCTORS.filter((d) => d.days.includes(selectedDay));

  return (
    <>
      {/* Hero Banner */}
      <section
        className="page-hero-banner"
        aria-labelledby="doctors-hero-heading"
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
                Tenaga Medis Berpengalaman
              </span>
            </div>

            <h1
              id="doctors-hero-heading"
              className="text-display"
              style={{ color: "white", marginBottom: "1.25rem" }}
            >
              Tim Dokter Praktik Klinik Sehatara
            </h1>

            <p
              className="text-body-lg"
              style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7 }}
            >
              Berkenalan dengan dokter umum profesional yang berdedikasi tinggi dalam memberikan pelayanan kesehatan primer yang ramah, cermat, dan berorientasi keluarga.
            </p>
          </div>
        </div>
      </section>

      {/* Daftar Dokter & Filter Hari */}
      <section className="section-pad bg-ivory" aria-labelledby="team-heading">
        <div className="container-custom">
          {/* Section Header */}
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
                Jadwal &amp; Ketersediaan
              </span>
              <h2 id="team-heading" className="section-title">
                Profil &amp; Jadwal Praktik Dokter
              </h2>
            </div>

            {/* Filter Hari */}
            <div className="filter-scroll-container">
              {daysList.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "50px",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.825rem",
                    fontWeight: 600,
                    border: "1.5px solid",
                    borderColor: selectedDay === day ? "var(--color-primary-teal)" : "#d0ded9",
                    background: selectedDay === day ? "var(--color-primary-teal)" : "white",
                    color: selectedDay === day ? "white" : "var(--color-secondary-text)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Dokter */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {filteredDoctors.map((doc, idx) => (
              <div
                key={doc.id}
                className="card"
                data-reveal
                data-reveal-delay={String((idx % 3) * 100)}
                style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* Visual Header / Doctor Portrait Photo */}
                <div
                  style={{
                    position: "relative",
                    height: "260px",
                    width: "100%",
                    overflow: "hidden",
                    background: doc.photoColor,
                  }}
                >
                  <Image
                    src={doc.image}
                    alt={`Foto ${doc.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 40%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        padding: "0.3rem 0.85rem",
                        borderRadius: "50px",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(6px)",
                        color: doc.available ? "#16a34a" : "#64748b",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: doc.available ? "#16a34a" : "#64748b",
                        }}
                      />
                      {doc.available ? "Aktif Praktik" : "Tidak Praktik"}
                    </span>
                  </div>
                </div>

                {/* Info Body */}
                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ marginBottom: "1rem" }}>
                      <span className="badge badge-teal" style={{ marginBottom: "0.5rem" }}>
                        {doc.specialization}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 800,
                          fontSize: "1.2rem",
                          color: "var(--color-dark-text)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {doc.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "var(--color-primary-teal)",
                        }}
                      >
                        {doc.expertise}
                      </p>
                    </div>

                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-secondary-text)",
                        lineHeight: 1.6,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {doc.bio}
                    </p>
                  </div>

                  <div>
                    {/* Jadwal Box */}
                    <div
                      style={{
                        background: "var(--color-warm-ivory)",
                        borderRadius: "12px",
                        padding: "1rem",
                        marginBottom: "1.25rem",
                        border: "1px solid rgba(35,140,131,0.08)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--color-secondary-text)",
                          marginBottom: "0.625rem",
                        }}
                      >
                        Jadwal Praktik Mingguan
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        {doc.schedule.map((sch) => (
                          <div
                            key={sch.day}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "0.825rem",
                            }}
                          >
                            <span style={{ fontWeight: 600, color: "var(--color-dark-text)" }}>
                              {sch.day}
                            </span>
                            <span
                              style={{
                                color: "var(--color-primary-teal)",
                                fontFamily: "var(--font-heading)",
                                fontWeight: 700,
                              }}
                            >
                              {sch.hours} WIB
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                      onClick={openBooking}
                    >
                      Buat Janji dengan {doc.name.split(" ")[0]} {doc.name.split(" ")[1]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Jadwal Matriks Interaktif Ringkas */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "2.5rem 2rem",
              boxShadow: "var(--shadow-card)",
            }}
            data-reveal
          >
            <div style={{ marginBottom: "1.75rem" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.375rem" }}>
                Tabel Rangkuman
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: "var(--color-dark-text)",
                }}
              >
                Jadwal Praktik Lengkap Seluruh Dokter
              </h3>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontSize: "0.875rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--color-sage-green)" }}>
                    <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-dark-text)" }}>Dokter</th>
                    <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-dark-text)" }}>Bidang Fokus</th>
                    <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-dark-text)" }}>Hari Praktik</th>
                    <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-dark-text)" }}>Jam Layanan</th>
                    <th style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-dark-text)", textAlign: "center" }}>Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  {DOCTORS.map((doc) => (
                    <tr
                      key={doc.id}
                      style={{
                        borderBottom: "1px solid rgba(35,140,131,0.08)",
                        transition: "background 0.2s ease",
                      }}
                    >
                      <td style={{ padding: "1rem", fontWeight: 700, color: "var(--color-dark-text)", fontFamily: "var(--font-heading)" }}>
                        {doc.name}
                      </td>
                      <td style={{ padding: "1rem", color: "var(--color-secondary-text)" }}>
                        {doc.expertise}
                      </td>
                      <td style={{ padding: "1rem" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                          {doc.days.map((d) => (
                            <span
                              key={d}
                              style={{
                                fontSize: "0.75rem",
                                padding: "0.15rem 0.5rem",
                                borderRadius: "50px",
                                background: "var(--color-sage-green)",
                                color: "var(--color-deep-teal)",
                                fontWeight: 600,
                              }}
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td style={{ padding: "1rem", color: "var(--color-dark-text)", fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                        {doc.schedule.map((s) => `${s.dayCode}: ${s.hours}`).join(" | ")}
                      </td>
                      <td style={{ padding: "1rem", textAlign: "center" }}>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={openBooking}
                          style={{ padding: "0.35rem 0.875rem", fontSize: "0.8rem", minHeight: "34px" }}
                        >
                          Pilih
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
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
            Konsultasikan Kesehatan Keluarga Anda Bersama Dokter Kami
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
            Pilih dokter dan waktu kunjungan yang sesuai dengan kenyamanan Anda tanpa antrian panjang.
          </p>
          <button className="btn btn-white btn-lg" onClick={openBooking}>
            Buat Janji Temu Sekarang
          </button>
        </div>
      </section>
    </>
  );
}
