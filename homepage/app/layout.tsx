import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const craftMincho = localFont({
  src: "../public/fonts/craftmincho.otf",
  variable: "--font-craft",
  display: "swap",
});

const bananaSlip = localFont({
  src: "../public/fonts/KiwiMaru-Regular.ttf",
  variable: "--font-banana",
  display: "swap",
});

const dearDisya = localFont({
  src: "../public/fonts/DearDisya.otf",
  variable: "--font-dear-disya",
  display: "swap",
});

const yesevaOne = localFont({
  src: "../public/fonts/YesevaOne-Regular.ttf",
  variable: "--font-yeseva",
  display: "swap",
});

const abrilFatface = localFont({
  src: "../public/fonts/AbrilFatface-Regular.ttf",
  variable: "--font-abril",
  display: "swap",
});

const playfair = localFont({
  src: "../public/fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
  display: "swap",
});

const playfairItalic = localFont({
  src: "../public/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf",
  variable: "--font-playfair-italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAYAKA YAMATO",
  description: "SAYAKA YAMATOのフリーランスポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${craftMincho.variable} ${bananaSlip.variable} ${dearDisya.variable} ${yesevaOne.variable} ${abrilFatface.variable} ${playfair.variable} ${playfairItalic.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Darumadrop+One&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
