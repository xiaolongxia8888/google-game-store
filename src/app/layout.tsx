import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/lang";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Google Game - Premium Game Accounts Marketplace",
  description: "Buy verified premium game accounts for Steam, EPIC, Riot, Ubisoft, Xbox, Blizzard, Nintendo, and PlayStation. Pay with USDT. Instant delivery.",
  keywords: "game accounts, Steam accounts, EPIC accounts, buy game accounts, USDT game store, verified accounts",
  openGraph: {
    title: "Google Game - Premium Game Accounts",
    description: "Premium verified game accounts from all major platforms. Pay with USDT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <LangProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </LangProvider>
      </body>
    </html>
  );
}
