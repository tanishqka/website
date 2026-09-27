import { Intervention } from "@/types";

export const interventions: Intervention[] = [
  {
    id: "spring-cursor",
    title: "Fluid Spring Cursor",
    description: "A physically simulated cursor trail using damped harmonic oscillators and SVG filters.",
    date: "09/26",
    image: "/images/interventions/cursor-physics.svg",
    url: "https://x.com",
    tag: "PHYSICS / WEBGL"
  },
  {
    id: "audio-shader",
    title: "GLSL Audio Waveform",
    description: "Real-time frequency domain visualization rendered in a minimal custom WebGL fragment shader.",
    date: "08/26",
    image: "/images/interventions/audio-shader.svg",
    url: "https://x.com",
    tag: "AUDIO / SHADERS"
  },
  {
    id: "haptic-slider",
    title: "Micro-Haptic Stepper",
    description: "An experimental touch slider replicating mechanical detention clicks with web vibration API.",
    date: "07/26",
    image: "/images/interventions/haptic-slider.svg",
    url: "https://github.com",
    tag: "TACTILE / INTERACTION"
  },
  {
    id: "neo-dial",
    title: "Tactile Neo-Dial",
    description: "Skeuomorphic rotary potentiometer crafted with SVG gradients and rotational snapping.",
    date: "06/26",
    image: "/images/interventions/retro-calc.svg",
    url: "https://figma.com",
    tag: "COMPONENT / UI"
  },
  {
    id: "spatial-tilt",
    title: "Gyro 3D Photo Frame",
    description: "Device orientation parallax card creating depth layers from flat 2D viewport coordinates.",
    date: "05/26",
    image: "/images/interventions/spatial-tilt.svg",
    url: "https://x.com",
    tag: "THREE.JS / MOTION"
  },
  {
    id: "radial-command",
    title: "Radial Quick Command",
    description: "Keyboard-first circular pie menu optimized for rapid chord shortcuts in complex web apps.",
    date: "04/26",
    image: "/images/interventions/command-palette.svg",
    url: "https://github.com",
    tag: "KEYBOARD SHORTCUT"
  },
];
