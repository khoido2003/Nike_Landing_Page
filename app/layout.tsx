import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Nike - Landing Page",
  description: "Nike Shoe Store website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
