import { Card } from "@/components/cards"
import { Image } from "@/components/image"
import { Section } from "@/components/section"
import { SubTitle, Title } from "@/components/title"

export default function HomeSection() {
  return (
    <Section id="home" className="space-y-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_384px] gap-8 items-stretch">
          <div className="flex flex-col justify-end gap-10 md:p-10">
            <Title>Hi! I’m Jeison</Title>
            <p className="text-xl">
              I design and build systems that turn complex operations into
              scalable, reliable software.
            </p>
          </div>
          <Image
            src="/images/home.jpg"
            alt="Jeison Eccel"
            className="h-120 md:max-w-96 rounded-xl shadow-lg shadow-gray-600"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4">
            <SubTitle>15+ Years Experience</SubTitle>
            <p className="text-gray-500">Engineering & Software Development</p>
          </Card>
          <Card className="p-4">
            <SubTitle>Enterprise ERP Architect</SubTitle>
            <p className="text-gray-500">Designed & Built End-to-End</p>
          </Card>
          <Card className="p-4">
            <SubTitle>Full-Stack + Cloud</SubTitle>
            <p className="text-gray-500">Backend, Frontend & Infrastructure</p>
          </Card>
        </div>
      </div>
      <div className="md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-[240_1fr] lg:grid-cols-[480_1fr] gap-6">
          <Image
            src="/images/office.jpg"
            alt="Jeison Eccel"
            className="w-full md:w-120 max-h-120 md:max-h-80 mx-auto lg:mx-0 rounded-xl shadow-lg shadow-gray-600"
            style={{ height: "100%", objectFit: "cover" }}
          />
          <div className="md:text-base md:py-0 text-justify space-y-4">
            <p>
              With a background spanning 15+ years in production engineering and
              software development, I specialize in translating real-world
              workflows into modern platforms, combining system architecture,
              cloud infrastructure, and product thinking.
            </p>
            <p>
              My work focuses on areas such as multi-tenant SaaS systems,
              backend services, and developer platforms, where performance,
              scalability, and usability are critical. I’ve built end-to-end
              solutions integrating business operations, data systems, and
              user-facing applications, bridging the gap between engineering
              environments and software systems.
            </p>
            <p>
              This site showcases selected projects and experiences across
              software, systems design, and operations, highlighting how
              practical engineering knowledge can be applied to build better,
              more intuitive technology.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
