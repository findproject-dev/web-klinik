// =========================================
// KLINIK SEHATARA — Single Source of Truth
// =========================================

export const CLINIC_INFO = {
  name: "Klinik Sehatara",
  tagline: "Kesehatan Keluarga, Prioritas Kami.",
  type: "Klinik Pratama",
  founded: 2020,
  location: "Bandung, Jawa Barat",
  address: "Jl. Sukajadi No. 112, Kelurahan Sukajadi, Kecamatan Sukajadi, Kota Bandung, Jawa Barat 40163",
  addressShort: "Jl. Sukajadi No. 112, Sukajadi, Bandung",
  phone: "022-8765-4321",
  whatsapp: "628112345678",
  email: "sehatara.klinik@gmail.com",
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4!2d107.5867!3d-6.9034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMTIuMiJTIDEwN8KwMzUnMTIuMiJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=-6.9034,107.5867",
    lat: -6.9034,
    lng: 107.5867,
  },
  operationalHours: [
    { day: "Senin – Jumat", hours: "07.30 – 20.00 WIB" },
    { day: "Sabtu", hours: "07.30 – 17.00 WIB" },
    { day: "Minggu & Hari Libur", hours: "08.00 – 14.00 WIB" },
  ],
  legal: {
    jenisUsaha: "Klinik Pratama",
    pengelola: "PT Sehatara Medika Nusantara",
    nib: "1234567890123",
    sertifikatStandar: "SS-14000-00001-2020",
    statusAkreditasi: "Proses Akreditasi",
  },
};

export const WA_MESSAGES = {
  booking: (data: {
    name: string;
    whatsapp: string;
    service: string;
    doctor: string;
    date: string;
    time: string;
    complaint: string;
  }) =>
    `Halo Klinik Sehatara, saya ingin membuat janji temu.%0A%0ANama: ${encodeURIComponent(data.name)}%0ANomor WhatsApp: ${encodeURIComponent(data.whatsapp)}%0ALayanan: ${encodeURIComponent(data.service)}%0ADokter: ${encodeURIComponent(data.doctor)}%0ATanggal: ${encodeURIComponent(data.date)}%0AJam: ${encodeURIComponent(data.time)}%0A%0AKeluhan: ${encodeURIComponent(data.complaint || "—")}%0A%0AMohon konfirmasi ketersediaan jadwal. Terima kasih.`,

  general: encodeURIComponent("Halo Klinik Sehatara, saya ingin bertanya mengenai layanan yang tersedia. Terima kasih."),
  price: encodeURIComponent("Halo Klinik Sehatara, saya ingin menanyakan informasi biaya layanan. Terima kasih."),
  guide: encodeURIComponent("Halo Klinik Sehatara, saya ingin meminta panduan persiapan pemeriksaan kesehatan. Terima kasih."),
  location: encodeURIComponent("Halo Klinik Sehatara, saya ingin mengetahui lokasi dan petunjuk arah ke klinik. Terima kasih."),
};

export const buildWaUrl = (message: string) =>
  `https://wa.me/${CLINIC_INFO.whatsapp}?text=${message}`;

// =========================================
// DOCTORS
// =========================================

