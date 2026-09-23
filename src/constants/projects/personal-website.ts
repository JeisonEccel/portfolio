import { Project } from "@/types/projects"

export const personalWebsite: Project = {
  name: "Personal Website",
  type: "software",
  cover: "/projects/personal-website.png",
  description: [
    "Personal portfolio and blog built with Next.js, TypeScript, and Tailwind CSS to present my projects, professional experience, technical skills, and writing in a structured and accessible format.",

    "The application uses a simple component-based structure focused on responsive design, content organization, and maintainability. Project and experience content is separated from presentation components, making it easy to evolve the site as new projects, articles, and professional material are added.",

    "The website is deployed on Vercel with a custom domain, with blog content and assets stored using Cloudflare R2. The source repository is public and also provides a transparent view of the project's ongoing development through its code, commits, issues, and pull requests.",
  ],
  links: [
    {
      title: "GitHub",
      href: "https://github.com/JeisonEccel/portfolio",
    },
  ],
}
