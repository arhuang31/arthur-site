import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Huang",
  description: "A memory bank of my journey, work, mind, and world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
