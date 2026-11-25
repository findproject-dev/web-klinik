import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kliniksehatara.com";
  const now = new Date();

  const routes = [
    "",
    "/tentang-kami",
    "/layanan",
    "/tim-medis",
    "/fasilitas",
    "/hubungi-kami",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