export const DOCTORS = [
  {
    id: "dr-arifin",
    name: "dr. Muhammad Arifin",
    title: "dr.",
    specialization: "Dokter Umum",
    expertise: "Kesehatan Keluarga & Penyakit Dalam Dasar",
    bio: "dr. Arifin memiliki pengalaman lebih dari 8 tahun dalam pelayanan kesehatan primer. Berdedikasi tinggi dalam memberikan pelayanan yang holistik dan berorientasi pada kesehatan keluarga.",
    schedule: [
      { day: "Senin", dayCode: "Sen", hours: "08.00 – 14.00", status: "available" },
      { day: "Rabu", dayCode: "Rab", hours: "08.00 – 14.00", status: "available" },
      { day: "Jumat", dayCode: "Jum", hours: "08.00 – 14.00", status: "available" },
    ],
    days: ["Senin", "Rabu", "Jumat"],
    photoColor: "#DCEBE3",
    photoInitial: "MA",
    image: "/images/doctors/dr-muhammad-arifin.webp",
    featured: true,
    available: true,
  },
  {
    id: "dr-rina",
    name: "dr. Rina Kusumawati",
    title: "dr.",
    specialization: "Dokter Umum",
    expertise: "Kesehatan Ibu & Anak",
    bio: "dr. Rina memiliki keahlian khusus dalam perawatan kesehatan ibu, bayi, dan anak. Beliau dikenal dengan pendekatan yang sabar, hangat, dan komunikatif kepada seluruh pasien.",
    schedule: [
      { day: "Selasa", dayCode: "Sel", hours: "14.00 – 20.00", status: "available" },
      { day: "Kamis", dayCode: "Kam", hours: "14.00 – 20.00", status: "available" },
      { day: "Sabtu", dayCode: "Sab", hours: "08.00 – 14.00", status: "available" },
    ],
    days: ["Selasa", "Kamis", "Sabtu"],
    photoColor: "#E8F4F0",
    photoInitial: "RK",
    image: "/images/doctors/dr-rina-kusumawati.webp",
    featured: true,
    available: true,
  },
  {
    id: "dr-budi",
    name: "dr. Budi Santoso",
    title: "dr.",
    specialization: "Dokter Umum",
    expertise: "Kesehatan Lansia & Penyakit Kronis",
    bio: "dr. Budi berpengalaman dalam menangani pasien lansia dan penyakit-penyakit kronik seperti hipertensi, diabetes, dan kondisi metabolik. Pendekatan beliau sangat teliti dan berbasis bukti.",
    schedule: [
      { day: "Senin", dayCode: "Sen", hours: "14.00 – 20.00", status: "available" },
      { day: "Rabu", dayCode: "Rab", hours: "14.00 – 20.00", status: "available" },
      { day: "Sabtu", dayCode: "Sab", hours: "08.00 – 17.00", status: "available" },
    ],
    days: ["Senin", "Rabu", "Sabtu"],
    photoColor: "#EDF5F4",
    photoInitial: "BS",
    image: "/images/doctors/dr-budi-santoso.webp",
    featured: true,
    available: true,
  },
  {
    id: "dr-sinta",
    name: "dr. Sinta Dwijayanti",
    title: "dr.",
    specialization: "Dokter Umum",
    expertise: "Pemeriksaan Umum & Vaksinasi",
    bio: "dr. Sinta berfokus pada pelayanan pemeriksaan kesehatan umum, vaksinasi, dan penanganan kondisi akut. Beliau aktif mengikuti pengembangan kompetensi untuk memastikan standar pelayanan terkini.",
    schedule: [
      { day: "Selasa", dayCode: "Sel", hours: "08.00 – 14.00", status: "available" },
      { day: "Kamis", dayCode: "Kam", hours: "08.00 – 14.00", status: "available" },
      { day: "Minggu", dayCode: "Min", hours: "08.00 – 14.00", status: "available" },
    ],
    days: ["Selasa", "Kamis", "Minggu"],
    photoColor: "#F2EDE8",
    photoInitial: "SD",
    image: "/images/doctors/dr-sinta-dwijayanti.webp",
    featured: false,
    available: true,
  },
  {
    id: "dr-farhan",
    name: "dr. Farhan Nugroho",
    title: "dr.",
    specialization: "Dokter Umum",
    expertise: "Kesehatan Remaja & Dewasa Muda",
    bio: "dr. Farhan berdedikasi dalam pelayanan kesehatan remaja dan dewasa muda, termasuk edukasi kesehatan preventif, penanganan penyakit infeksi, dan perawatan luka.",
    schedule: [
      { day: "Senin", dayCode: "Sen", hours: "08.00 – 14.00", status: "available" },
      { day: "Jumat", dayCode: "Jum", hours: "14.00 – 20.00", status: "available" },
      { day: "Sabtu", dayCode: "Sab", hours: "08.00 – 14.00", status: "available" },
    ],
    days: ["Senin", "Jumat", "Sabtu"],
    photoColor: "#EAF0EE",
    photoInitial: "FN",
    image: "/images/doctors/dr-farhan-nugroho.webp",
    featured: false,
    available: true,
  },
];

