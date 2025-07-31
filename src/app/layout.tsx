import type React from "react";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import Header from "@/component/header/Header";
import "./globals.css";
import "../component/style.css"
import Footer from "@/component/footer/Footer";

// ✅ Load Inter font
const inter = Inter({
  variable: "--font-inter", // important for Tailwind CSS
  subsets: ["latin"],
  display: "swap",
});

//  ✅ Load Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Socializo- AI-Powered Lead Generation for B2B Companies",
//   description:
//     "Transform your B2B lead generation with our AI-powered system. Get 50+ qualified leads per month with our proven automation that hunts, nurtures, and closes cold prospects in just 60 days.",
//   keywords:
//     "AI lead generation, B2B lead generation, sales automation, cold outreach, lead nurturing, B2B sales, AI sales tools",
//   authors: [{ name: "Socializo" }],
//   viewport: "width=device-width, initial-scale=1",
//   robots: "index, follow",
//   openGraph: {
//     title: "Socailizo",
//     description:
//       "Transform your B2B lead generation with our AI-powered system. Get 50+ qualified leads per month.",
//     type: "website",
//     url: "https:socializo.com",
//     siteName: "Socailizo",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Socailizo",
//     description:
//       "Transform your B2B lead generation with our AI-powered system.",
//   },
// };

export const viewport = {
  // Define viewport separately
  width: "device-width",
  initialScale: 1,
  // ... other viewport properties
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`} antialiased">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
