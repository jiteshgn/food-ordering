import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import { SessionProvider } from "next-auth/react";
import { AppProvider } from "./components/AppContext";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import Footer from "./components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"],weight: ['400','500','700']});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto py-4">
          <AppProvider>
            <Toaster/>
      <Header />
        {children}
      </AppProvider>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
