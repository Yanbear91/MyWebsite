import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lightning Fast Web Design & Development | Surge Web Studio",
  description: "Get a professional, lightning-fast website that helps your local business dominate the market.",
  keywords: ["buy a website", "build a website", "website for sale", "custom web design", "professional web development", "local business website", "fast website design", "web studio"],
  authors: [{ name: "Surge Web Studio" }],
  openGraph: {
    title: "Lightning Fast Web Design & Development | Surge Web Studio",
    description: "Get a professional, lightning-fast website that helps your local business dominate the market.",
    url: "https://surgewebstudio.com/",
    siteName: "Surge Web Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Surge Web Studio Desktop Design Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surge Web Studio",
    description: "Lightning-fast web design that gets results.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"],
  },
  alternates: {
    canonical: "https://surgewebstudio.com/",
  },
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
