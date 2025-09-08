"use client"

import { Card } from "@/components/cards"
import { ExpandButton } from "@/components/buttons"
import { Paragraph } from "@/components/paragraph"
import { Section } from "@/components/section"
import { Title } from "@/components/title"
import { VideoExperience, Videos } from "@/components/video"
import { designConcepts } from "@/constants/projects/design-concepts"
import { threeDPrinting } from "@/constants/projects/printing"
import { useState } from "react"
import { ImageExperience, Images } from "@/components/image"

type Project = {
  name: string
  website?: string
  description?: string[]
  contributions?: string[]
  images?: ImageExperience[]
  videos?: VideoExperience[]
}

const projectsList = [designConcepts, threeDPrinting]

function Description({ description }: { description?: string[] }) {
  if (!description) return <></>

  return (
    <div className="p-2 bg-white/50 border border-black/20 rounded-md">
      <Paragraph className="font-bold">Description:</Paragraph>
      {description.map((d, i) => (
        <Paragraph key={i}>{d}</Paragraph>
      ))}
    </div>
  )
}

function ProjectCard(work: Project) {
  const [expanded, setExpanded] = useState(false)
  const { name, description, images, videos } = work
  return (
    <Card className="space-y-2">
      <div className="flex justify-between">
        <div className="md:flex gap-4 items-end">{name}</div>
        <ExpandButton expanded={expanded} setExpanded={setExpanded} />
      </div>
      {expanded && (
        <>
          <Description description={description} />
          <Images images={images} path="/projects" />
          <Videos videos={videos} />
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
