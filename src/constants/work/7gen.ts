import { Experience } from "@/app/experiences/page"

export const sevengen: Experience = {
  work: {
    company: "7Gen",
    position: "Software Developer",
    country: "Canada",
    website: "https://7gen.com/",
    from: "09/2021",
    to: "10/2023",
    logo: "7gen.svg",
    description: [
      "7Gen marked my transition into professional software development after years working in engineering, manufacturing, and internal software systems. I initially joined part-time and later moved into a full-time role, working in a small engineering team directly with the CTO on software supporting commercial electric-vehicle fleet adoption.",

      "My work spanned full-stack application development, external API integrations, telematics data processing, dashboards, and deployment. The role gave me the opportunity to apply my previous experience with operational systems while developing production software with modern web technologies and cloud infrastructure.",
    ],
    contributions: [
      "Built and iterated on a production Total Cost of Ownership (TCO) application used by the sales team to compare the long-term costs of internal-combustion and electric fleets, translating an existing Excel model into application calculations, backend logic, and interactive simulations.",

      "Extended the TCO platform with proposal functionality and a public website integration that allowed prospective customers to simulate ICE-versus-EV costs and receive comparison results by email.",

      "Developed full-stack applications using Next.js, React, Node.js, PostgreSQL, and MongoDB, contributing across implementation, integration, testing, and deployment.",

      "Built integrations with Geotab and Samsara telematics APIs, investigating their capabilities and limitations and implementing workers to retrieve and process high-volume vehicle data.",

      "Processed telematics data to derive operational metrics including energy consumption, available vehicle range, and distance travelled, and developed dashboards, charts, tables, and historical trip views for fleet visualization.",

      "Implemented Redis-based processing for high-volume telematics workflows, allowing application services to work with vehicle data without persisting all retrieved telemetry to the primary application database.",

      "Worked with vehicle and charging data from external platforms and OCPP-based charging infrastructure, including an exploratory Go service for initial charger communication and status reporting.",

      "Conducted process-discovery sessions with internal stakeholders for a proposed operations platform, mapping workflows across disconnected business tools and translating operational problems into software requirements.",

      "Supported application delivery and infrastructure using GitHub Actions, Docker, AWS, Heroku, and Vercel across production applications.",
    ],
  },
}
