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
      <body>{children}</body>
    </html>
  );
}
