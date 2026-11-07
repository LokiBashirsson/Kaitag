import type { Metadata } from "next";
import { Manrope, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import Providers from "./providers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Кайтаг_Мебель",
  description: "Кайтаг_Мебель",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Providers>{children}</Providers>
        <hr />
        <Footer />
      </body>
    </html>
  );
}
