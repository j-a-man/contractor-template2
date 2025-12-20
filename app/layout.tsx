import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Strong Construction Services | Expert HVAC Contractor",
  description: "Premier HVAC services in Texas. AC installation, heating repair, and air quality solutions. Reliable, efficient, and customer-focused.",
};

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
      </body>
    </html>
  );
}
