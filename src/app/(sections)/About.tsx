import { Paragraph } from "@/components/paragraph"
import { Section } from "@/components/section"
import { Title } from "@/components/title"

export default function About() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <div className="flex flex-col gap-4">
        <Paragraph>
          I was born and raised in Joinville, SC, a dynamic industrial city
          known as the &quot;Manchester Catarinense&quot; for its thriving
          mechanical and manufacturing hub, home to Brazil&apos;s largest
          mold-making and metalworking industries and host of the world-renowned
          Joinville Dance Festival. My earliest memories are filled with
          sketches, from animals and landscapes to people, always drawing,
          always creating.
        </Paragraph>
        <Paragraph>
          At age 8, my curiosity exploded when my dad brought home our first
          computer. I quickly taught myself by exploring features online,
          becoming the go-to tech helper in my circle. Later, in early high
          school, he signed me up for an AutoCAD course. I mastered it in just
          three months, and even before the course ended, that skill opened the
          door to a machining apprenticeship at SENAI, where I learned how
          drawings truly come to life.
        </Paragraph>
        <Paragraph>
          After high school, I faced a tough choice between full-time Mechanical
          Engineering or a night technician certification in Mechanical
          Projects. Financial constraints made the decision easy, but as I dove
          into my technician course, I fell in love with designing and building.
          While studying, I worked at Dom Bosco Machining and soon joined
          Boxcar, where I designed products and learned from a former Volkswagen
          logistics expert, experiences that shaped my ambition to pursue
          further study in Production Engineering at UDESC, one of Brazil&apos;s
          top-ranked universities.
        </Paragraph>
        <Paragraph>
          While at UDESC, I balanced studies with work at Kozetek, delivering
          firsthand lessons on flexibility, collaboration, and leadership. After
          graduating, I joined Multicase Systems to support automotive
          customers, but realized I needed to improve my English to bridge
          global opportunities. That led me to Centennial College in Toronto to
          study Project Management and start my Canadian journey.
        </Paragraph>
        <Paragraph>
          Canada quickly felt like home, from working in software development at
          JVC Precision and 7Gen to expanding my craft and mindset. In 2023, I
          turned a long-standing passion into reality and founded Nengatu, a
          bootstrapped ERP startup. As a solo founder, I&apos;ve worn nearly
          every hat, from backend and frontend developer to marketer, legal
          manager, and salesperson, learning to prioritize ruthlessly and build
          with heart.
        </Paragraph>
        <Paragraph>
          When I&apos;m not behind the screen or sketching ideas, you&apos;ll
          find me strumming my electric guitar, something I began at 14, and
          later taught neighborhood kids at age 15. I met my wife through music;
          we formed a classic rock band in university and married before moving
          to Canada. Today, she supports Nengatu&apos;s visuals while excelling
          in her own career. And yes, growing up, I wasn&apos;t a soccer fanatic
          like many Brazilians. I loved volleyball, and still do, along with
          swimming and cycling.
        </Paragraph>
      </div>
    </Section>
  )
}
