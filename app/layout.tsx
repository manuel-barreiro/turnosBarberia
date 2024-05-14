import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import * as React from "react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turnos | Barbería",
  description: "Agendá tu turno en nuestra barbería",
};

import  TurnoProvider from "./context/TurnoProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <TurnoProvider>
        <body className={inter.className}>
          {children}
        </body>
      </TurnoProvider>
    </html>
  );
}
