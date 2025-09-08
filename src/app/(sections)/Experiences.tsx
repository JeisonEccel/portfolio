"use client"

import { useState } from "react"
import { Card } from "@/components/cards"
import { ExpandButton } from "@/components/buttons"
import { ImageExperience, Images, LogoLink } from "@/components/image"
import { Paragraph } from "@/components/paragraph"
import { Section } from "@/components/section"
import { SubTitle, Title } from "@/components/title"
import { DiscItem, DiscList } from "@/components/disc-list"
import { nengatu } from "@/constants/work/nengatu"
import { sevengen } from "@/constants/work/7gen"
import { armetal } from "@/constants/work/armetal"
import { jvcPrecision } from "@/constants/work/jvc-precision"
import { customPrototype } from "@/constants/work/custom-prototype"
import { multicaseSystems } from "@/constants/work/multicase-systems"
import { kozetek } from "@/constants/work/kozetek"
import { boxcar } from "@/constants/work/boxcar"
import { domBosco } from "@/constants/work/dom-bosco"
import { pafer } from "@/constants/work/pafer"
import { centennial } from "@/constants/education/centennial"
import { udesc } from "@/constants/education/udesc"
import { senaiAppretice, senaiTechnician } from "@/constants/education/senai"
import { VideoExperience, VideoFrame, Videos } from "@/components/video"
import { RadioButton } from "@/components/radion-button"

type WorkExperience = {
  company: string
  position: string
  country: string
  website?: string
  from: string
  to: string
  logo?: string
  description?: string[]
  contributions?: string[]
  images?: ImageExperience[]
  videos?: VideoExperience[]
}

type EducationExperience = {
  institution: string
  course: string
  country: string
  website?: string
  from: string
  to: string
  logo?: string
  images?: ImageExperience[]
  videos?: VideoExperience[]
}

type FilterType = "work" | "education" | "both"

const experiences = [
  nengatu,
  sevengen,
  armetal,
  jvcPrecision,
  customPrototype,
  centennial,
  multicaseSystems,
  kozetek,
  udesc,
  boxcar,
  domBosco,
  senaiTechnician,
  pafer,
  senaiAppretice,
]

function CompanyHeader({
  title,
  from,
  to,
  country,
}: {
  title: string
  from: string
  to: string
  country: string
}) {
  return (
    <div className="pt-2 md:p-0">
      <SubTitle className="font-normal">{title}</SubTitle>
      <Paragraph className="tracking-widest p-0 text-gray-400 text-sm md:text-base">
        {from} to {to} | {country}
      </Paragraph>
    </div>
  )
}

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

function Contributions({ contributions }: { contributions?: string[] }) {
  if (!contributions) return <></>

  return (
    <div className="p-2 bg-white/50 border border-black/20 rounded-md">
      <Paragraph className="font-bold">Contributions & Learnings:</Paragraph>
      <DiscList>
        {contributions.map((c, i) => (
          <DiscItem key={i}>
            <Paragraph>{c}</Paragraph>
          </DiscItem>
        ))}
      </DiscList>
    </div>
  )
}

function WorkCard(work: WorkExperience) {
  const [expanded, setExpanded] = useState(false)
  const {
    company,
    position,
    country,
    website,
    from,
    to,
    logo,
    description,
    contributions,
    images,
    videos,
  } = work
  return (
    <Card className="bg-blue-50 dark:bg-blue-900/75 border-blue-300 dark:border-blue-800  space-y-2">
      <div className="flex justify-between">
        <div className="md:flex gap-4 items-end">
          {logo && <LogoLink logo={logo} alt={company} link={website} />}
          <CompanyHeader
            title={position}
            from={from}
            to={to}
            country={country}
          />
        </div>
        <ExpandButton expanded={expanded} setExpanded={setExpanded} />
      </div>
      {expanded && (
        <>
          <Description description={description} />
          <Contributions contributions={contributions} />
          <Images images={images} path="/experiences" />
          <Videos videos={videos} />
        </>
      )}
    </Card>
  )
}

function EducationCard(education: EducationExperience) {
  const [expanded, setExpanded] = useState(false)
  const {
    institution,
    course,
    country,
    website,
    from,
    to,
    logo,
    images,
    videos,
  } = education
  return (
    <Card className="bg-green-100 dark:bg-green-900/75 border-green-400 dark:border-green-700 space-y-2">
      <div className="flex justify-between">
        <div className="md:flex gap-4 items-end">
          {logo && <LogoLink logo={logo} alt={institution} link={website} />}
          <CompanyHeader title={course} from={from} to={to} country={country} />
        </div>
        {(images || !!videos) && (
          <ExpandButton expanded={expanded} setExpanded={setExpanded} />
        )}
      </div>
      {expanded && (
        <>
          <Images images={images} path="/experiences" />
          <Videos videos={videos} />
        </>
      )}
    </Card>
  )
}

function ExperienceCard({
  work,
  education,
}: {
  work?: WorkExperience
  education?: EducationExperience
}) {
  if (work) {
    return <WorkCard {...work} />
  }

  if (education) {
    return <EducationCard {...education} />
  }

  return <></>
}

function Filters({
  filter,
  setFilter,
}: {
  filter: FilterType
  setFilter: (val: FilterType) => void
}) {
  return (
    <div className="flex gap-4 my-4">
      <RadioButton
        label="Work"
        value="work"
        checked={filter === "work"}
        onChange={(val) => setFilter(val as FilterType)}
      />
      <RadioButton
        label="Education"
        value="education"
        checked={filter === "education"}
        onChange={(val) => setFilter(val as FilterType)}
      />
      <RadioButton
        label="Both"
        value="both"
        checked={filter === "both"}
        onChange={(val) => setFilter(val as FilterType)}
      />
    </div>
  )
}

export default function Experiences() {
  const [filter, setFilter] = useState<FilterType>("both")

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === "both") return true
    return Object.keys(exp).some((v) => v === filter)
  })

  return (
    <Section id="experiences">
      <Title>Career Journey</Title>
      <Filters filter={filter} setFilter={setFilter} />
      <div className="flex flex-col gap-4">
        {filteredExperiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </Section>
  )
}
