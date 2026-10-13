import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DREEM SI | Token Security Scanner",
  description:
    "Scan smart contracts, investigate token risks, and make more informed crypto decisions with DREEM SI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
