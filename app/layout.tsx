import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BookingModal from "@/components/BookingModal";
import ToastProvider from "@/components/ToastProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#176B68",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kliniksehatara.com"),
  title: {
    default: "Klinik Sehatara — Kesehatan Keluarga, Prioritas Kami",
    template: "%s | Klinik Sehatara",
  },
  description:
    "Klinik Pratama Sehatara melayani kesehatan keluarga Anda di Bandung. Konsultasi dokter umum, pemeriksaan kesehatan, vaksinasi, dan layanan kesehatan keluarga terpercaya.",
  keywords: [
    "klinik bandung",
    "klinik pratama bandung",
    "dokter umum bandung",
    "konsultasi kesehatan bandung",
    "klinik sukajadi bandung",
    "klinik keluarga bandung",
    "pemeriksaan kesehatan bandung",
    "vaksinasi bandung",
    "klinik sehatara",
  ],
  authors: [{ name: "Klinik Sehatara" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Klinik Sehatara",
    title: "Klinik Sehatara — Kesehatan Keluarga, Prioritas Kami",
    description:
      "Klinik Pratama Sehatara melayani kesehatan keluarga Anda di Bandung. Konsultasi dokter umum, pemeriksaan kesehatan, vaksinasi, dan layanan kesehatan keluarga terpercaya.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Sehatara — Kesehatan Keluarga, Prioritas Kami",
    description:
      "Klinik Pratama Sehatara melayani kesehatan keluarga Anda di Bandung.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Klinik Sehatara",
              description: "Klinik Pratama kesehatan keluarga di Bandung, Jawa Barat",
              url: "https://kliniksehatara.com",
              telephone: "+62-22-8765-4321",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Sukajadi No. 112",
                addressLocality: "Bandung",
                addressRegion: "Jawa Barat",
                postalCode: "40163",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.9034,
                longitude: 107.5867,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:30",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "07:30",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "08:00",
                  closes: "14:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-body)" }}>
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BookingModal />
        </ToastProvider>
      </body>
    </html>
  );
}
