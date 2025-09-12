import { Card } from "@/components/cards"
import { Paragraph } from "@/components/paragraph"
import { Section } from "@/components/section"
import { SubTitle, Title } from "@/components/title"
import { businessManagement } from "@/constants/skills/business-management"
import { productionEngineering } from "@/constants/skills/production-engineering"
import { softwareDevelopment } from "@/constants/skills/software-development"

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

type SkillSet = {
  name: string
  color: ProgressColor
  groups: SkillGroup[]
}

const skillsets = [
  businessManagement,
  softwareDevelopment,
  productionEngineering,
]

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
    <div className="flex gap-4">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < level
          return (
            <div
              key={i}
              className={`h-4 w-4 rounded-full border ${
                filled ? color.filled : color.empty
              }`}
            />
          )
        })}
      </div>
      <Paragraph className="text-xs font-normal">{name}</Paragraph>
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
    <div>
      <SubTitle className="md:text-base font-normal pb-2">{name}</SubTitle>
      {skills.map((skill, index) => (
        <SkillProgress key={index} color={color} {...skill} />
      ))}
    </div>
  )
}

function SkillsCard({ skillset }: { skillset: SkillSet }) {
  const { name, color, groups } = skillset
  return (
    <Card className="px-5 pb-5">
      <SubTitle className="py-4">{name}</SubTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {groups.map((group, index) => (
          <SkillsGroup key={index} color={color} {...group} />
        ))}
      </div>
    </Card>
  )
}

export default function Skills() {
  return (
    <Section id="skills">
      <Title>Skills</Title>
      <Paragraph>
        The skills below are grouped by category for easier navigation. Each
        skill is rated on a scale from 1 to 5, where 1 represents basic
        knowledge or limited experience, and 5 reflects extensive expertise and
        hands-on experience.
      </Paragraph>
      <div className="flex flex-col md:grid-cols-2 gap-5">
        {skillsets.map((skillset, index) => {
          return <SkillsCard key={index} skillset={skillset} />
        })}
      </div>
    </Section>
  )
}
