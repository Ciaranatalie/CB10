import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/app/(components)/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belgom",
  description: "Belgom",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
