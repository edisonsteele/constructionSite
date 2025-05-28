import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from 'next/head';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ruis Holding - Creating Legacy",
  description: "Ruis Holding specializes in construction, development, and rental properties in Montana and California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Ruis Holdings</title>
        <meta name="description" content="Ruis Holdings - Construction, Development, and Properties in Montana and California." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
