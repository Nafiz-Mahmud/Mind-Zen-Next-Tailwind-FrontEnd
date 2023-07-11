import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Nav from "@/components/navbar/Nav";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Mind Zen | Book Review Site",
  description: "Mind Zen is a book review site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[90%] m-auto">
        <main className="flex flex-col justify-between min-h-[100vh]">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