// =========================================
// SERVICES
// =========================================

export const SERVICES = [
  {
    id: "konsultasi-umum",
    name: "Konsultasi Dokter Umum",
    shortDesc: "Konsultasi keluhan kesehatan dengan dokter umum berpengalaman.",
    icon: "stethoscope",
    price: 60000,
    priceLabel: "Rp 60.000",
    category: "Konsultasi",
    image: "/images/services/service-adult-checkup.webp",
    description:
      "Layanan konsultasi kesehatan oleh dokter umum untuk berbagai keluhan penyakit, penanganan kondisi akut, serta pemberian resep obat sesuai kebutuhan.",
    purpose: "Mendiagnosis dan menangani keluhan kesehatan umum yang dialami pasien.",
    indications: ["Demam", "Flu dan batuk", "Keluhan saluran cerna", "Sakit kepala", "Infeksi ringan", "Keluhan umum lainnya"],
    procedure: ["Pendaftaran dan pengisian data pasien", "Anamnesis oleh dokter", "Pemeriksaan fisik", "Diagnosis dan tatalaksana", "Pemberian resep jika diperlukan"],
    preparation: "Tidak diperlukan persiapan khusus. Pasien dapat langsung datang ke klinik.",
    duration: "15 – 30 menit",
    notes: "Belum termasuk biaya obat.",
    featured: true,
  },
  {
    id: "pemeriksaan-tekanan-darah",
    name: "Pemeriksaan Tekanan Darah",
    shortDesc: "Pemeriksaan dan monitoring tekanan darah dengan alat digital terstandar.",
    icon: "heart",
    price: 25000,
    priceLabel: "Rp 25.000",
    category: "Pemeriksaan",
    image: "/images/services/service-blood-pressure.webp",
    description:
      "Pemeriksaan tekanan darah menggunakan tensimeter digital yang terstandar, dilakukan oleh tenaga kesehatan terlatih.",
    purpose: "Mengetahui nilai tekanan darah dan risiko hipertensi atau hipotensi.",
    indications: ["Riwayat hipertensi", "Pusing atau sakit kepala", "Pemeriksaan rutin kesehatan", "Persiapan surat keterangan sehat"],
    procedure: ["Pasien duduk dengan nyaman", "Manset dipasang di lengan atas", "Pengukuran dilakukan oleh tenaga kesehatan", "Hasil dicatat dan dikonsultasikan"],
    preparation: "Istirahat 5–10 menit sebelum pemeriksaan. Hindari kopi dan rokok 30 menit sebelumnya.",
    duration: "5 – 10 menit",
    notes: "Jika diperlukan konsultasi lebih lanjut, akan diarahkan ke dokter.",
    featured: true,
  },
  {
    id: "pemeriksaan-gula-darah",
    name: "Pemeriksaan Gula Darah",
    shortDesc: "Pemeriksaan kadar gula darah menggunakan glukometer standar medis.",
    icon: "droplet",
    price: 45000,
    priceLabel: "Rp 45.000",
    category: "Pemeriksaan",
    image: "/images/services/service-blood-glucose.webp",
    description:
      "Pemeriksaan kadar gula darah sewaktu atau puasa menggunakan alat glukometer yang telah terkalibrasi.",
    purpose: "Mendeteksi risiko diabetes mellitus dan memantau kadar gula darah.",
    indications: ["Riwayat diabetes", "Polidipsia dan poliuria", "Kelelahan berlebih", "Pemeriksaan rutin"],
    procedure: ["Pengambilan sampel darah kapiler dari ujung jari", "Analisis menggunakan glukometer", "Hasil dibacakan dan didokumentasikan"],
    preparation: "Untuk gula darah puasa: puasa 8–10 jam sebelumnya. Untuk gula darah sewaktu: tidak diperlukan puasa.",
    duration: "10 – 15 menit",
    notes: "Tersedia pemeriksaan gula darah sewaktu dan gula darah puasa.",
    featured: true,
  },
  {
    id: "pemeriksaan-kolesterol",
    name: "Pemeriksaan Kolesterol",
    shortDesc: "Pemeriksaan kadar kolesterol darah untuk menilai risiko kardiovaskular.",
    icon: "activity",
    price: 55000,
    priceLabel: "Rp 55.000",
    category: "Pemeriksaan",
    image: "/images/services/service-blood-glucose.webp",
    description:
      "Pemeriksaan kadar kolesterol total dalam darah untuk menilai risiko penyakit jantung dan pembuluh darah.",
    purpose: "Mengetahui kadar kolesterol dan risiko kardiovaskular pasien.",
    indications: ["Riwayat kolesterol tinggi", "Riwayat keluarga penyakit jantung", "Pola makan tinggi lemak", "Pemeriksaan kesehatan rutin"],
    procedure: ["Pengambilan sampel darah kapiler", "Analisis menggunakan alat point-of-care", "Konsultasi hasil dengan tenaga kesehatan"],
    preparation: "Puasa 10–12 jam sebelum pemeriksaan kolesterol total.",
    duration: "10 – 15 menit",
    notes: "Tersedia pemeriksaan kolesterol total. Pemeriksaan profil lipid lengkap memerlukan waktu lebih lama.",
    featured: false,
  },
  {
    id: "vaksinasi",
    name: "Vaksinasi",
    shortDesc: "Layanan imunisasi dewasa dan anak sesuai jadwal dan kebutuhan.",
    icon: "shield",
    price: 150000,
    priceLabel: "Mulai Rp 150.000",
    category: "Tindakan",
    image: "/images/services/service-vaccination.webp",
    description:
      "Layanan vaksinasi untuk dewasa dan anak, termasuk vaksin influenza, hepatitis, tetanus, dan vaksin lain sesuai indikasi medis dan anjuran dokter.",
    purpose: "Memberikan perlindungan imunologi terhadap penyakit infeksi tertentu.",
    indications: ["Vaksinasi rutin anak", "Vaksinasi dewasa", "Persiapan perjalanan", "Rekomendasi dokter"],
    procedure: ["Konsultasi dan skrining oleh dokter", "Pemberian vaksin secara intramuskular atau subkutan", "Observasi 15–30 menit pascavaksinasi"],
    preparation: "Pastikan kondisi tubuh sehat. Informasikan kepada dokter mengenai riwayat alergi dan vaksin sebelumnya.",
    duration: "30 – 45 menit (termasuk observasi)",
    notes: "Harga bervariasi tergantung jenis vaksin. Tersedia untuk dewasa dan anak.",
    featured: true,
  },
  {
    id: "pemeriksaan-anak",
    name: "Pemeriksaan Kesehatan Anak",
    shortDesc: "Pemeriksaan tumbuh kembang dan kesehatan anak oleh dokter umum.",
    icon: "baby",
    price: 65000,
    priceLabel: "Rp 65.000",
    category: "Konsultasi",
    image: "/images/services/service-child-checkup.webp",
    description:
      "Pemeriksaan kesehatan menyeluruh pada bayi dan anak, meliputi evaluasi tumbuh kembang, pemeriksaan fisik, dan konsultasi nutrisi.",
    purpose: "Memantau tumbuh kembang anak dan mendeteksi dini kelainan kesehatan.",
    indications: ["Pemeriksaan rutin bayi dan balita", "Keluhan pada anak", "Evaluasi pertumbuhan", "Pemeriksaan pra-sekolah"],
    procedure: ["Pengukuran berat badan dan tinggi badan", "Pemeriksaan fisik menyeluruh", "Penilaian perkembangan", "Konsultasi orang tua"],
    preparation: "Bawa buku kesehatan anak (KIA) untuk memudahkan pencatatan.",
    duration: "20 – 40 menit",
    notes: "Belum termasuk biaya vaksinasi jika diperlukan.",
    featured: true,
  },
  {
    id: "surat-keterangan-sehat",
    name: "Surat Keterangan Sehat",
    shortDesc: "Penerbitan surat keterangan sehat untuk berbagai keperluan resmi.",
    icon: "file-text",
    price: 50000,
    priceLabel: "Rp 50.000",
    category: "Administrasi",
    image: "/images/general/general-health-checkup.webp",
    description:
      "Penerbitan surat keterangan sehat setelah pemeriksaan fisik oleh dokter, untuk keperluan pekerjaan, pendidikan, atau administrasi lainnya.",
    purpose: "Membuktikan kondisi kesehatan pasien untuk keperluan resmi.",
    indications: ["Keperluan melamar kerja", "Pendaftaran sekolah/kuliah", "Administrasi instansi", "Keperluan perjalanan"],
    procedure: ["Pemeriksaan fisik oleh dokter", "Pengisian formulir keterangan", "Penerbitan dan penandatanganan surat"],
    preparation: "Tidak diperlukan persiapan khusus.",
    duration: "15 – 25 menit",
    notes: "Sudah termasuk biaya pemeriksaan fisik dasar.",
    featured: false,
  },
  {
    id: "perawatan-luka",
    name: "Perawatan Luka",
    shortDesc: "Pembersihan, perawatan, dan pembalutan luka oleh tenaga medis terlatih.",
    icon: "bandage",
    price: 75000,
    priceLabel: "Mulai Rp 75.000",
    category: "Tindakan",
    image: "/images/facilities/facility-procedure-room.webp",
    description:
      "Layanan perawatan luka akut maupun kronis, meliputi debridemen, pembersihan luka, dan pembalutan steril sesuai standar prosedur medis.",
    purpose: "Mencegah infeksi dan mempercepat proses penyembuhan luka.",
    indications: ["Luka lecet atau abrasi", "Luka sayat ringan", "Luka bakar derajat satu", "Perawatan luka pasca tindakan"],
    procedure: ["Evaluasi kondisi luka oleh dokter", "Pembersihan dan debridemen luka", "Aplikasi antiseptik dan balutan steril", "Pemberian instruksi perawatan lanjutan"],
    preparation: "Jika memungkinkan, tutup luka dengan kain bersih saat menuju klinik.",
    duration: "20 – 45 menit",
    notes: "Harga bervariasi tergantung ukuran dan kompleksitas luka.",
    featured: false,
  },
  {
    id: "pemeriksaan-kesehatan",
    name: "Pemeriksaan Kesehatan Umum",
    shortDesc: "Pemeriksaan fisik menyeluruh untuk menilai kondisi kesehatan secara komprehensif.",
    icon: "clipboard",
    price: 85000,
    priceLabel: "Rp 85.000",
    category: "Pemeriksaan",
    image: "/images/general/general-health-checkup.webp",
    description:
      "Pemeriksaan fisik komprehensif oleh dokter untuk menilai status kesehatan secara menyeluruh, cocok untuk medical check-up dasar.",
    purpose: "Menilai kondisi kesehatan umum dan mendeteksi dini kelainan.",
    indications: ["Medical check-up rutin", "Persiapan kerja atau sekolah", "Pemeriksaan sebelum operasi kecil", "Evaluasi kesehatan berkala"],
    procedure: ["Anamnesis lengkap", "Pemeriksaan tanda-tanda vital", "Pemeriksaan fisik head-to-toe", "Konsultasi dan rekomendasi"],
    preparation: "Gunakan pakaian yang nyaman dan mudah dibuka. Istirahat cukup sebelumnya.",
    duration: "30 – 45 menit",
    notes: "Belum termasuk pemeriksaan laboratorium tambahan jika diperlukan.",
    featured: false,
  },
  {
    id: "konsultasi-keluarga",
    name: "Konsultasi Kesehatan Keluarga",
    shortDesc: "Layanan konsultasi kesehatan berorientasi keluarga dan pencegahan penyakit.",
    icon: "users",
    price: 70000,
    priceLabel: "Rp 70.000",
    category: "Konsultasi",
    image: "/images/services/service-family-consultation.webp",
    description:
      "Konsultasi komprehensif yang berfokus pada kesehatan keluarga secara keseluruhan, termasuk identifikasi faktor risiko dan edukasi kesehatan preventif.",
    purpose: "Memberikan panduan kesehatan keluarga yang komprehensif dan preventif.",
    indications: ["Keluarga dengan riwayat penyakit turunan", "Perencanaan kesehatan keluarga", "Konsultasi gaya hidup sehat", "Edukasi nutrisi keluarga"],
    procedure: ["Diskusi riwayat kesehatan keluarga", "Identifikasi faktor risiko", "Pemeriksaan anggota keluarga", "Pemberian rekomendasi dan edukasi"],
    preparation: "Jika memungkinkan, datang bersama anggota keluarga lain untuk konsultasi yang lebih komprehensif.",
    duration: "30 – 50 menit",
    notes: "Belum termasuk tindakan medis tambahan jika diperlukan.",
    featured: false,
  },
];

