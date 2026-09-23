import { Card } from "@/components/cards"
import { Section } from "@/components/section"
import { SubTitle, Title } from "@/components/title"
import { systemsEngineering } from "@/constants/skills/systems-engineering"
import { technicalLeadership } from "@/constants/skills/technical-leadership"
import { productOperations } from "@/constants/skills/product-operations"
import { ChartBarBig } from "lucide-react"
import { cn } from "@/lib/utils"

type Skill = {
  name: string
  level: number
}

type SkillGroup = {
  name: string
  skills: Skill[]
}

type ProgressColor = {
  filled: string
  empty: string
}

export type SkillSet = {
  name: string
  color: ProgressColor
  groups: SkillGroup[]
}

const skillsets = [systemsEngineering, technicalLeadership, productOperations]

function SkillProgress({
  name,
  level,
  color,
}: {
  name: string
  level: number
  color: ProgressColor
}) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex flex-row shadow-md shadow-gray-300">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < level
          return (
            <div
              key={i}
              className={cn(
                "h-4 w-5 border",
                i === 0 ? "rounded-l-sm" : "",
                i === 4 ? "rounded-r-sm" : "",
                filled ? color.filled : color.empty,
              )}
            />
          )
        })}
      </div>
      <p className="text-xs">{name}</p>
    </div>
  )
}

function SkillsGroup({
  name,
  skills,
  color,
}: {
  name: string
  skills: Skill[]
  color: ProgressColor
}) {
  return (
    <Card className="md:max-w-90 p-4">
      <SubTitle className="md:text-base font-normal pb-2">{name}</SubTitle>
      <div className="flex flex-col gap-2">
        {skills.map((skill, index) => (
          <SkillProgress key={index} color={color} {...skill} />
        ))}
      </div>
    </Card>
  )
}

function Skillset({ skillset }: { skillset: SkillSet }) {
  const { name, color, groups } = skillset
  return (
    <div>
      <SubTitle className="md:text-2xl py-4">{name}</SubTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {groups.map((group, index) => (
          <SkillsGroup key={index} color={color} {...group} />
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <Section id="skills">
      <div className="flex items-center gap-4 pb-10">
        <ChartBarBig size={48} />
        <Title>Skills</Title>
      </div>
      <div className="text-justify space-y-4">
        <p>
          My experience combines software engineering, technical leadership,
          product development, and operational systems—disciplines that have
          often overlapped throughout my career.
        </p>
        <p>
          Skills are grouped by area and rated from 1 to 5 based on my relative
          depth of hands-on experience, from foundational knowledge to areas I
          have applied extensively across multiple projects and roles.
        </p>
      </div>

      <div className="flex flex-col md:grid-cols-2 gap-5">
        {skillsets.map((skillset, index) => {
          return <Skillset key={index} skillset={skillset} />
        })}
      </div>
    </Section>
  )
}
