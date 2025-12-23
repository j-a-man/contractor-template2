import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Crossworks Carpentry | Veteran Owned Master Carpenters",
  description: "Premier carpentry services in Marietta, GA. Custom cabinetry, decks, and renovations. Veteran owned and operated by Mike Gervais.",
};

import Chatbot from "@/components/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} bg-[#0f0f0f] text-white antialiased selection:bg-[#ff4d1c] selection:text-white overflow-x-hidden font-sans`}
      >
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
