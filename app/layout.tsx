import type { Metadata } from "next";
import { Inter, Montserrat, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif4", style: ["normal", "italic"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const display = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["500", "600", "700", "800"] });

const site = process.env.SITE_URL ?? "https://usewrit.dev"; // CI sets it to the live URL
const base = process.env.BASE_PATH ?? "";
const title = "Writ: write scientific papers in HTML, with your agents";
const description = "Writ is a WYSIWYG editor for scientific papers. HTML underneath, so co-authors and AI agents edit the same paper, every change is logged by author, and LaTeX export is there when the journal asks.";

export const metadata: Metadata = {
  metadataBase: new URL(site + base + "/"),
  title,
  description,
  alternates: { canonical: "./" },
  keywords: ["scientific writing", "RASH", "HTML", "LaTeX", "scholarly publishing", "WYSIWYG", "MCP", "AI agents"],
  openGraph: { type: "website", siteName: "Writ", title, description, url: "./" },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Writ",
  applicationCategory: "BrowserApplication",
  description,
  url: site + base + "/",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" />
        )}
      </body>
    </html>
  );
}
