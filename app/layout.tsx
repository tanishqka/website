import type { Metadata } from "next";
import { primaryFont } from "./fonts";
import "./globals.css";

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
      <body className="min-h-full flex flex-col font-sans dot-grid-bg text-[#181818] selection:bg-[#FCEAEA] selection:text-[#606EDB]">
        {children}
      </body>
    </html>
  );
}
