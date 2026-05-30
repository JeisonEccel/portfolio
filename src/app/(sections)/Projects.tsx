"use client"

import { Card } from "@/components/cards"
import { ExpandButton } from "@/components/buttons"
import { Section } from "@/components/section"
import { SubTitle, Title } from "@/components/title"
import { VideoExperience, Videos } from "@/components/video"
import { useState } from "react"
import { Image, ImageExperience, Images } from "@/components/image"
import { Code, FolderGit, PencilRuler } from "lucide-react"
import { personalWebsite } from "@/constants/projects/personal-website"
import { LinkExperience, Links } from "@/components/links"
import { myFinancesBackend } from "@/constants/projects/my-finances-backend"
import { guitarPracticeV1 } from "@/constants/projects/guitar-practice-v1"
import { guitarPracticeV2 } from "@/constants/projects/guitar-practice-v2"
import { cn } from "@/lib/utils"

export type Project = {
  name: string
  type: string
  cover?: string
  description?: string[]
  images?: ImageExperience[]
  videos?: VideoExperience[]
  links?: LinkExperience[]
}

const projectsList = [
  guitarPracticeV2,
  myFinancesBackend,
  personalWebsite,
  guitarPracticeV1,
]

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
      <div className="flex items-center gap-4 pb-10">
        <FolderGit size={48} />
        <Title>Projects</Title>
      </div>
      <p>
        These projects represent my personal initiatives and experiments outside
        of formal work or education. Each one reflects a problem I was curious
        about, a skill I wanted to master, or an idea I wanted to bring to life.
        From software applications to engineering experiments, these projects
        showcase my creativity, technical abilities, and passion for building
        things that matter.
      </p>
      <div className="flex flex-col gap-4 py-4">
        {projectsList.map((project, index) => (
          <ProjectCard key={index} {...project} invert={index % 2 === 1} />
        ))}
      </div>
    </Section>
  )
}
