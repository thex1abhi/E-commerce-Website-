import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lexend = localFont({
  src: "/fonts/Lexend-Regular.ttf",
});

const cunia = localFont({
  src: "/fonts/Cunia.ttf",
  variable: "--font-cunia",
});
export const metadata: Metadata = {
  title: "RoyalWoods | Modern & Elegant Home Decor",
  description:
    "Shop sleek and minimalistic furniture online. Discover modern chairs, tables, sofas, and home décor designed to elevate your space with elegance and simplicity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} ${cunia.variable} bg-slate-50 min-h-svh`}
      >
        <Header />
        <main className="min-h-svh">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 