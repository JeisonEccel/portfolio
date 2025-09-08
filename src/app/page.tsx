import { SectionDivider } from "@/components/section"
import Introduction from "./(sections)/Introduction"
import Skills from "./(sections)/Skill"
import Projects from "./(sections)/Projects"
import Experiences from "./(sections)/Experiences"
import About from "./(sections)/About"
import Contact from "./(sections)/Contact"

export default function Page() {
  return (
    <>
      <Introduction />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experiences />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
    </>
  )
}
