import type { Metadata, Viewport } from "next";
import { primaryFont } from "./fonts";
import SmoothScroll from "@/components/SmoothScroll";
import ClickSpark from "@/components/ui/ClickSpark";
import TapSound from "@/components/TapSound";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tanishqka.design"),
  title: "Tanishka Bilgaiyan",
  description:
    "Tanishka Bilgaiyan is a Product Designer crafting thoughtful digital experiences at the intersection of interaction, technology, and human behaviour.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Tanishka Bilgaiyan",
    description:
      "Tanishka Bilgaiyan is a Product Designer crafting thoughtful digital experiences at the intersection of interaction, technology, and human behaviour.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tanishka Bilgaiyan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishka Bilgaiyan",
    description:
      "Tanishka Bilgaiyan is a Product Designer crafting thoughtful digital experiences at the intersection of interaction, technology, and human behaviour.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${primaryFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans dot-grid-bg text-[#181818] selection:bg-[#F3E8FF] selection:text-[#8614FF]">
        <SmoothScroll>
          <ClickSpark sparkColor="#8614FF">
            {children}
          </ClickSpark>
        </SmoothScroll>
        <TapSound />
        <Analytics />
      </body>
    </html>
  );
}
