import { EmergentCollection } from "@/types";

export const emergentCollections: EmergentCollection[] = [
  {
    slug: "builder",
    title: "Builder",
    date: "09/26",
    category: "Canvas Architecture",
    description: "Visual canvas workflows, spatial node-editing primitives, and direct manipulation tools for high-velocity software creation.",
    images: [
      {
        src: "/images/emergent/builder/01.svg",
        alt: "Builder canvas overview and infinite workspace",
        description: "Primary infinite spatial canvas workspace with contextual toolbars and pan-zoom coordinate indicators.",
        tag: "CANVAS.01"
      },
      {
        src: "/images/emergent/builder/02.svg",
        alt: "Node inspector and property hierarchy",
        description: "Adaptive inspector panel dynamically switching property tabs based on multi-selected canvas nodes.",
        tag: "INSPECTOR.02"
      },
      {
        src: "/images/emergent/builder/03.svg",
        alt: "Spline linking and wireframe connections",
        description: "Dynamic spline bezier curves connecting stateful functional nodes with live data flow markers.",
        tag: "NODES.03"
      },
      {
        src: "/images/emergent/builder/04.svg",
        alt: "Component library drawer and instant drop preview",
        description: "Tactile slide-over component drawer with real-time drop target collision feedback.",
        tag: "LIBRARY.04"
      },
    ]
  },
  {
    slug: "ai-product",
    title: "AI Product",
    date: "08/26",
    category: "Intelligent Interfaces",
    description: "Synthesized multi-turn generative workflows, spatial latency visualizers, and conversational inline prompts.",
    images: [
      {
        src: "/images/emergent/ai-product/01.svg",
        alt: "Multimodal prompt command dock",
        description: "Floating contextual command bar allowing text, audio, and visual snapshot streaming inputs.",
        tag: "COMMAND.01"
      },
      {
        src: "/images/emergent/ai-product/02.svg",
        alt: "Streaming response card with diff preview",
        description: "Inline token streaming with live side-by-side AST visual difference highlighting.",
        tag: "STREAM.02"
      },
      {
        src: "/images/emergent/ai-product/03.svg",
        alt: "Latent space parameter tuner",
        description: "Dimensional slider controls for temperature, token budget, and top-p sampling thresholds.",
        tag: "TUNING.03"
      },
      {
        src: "/images/emergent/ai-product/04.svg",
        alt: "Confidence score indicators and feedback loop",
        description: "Subtle tactile confidence badges allowing designers to give single-tap reinforcement signals.",
        tag: "FEEDBACK.04"
      },
    ]
  },
  {
    slug: "design-system",
    title: "Design System",
    date: "07/26",
    category: "Design Foundation",
    description: "Component primitives, multi-brand token pipelines, typographic hierarchy rules, and accessible contrast matrices.",
    images: [
      {
        src: "/images/emergent/design-system/01.svg",
        alt: "Foundational color swatch and token tokens",
        description: "Strict neutral and crimson color tokens mapped across light, dark, and high-contrast modes.",
        tag: "TOKENS.01"
      },
      {
        src: "/images/emergent/design-system/02.svg",
        alt: "Interactive button and control states",
        description: "State permutations across idle, hover, active, pressed, disabled, and loading conditions.",
        tag: "BUTTONS.02"
      },
      {
        src: "/images/emergent/design-system/03.svg",
        alt: "Typographic scale and letter-spacing guidelines",
        description: "Mathematical scale ratio based on 8pt rhythm with strict line-height proportionality.",
        tag: "TYPE.03"
      },
      {
        src: "/images/emergent/design-system/04.svg",
        alt: "Iconography grid and optical balance specs",
        description: "Geometric construction lines ensuring optical weight balance across 16px and 24px viewports.",
        tag: "ICONS.04"
      },
    ]
  },
  {
    slug: "growth-onboarding",
    title: "Growth / Onboarding",
    date: "06/26",
    category: "Conversion & Loops",
    description: "Zero-state activation pathways, interactive sandbox product tours, and friction-free team invite loops.",
    images: [
      {
        src: "/images/emergent/growth/01.svg",
        alt: "Welcome checklist and playground sandbox",
        description: "Minimal progress checklist gamifying initial project creation and keyboard shortcut mastery.",
        tag: "WELCOME.01"
      },
      {
        src: "/images/emergent/growth/02.svg",
        alt: "Team workspace invitation flow",
        description: "Single-tap team member invitation modal with customizable role permission tiers.",
        tag: "INVITE.02"
      },
      {
        src: "/images/emergent/growth/03.svg",
        alt: "Template gallery and quick-start starters",
        description: "Curated community template picker with live hovering previews and 1-click duplication.",
        tag: "TEMPLATES.03"
      },
      {
        src: "/images/emergent/growth/04.svg",
        alt: "Key metric dashboard and activation rates",
        description: "Cohorted retention graphs tracking day-1, day-7, and day-30 user workflow completion.",
        tag: "METRICS.04"
      },
    ]
  }
];
