import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forever In Your Memory - Monument Dealer",
  description: "Honoring lives and preserving legacies with beautiful, lasting memorials. Custom monuments, memorial portraits, and compassionate service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
