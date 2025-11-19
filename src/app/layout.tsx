import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

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

import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-editorial-bg overflow-x-hidden`}>
        <ThemeProvider>
          <div className="relative min-h-screen w-full perspective-[2000px]">
            <PageTransition>{children}</PageTransition>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
