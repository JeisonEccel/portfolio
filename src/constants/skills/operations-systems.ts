import { SkillSet } from "@/app/(sections)/Skills"

export const operationsSystems: SkillSet = {
  name: "Operations & Business Systems",
  color: {
    filled: "bg-sky-500 border-sky-600",
    empty: "bg-sky-200 border-sky-400",
  },
  groups: [
    {
      name: "Process & Workflow Systems",
      skills: [
        { name: "Process Analysis", level: 5 },
        { name: "Workflow Optimization", level: 5 },
        { name: "Continuous Improvement", level: 4 },
        { name: "Systems Thinking", level: 5 },
        { name: "Layout Optimization", level: 5 },
      ],
    },
    {
      name: "Operations & Planning",
      skills: [
        { name: "ERP Systems", level: 5 },
        { name: "Production Planning", level: 4 },
        { name: "Resources Planning", level: 5 },
        { name: "Supply Chain Management", level: 4 },
        { name: "Quality Processes", level: 3 },
      ],
    },
    {
      name: "Business Context",
      skills: [
        { name: "Business Modeling", level: 4 },
        { name: "Operations Strategy", level: 5 },
        { name: "KPIs and Reporting", level: 5 },
        { name: "Business Analytics", level: 4 },
        { name: "Market Analysis", level: 3 },
      ],
    },
  ],
}
