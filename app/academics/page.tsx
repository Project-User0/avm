'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Card'
import { ProgramCard } from '@/components/ProgramCard'
import { motion } from 'framer-motion'

import { programs, curriculum, cocurricular } from '@/data/academics'

export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection
          title="Academic Programs"
          subtitle="Curriculum"
          description="Comprehensive academic programs designed to develop critical thinking, creativity, and excellence from Nursery to Grade 12."
          image="/images/programs/integrated.png"
        />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Our Programs"
              subtitle="Tracks"
              description="Multi-stream educational pathways catering to diverse interests and aptitudes."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, i) => (
                <ProgramCard key={program.id} program={program} animated delay={i * 0.1} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Curriculum Framework"
              subtitle="Learning"
            />
            <Card>
              <CardHeader>
                <CardTitle>CBSE-Based with International Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-foreground mb-3">Core Subjects</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {curriculum.coreSubjects.map((subject, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-3">Skill Development</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {curriculum.skillDevelopment.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-3">Specializations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {curriculum.specializations.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-6 pt-6 border-t border-border">
                  {curriculum.overview}
                </p>
              </CardContent>
            </Card>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Co-Curricular Activities"
              subtitle="Beyond Academics"
              description="Holistic development through diverse activities and programs."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cocurricular.map((category, i) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.activities.map((activity, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
