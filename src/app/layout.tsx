import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewsWork",
  description: "Siri for job applications",
  authors: [{
    name: "Aryan Kathawale (Blank)", 
    url: "https://kathawalearyan.in.net"
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Footer/>
      </body>
      
    </html>
  );
}
