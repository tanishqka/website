import localFont from "next/font/local";

export const primaryFont = localFont({
  src: [
    {
      path: "../public/fonts/ESRebondGrotesque-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ESRebondGrotesque-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/ESRebondGrotesque-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ESRebondGrotesque-Semibold-Italic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-primary",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});
