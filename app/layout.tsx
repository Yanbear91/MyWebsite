import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lightning Fast Web Design & Development | Surge Web Studio",
  description: "Get a professional, lightning-fast website that helps your local business dominate the market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
