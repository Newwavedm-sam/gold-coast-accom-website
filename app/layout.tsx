import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gold Coast Holiday Accommodation | Gold Coast Accom",
  description: "Boutique Gold Coast stays and memorable local experiences.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
