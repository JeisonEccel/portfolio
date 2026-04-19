import { Image } from "@/components/image"
import { Paragraph } from "@/components/paragraph"
import { Section } from "@/components/section"
import { Title } from "@/components/title"

export default function Introduction() {
  return (
    <Section id="intro">
      <Title>Turning Complex Operations into Software Solutions</Title>
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <Image
          src="/images/intro-photo.jpg"
          alt="Small business"
          className="w-full max-h-120"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <div className="md:text-base py-5 md:py-0">
          <Paragraph>
            I design and build systems that turn complex operations into
            scalable, reliable software.
          </Paragraph>
          <Paragraph>
            With a background spanning 15+ years in production engineering and
            software development, I specialize in translating real-world
            workflows into modern platforms, combining system architecture,
            cloud infrastructure, and product thinking.
          </Paragraph>
          <Paragraph>
            My work focuses on areas such as multi-tenant SaaS systems, backend
            services, and developer platforms, where performance, scalability,
            and usability are critical. I’ve built end-to-end solutions
            integrating business operations, data systems, and user-facing
            applications, bridging the gap between engineering environments and
            software systems.
          </Paragraph>
          <Paragraph>
            This site showcases selected projects and experiences across
            software, systems design, and operations, highlighting how practical
            engineering knowledge can be applied to build better, more intuitive
            technology.
          </Paragraph>
        </div>
      </div>
    </Section>
  )
}
