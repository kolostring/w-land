import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const politeType = localFont({src: '../lib/assets/fonts/PoliteType-Regular.woff2', variable: "--font-display"});

export const metadata: Metadata = {
  title: "Women Land",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${politeType.variable}`}>
      <body className="font-body bg-design-background-primary text-design-primary-text">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
