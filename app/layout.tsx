import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { IntakeProvider } from "@/lib/intake-context";
import { Navbar } from "@/components/sections/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Phoenix Bookkeeping | Clarity, Accuracy, and Confidence",
  description:
    "Project-based bookkeeping cleanup for business owners and CPAs. We restore confidence in your financial records.",
  openGraph: {
    title: "Phoenix Bookkeeping | Clarity, Accuracy, and Confidence",
    description:
      "Project-based bookkeeping cleanup for business owners and CPAs. We restore confidence in your financial records.",
    url: "https://phoenixbookkeeping.com",
    siteName: "Phoenix Bookkeeping",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Bookkeeping",
    description:
      "Project-based bookkeeping cleanup for business owners and CPAs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-slate-900`}>
        <IntakeProvider>
          <Navbar />
          {children}
        </IntakeProvider>
      </body>
    </html>
  );
}
