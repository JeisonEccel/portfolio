import { SkillSet } from "@/app/(sections)/Skills"

export const systemsEngineering: SkillSet = {
  name: "Systems & Software Engineering",
  color: {
    filled: "bg-teal-500 border-teal-600",
    empty: "bg-teal-200 border-teal-400",
  },
  groups: [
    {
      name: "Backend & Architecture",
      skills: [
        { name: "System Design", level: 5 },
        { name: "Solutions Architecture", level: 4 },
        { name: "Java (Spring Boot)", level: 5 },
        { name: "API Design", level: 5 },
        { name: "Microservices Architecture", level: 4 },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 4 },
        { name: "Terraform (IaC)", level: 4 },
        { name: "Distributed Systems", level: 3 },
        { name: "CI/CD", level: 3 },
        { name: "Docker", level: 3 },
      ],
    },
    {
      name: "Data & Persistence",
      skills: [
        { name: "PostgreSQL", level: 5 },
        { name: "SQL Server", level: 5 },
        { name: "Redis", level: 4 },
        { name: "Data Modeling", level: 5 },
        { name: "Database Architecture", level: 5 },
      ],
    },
    {
      name: "Frontend & Applications",
      skills: [
        { name: "Next.js", level: 5 },
        { name: "React", level: 4 },
        { name: "TypeScript", level: 4 },
        { name: "JavaScript", level: 4 },
        { name: "JavaFX (Desktop Apps)", level: 5 },
      ],
    },
  ],
}
