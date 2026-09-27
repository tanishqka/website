# Custom Font Directory

To replace DM Sans with your own custom font:
1. Copy your font files (e.g., `CustomFont-Regular.woff2`, `CustomFont-Bold.woff2`) into this directory: `/public/fonts/custom-font/`
2. Open `/app/fonts.ts`
3. Update the `src` array to point to your font files:
   ```ts
   export const primaryFont = localFont({
     src: [
       { path: "../public/fonts/custom-font/CustomFont-Regular.woff2", weight: "400", style: "normal" },
       { path: "../public/fonts/custom-font/CustomFont-Medium.woff2", weight: "500", style: "normal" },
       { path: "../public/fonts/custom-font/CustomFont-Bold.woff2", weight: "700", style: "normal" },
     ],
     variable: "--font-primary",
     display: "swap",
   });
   ```
4. Save and reload. The CSS variable `--font-primary` is wired everywhere across the entire portfolio!
