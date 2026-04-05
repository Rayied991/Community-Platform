import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter=Inter({subsets: ["latin"]});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Craftwave",
  description: "Craftwave is a platform for building and sharing your own projects with the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >

        <header>Craftwave</header>
        {children}
        <footer>Craftwave</footer>
      </body>
    </html>
  );
}
