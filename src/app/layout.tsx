import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Articles",
  description: "Krinitfa Lab Blog Aticles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="flex h-screen mt-15">
          <aside className="flex-2 h-full overflow-y-auto border-r-1 border-slate-300 p-1">
            Left
          </aside>
          <main className="flex-8 p-2">{children}</main>
          <aside className="flex-2 h-full overflow-y-auto p-1 border-l-1 border-slate-300">
            Right
          </aside>
        </div>
      </body>
    </html>
  );
}
