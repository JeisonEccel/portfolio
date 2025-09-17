"use client"

import { Card } from "@/components/cards"
import { ExpandButton } from "@/components/buttons"
import { Paragraph } from "@/components/paragraph"
import { Section } from "@/components/section"
import { SubTitle, Title } from "@/components/title"
import { VideoExperience, Videos } from "@/components/video"
import { designConcepts } from "@/constants/projects/design-concepts"
import { threeDPrinting } from "@/constants/projects/printing"
import { useState } from "react"
import { ImageExperience, Images } from "@/components/image"
import { Code, PencilRuler } from "lucide-react"
import { portfolioWebsite } from "@/constants/projects/portfolio"
import { LinkExperience, Links } from "@/components/links"
import { myFinancesBackend } from "@/constants/projects/my-finances-backend"

type Project = {
  name: string
  type: string
  description?: string[]
  images?: ImageExperience[]
  videos?: VideoExperience[]
  links?: LinkExperience[]
}

const projectsList = [
  myFinancesBackend,
  portfolioWebsite,
  designConcepts,
  threeDPrinting,
]

function Description({ description }: { description?: string[] }) {
  if (!description) return <></>

  return (
    <div className="border-t-1 border-light py-4">
      <Paragraph className="font-bold">Description:</Paragraph>
      {description.map((d, i) => (
        <Paragraph key={i}>{d}</Paragraph>
      ))}
    </div>
  )
}

function ProjectCard(project: Project) {
  const [expanded, setExpanded] = useState(false)
  const { name, type, description, images, videos, links } = project
  return (
    <Card className="space-y-2 px-4 py-2">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          {type === "engineering" ? (
            <PencilRuler
              size={35}
              strokeWidth={1}
              className="text-medium-dark dark:text-lighter"
            />
          ) : (
            <Code
              size={35}
              strokeWidth={1}
              className="text-medium-dark dark:text-lighter"
            />
          )}
          <SubTitle>{name}</SubTitle>
        </div>
        <ExpandButton expanded={expanded} setExpanded={setExpanded} />
      </div>
      {expanded && (
        <>
          <Description description={description} />
          <Images images={images} path="/projects" />
          <Videos videos={videos} />
          <Links links={links} />
        </>
      )}
    </Card>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Paragraph>
        These projects represent my personal initiatives and experiments outside
        of formal work or education. Each one reflects a problem I was curious
        about, a skill I wanted to master, or an idea I wanted to bring to life.
        From software applications to engineering experiments, these projects
        showcase my creativity, technical abilities, and passion for building
        things that matter.
      </Paragraph>
      <div className="flex flex-col gap-4">
        {projectsList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  )
}
