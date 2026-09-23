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
            <SubTitle>Software Development</SubTitle>
            <p className="text-gray-500">Full-Stack, APIs & Cloud</p>
          </Card>

          <Card className="p-4">
            <SubTitle>Technical Leadership</SubTitle>
            <p className="text-gray-500">Projects, Teams & Delivery</p>
          </Card>

          <Card className="p-4">
            <SubTitle>Product Development</SubTitle>
            <p className="text-gray-500">Requirements to Real-World Use</p>
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
              My background spans 15+ years across product development,
              engineering, manufacturing, project leadership, and software
              development. That experience gives me a practical perspective on
              both how systems are built and the real-world problems they need
              to solve.
            </p>

            <p>
              Today, I work hands-on across software architecture, backend and
              frontend development, databases, cloud infrastructure, and
              deployment. I’ve taken products from early requirements and system
              design through implementation, release, and user adoption, while
              also leading technical projects and development work.
            </p>

            <p>
              This site brings together selected projects and experiences from
              that journey—from physical products and manufacturing systems to
              ERP platforms and modern web applications.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
