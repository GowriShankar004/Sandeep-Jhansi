import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunjeet-vijaya-wedding.vercel.app"),
  title: "Sandeep & Jhansi Lakshmi Wedding",
  description: "Wedding invitation website for Sandeep & Jhansi Lakshmi",
  authors: [{ name: "Sandeep & Jhansi Lakshmi" }],
  openGraph: {
    title: "Sandeep & Jhansi Lakshmi Wedding",
    description: "You are invited to our wedding \u{1F48D}",
    type: "website",
    images: ["/images/couple-photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep & Jhansi Lakshmi Wedding",
    description: "Wedding invitation \u{1F48D}",
    images: ["/images/couple-photo.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>{children}</body>
    </html>
  );
}
