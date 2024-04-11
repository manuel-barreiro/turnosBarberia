import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import * as React from "react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turnos | Barbería",
  description: "Agendá tu turno en nuestra barbería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
