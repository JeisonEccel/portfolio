import { SectionDivider } from "@/components/section"
import Introduction from "./(sections)/Introduction"
import Skills from "./(sections)/Skill"
import Projects from "./(sections)/Projects"

export default function Page() {
  return (
    <>
      <Introduction />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
    </>
  )
}
