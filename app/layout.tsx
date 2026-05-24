import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naba Daily",
  description: "AI-powered personalized news digests",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}