import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFlatConcerto | A-flat Major Concerto",
  description:
    "AFlatConcerto OC / VTuber portfolio with a deep-sea fantasy visual language.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
