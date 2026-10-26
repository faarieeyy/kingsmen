import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Security Services in Bangalore | Kingsmen",
  description: "Professional Security & Facility Management Services in Bangalore. Kingsmen provides trained security guards, housekeeping, and integrated facility management.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <SmoothScrollProvider>
          <div className="bgBlobTopRight"></div>
          <div className="bgBlobBottomLeft"></div>
          <Preloader />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
