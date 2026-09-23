import { Experience } from "@/app/experiences/page"

export const customPrototype: Experience = {
  work: {
    company: "Custom Prototypes",
    position: "Model Maker",
    country: "Canada",
    website: "https://customprototypes.ca/",
    from: "10/2016",
    to: "04/2017",
    logo: "custom-prototypes.svg",
    description: [
      "While completing my Project Management studies in Canada, I worked part-time at Custom Prototypes, supporting the development of one-off prototypes and 3D-printed parts. The role combined CAD design with hands-on model making and additive manufacturing.",
    ],
    contributions: [
      "Created and modified product and assembly designs in SolidWorks for prototyping and fabrication.",
      "Supported additive manufacturing workflows including 3D scanning, part preparation, cleaning, and finishing of SLA-printed components.",
      "Worked directly with physical prototypes, translating digital designs into manufactured parts and assemblies.",
    ],
    images: [
      { file: "custom-prototype-01.png", alt: "Aeromodel designed by Jeison" },
      { file: "custom-prototype-02.png", alt: "Aeromodel designed by Jeison" },
      { file: "custom-prototype-03.png", alt: "Aeromodel designed by Jeison" },
    ],
  },
}
