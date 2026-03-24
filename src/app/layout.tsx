import type { Metadata, Viewport } from "next";
import { Inter, Noto_Naskh_Arabic } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoUrdu = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-urdu",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibni Sina Pharmacy | Trusted Care, Genuine Medicines",
  description:
    "Ibni Sina Pharmacy, Beerwah, Budgam — near Jamia Masjid Hanafi, Kandoora. Genuine medicines, in-store guidance, and prescription support.",
};

/** Lets `env(safe-area-inset-*)` work on notched phones (iOS / modern Android). */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoUrdu.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
