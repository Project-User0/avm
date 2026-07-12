'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

import { testimonials } from '@/data/testimonials'

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection
          title="Student & Parent Testimonials"
          subtitle="Success Stories"
          description="Hear from our students, parents, and alumni about their transformative experiences at Annapurna Vidhya Mandir."
          image="/images/welcome-section.png"
        />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="What Our Community Says"
              subtitle="Reviews"
              description="Real feedback from real students, parents, and alumni of Annapurna Vidhya Mandir."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-foreground mb-6 leading-relaxed italic">
                      {`"${testimonial.content}"`}
                    </blockquote>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                        crossOrigin="anonymous"
                      />
                      <div>
                        <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
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
