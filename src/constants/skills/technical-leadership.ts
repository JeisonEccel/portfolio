import { SkillSet } from "@/app/(sections)/Skills"

export const technicalLeadership: SkillSet = {
  name: "Project & Technical Leadership",
  color: {
    filled: "bg-amber-400 border-amber-500",
    empty: "bg-amber-100 border-amber-300",
  },
  groups: [
    {
      name: "Project Delivery",
      skills: [
        { name: "Project Management", level: 5 },
        { name: "Project Execution", level: 5 },
        { name: "Prioritization", level: 5 },
        { name: "Milestone Planning", level: 4 },
        { name: "Agile / Kanban", level: 4 },
      ],
    },
    {
      name: "Technical Leadership",
      skills: [
        { name: "Technical Leadership", level: 5 },
        { name: "Team Management", level: 4 },
        { name: "Task Delegation", level: 4 },
        { name: "Technical Mentoring", level: 4 },
        { name: "Code / Design Review", level: 4 },
      ],
    },
    {
      name: "Collaboration & Requirements",
      skills: [
        { name: "Requirements Analysis", level: 5 },
        { name: "Customer Requirements", level: 5 },
        { name: "Cross-Functional Collaboration", level: 4 },
        { name: "Stakeholder Collaboration", level: 4 },
        { name: "Technical Communication", level: 5 },
      ],
    },
  ],
}
