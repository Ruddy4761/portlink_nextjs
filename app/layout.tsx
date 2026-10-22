import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PortLinks India | IT & Software Solutions",
  description: "PortLinks India delivers software, IT, logistics and business solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/base.css" />
        <link rel="stylesheet" href="/assets/css/navbar.css" />
        <link rel="stylesheet" href="/assets/css/hero-slider.css" />
        <link rel="stylesheet" href="/assets/css/software.css" />
        <link rel="stylesheet" href="/assets/css/dev.css" />
        <link rel="stylesheet" href="/assets/css/contact-modal.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
