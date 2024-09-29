import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Roboto_Slab } from 'next/font/google'

export const metadata: Metadata = {
  title: "Arjun Bharti",
  description: "Software Engineer",
};

export const runtime = "edge";

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <Header />
        <main className="flex-1 py-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
