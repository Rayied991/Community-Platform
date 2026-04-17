import Footer from "@/components/ui/common/footer";
import Header from "@/components/ui/common/header";
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
// const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit=Outfit({subsets: ["latin"], variable:"--font-outfit"});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Craftwave - Share Your Creations, Discover New Launches ",
  description: " community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>

    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}>

        <Header/>
        {/* <header>Craftwave</header> */}
        {children}
        {/* <footer>Craftwave</footer> */}
        <Footer/>
      </body>
    </html>
</ClerkProvider>
  );
}
