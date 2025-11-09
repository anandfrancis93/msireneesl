import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ms. Irene - ESL Instructor Portfolio",
  description: "Experienced ESL Teacher, Trainer, and Researcher with over 10 years of experience teaching English to diverse learners",
  keywords: ["ESL", "English teacher", "TESOL", "language instruction", "education", "language learning"],
  authors: [{ name: "Ms. Irene" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
