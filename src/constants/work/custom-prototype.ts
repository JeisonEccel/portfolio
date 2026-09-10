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
      "While studying Project Management in Canada, I worked part-time with Custom Prototype, a company focused on 3D-printed and one-off prototypes. This role gave me hands-on exposure to rapid prototyping and additive manufacturing technologies.",
    ],
    contributions: [
      "Created product and assembly designs using SolidWorks.",
      "Supported 3D printing workflows, including scanning, cleaning, and preparing SLA parts.",
      "Gained practical experience in bridging design concepts with physical prototypes.",
    ],
    images: [
      { file: "custom-prototype-01.png", alt: "Aeromodel designed by Jeison" },
      { file: "custom-prototype-02.png", alt: "Aeromodel designed by Jeison" },
      { file: "custom-prototype-03.png", alt: "Aeromodel designed by Jeison" },
    ],
  },
}
