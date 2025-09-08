import { SectionDivider } from "@/components/section"
import Introduction from "./(sections)/Introduction"
import Skills from "./(sections)/Skill"

export default function Page() {
  return (
    <>
      <Introduction />
      <SectionDivider />
      <Skills />
    </>
  )
}
