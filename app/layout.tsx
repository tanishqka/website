import type { Metadata, Viewport } from "next";
import { primaryFont } from "./fonts";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Product Designer | Portfolio & Archive",
  description: "Personal product design portfolio, archive, visual experiments, and little interventions.",
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
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
