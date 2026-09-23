import { SkillSet } from "@/app/(sections)/Skills"

export const productOperations: SkillSet = {
  name: "Product & Operations",
  color: {
    filled: "bg-sky-500 border-sky-600",
    empty: "bg-sky-200 border-sky-400",
  },
  groups: [
    {
      name: "Product Development",
      skills: [
        { name: "Product Development", level: 5 },
        { name: "Product Discovery", level: 4 },
        { name: "Requirements Prioritization", level: 4 },
        { name: "Prototyping", level: 5 },
        { name: "User Feedback", level: 4 },
      ],
    },
    {
      name: "Processes & Systems",
      skills: [
        { name: "Process Analysis", level: 5 },
        { name: "Workflow Design", level: 5 },
        { name: "Systems Thinking", level: 5 },
        { name: "Process Improvement", level: 5 },
        { name: "ERP Systems", level: 5 },
      ],
    },
    {
      name: "Manufacturing & Operations",
      skills: [
        { name: "Production Planning", level: 4 },
        { name: "Manufacturing", level: 5 },
        { name: "Resource Planning", level: 4 },
        { name: "Supply Chain", level: 4 },
        { name: "Quality Processes", level: 4 },
      ],
    },
  ],
}
