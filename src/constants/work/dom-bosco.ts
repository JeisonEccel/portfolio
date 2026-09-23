import { Experience } from "@/app/experiences/page"

export const domBosco: Experience = {
  work: {
    company: "Dom Bosco Machining",
    position: "Mechanical Designer",
    country: "Brazil",
    from: "06/2007",
    to: "05/2008",
    logo: "dom-bosco.png",
    description: [
      "My first professional role in mechanical design was at a small machine shop specializing in moulds for metal casting. I converted customer drawings and specifications into 3D models used to manufacture moulds in aluminum, wood, and steel, working closely with the machining process.",
    ],
    contributions: [
      "Converted customer drawings and specifications into SolidWorks 3D models used for CNC machining and mould production.",
      "Supported the preparation and manufacturing of casting moulds, adapting designs to different materials and machining requirements.",
      "Created Excel-based estimating tools to help calculate material, machining, and other job costs for customer quotations.",
    ],
    images: [
      { file: "dom-bosco-01.jpg", alt: "Example of casting mould" },
      { file: "dom-bosco-02.jpg", alt: "Example of casting mould" },
    ],
  },
}