// =========================================
// PRICE LIST
// =========================================

export const PRICE_LIST = {
  administrasi: [
    { item: "Pendaftaran Pasien Baru", price: "Rp 15.000" },
  ],
  konsultasi: [
    { item: "Konsultasi Dokter Umum", price: "Rp 60.000" },
    { item: "Konsultasi Kesehatan Keluarga", price: "Rp 70.000" },
    { item: "Konsultasi Kesehatan Anak", price: "Rp 65.000" },
  ],
  pemeriksaan: [
    { item: "Pemeriksaan Tekanan Darah", price: "Rp 25.000" },
    { item: "Pemeriksaan Gula Darah Sewaktu", price: "Rp 45.000" },
    { item: "Pemeriksaan Gula Darah Puasa", price: "Rp 45.000" },
    { item: "Pemeriksaan Kolesterol Total", price: "Rp 55.000" },
    { item: "Pemeriksaan Kesehatan Umum", price: "Rp 85.000" },
  ],
  tindakan: [
    { item: "Perawatan Luka (kecil)", price: "Rp 75.000" },
    { item: "Perawatan Luka (sedang)", price: "Rp 125.000" },
    { item: "Vaksinasi (belum termasuk harga vaksin)", price: "Rp 50.000" },
    { item: "Surat Keterangan Sehat", price: "Rp 50.000" },
  ],
};

