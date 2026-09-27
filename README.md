# Product Designer Portfolio & Archive

A minimal, editorial, tactile, and highly personal portfolio website crafted for a Product Designer. Built from scratch with a custom design system, physical metaphors (hanging wire cards, tactile file folders, opened scrapbook journal, retro brick breaker arcade), and an effortless content-driven architecture.

---

## 🎨 Visual System & Design Rules

- **Predominantly Neutral**: Built on soft warm/cool grey tones with strong whitespace and confident typography.
- **Strict Color Rules**:
  - **NEVER pure white (`#FFFFFF`)**
  - **NEVER pure black (`#000000`)**
  - Background: `#F5F5F2`
  - Surfaces: `#ECECE8`, `#EEEEEC`, `#F9F9F7`
  - Text: `#181818` (Primary), `#666666` (Secondary), `#888884` (Tertiary)
  - Borders: `#D8D8D4`
  - Accent: Slate / Periwinkle Accent (`#606EDB` / `#4E5BC4`) for interactive states, links, tags, and focal points.
- **Dot Grid Background**: A subtle, responsive CSS radial dot pattern sits behind the content (`24px 24px` grid).
- **Default Font**: ESRebondGrotesque (self-hosted local fonts in `/public/fonts/`, Medium & Semibold normal/italic).

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized static production site
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Architecture Overview

```text
/
├── app/
│   ├── fonts.ts                 # Central font configuration (--font-primary)
│   ├── globals.css              # Design tokens, color palette, dot-grid pattern
│   ├── layout.tsx               # Root layout wiring font tokens and dot background
│   ├── page.tsx                 # Complete homepage narrative flow
│   └── work/[slug]/page.tsx     # Dynamic MDX-driven case study page
│
├── components/
│   ├── Header.tsx               # Minimal navigation with mobile drawer
│   ├── hero/
│   │   ├── Hero.tsx             # Large headline, micro-copy, status badge
│   │   └── HangingCards.tsx     # Physical cards suspended on curved wires
│   ├── emergent/
│   │   ├── EmergentGallerySection.tsx # Featured Emergent work archive
│   │   ├── FolderCard.tsx       # Physical folder UI with layered images
│   │   └── GalleryViewer.tsx    # Modal gallery viewer with keyboard/swipe nav
│   ├── casestudies/
│   │   ├── CaseStudyGrid.tsx    # Editorial case study showcase layout
│   │   ├── CaseStudyCard.tsx    # Interactive project card with metadata
│   │   └── CaseStudyRenderer.tsx # MDX compiler with custom design components
│   ├── interventions/
│   │   └── InterventionsGrid.tsx # Micro-experiments grid linking externally
│   ├── journal/
│   │   └── JournalAbout.tsx     # Opened scrapbook journal with polaroids & stickers
│   ├── footer/
│   │   └── Footer.tsx           # Contact section with click-to-copy email
│   ├── game/
│   │   └── BrickBreaker.tsx     # Playable arcade game with desktop/touch controls
│   └── ui/
│       ├── MediaRenderer.tsx    # Responsive media player (images, SVGs, videos)
│       ├── PullQuote.tsx        # Editorial pull quote component
│       ├── Stat.tsx             # Key metric highlight component
│       ├── TwoColumn.tsx        # Comparative side-by-side layout
│       └── Gallery.tsx          # Multi-image grid component
│
├── content/
│   └── case-studies/            # MDX case study files (add new files here!)
│       ├── builder-experience.mdx
│       ├── spatial-ai-interface.mdx
│       ├── design-system-core.mdx
│       └── onboarding-activation.mdx
│
├── data/
│   ├── emergent.ts              # Emergent gallery collections and frames
│   └── interventions.ts         # Little Interventions experiments list
│
└── public/
    ├── fonts/                   # Local fonts (DM Sans & custom-font directory)
    └── images/                  # Visual assets, stickers, polaroids, cards
```

---

## 📖 Designer's Guide: How to Update Content

You do **NOT** need to write or touch React components to add or change your work. Everything is content-driven.

---

### 1. How to Add a New Case Study

1. Create a new `.mdx` file in `/content/case-studies/`, for example `my-new-project.mdx`.
2. Add your frontmatter at the top:

```markdown
---
title: "Project Name"
slug: "my-new-project"
description: "A short 1-2 sentence editorial summary of what you built and why."
date: "10/26"
cover: "/images/case-studies/my-cover.webp"
role: "Lead Product Designer"
type: "Spatial Systems"
timeline: "4 Months"
client: "Client or Studio"
featured: false
order: 5
---

## The Problem

Write your story in standard markdown. You can use **bold**, *italic*, bullet points, and headers.

<PullQuote 
  quote="An inspiring quote about your design philosophy or key insight."
  author="User Research Finding"
/>

<Stat 
  value="+45%" 
  label="Increase in task completion velocity" 
/>

<MediaRenderer 
  src="/images/case-studies/screenshot-01.png" 
  alt="Canvas interface inspection"
  caption="Fig 1.1 — Contextual drawer morphing based on active node state."
  fullWidth={true}
/>

<TwoColumn
  leftTitle="Initial Hypothesis"
  leftText="We assumed users wanted a linear step-by-step checklist."
  rightTitle="Discovered Reality"
  rightText="Users preferred a direct-manipulation spatial canvas with instant undo."
/>

<Gallery
  images={[
    { src: "/images/case-studies/detail-1.png", caption: "Color token variations" },
    { src: "/images/case-studies/detail-2.png", caption: "Typography spec" }
  ]}
/>
```

