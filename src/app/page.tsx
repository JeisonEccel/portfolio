import About from "./(sections)/About"
import Contact from "./(sections)/Contact"
import Experiences from "./(sections)/Experiences"
import HomeSection from "./(sections)/Home"
import Projects from "./(sections)/Projects"
import Skills from "./(sections)/Skills"

export default function Page() {
  return (
    <>
      <HomeSection />
      <Skills />
      <Projects />
      <Experiences />
      <About />
      <Contact />
    </>
  )
}
