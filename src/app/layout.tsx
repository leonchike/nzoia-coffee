import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nzoia — Premium Single-Origin Kenyan Coffee",
    template: "%s | Nzoia Coffee",
  },
  description:
    "Single-origin Arabica coffee from the volcanic highlands of Kirinyaga, Kenya. Roasted at source in Nairobi. Born of the land, roasted with intention.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nzoia Coffee",
    title: "Nzoia — Premium Single-Origin Kenyan Coffee",
    description:
      "Single-origin Arabica coffee from the volcanic highlands of Kirinyaga, Kenya. Roasted at source in Nairobi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nzoia — Premium Single-Origin Kenyan Coffee",
    description:
      "Single-origin Arabica coffee from the volcanic highlands of Kirinyaga, Kenya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
