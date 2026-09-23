"use client"

import { Card } from "@/components/cards"
import { ExpandButton } from "@/components/buttons"
import { Section } from "@/components/section"
import { SubTitle, Title } from "@/components/title"
import { Videos } from "@/components/video"
import { useState } from "react"
import { Image, Images } from "@/components/image"
import { Code, PencilRuler } from "lucide-react"
import { Links } from "@/components/links"
import { praticaTool } from "@/constants/projects/pratica-tool"
import { myFinancesApi } from "@/constants/projects/my-finances-api"
import { personalWebsite } from "@/constants/projects/personal-website"
import { cn } from "@/lib/utils"
import { Project } from "@/types/projects"

const projectsList = [praticaTool, myFinancesApi, personalWebsite]

function ProjectCard(project: { invert: boolean } & Project) {
  const [expanded, setExpanded] = useState(false)
  const { name, type, cover, description, images, videos, links } = project
  return (
    <Card className="space-y-2 p-4">
      <div className="flex items-center gap-4 border-b-1 border-gray-300 pb-2">
        {type === "engineering" ? (
          <PencilRuler size={35} strokeWidth={1} />
        ) : (
          <Code size={35} strokeWidth={1} />
        )}
        <SubTitle>{name}</SubTitle>
      </div>
      <div
        className={cn(
          "flex flex-col md:flex-row gap-4 py-4",
          project.invert ? "md:flex-row-reverse" : "",
        )}
      >
        {cover && (
          <div className="w-full">
            <Image
              src={cover}
              alt={name}
              className="rounded-lg shadow-lg shadow-gray-500 w-full md:w-80 max-h-96 md:max-h-none"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className="space-y-4">
          {description &&
            description.map((d, i) => (
              <p key={i} className="text-justify">
                {d}
              </p>
            ))}
          <Links links={links} />
        </div>
      </div>
      {(images || videos) && (
        <ExpandButton expanded={expanded} setExpanded={setExpanded} />
      )}
      {expanded && (
        <>
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
      <p>
        These projects are personal initiatives where I explore ideas, solve
        practical problems, and experiment with technologies outside of my
        professional work. They give me the freedom to make the architectural
        and product decisions myself—from defining the problem and designing the
        system to implementation, testing, and deployment.
      </p>
      <div className="flex flex-col gap-4 py-4">
        {projectsList.map((project, index) => (
          <ProjectCard key={index} {...project} invert={index % 2 === 1} />
        ))}
      </div>
    </Section>
  )
}
