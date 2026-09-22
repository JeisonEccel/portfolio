import { SkillSet } from "@/app/(sections)/Skills"

export const systemsEngineering: SkillSet = {
  name: "Software & Systems Engineering",
  color: {
    filled: "bg-teal-500 border-teal-600",
    empty: "bg-teal-200 border-teal-400",
  },
  groups: [
    {
      name: "Backend & Architecture",
      skills: [
        { name: "Java / Spring Boot", level: 5 },
        { name: "REST API Design", level: 5 },
        { name: "System Design", level: 5 },
        { name: "Software Architecture", level: 4 },
        { name: "Multi-Tenant Architecture", level: 4 },
      ],
    },
    {
      name: "Frontend & Applications",
      skills: [
        { name: "Next.js", level: 5 },
        { name: "React", level: 4 },
        { name: "TypeScript", level: 4 },
        { name: "JavaScript", level: 4 },
        { name: "JavaFX", level: 5 },
      ],
    },
    {
      name: "Data & Persistence",
      skills: [
        { name: "PostgreSQL", level: 5 },
        { name: "SQL Server", level: 5 },
        { name: "Redis", level: 4 },
        { name: "Relational Data Modeling", level: 5 },
        { name: "Database Design", level: 5 },
      ],
    },
    {
      name: "Cloud & Delivery",
      skills: [
        { name: "AWS", level: 4 },
        { name: "Terraform / IaC", level: 4 },
        { name: "Git / GitHub", level: 4 },
        { name: "CI/CD", level: 3 },
        { name: "Docker", level: 3 },
      ],
    },
  ],
}
