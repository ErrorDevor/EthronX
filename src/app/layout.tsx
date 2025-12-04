import "shared/styles/index.scss";

import { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "shared/styles/index.scss";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
  title: "EthronX AI - The intelligence Layer of Blockchain",
  description: "EthronX AI - The intelligence Layer of Blockchain",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