// =========================================
// FACILITIES
// =========================================

export const FACILITIES = [
  {
    id: "ruang-tunggu",
    name: "Ruang Tunggu",
    description:
      "Ruang tunggu yang nyaman, bersih, dan ber-AC dengan tempat duduk yang memadai. Dilengkapi dengan area terpisah untuk anak-anak.",
    icon: "armchair",
    color: "#DCEBE3",
    image: "/images/facilities/facility-waiting-room.webp",
  },
  {
    id: "ruang-konsultasi",
    name: "Ruang Konsultasi Dokter",
    description:
      "Ruang konsultasi yang nyaman dan menjamin privasi pasien, dilengkapi dengan peralatan pemeriksaan dasar yang lengkap.",
    icon: "stethoscope",
    color: "#E8F4F0",
    image: "/images/facilities/facility-consultation-room.webp",
  },
  {
    id: "ruang-pemeriksaan",
    name: "Ruang Pemeriksaan",
    description:
      "Ruang pemeriksaan yang steril dan terstandar, dilengkapi dengan tempat tidur pemeriksaan dan peralatan diagnostik.",
    icon: "search",
    color: "#EDF5F4",
    image: "/images/facilities/facility-examination-room.webp",
  },
  {
    id: "ruang-tindakan",
    name: "Ruang Tindakan Medis",
    description:
      "Ruang tindakan medis yang bersih dan steril untuk perawatan luka, injeksi, dan prosedur medis ringan lainnya.",
    icon: "plus-square",
    color: "#F2EDE8",
    image: "/images/facilities/facility-procedure-room.webp",
  },
  {
    id: "pemeriksaan-penunjang",
    name: "Area Pemeriksaan Penunjang",
    description:
      "Fasilitas pemeriksaan penunjang sederhana termasuk pemeriksaan kadar gula darah, kolesterol, dan tekanan darah.",
    icon: "bar-chart",
    color: "#EAF0EE",
    image: "/images/facilities/facility-laboratory-area.webp",
  },
  {
    id: "ruang-imunisasi",
    name: "Ruang Imunisasi",
    description:
      "Ruang imunisasi khusus yang bersih dan nyaman untuk memberikan layanan vaksinasi kepada anak maupun dewasa.",
    icon: "shield",
    color: "#F0EDF5",
    image: "/images/facilities/facility-immunization-room.webp",
  },
  {
    id: "apotek",
    name: "Area Kefarmasian",
    description:
      "Area pelayanan kefarmasian yang memiliki stok obat-obatan esensial untuk mendukung pelayanan medis di klinik.",
    icon: "package",
    color: "#F5F0ED",
    image: "/images/facilities/facility-pharmacy.webp",
  },
  {
    id: "parkir",
    name: "Area Parkir",
    description:
      "Tersedia area parkir yang cukup untuk kendaraan roda dua dan roda empat di lingkungan klinik.",
    icon: "car",
    color: "#EEF0ED",
    image: "/images/facilities/facility-parking.webp",
  },
  {
    id: "toilet",
    name: "Toilet",
    description:
      "Fasilitas toilet yang bersih dan terawat, tersedia untuk pasien dan pengunjung.",
    icon: "droplets",
    color: "#EDF2F5",
    image: "/images/facilities/facility-restroom.webp",
  },
  {
    id: "aksesibilitas",
    name: "Aksesibilitas Pasien",
    description:
      "Klinik dilengkapi dengan fasilitas akses yang memudahkan pasien dengan kebutuhan khusus, termasuk jalan masuk yang ramah kursi roda.",
    icon: "accessibility",
    color: "#F5EDF2",
    image: "/images/facilities/facility-accessibility-ramp.webp",
  },
];

