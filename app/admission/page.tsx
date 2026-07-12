'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Card'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { admissionSteps, admissionRequirements, fees } from '@/data/admission'
import { CheckCircle } from 'lucide-react'

export default function AdmissionPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection
          title="Admission Process"
          subtitle="Join Us"
          description="Simple, transparent admission process for students from Nursery to Grade 10. We welcome applications throughout the academic year."
          image="/images/programs/primary.png"
        />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Admission Steps"
              subtitle="Process"
              description="Follow these simple steps to apply for admission to Horizon Academy."
            />
            <div className="max-w-4xl mx-auto">
              {admissionSteps.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6 relative pl-8 md:pl-16"
                >
                  <div className="absolute left-0 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  {i < admissionSteps.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-16 bg-primary/30" />
                  )}
                  <Card className="hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg">
                <Link href="/inquiry">Start Application</Link>
              </Button>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Requirements & Eligibility"
              subtitle="Documentation"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {admissionRequirements.documents.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Fee Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nursery Annual:</span>
                      <span className="font-semibold">₹{fees?.nursery?.annual || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Primary Annual:</span>
                      <span className="font-semibold">₹{fees?.primary?.annual || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Middle Annual:</span>
                      <span className="font-semibold">₹{fees?.middle?.annual || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Senior Annual:</span>
                      <span className="font-semibold">₹{fees?.senior?.annual || 0}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
