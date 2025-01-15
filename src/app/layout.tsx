import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/views/header/header";
import "./globals.scss";
import Footer from "@/views/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poké Info",
  description: "Desenvolvido por Jonathan Couto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased body`}
      >
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