// =========================================
// TRUST INDICATORS
// =========================================

export const TRUST_ITEMS = [
  { label: "Berdiri Sejak", value: "2020", icon: "calendar" },
  { label: "Lokasi Pelayanan", value: "1 Klinik", icon: "map-pin" },
  { label: "Tenaga Medis", value: "Profesional", icon: "user-check" },
  { label: "Layanan", value: "Kesehatan Keluarga", icon: "heart" },
];

// =========================================
// WHY CHOOSE US
// =========================================

export const WHY_ITEMS = [
  {
    title: "Pelayanan Berorientasi Keluarga",
    description:
      "Kami melayani seluruh anggota keluarga dari segala usia, dari bayi hingga lansia, dalam satu fasilitas yang nyaman dan ramah.",
    icon: "users",
    color: "#DCEBE3",
  },
  {
    title: "Tenaga Medis Profesional",
    description:
      "Didukung oleh dokter umum berpengalaman yang berkomitmen memberikan pelayanan berkualitas dengan pendekatan yang hangat dan personal.",
    icon: "award",
    color: "#E8F4F0",
  },
  {
    title: "Biaya Pelayanan Transparan",
    description:
      "Kami menyediakan informasi biaya yang jelas sebelum pemeriksaan dimulai. Tidak ada biaya tersembunyi.",
    icon: "receipt",
    color: "#F2EDE8",
  },
  {
    title: "Pendaftaran Praktis",
    description:
      "Buat janji temu langsung melalui WhatsApp atau formulir website kami. Tanpa antrian panjang, pelayanan lebih teratur.",
    icon: "calendar-check",
    color: "#EDF5F4",
  },
];

