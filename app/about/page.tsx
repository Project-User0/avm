'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/Card'
import { StatsCounter } from '@/components/StatsCounter'
import { motion } from 'framer-motion'

import { schoolInfo, stats, whyChooseUs } from '@/data/school'
import { faculty } from '@/data/faculty'
import { CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection
          title="About Annapurna Vidhya Mandir"
          subtitle="Our Story"
          description="Established in 2005, Annapurna Vidhya Mandir has been a beacon of educational excellence, transforming lives through holistic education and innovative teaching methodologies."
          image="/images/welcome-section.png"
        />

        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <SectionHeading
                  title="Our Mission & Vision"
                  subtitle="Purpose"
                  align="left"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">{schoolInfo.mission}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">{schoolInfo.vision}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/welcome-section.png"
                  alt="About"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                  crossOrigin="anonymous"
                />
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Our Core Values"
              subtitle="Guiding Principles"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolInfo.values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{value}</h3>
                    <p className="text-sm text-muted-foreground">
                      We are committed to fostering {value.toLowerCase()} in all aspects of school life.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <StatsCounter stats={stats} />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Our Leadership Team"
              subtitle="Faculty"
              description="Experienced educators dedicated to student success and holistic development."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      crossOrigin="anonymous"
                    />
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <p className="text-sm font-medium text-primary">{member.designation}</p>
                    </CardHeader>
                    <CardDescription className="line-clamp-3">{member.bio}</CardDescription>
                    <div className="mt-4 text-xs text-muted-foreground">
                      <p>{member.experience} years of experience</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Why Choose Annapurna Vidhya Mandir?"
              subtitle="Our Strengths"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, i) => (
                <Card key={reason.id} animated delay={i * 0.1}>
                  <CardHeader>
                    <CardTitle>{reason.title}</CardTitle>
                  </CardHeader>
                  <CardDescription>{reason.description}</CardDescription>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
