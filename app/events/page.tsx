'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { EventCard } from '@/components/EventCard'
import { motion } from 'framer-motion'

import { upcomingEvents, pastEvents } from '@/data/events'

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection
          title="School Events"
          subtitle="Calendar"
          description="Celebrate with us! Explore our exciting calendar of academic, sports, cultural, and community events."
          image="/images/gallery/sports-day-1.png"
        />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Upcoming Events"
              subtitle="Coming Soon"
              description="Mark your calendars for these exciting upcoming events at Annapurna Vidhya Mandir."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, i) => (
                <EventCard key={event.id} event={event} animated delay={i * 0.1} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Past Events"
              subtitle="Highlights"
              description="Memorable moments and achievements from our past events."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, i) => (
                <EventCard key={event.id} event={event} animated delay={i * 0.1} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
