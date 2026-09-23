import { Image } from "@/components/image"
import { Section } from "@/components/section"
import { Title } from "@/components/title"

export default function About() {
  return (
    <Section id="about">
      <Title>About Me</Title>

      <div className="space-y-4 text-justify">
        <div className="flex md:block md:float-right w-full md:w-96 md:ml-4">
          <Image
            src="/images/about.jpg"
            alt="Jeison Eccel"
            className="w-full h-[480px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <p>
          I&apos;ve always been curious about how things work and how they can
          be made better. Growing up in Joinville, Brazil, I spent a lot of time
          drawing and became interested in computers when my family got our
          first one. My dad noticed both interests and suggested that I learn
          AutoCAD. Once I learned how to draw parts on a computer, my next
          question was simple: how are these parts actually made?
        </p>

        <p>
          That question led me to a machining apprenticeship at SENAI, then to
          Mechanical Projects, product design, and eventually Production and
          Systems Engineering. I worked full-time while studying at night, and
          each experience seemed to create the next question. Designing parts
          made me interested in how they were manufactured. Manufacturing made
          me interested in production systems. Engineering projects made me
          interested in how people, information, materials, and processes fit
          together.
        </p>

        <p>
          That curiosity eventually led me to software. While managing
          engineering at JVC Precision, I was trying to improve workflows that
          depended heavily on spreadsheets and disconnected information. I had
          also worked with ERP systems before and knew how difficult they could
          be to adapt to the actual needs of a company. I started building an
          internal system as a temporary solution while improving the processes
          and looking for a better ERP. But the temporary solution kept growing,
          eventually connecting much of the business, from sales and engineering
          to production, procurement, shipping, and quality.
        </p>

        <p>
          By 2019, I realized I was becoming more interested in software than
          traditional engineering. I started studying Java, JavaScript, PHP,
          databases, and software architecture, initially thinking about how I
          could build a more robust version of the system I had created. When I
          moved to British Columbia in 2021, I decided to test whether software
          development should become my career. I joined 7Gen part-time, later
          moved into software development full-time, and found that I enjoyed
          working professionally with software as much as I had hoped.
        </p>

        <p>
          Nengatu grew from many of those experiences. After years of working
          with manufacturing systems and seeing the limitations of traditional
          ERP software, I wanted to explore what I would build if I could start
          from the foundations instead of adapting old workflows. That became a
          multi-year project spanning product decisions, software architecture,
          backend and frontend development, cloud infrastructure, deployment,
          and direct conversations with users.
        </p>

        <p>
          The tools I use have changed a lot over the years, but the motivation
          behind the work has stayed surprisingly similar. I enjoy building
          things and creating solutions that remove unnecessary work. The
          simplest way I describe it is: I enjoy making life easier; it
          doesn&apos;t matter if it&apos;s for me or someone else.
        </p>

        <p>
          I approach learning in much the same way. I prefer understanding
          concepts instead of memorizing terminology, usually creating a
          scenario in my head where a new idea could be useful before applying
          it to a real problem. From there, I go deeper into documentation and
          specifications when I need the details to implement it properly. That
          approach has helped me move across machining, mechanical design,
          manufacturing, engineering leadership, project management, and
          software without feeling like I was starting over every time.
        </p>

        <p>
          Outside of work, music has been one of the constants in my life. I
          started playing guitar at 14 and was teaching a few neighborhood kids
          not long afterward. Years later, music also introduced me to my wife
          when we formed a classic rock band during university. I still play
          guitar today, and one of my personal software projects, Pratica Tool,
          brings that long-time interest together with something else I enjoy:
          building tools that solve problems I experience myself.
        </p>
      </div>
    </Section>
  )
}
