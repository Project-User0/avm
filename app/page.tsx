'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Card'
import { StatsCounter } from '@/components/StatsCounter'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { AccordionFAQ } from '@/components/AccordionFAQ'
import { ProgramCard } from '@/components/ProgramCard'
import { FacilityCard } from '@/components/FacilityCard'
import { EventCard } from '@/components/EventCard'
import { NewsCard } from '@/components/NewsCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { schoolInfo, stats, whyChooseUs, principalMessage } from '@/data/school'
import { programs } from '@/data/academics'
import { facilities } from '@/data/facilities'
import { testimonials } from '@/data/testimonials'
import { upcomingEvents } from '@/data/events'
import { news } from '@/data/news'
import { faqs } from '@/data/faq'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Section 1: Hero with Slider */}
        <HeroSection
          title="Welcome to Annapurna Vidhya Mandir"
          subtitle="Excellence in Education"
          description="Nurturing brilliant minds and building the leaders of tomorrow through world-class education, holistic development, and innovative teaching methods."
          image="/images/hero-campus.jpg"
          primaryCTA={{
            text: 'Apply Now',
            href: '/inquiry',
          }}
          secondaryCTA={{
            text: 'Learn More',
            href: '/about',
          }}
        />

        {/* Section 2: Introduction / Welcome */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/welcome-section.png"
                  alt="School welcome"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                  crossOrigin="anonymous"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <SectionHeading
                  title="About AVM"
                  subtitle="Our Story"
                  align="left"
                />
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in {schoolInfo.founded}, AVM has been a beacon of educational
                  excellence for nearly two decades. Our commitment to academic rigor combined with
                  holistic development has shaped thousands of successful students.
                </p>
                <div className="space-y-4 mb-8">
                  {schoolInfo.values.map((value, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
                <Button>
                  <Link href="/about">Discover Our Vision</Link>
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Why Choose AVM?"
              subtitle="Our Strengths"
              description="We combine academic excellence with holistic development to create well-rounded individuals ready for the future."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, i) => (
                <Card key={item.id} animated delay={i * 0.1}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-2xl">{item.icon.charAt(0)}</span>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 4: Academic Programs */}
        <section className="py-16 md:py-24">
          <Container> 
            <SectionHeading
              title="Academic Programs"
              subtitle="Our Curriculum"
              description="Comprehensive programs from Nursery to Grade 12, designed to develop critical thinking, creativity, and academic excellence."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, i) => (
                <ProgramCard key={program.id} program={program} animated delay={i * 0.1} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button className="gap-2">
                <Link href="/academics" className="flex items-center gap-2">
                  View All Programs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 5: Facilities */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="World-Class Facilities"
              subtitle="Infrastructure"
              description="State-of-the-art infrastructure designed to support learning, growth, and development across all disciplines."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.slice(0, 8).map((facility, i) => (
                <FacilityCard key={facility.id} facility={facility} animated delay={i * 0.05} />
              ))}
            </div>
          </Container>
        </section>

        {/* Section 6: Gallery Grid */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Campus Gallery"
              subtitle="Visual Tour"
              description="Explore our beautiful campus and the vibrant activities that define life at AVM."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: '/images/gallery/campus-1.png', alt: 'Campus building' },
                { src: '/images/gallery/classroom-1.png', alt: 'Classroom' },
                { src: '/images/gallery/sports-day-1.png', alt: 'Sports day' },
                { src: '/images/gallery/library-1.png', alt: 'Library' },
                { src: '/images/gallery/cultural-fest-1.png', alt: 'Cultural fest' },
                { src: '/images/gallery/lab-1.png', alt: 'Laboratory' },
              ].map((image, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="secondary" className="gap-2">
                <Link href="/gallery" className="flex items-center gap-2">
                  View Full Gallery
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 7: Video Section Placeholder */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="AVM in Action"
              subtitle="Video Tour"
            />
            <div className="relative w-full bg-foreground/5 rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[32rem] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-foreground font-semibold mb-2">Campus Tour Video</p>
                <p className="text-muted-foreground text-sm">Discover the heart of our academic community</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 8: Stats Counter */}
        <StatsCounter stats={stats} />

        {/* Section 9: Principal's Message */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title={principalMessage.title}
              subtitle="Leadership"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/principal.png"
                  alt="Principal"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                  crossOrigin="anonymous"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed italic">
                  {`"${principalMessage.message}"`}
                </blockquote>
                <div>
                  <p className="font-bold text-foreground text-lg">{principalMessage.author}</p>
                  <p className="text-muted-foreground">{principalMessage.title_author}</p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Section 10: Testimonials Carousel */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="What Our Community Says"
              subtitle="Testimonials"
              description="Hear from our students, parents, and alumni about their transformative experiences at AVM."
            />
            <TestimonialCarousel testimonials={testimonials} />
          </Container>
        </section>

        {/* Section 11: Events */}
        {/* <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Upcoming Events"
              subtitle="Calendar"
              description="Join us for exciting events that celebrate learning, creativity, and community spirit."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, i) => (
                <EventCard key={event.id} event={event} animated delay={i * 0.1} />
              ))}
            </div>
            <div className="text-center mt-12 flex justify-center">
              <Button className="flex items-center justify-center">
                <Link href="/events" className="flex items-center gap-2">
                  View All Events
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section> */}

        {/* Section 12: News/Blog */}
        {/* <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Latest News & Updates"
              subtitle="From Our Campus"
              description="Stay informed about achievements, announcements, and important updates from AVM."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.slice(0, 3).map((newsItem, i) => (
                <NewsCard key={newsItem.id} news={newsItem} animated delay={i * 0.1} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button className="gap-2">
                <Link href="/contact" className="flex items-center gap-2">
                  Read More Stories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section> */}

        {/* Section 13: Admission Process */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Simple Admission Process"
              subtitle="How to Join"
              description="We believe in transparent and accessible admissions. Follow these simple steps to begin your journey with us."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: 'Application',
                  description: 'Fill out our online application form with your details.',
                },
                {
                  step: 2,
                  title: 'Entrance Test',
                  description: 'Participate in our assessment to evaluate academic readiness.',
                },
                {
                  step: 3,
                  title: 'Interview',
                  description: 'Meet our faculty for an interactive discussion and interview.',
                },
              ].map((process, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card>
                    <div className="absolute -top-6 left-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {process.step}
                    </div>
                    <CardHeader className="pt-8">
                      <CardTitle>{process.title}</CardTitle>
                    </CardHeader>
                    <CardDescription>{process.description}</CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="gap-2">
                <Link href="/admission" className="flex items-center gap-2">
                  Learn About Admission
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 14: Inquiry Form CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in Joining Us?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Get in touch with our admission team to learn more about how AVM can
                help shape your child's future.
              </p>
              <Button
              
                size="lg"
                className="gap-2 rounded-lg"
              >
                <Link href="/inquiry" className="flex items-center gap-2">
                  Submit Inquiry Form
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 15: Enrollment Information */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Enrollment Information"
              subtitle="Getting Started"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Upon enrollment, students receive a comprehensive orientation covering school
                    policies, facilities, and academic structure.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Campus orientation and facility tour',
                      'Introduction to faculty and classmates',
                      'Placement in appropriate academic stream',
                      'Assignment of mentor and buddy system',
                      'Participation in welcome assemblies',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Required Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Please ensure you have all required documents ready for a smooth enrollment
                    process.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Birth certificate (original or copy)',
                      'Transfer certificate (if applicable)',
                      'Previous academic records',
                      'Vaccination certificate',
                      'Recent photographs (passport-size)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button className="gap-2">
                <Link href="/enrollment" className="flex items-center gap-2">
                  Enrollment Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 17: FAQ Accordion */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Help & Support"
              description="Find answers to common questions about our programs, admissions, and school operations."
            />
            <div className="max-w-3xl mx-auto">
              <AccordionFAQ faqs={faqs.slice(0, 8)} />
            </div>
            <div className="text-center mt-12">
              <Button className="gap-2">
                <Link href="/contact" className="flex items-center gap-2">
                  More Questions?
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 18: Contact Info */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <Container>
            <SectionHeading
              title="Get In Touch"
              subtitle="Contact Us"
              description="We'd love to hear from you. Reach out to our admission team or visit us on campus."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>📞 Phone</CardTitle>
                </CardHeader>
                <CardDescription>
                  <a href={`tel:${schoolInfo.phone}`} className="hover:text-primary transition">
                    {schoolInfo.phone}
                  </a>
                </CardDescription>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>📧 Email</CardTitle>
                </CardHeader>
                <CardDescription>
                  <a href={`mailto:${schoolInfo.email}`} className="hover:text-primary transition">
                    {schoolInfo.email}
                  </a>
                </CardDescription>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>📍 Location</CardTitle>
                </CardHeader>
                <CardDescription>{schoolInfo.location}</CardDescription>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="gap-2">
                <Link href="/contact" className="flex items-center gap-2">
                  Visit Contact Page
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 19: CTA Banner */}
        <section className="py-12 md:py-20 border-y border-border bg-card/90 text-card-foreground">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Shape Your Future?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who have chosen AVM as their
                pathway to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                
                  size="lg"
                  variant="secondary"
                  className="rounded-lg"
                >
                  <Link href="/inquiry">Start Application</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg"
                >
                  <Link href="/admission">Learn More</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 20: Newsletter & Social */}
        <section className="py-12 md:py-16 border-t border-border bg-card/90 text-card-foreground">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter for latest updates, events, and announcements from
                  AVM.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring"
                  />
                  <Button variant="secondary" className="rounded-lg">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Follow Us</h3>
                <p className="text-muted-foreground mb-6">Connect with us on social media for daily updates and highlights.</p>
                <div className="flex gap-4">
                  {[
                    { icon: 'f', label: 'Facebook' },
                    { icon: 'X', label: 'Twitter' },
                    { icon: 'I', label: 'Instagram' },
                    { icon: 'Y', label: 'YouTube' },
                  ].map((social) => (
                    <a
                      key={social.icon}
                      href="#"
                      className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center border border-border hover:bg-secondary transition"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
