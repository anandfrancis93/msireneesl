import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
