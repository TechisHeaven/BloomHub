import type { Metadata } from "next";
import { Inter, Pixelify_Sans, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pixelify = Pixelify_Sans({ subsets: ["latin"] });
const vT323 = VT323({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "BloomHub",
  description: "Bloomhub social media app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pixelify.className}>{children}</body>
    </html>
  );
}
