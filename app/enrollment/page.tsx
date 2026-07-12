'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Card'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function EnrollmentPage() {
  const enrollment = {
    whatToExpect: [
      'Welcome assembly and campus orientation',
      'Classroom assignment and desk allocation',
      'Assignment of mentor and buddy from senior class',
      'Introduction to school facilities and services',
      'Participation in induction program',
      'School supplies and uniform distribution',
    ],
    requiredDocuments: [
      'Original birth certificate and photocopy',
      'Transfer certificate (if applicable)',
      'Previous academic records (mark sheets)',
      'Vaccination certificate',
      'Passport-size photographs (8-10)',
      'Address proof (utility bill or ID)',
      'Medical checkup report',
    ],
    timeline: [
      {
        month: 'June',
        events: ['Student orientation program', 'Faculty introduction sessions'],
      },
      {
        month: 'July',
        events: ['Academic year begins', 'First parent-teacher meeting'],
      },
      {
        month: 'August',
        events: ['Co-curricular activities start', 'Sports trials'],
      },
    ],
  }

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection
          title="Enrollment Information"
          subtitle="Welcome"
          description="Get ready to join Annapurna Vidhya Mandir! Learn what to expect during enrollment and beyond."
          image="/images/gallery/campus-1.png"
        />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="What to Expect"
              subtitle="First Days"
              description="Your child's journey at Annapurna Vidhya Mandir begins with a comprehensive orientation and welcoming program."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enrollment.whatToExpect.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Required Documents Checklist"
              subtitle="Documentation"
              description="Please ensure you have all required documents before enrollment."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrollment.requiredDocuments.map((doc, i) => (
                <Card key={i} animated delay={i * 0.05}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{doc}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Enrollment Timeline"
              subtitle="Schedule"
              description="Important dates and milestones for the academic year."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enrollment.timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{item.month}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.events.map((event, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {event}
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

        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Annapurna Vidhya Mandir!</h2>
              <p className="text-lg text-white/90 mb-8">
                We're excited to have you join our community. Our team is here to support you and
                your child's success. Should you have any questions, please don't hesitate to
                contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+918040503000"
                  className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition"
                >
                  Call Us
                </a>
                <a
                  href="mailto:info@horizonacademy.edu.in"
                  className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
                >
                  Email Us
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
