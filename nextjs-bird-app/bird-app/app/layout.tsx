import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Breadcrumbs from '@/app/components/breadcrumbs';

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className="text-slate-900">
        <Header />
        <Breadcrumbs />
          <main className="bg-yellow-50">{children}</main>
        <Footer />
        </body>
    </html>
  );
}
