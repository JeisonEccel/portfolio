import { Project } from "@/types/projects"

export const praticaTool: Project = {
  name: "Pratica Tool",
  type: "software",
  cover: "/projects/pratica-tool.png",
  description: [
    "Interactive web-based guitar practice platform built with Next.js, TypeScript, and Tone.js, focused on real-time playback and structured musical representation.",
    "The application introduces a custom notation and timing system designed to model musical events using ticks-based scheduling, enabling precise playback control, loopable exercises, BPM adjustments, and multi-instrument support for guitar and bass. The project also includes a sampler-based audio architecture and structured playback engine for managing notation events, transport scheduling, and instrument execution.",
    "Developed as an evolution of the original Guitar Practice project, this version reflects a transition from visualization-focused tooling toward more advanced application architecture, audio synchronization, and reusable musical data modeling. The project explores challenges related to real-time systems, state management, and scalable frontend application structure within modern web technologies.",
  ],
  links: [
    {
      title: "Live Website",
      href: "https://pratica.music/",
    },
  ],
}
