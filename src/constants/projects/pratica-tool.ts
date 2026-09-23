import { Project } from "@/types/projects"

export const praticaTool: Project = {
  name: "Pratica Tool",
  type: "software",
  cover: "/projects/pratica-tool.png",
  description: [
    "Interactive guitar, bass, and ukulele practice platform built with Next.js, TypeScript, Tone.js, Drizzle, and PostgreSQL and deployed on Vercel. Users can configure their instrument, tuning, strings, and fret range, then generate exercises with synchronized notation, tablature, fretboard visualization, and audio playback.",

    "Exercises are generated algorithmically rather than stored as predefined sequences. Based on the selected instrument and practice settings, the application calculates pitches and fretboard positions, builds the exercise sequence, translates it into musical notation, and schedules playback using a custom tick-based timing model. Changes to the instrument or tuning automatically recalculate the exercise for the new configuration.",

    "I built the notation system from scratch, including custom SVG musical symbols and a responsive renderer that translates generated note sequences into staff, tablature, and fretboard views. Each representation can be displayed independently or combined, adapting the score layout across desktop and mobile screens.",

    "A custom playback engine synchronizes the generated notation with sampler-based audio, a visual indicator for the current note, and automatic scrolling through the score. The application also includes authentication and persisted instrument settings, allowing returning users to continue with their preferred instrument configuration.",
  ],
  links: [
    {
      title: "Live Website",
      href: "https://pratica.music/",
    },
  ],
}
