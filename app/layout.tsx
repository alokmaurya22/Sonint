import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sonint Technology - Crafting Digital Precision",
  description:
    "Modern software engineering company specializing in high-performance web platforms, custom ERP systems, cloud infrastructure, and AI integration solutions.",
    generator: 'Sonint Technology'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${onest.variable} relative antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}
