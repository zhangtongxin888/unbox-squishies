import type { Metadata, Viewport } from "next";
import { DM_Sans, Fredoka } from "next/font/google";
import { site } from "@/content/game-data";
import "./globals.css";

const display = Fredoka({ variable: "--font-display", weight: ["600", "700"], subsets: ["latin"] });
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Unbox Squishies Beginner Guide | Verified First-Session Route",
  description: "A fact-checked Unbox Squishies beginner guide: get a box, unbox a Squishy, squish to earn, collect rare finds, avoid wrong-game advice, and follow natural next steps.",
  alternates: { canonical: "/" },
  icons: { icon: "/game-icon.png", shortcut: "/game-icon.png", apple: "/game-icon.png" },
  openGraph: {
    title: "Unbox Squishies Beginner Guide",
    description: "Get a box. Unbox. Squish to earn. Collect—with no guessed prices, odds, or mechanics.",
    url: "/",
    siteName: site.name,
    type: "website",
    images: [{ url: "/og-unbox-squishies.png", width: 1731, height: 909, alt: "Unbox Squishies beginner guide social card" }],
  },
  twitter: { card: "summary_large_image", title: "Unbox Squishies Beginner Guide", description: "A verified first-session route with evidence attached.", images: ["/og-unbox-squishies.png"] },
};

export const viewport: Viewport = { themeColor: "#142542", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