// =========================================
// VALUES
// =========================================

export const VALUES = [
  {
    title: "Profesionalisme",
    description: "Kami menjunjung standar pelayanan medis tertinggi dalam setiap aspek layanan kami.",
    icon: "shield-check",
  },
  {
    title: "Kepercayaan",
    description: "Hubungan dokter-pasien yang dibangun atas dasar kejujuran, transparansi, dan integritas.",
    icon: "handshake",
  },
  {
    title: "Kepedulian",
    description: "Setiap pasien diperlakukan dengan penuh perhatian dan empati sebagai bagian dari keluarga.",
    icon: "heart",
  },
  {
    title: "Keterjangkauan",
    description: "Menyediakan layanan kesehatan berkualitas dengan biaya yang wajar dan terjangkau.",
    icon: "coins",
  },
];

// =========================================
// BOOKING TIME SLOTS
// =========================================

export const getTimeSlots = (day: string) => {
  const morningSlots = ["07.30", "08.00", "08.30", "09.00", "09.30", "10.00", "10.30", "11.00", "11.30", "12.00", "12.30", "13.00", "13.30"];
  const afternoonSlots = ["14.00", "14.30", "15.00", "15.30", "16.00", "16.30", "17.00", "17.30", "18.00", "18.30", "19.00", "19.30"];

  if (day === "Minggu") {
    return ["08.00", "08.30", "09.00", "09.30", "10.00", "10.30", "11.00", "11.30", "12.00", "12.30", "13.00", "13.30"];
  }
  if (day === "Sabtu") {
    return [...morningSlots.slice(0, 11), "14.00", "14.30", "15.00", "15.30", "16.00", "16.30"];
  }
  return [...morningSlots, ...afternoonSlots];
};

