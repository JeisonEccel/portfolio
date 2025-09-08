import { Image } from "@/components/image"
import { Paragraph } from "@/components/paragraph"
import { Section } from "@/components/section"
import { Title } from "@/components/title"

export default function Introduction() {
  return (
    <Section id="intro">
      <Title>
        Startup Founder, Software Developer, and Production Engineer
      </Title>
      <div className="md:flex md:space-x-6">
        <Image
          src="/images/intro-photo.jpg"
          alt="Small business"
          className="w-full md:w-1/2 max-h-72"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <Paragraph className="md:text-base md:w-1/2 py-5 md:py-0">
          After 15 years in manufacturing and production engineering, I shifted
          to software development, bringing the problem-solving mindset of an
          engineer to the digital world. In 2023, I founded my own startup,
          where I combine hands-on coding with running a company. This site
          showcases my work at the intersection of Software Development,
          Production Engineering, and Entrepreneurship — from mechanical systems
          to software projects — demonstrating how practical engineering
          experience fuels innovative software solutions.
        </Paragraph>
      </div>
    </Section>
  )
}
