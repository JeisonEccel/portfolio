import ContactSection from "./(sections)/Contact"
import HomeSection from "./(sections)/Home"
import SkillsSection from "./(sections)/Skills"

export default async function Page() {
  return (
    <>
      <HomeSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