// =========================================
// HISTORY TIMELINE
// =========================================

export const HISTORY = [
  {
    year: "2020",
    title: "Pendirian Klinik Sehatara",
    description:
      "Klinik Sehatara resmi berdiri di kawasan Sukajadi, Bandung, dengan misi menyediakan layanan kesehatan primer yang terjangkau dan berkualitas bagi masyarakat Bandung.",
  },
  {
    year: "2021",
    title: "Pengembangan Layanan",
    description:
      "Klinik menambah layanan pemeriksaan penunjang sederhana dan memperkuat tim medis dengan penambahan dokter umum untuk memperluas jam pelayanan.",
  },
  {
    year: "2022",
    title: "Peningkatan Fasilitas",
    description:
      "Dilakukan renovasi dan peningkatan fasilitas klinik, termasuk penambahan ruang tindakan medis dan ruang imunisasi untuk meningkatkan kenyamanan pasien.",
  },
  {
    year: "2023",
    title: "Layanan Digital",
    description:
      "Klinik memperkenalkan sistem pendaftaran online melalui WhatsApp untuk memudahkan pasien dalam membuat janji temu tanpa harus mengantri langsung.",
  },
  {
    year: "2024",
    title: "Peningkatan Kapasitas",
    description:
      "Peningkatan kapasitas layanan dan penambahan tenaga medis baru untuk memenuhi kebutuhan layanan kesehatan masyarakat yang terus berkembang.",
  },
];
