import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#1a1209",
};

export const metadata: Metadata = {
  title: {
    default: "Nzoia — Premium East African Coffee, Roasted in Kenya",
    template: "%s | Nzoia Coffee",
  },
  description:
    "Premium Arabica coffee sourced from smallholder farmers across East Africa. Roasted at source in Nairobi, Kenya. Born of the land, roasted with intention.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nzoia Coffee",
    title: "Nzoia — Premium East African Coffee, Roasted in Kenya",
    description:
      "Premium Arabica coffee sourced from smallholder farmers across East Africa. Roasted at source in Nairobi, Kenya.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nzoia — Premium East African Coffee, Roasted in Kenya",
    description:
      "Premium Arabica coffee sourced from smallholder farmers across East Africa.",
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
