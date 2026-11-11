import type { Metadata } from "next";
import { Inter, Montserrat, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif4", style: ["normal", "italic"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const display = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Writ: write scientific papers in HTML, submit them in LaTeX",
  description: "Writ is an AI-first WYSIWYG editor for scholarly articles. Semantic HTML that machines can read, live collaboration with co-authors and your own AI agents, and export to HTML, PDF and LaTeX.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
