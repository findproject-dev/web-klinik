"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { SERVICES, DOCTORS, CLINIC_INFO, buildWaUrl, getTimeSlots } from "@/lib/data";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface BookingData {
  service: string;
  serviceId: string;
  servicePrice: string;
  doctor: string;
  doctorId: string;
  date: string;
  time: string;
  name: string;
  whatsapp: string;
  dob: string;
  gender: string;
  complaint: string;
  notes: string;
}

const DAYS_ID: Record<number, string> = {
  0: "Minggu",
  1: "Senin",
  2: "Selasa",
  3: "Rabu",
  4: "Kamis",
  5: "Jumat",
  6: "Sabtu",
};

function getDateString(date: Date): string {
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDateForInput(date: Date): string {
  return date.toISOString().split("T")[0];
}

const today = new Date();
today.setHours(0, 0, 0, 0);
const todayStr = formatDateForInput(today);

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<BookingData>({
    service: "",
    serviceId: "",
    servicePrice: "",
    doctor: "",
    doctorId: "",
    date: "",
    time: "",
    name: "",
    whatsapp: "",
    dob: "",
    gender: "",
    complaint: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingData, string>>>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  const open = useCallback(() => {
    setIsOpen(true);
    setStep(1);
    setSubmitted(false);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setData({ service: "", serviceId: "", servicePrice: "", doctor: "", doctorId: "", date: "", time: "", name: "", whatsapp: "", dob: "", gender: "", complaint: "", notes: "" });
      setErrors({});
    }, 300);
  }, []);

  useEffect(() => {
    const handler = () => open();
    window.addEventListener("openBooking", handler);
    return () => window.removeEventListener("openBooking", handler);
  }, [open]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstFocusRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [close]);

  const availableDoctors = data.serviceId
    ? DOCTORS
    : DOCTORS;

  const selectedDoctor = DOCTORS.find((d) => d.id === data.doctorId);
  const selectedDayName = data.date ? DAYS_ID[new Date(data.date + "T00:00:00").getDay()] : "";
  const doctorAvailableToday = selectedDoctor
    ? selectedDoctor.days.includes(selectedDayName)
    : true;
  const timeSlots = data.date ? getTimeSlots(selectedDayName) : [];
  const filteredTimeSlots = selectedDoctor && data.date
    ? (() => {
        const sch = selectedDoctor.schedule.find((s) => s.day === selectedDayName);
        if (!sch) return [];
        const [startH] = sch.hours.split(" – ")[0].split(".");
        const [endH] = sch.hours.split(" – ")[1].split(".");
        return timeSlots.filter((t) => {
          const h = parseInt(t.split(".")[0]);
          return h >= parseInt(startH) && h < parseInt(endH);
        });
      })()
    : timeSlots;

  const validateStep = (): boolean => {
    const newErrors: Partial<Record<keyof BookingData, string>> = {};
    if (step === 1 && !data.serviceId) newErrors.service = "Pilih layanan terlebih dahulu.";
    if (step === 2 && !data.doctorId) newErrors.doctor = "Pilih dokter terlebih dahulu.";
    if (step === 3 && !data.date) newErrors.date = "Pilih tanggal kunjungan.";
    if (step === 4 && !data.time) newErrors.time = "Pilih jam kunjungan.";
    if (step === 5) {
      if (!data.name.trim()) newErrors.name = "Nama lengkap wajib diisi.";
      if (!data.whatsapp.trim()) newErrors.whatsapp = "Nomor WhatsApp wajib diisi.";
      else if (!/^(08|\+628|628)\d{8,13}$/.test(data.whatsapp.replace(/\s/g, "")))
        newErrors.whatsapp = "Format nomor WhatsApp tidak valid.";
      if (!data.dob) newErrors.dob = "Tanggal lahir wajib diisi.";
      if (!data.gender) newErrors.gender = "Jenis kelamin wajib dipilih.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(6, s + 1) as Step);
  };

  const prevStep = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1) as Step);
  };

  const handleSubmit = () => {
    if (!validateStep()) return;
    if (submitted) return;
    setSubmitted(true);

    const wa = data.whatsapp.replace(/\s/g, "").replace(/^0/, "62").replace(/^\+/, "");
    const dateDisplay = getDateString(new Date(data.date + "T00:00:00"));
    const msg = buildWaUrl(
      `Halo Klinik Sehatara, saya ingin membuat janji temu.%0A%0ANama: ${encodeURIComponent(data.name)}%0ANomor WhatsApp: ${encodeURIComponent(wa)}%0ALayanan: ${encodeURIComponent(data.service)}%0ADokter: ${encodeURIComponent(data.doctor)}%0ATanggal: ${encodeURIComponent(dateDisplay)}%0AJam: ${encodeURIComponent(data.time + " WIB")}%0A%0AKeluhan: ${encodeURIComponent(data.complaint || "—")}${data.notes ? "%0ACatatan: " + encodeURIComponent(data.notes) : ""}%0A%0AMohon konfirmasi ketersediaan jadwal. Terima kasih.`
    );

    window.open(msg, "_blank", "noopener,noreferrer");
    setStep(6 as Step);
  };

  const selectedService = SERVICES.find((s) => s.id === data.serviceId);

  if (!isOpen) return null;

  const STEP_LABELS = ["Layanan", "Dokter", "Tanggal", "Jam", "Data Diri", "Ringkasan"];

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div className="modal-box" ref={modalRef} style={{ padding: 0 }}>
        {/* Header */}
        <div style={{ padding: "1.5rem 1.75rem 1.25rem", borderBottom: "1px solid rgba(35,140,131,0.1)", position: "sticky", top: 0, background: "white", zIndex: 10, borderRadius: "var(--radius-xl) var(--radius-xl) 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <div>
              <span className="eyebrow">Booking Online</span>
              <h2 id="booking-title" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.25rem", color: "var(--color-dark-text)", marginTop: "0.25rem" }}>
                Buat Janji Temu
              </h2>
            </div>
            <button
              ref={firstFocusRef}
              onClick={close}
              style={{ background: "rgba(35,140,131,0.08)", border: "none", cursor: "pointer", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-secondary-text)", flexShrink: 0 }}
              aria-label="Tutup modal"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Step indicators */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {STEP_LABELS.map((label, i) => {
              const s = i + 1;
              const isCurrent = step === s;
              const isDone = step > s;
              return (
                <div key={s} style={{ display: "flex", alignItems: "center", flex: s < 6 ? "1" : "none" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", minWidth: "28px" }}>
                    <div
                      className={`step-dot ${isCurrent ? "active" : isDone ? "completed" : "pending"}`}
                    >
                      {isDone ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      ) : s}
                    </div>
                    <span className="step-label" style={{ fontSize: "0.625rem", fontWeight: 600, fontFamily: "var(--font-heading)", color: isCurrent ? "var(--color-primary-teal)" : "var(--color-secondary-text)", whiteSpace: "nowrap" }}>
                      {label}
                    </span>
                  </div>
                  {s < 6 && (
                    <div style={{ flex: 1, height: "2px", background: isDone ? "var(--color-primary-teal)" : "#e2eae8", borderRadius: "1px", margin: "0 0.25rem", marginTop: "-0.5rem" }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "1.75rem" }}>
          {/* STEP 1: Choose Service */}
          {step === 1 && (
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", color: "var(--color-dark-text)" }}>
                Pilih Layanan
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setData((d) => ({ ...d, serviceId: s.id, service: s.name, servicePrice: s.priceLabel, time: "", date: data.date })); setErrors({}); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.875rem",
                      padding: "0.875rem 1rem",
                      border: `1.5px solid ${data.serviceId === s.id ? "var(--color-primary-teal)" : "#e2eae8"}`,
                      borderRadius: "12px",
                      background: data.serviceId === s.id ? "rgba(35,140,131,0.05)" : "white",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                      width: "100%",
                    }}
                    aria-pressed={data.serviceId === s.id}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-dark-text)" }}>{s.name}</div>
                      <div style={{ fontSize: "0.8125rem", color: "var(--color-secondary-text)", marginTop: "0.125rem" }}>{s.shortDesc}</div>
                    </div>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", color: "var(--color-primary-teal)", flexShrink: 0 }}>{s.priceLabel}</span>
                    {data.serviceId === s.id && (
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--color-primary-teal)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {errors.service && <p className="form-error" style={{ marginTop: "0.75rem" }}>{errors.service}</p>}
            </div>
          )}

          {/* STEP 2: Choose Doctor */}
          {step === 2 && (
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", color: "var(--color-dark-text)" }}>
                Pilih Dokter
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {availableDoctors.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => { setData((prev) => ({ ...prev, doctorId: d.id, doctor: d.name, time: "" })); setErrors({}); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.875rem",
                      padding: "0.875rem 1rem",
                      border: `1.5px solid ${data.doctorId === d.id ? "var(--color-primary-teal)" : "#e2eae8"}`,
                      borderRadius: "12px",
                      background: data.doctorId === d.id ? "rgba(35,140,131,0.05)" : "white",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                      width: "100%",
                    }}
                    aria-pressed={data.doctorId === d.id}
                  >
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: d.photoColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.875rem", color: "var(--color-primary-teal)" }}>
                      {d.photoInitial}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-dark-text)" }}>{d.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-secondary-text)", marginTop: "0.125rem" }}>{d.expertise}</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginTop: "0.375rem" }}>
                        {d.days.map((day) => (
                          <span key={day} style={{ fontSize: "0.7rem", fontFamily: "var(--font-heading)", fontWeight: 600, padding: "0.15rem 0.5rem", background: "rgba(35,140,131,0.1)", color: "var(--color-primary-teal)", borderRadius: "50px" }}>{day}</span>
                        ))}
                      </div>
                    </div>
                    {data.doctorId === d.id && (
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--color-primary-teal)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {errors.doctor && <p className="form-error" style={{ marginTop: "0.75rem" }}>{errors.doctor}</p>}
            </div>
          )}

          {/* STEP 3: Choose Date */}
          {step === 3 && (
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", color: "var(--color-dark-text)" }}>
                Pilih Tanggal Kunjungan
              </h3>
              {selectedDoctor && (
                <div style={{ padding: "0.875rem 1rem", background: "rgba(35,140,131,0.05)", borderRadius: "10px", marginBottom: "1.25rem", fontSize: "0.875rem", color: "var(--color-secondary-text)" }}>
                  <strong style={{ color: "var(--color-dark-text)" }}>{selectedDoctor.name}</strong> praktik pada hari:{" "}
                  <strong style={{ color: "var(--color-primary-teal)" }}>{selectedDoctor.days.join(", ")}</strong>
                </div>
              )}
              <div>
                <label className="form-label" htmlFor="booking-date">Tanggal</label>
                <input
                  id="booking-date"
                  type="date"
                  className={`form-input ${errors.date ? "error" : ""}`}
                  min={todayStr}
                  value={data.date}
                  onChange={(e) => {
                    const val = e.target.value;
                    const dayName = val ? DAYS_ID[new Date(val + "T00:00:00").getDay()] : "";
                    const docOk = selectedDoctor ? selectedDoctor.days.includes(dayName) : true;
                    setData((d) => ({ ...d, date: val, time: "" }));
                    if (!docOk && val) {
                      setErrors({ date: `${selectedDoctor?.name} tidak praktik pada hari ${dayName}. Silakan pilih hari lain.` });
                    } else {
                      setErrors({});
                    }
                  }}
                />
                {errors.date && <p className="form-error">{errors.date}</p>}
              </div>
              {data.date && !errors.date && (
                <div style={{ marginTop: "1rem", padding: "0.875rem 1rem", background: "rgba(35,140,131,0.08)", borderRadius: "10px" }}>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-dark-text)", fontWeight: 600, fontFamily: "var(--font-heading)" }}>
                    {getDateString(new Date(data.date + "T00:00:00"))}
                  </p>
                  {selectedDoctor && (
                    <p style={{ fontSize: "0.825rem", color: "var(--color-secondary-text)", marginTop: "0.25rem" }}>
                      Jam praktik: {selectedDoctor.schedule.find((s) => s.day === selectedDayName)?.hours || "—"} WIB
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* STEP 4: Choose Time */}
          {step === 4 && (
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", color: "var(--color-dark-text)" }}>
                Pilih Jam Kunjungan
              </h3>
              {filteredTimeSlots.length === 0 ? (
                <div style={{ padding: "2rem", textAlign: "center", background: "rgba(35,140,131,0.04)", borderRadius: "12px" }}>
                  <p style={{ color: "var(--color-secondary-text)", fontSize: "0.9rem" }}>
                    Tidak ada slot waktu tersedia untuk tanggal ini. Silakan kembali dan pilih tanggal lain.
                  </p>
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }}>
                  {filteredTimeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => { setData((d) => ({ ...d, time: slot })); setErrors({}); }}
                      className={`time-slot ${data.time === slot ? "selected" : ""}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}
              {errors.time && <p className="form-error" style={{ marginTop: "0.75rem" }}>{errors.time}</p>}
            </div>
          )}

          {/* STEP 5: Patient Data */}
          {step === 5 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-dark-text)" }}>
                Data Diri Pasien
              </h3>

              <div>
                <label className="form-label" htmlFor="b-name">Nama Lengkap <span style={{ color: "#e53e3e" }}>*</span></label>
                <input id="b-name" type="text" className={`form-input ${errors.name ? "error" : ""}`} placeholder="Masukkan nama lengkap Anda" value={data.name} onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))} autoComplete="name" />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div>
                <label className="form-label" htmlFor="b-wa">Nomor WhatsApp <span style={{ color: "#e53e3e" }}>*</span></label>
                <input id="b-wa" type="tel" className={`form-input ${errors.whatsapp ? "error" : ""}`} placeholder="08xx-xxxx-xxxx" value={data.whatsapp} onChange={(e) => setData((d) => ({ ...d, whatsapp: e.target.value }))} autoComplete="tel" />
                {errors.whatsapp && <p className="form-error">{errors.whatsapp}</p>}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label className="form-label" htmlFor="b-dob">Tanggal Lahir <span style={{ color: "#e53e3e" }}>*</span></label>
                  <input id="b-dob" type="date" className={`form-input ${errors.dob ? "error" : ""}`} value={data.dob} onChange={(e) => setData((d) => ({ ...d, dob: e.target.value }))} autoComplete="bdate" />
                  {errors.dob && <p className="form-error">{errors.dob}</p>}
                </div>
                <div>
                  <label className="form-label" htmlFor="b-gender">Jenis Kelamin <span style={{ color: "#e53e3e" }}>*</span></label>
                  <select id="b-gender" className={`form-select ${errors.gender ? "error" : ""}`} value={data.gender} onChange={(e) => setData((d) => ({ ...d, gender: e.target.value }))}>
                    <option value="">Pilih</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  {errors.gender && <p className="form-error">{errors.gender}</p>}
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="b-complaint">Keluhan Singkat <span style={{ color: "var(--color-secondary-text)", fontWeight: 400 }}>(opsional)</span></label>
                <textarea id="b-complaint" className="form-input" placeholder="Deskripsikan keluhan Anda secara singkat..." value={data.complaint} onChange={(e) => setData((d) => ({ ...d, complaint: e.target.value }))} rows={3} />
              </div>

              <div>
                <label className="form-label" htmlFor="b-notes">Catatan Tambahan <span style={{ color: "var(--color-secondary-text)", fontWeight: 400 }}>(opsional)</span></label>
                <textarea id="b-notes" className="form-input" placeholder="Informasi tambahan yang perlu diketahui dokter atau admin..." value={data.notes} onChange={(e) => setData((d) => ({ ...d, notes: e.target.value }))} rows={2} />
              </div>
            </div>
          )}

          {/* STEP 6: Summary / Confirmation */}
          {step === 6 && (
            <div>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "1rem 0" }}>
                  <div style={{ width: "64px", height: "64px", background: "rgba(35,140,131,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-teal)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.25rem", color: "var(--color-dark-text)", marginBottom: "0.75rem" }}>
                    Permintaan Dikirim ke WhatsApp
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-secondary-text)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Pesan janji temu Anda telah diarahkan ke WhatsApp Klinik Sehatara. Silakan kirim pesan tersebut dan tunggu konfirmasi dari admin klinik.
                  </p>
                  <div style={{ padding: "1rem", background: "rgba(35,140,131,0.06)", borderRadius: "12px", marginBottom: "1.5rem", textAlign: "left" }}>
                    <p style={{ fontSize: "0.825rem", color: "var(--color-secondary-text)", marginBottom: "0.5rem", fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Ringkasan Janji Temu</p>
                    {[
                      ["Pasien", data.name],
                      ["Layanan", data.service],
                      ["Dokter", data.doctor],
                      ["Tanggal", data.date ? getDateString(new Date(data.date + "T00:00:00")) : ""],
                      ["Jam", data.time + " WIB"],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.375rem 0", borderBottom: "1px solid rgba(35,140,131,0.08)", fontSize: "0.875rem" }}>
                        <span style={{ color: "var(--color-secondary-text)" }}>{k}</span>
                        <span style={{ color: "var(--color-dark-text)", fontWeight: 600, fontFamily: "var(--font-heading)", textAlign: "right", maxWidth: "60%" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-primary" style={{ width: "100%" }} onClick={close}>
                    Selesai
                  </button>
                </div>
              ) : (
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-dark-text)", marginBottom: "1.25rem" }}>
                    Ringkasan Janji Temu
                  </h3>
                  <div style={{ background: "var(--color-sage-green)", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.25rem" }}>
                    {[
                      ["Nama Pasien", data.name],
                      ["Nomor WhatsApp", data.whatsapp],
                      ["Jenis Kelamin", data.gender],
                      ["Layanan", data.service],
                      ["Dokter", data.doctor],
                      ["Tanggal", data.date ? getDateString(new Date(data.date + "T00:00:00")) : ""],
                      ["Jam", data.time + " WIB"],
                      ["Estimasi Biaya", data.servicePrice],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid rgba(23,107,104,0.1)", fontSize: "0.9rem" }}>
                        <span style={{ color: "var(--color-secondary-text)", flexShrink: 0 }}>{k}</span>
                        <span style={{ color: "var(--color-dark-text)", fontWeight: 600, fontFamily: "var(--font-heading)", textAlign: "right", paddingLeft: "1rem" }}>{v}</span>
                      </div>
                    ))}
                    {data.complaint && (
                      <div style={{ padding: "0.5rem 0", fontSize: "0.9rem" }}>
                        <span style={{ color: "var(--color-secondary-text)", display: "block", marginBottom: "0.25rem" }}>Keluhan</span>
                        <span style={{ color: "var(--color-dark-text)", fontWeight: 600, fontFamily: "var(--font-heading)" }}>{data.complaint}</span>
                      </div>
                    )}
                  </div>
                  <p style={{ fontSize: "0.825rem", color: "var(--color-secondary-text)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                    Dengan menekan tombol di bawah, Anda akan diarahkan ke WhatsApp untuk mengirimkan permintaan janji temu ini kepada admin klinik. Janji temu dikonfirmasi setelah admin merespons pesan Anda.
                  </p>
                  <div style={{ padding: "0.875rem 1rem", background: "rgba(235,167,111,0.12)", borderRadius: "10px", border: "1px solid rgba(235,167,111,0.3)", marginBottom: "1.25rem", fontSize: "0.825rem", color: "#8b6020" }}>
                    <strong>Catatan:</strong> Biaya konsultasi dan pemeriksaan belum termasuk obat maupun tindakan tambahan apabila diperlukan. Biaya akhir akan disesuaikan dengan kebutuhan pelayanan.
                  </div>
                  <button className="btn btn-primary" style={{ width: "100%", display: "flex", gap: "0.5rem" }} onClick={handleSubmit}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Kirim via WhatsApp
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer nav buttons */}
        {step < 6 && (
          <div style={{ padding: "1rem 1.75rem 1.75rem", display: "flex", gap: "0.75rem", justifyContent: "space-between", borderTop: "1px solid rgba(35,140,131,0.08)" }}>
            {step > 1 ? (
              <button className="btn btn-secondary" onClick={prevStep} style={{ flex: 1 }}>
                ← Kembali
              </button>
            ) : (
              <button className="btn btn-secondary" onClick={close} style={{ flex: 1 }}>
                Batal
              </button>
            )}
            <button
              className="btn btn-primary"
              onClick={step === 5 ? () => { if (validateStep()) setStep(6); } : nextStep}
              style={{ flex: 1 }}
            >
              {step === 5 ? "Lanjut ke Ringkasan" : "Lanjut →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
