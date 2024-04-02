import type { Metadata } from "next";
import { Lora, Roboto } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Breadcrumbs from '@/app/components/breadcrumbs';

const lora = Lora({ subsets: ["latin"], weight: '400', variable: '--font-main' });
const roboto = Roboto({weight: '500', variable: '--font-heading', subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Bird App",
  description: "Bird app demo project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${roboto.variable} text-slate-900`}>
      <body className="text-slate-900">
        <Header />
        <Breadcrumbs />
          <main className="bg-yellow-50">{children}</main>
        <Footer />
        </body>
    </html>
  );
}
