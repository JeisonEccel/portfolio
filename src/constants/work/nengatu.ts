import { Experience } from "@/app/experiences/page"

export const nengatu: Experience = {
  work: {
    company: "Nengatu",
    position: "Founder and Software Engineer",
    country: "Canada",
    website: "https://www.nengatu.com/",
    from: "11/2023",
    to: "Present",
    logo: "nengatu.png",
    description: [
      "I founded Nengatu to build a modern ERP platform for small and mid-sized manufacturers, drawing on my previous experience developing internal ERP systems and working directly with manufacturing operations. I have taken the product from initial requirements and architecture through implementation, deployment, customer demonstrations, and onboarding.",

      "As the primary software developer and product owner, I work across backend and frontend development, system architecture, cloud infrastructure, product planning, and release management. The platform now covers 9 interconnected modules spanning product development, CRM, quoting, sales, procurement, production, inventory, logistics, and user management.",
    ],
    contributions: [
      "Designed the platform architecture from the ground up, including service boundaries, relational data models, multi-tenant data isolation, authentication and session flows, frontend applications, and cloud infrastructure.",

      "Developed Java and Spring Boot backend services with REST APIs, JPA, PostgreSQL, and Redis, along with a JavaFX desktop ERP and Next.js applications for account management and customer-facing workflows.",

      "Designed and deployed a regional architecture with centralized account services in Canada and customer-facing API deployments in Canada and Brazil, routing organizations to their configured region while maintaining a shared application codebase.",

      "Built and maintained AWS infrastructure using Terraform and GitHub Actions, automating testing and application deployments across regional environments and establishing backend testing practices resulting in more than 6,000 unit tests in the customer-facing API.",

      "Built the product from early database and interface concepts through a production release with self-service registration, free-trial activation, authentication, organization setup, and ERP distribution for Windows and macOS.",

      "Defined the initial product roadmap from previous ERP and manufacturing experience, then reprioritized features based on customer demonstrations, user feedback, sales-partner input, implementation complexity, and expected product value.",

      "Managed development and releases using GitHub Kanban, issues, priorities, milestones, pull-request standards, testing requirements, and CI/CD workflows to coordinate features, defects, technical work, and deployments.",

      "Recruited and managed a junior software developer during the first year of development, defining tasks and priorities, reviewing pull requests, providing technical guidance, and retaining responsibility for architecture and complex implementation work.",

      "Led product demonstrations, sales-partner training, and customer onboarding, using feedback from prospective and active users to identify workflow gaps and refine product priorities.",
    ],
    images: [
      { file: "nengatu-erp-01.png", alt: "Nengatu login screen" },
      { file: "nengatu-erp-02.png", alt: "Nengatu product screen" },
      { file: "nengatu-erp-03.png", alt: "Nengatu crm screen" },
      { file: "nengatu-erp-04.png", alt: "Nengatu quoting screen" },
      { file: "nengatu-erp-05.png", alt: "Nengatu sales screen" },
      { file: "nengatu-erp-06.png", alt: "Nengatu procurement screen" },
      { file: "nengatu-erp-07.png", alt: "Nengatu production screen" },
      { file: "nengatu-erp-08.png", alt: "Nengatu logistics screen" },
      { file: "nengatu-erp-09.png", alt: "Nengatu human resources screen" },
    ],
    videos: [
      {
        src: "https://www.youtube.com/embed/d0YIMyw_h8Y?si=_IYiZdwbv9aEYiBn",
        title: "Overview",
      },
      {
        src: "https://www.youtube.com/embed/cVhtyksOaos?si=N7RjGJEqiaEQAXLk",
        title: "Custom Fields",
      },
      {
        src: "https://www.youtube.com/embed/KoHf8U30Rpw?si=aI3C3EwuHuwL5rh8",
        title: "Custom Views",
      },
      {
        src: "https://www.youtube.com/embed/DEIiZDe0C3g?si=oqChaWd40nMGY-Go",
        title: "Initial Setup",
      },
    ],
  },
}
