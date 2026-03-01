import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forever In Your Memory - Monument Dealer",
  description: "Honoring lives and preserving legacies with beautiful, lasting memorials. Custom monuments, memorial portraits, and compassionate service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-neutral-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="font-serif text-xl font-semibold hover:text-amber-400 transition">
                Forever In Your Memory
              </Link>
              <div className="flex gap-6">
                <Link
                  href="/gallery"
                  className="rounded-full border-2 border-amber-500 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-amber-400 transition hover:bg-amber-500 hover:text-black"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-amber-400"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
