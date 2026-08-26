import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orquestração de IA · Diagnósticos 2026",
  description: "Dez líderes, dez contextos e um mapa de orquestração de IA para cada perfil.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
