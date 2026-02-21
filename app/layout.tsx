import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Charansai Burra | Full Stack Developer",
  description:
    "Portfolio of Charansai Burra - Full Stack Developer specializing in React, Next.js, Spring Boot, and AI & ML.",

  openGraph: {
    title: "Charansai Burra | Full Stack Developer",
    description:
      "Full Stack Developer | AI & ML Student | React | Next.js | Spring Boot",
    url: "https://charansaiburra.github.io/portfolio-generator/",
    siteName: "Charansai Portfolio",
    images: [
      {
        url: "https://charansaiburra.github.io/portfolio-generator/profile.jpeg",
        width: 800,
        height: 600,
        alt: "Charansai Burra Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Charansai Burra | Full Stack Developer",
    description:
      "Full Stack Developer | AI & ML Student | React | Next.js | Spring Boot",
    images: [
      "https://charansaiburra.github.io/portfolio-generator/profile.jpeg",
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
