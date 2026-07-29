import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Poppins } from "next/font/google";
import { FlowerPetals } from "@/components/ui/FlowerPetals";
import { Cover } from "@/components/ui/Cover";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const script = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"],
});

const body = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

// Resolved at build time. Vercel injects its own domain, so link previews get
// correct absolute URLs without hardcoding one; set NEXT_PUBLIC_SITE_URL to
// override with a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  "http://localhost:3000";

const ogImage = {
  url: "/images/og.jpg",
  width: 1200,
  height: 630,
  alt: "Sandeep & Jhansi Lakshmi — wedding invitation",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sandeep & Jhansi Lakshmi Wedding",
  description: "Wedding invitation website for Sandeep & Jhansi Lakshmi",
  authors: [{ name: "Sandeep & Jhansi Lakshmi" }],
  openGraph: {
    title: "Sandeep & Jhansi Lakshmi Wedding",
    description: "You are invited to our wedding \u{1F48D}",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep & Jhansi Lakshmi Wedding",
    description: "Wedding invitation \u{1F48D}",
    images: [ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${script.variable} ${body.variable} font-body antialiased`}>
        <FlowerPetals />
        <Cover />
        {children}
      </body>
    </html>
  );
}
