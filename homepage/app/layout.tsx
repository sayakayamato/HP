import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "TOKYO LOLLIPOP | かわいいを、もっと自由に。",
  description: "TOKYO LOLLIPOPはかわいいファッションを提案するオンラインショップです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Darumadrop+One&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