3. Save the file. Next.js automatically creates `/work/my-new-project` and displays it in your portfolio's Selected Work section!

---

### 2. How to Add Images and Videos

Place your media files in `/public/images/case-studies/` or `/public/videos/`.

#### Supported Formats:
- **Images**: `.webp`, `.png`, `.jpg`, `.jpeg`, `.avif`, `.svg`, `.gif`
- **Videos**: `.mp4`, `.webm`, `.mov`

#### Adding an Image in MDX:
```mdx
<MediaRenderer 
  src="/images/case-studies/my-design.png" 
  alt="High-fidelity interface"
  caption="Fig 2.1 — Component specifications"
  fullWidth={false}
/>
```

#### Adding a Video in MDX:
Videos are automatically detected by file extension. They play silently on loop, are hardware-accelerated, and respect user bandwidth:
```mdx
<MediaRenderer 
  src="/videos/interaction-demo.mp4" 
  poster="/images/case-studies/video-poster.webp"
  alt="Micro-interaction interaction demo"
  caption="Live interaction recording (60fps)"
  autoPlay={true}
  loop={true}
  muted={true}
/>
```

---

### 3. How to Add an Emergent Gallery Collection

Open `/data/emergent.ts` and append a new collection object:

```ts
{
  slug: "my-collection",
  title: "New Exploration",
  date: "10/26",
  category: "Interaction Lab",
  description: "Short description of the problem space and explorations.",
  images: [
    {
      src: "/images/emergent/my-collection/01.webp",
      alt: "Interface frame overview",
      description: "Detailed frame annotation visible in the modal viewer.",
      tag: "FRAME.01"
    },
    {
      src: "/images/emergent/my-collection/02.webp",
      alt: "Node inspector state",
      description: "Contextual drawer inspector.",
      tag: "INSPECTOR.02"
    }
  ]
}
```

The new tactile folder will automatically appear in your Emergent Archive, complete with fanning hover animations and interactive gallery modal viewer!

---

### 4. How to Add a Little Intervention

Open `/data/interventions.ts` and add your experiment:

```ts
{
  id: "my-experiment",
  title: "Kinetic Spring Slider",
  description: "Interactive slider prototype exploring inertial momentum.",
  date: "10/26",
  image: "/images/interventions/my-experiment.png",
  url: "https://x.com/yourhandle/status/123456789", // Link to X, Figma, GitHub, etc.
  tag: "PHYSICS / PROTOTYPE"
}
```

---

### 5. How to Replace DM Sans with a Custom Font

1. Drop your font files (`.woff2` recommended) into `/public/fonts/custom-font/`.
2. Open `/app/fonts.ts`.
3. Update the `src` array to reference your font files:

```ts
export const primaryFont = localFont({
  src: [
    { path: "../public/fonts/custom-font/MyFont-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/custom-font/MyFont-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/custom-font/MyFont-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-primary",
  display: "swap",
});
```

The `--font-primary` token is linked across every component on the site automatically.

---

### 6. How to Replace the Journal / Scrapbook Paper Texture

1. Place your paper texture image (e.g. `paper-texture.webp`) into `/public/images/about/`.
2. In `/app/globals.css`, update the `.paper-texture-subtle` class:

```css
.paper-texture-subtle {
  background-color: var(--paper-cream);
  background-image: url('/images/about/paper-texture.webp');
  background-repeat: repeat;
}
```

---

### 7. How to Replace Hero Images & Hanging Cards

1. Place your images or design artifacts in `/public/images/hero/`.
2. Open `/components/hero/HangingCards.tsx`.
3. Update the `HANGING_CARDS` array with your image paths and desired angles/sizes:

```ts
{
  id: "card-1",
  image: "/images/hero/my-sketch.webp",
  alt: "Architecture sketch",
  width: 230,
  height: 300,
  rotation: -3.5, // Subtle tilt in degrees
  wireLength: 140, // Length of the hanging string
  ...
}
```

---

### 8. How to Update Email & Social Links

Open `/components/footer/Footer.tsx`:
- Change `const email = "hello@designer.com";` to your personal address.
- Update `socialLinks` array with your LinkedIn, X/Twitter, GitHub, or Read.cv profile URLs.

---

## 🕹️ Mini-Arcade: Brick Breaker Controls

- **Desktop**: Use `←` (Left Arrow) and `→` (Right Arrow) or `A` and `D` keys. You can also drag the mouse over the arena.
- **Mobile**: Touch the dedicated on-screen `←` and `→` buttons.
- **Launch / Restart**: Press `Spacebar` or tap the restart button.
- **Performance**: Powered by `requestAnimationFrame`, the loop pauses when inactive or scrolled offscreen to conserve CPU.
