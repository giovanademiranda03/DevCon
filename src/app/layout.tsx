import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
  variable: "--font-manrope",
});


export const metadata: Metadata = {
  title: "DevCon 2025",
  description: "DevCon 2025 – Conferência de Desenvolvedores Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body
        className={`antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
