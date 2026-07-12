'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { Card, CardHeader, CardTitle } from '@/components/Card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { schoolInfo } from '@/data/school'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection
          title="Get In Touch"
          subtitle="Contact Us"
          description="Have questions? We'd love to hear from you. Reach out to our team anytime."
          image="/images/gallery/campus-1.png"
        />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Contact Information"
              subtitle="Reach Us"
              description="Multiple ways to connect with Annapurna Vidhya Mandir."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Address</CardTitle>
                </CardHeader>
                <p className="text-sm text-muted-foreground">{schoolInfo.location}</p>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <a href={`tel:${schoolInfo.phone}`} className="text-sm text-primary hover:underline">
                  {schoolInfo.phone}
                </a>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <a href={`mailto:${schoolInfo.email}`} className="text-sm text-primary hover:underline">
                  {schoolInfo.email}
                </a>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Hours</CardTitle>
                </CardHeader>
                <p className="text-sm text-muted-foreground">Mon - Fri: 8:00 AM - 4:00 PM</p>
              </Card>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Send Us a Message"
              subtitle="Form"
            />
            <div className="max-w-2xl mx-auto bg-white rounded-xl border border-border p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Interested in admission?</p>
              <Button>
                <Link href="/inquiry">Submit Inquiry Form</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
