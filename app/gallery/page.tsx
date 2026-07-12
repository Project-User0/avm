'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

import { galleryCategories, allGalleryImages } from '@/data/gallery'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('academic')

  const category = galleryCategories.find((c) => c.id === selectedCategory)
  const images = category?.images || []

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection
          title="Campus Gallery"
          subtitle="Visual Tour"
          description="Explore the vibrant campus life, modern facilities, and memorable moments at Annapurna Vidhya Mandir."
          image="/images/gallery/campus-1.png"
        />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Photo Gallery"
              subtitle="Our Campus"
              description="Browse through our collection of campus photos showcasing academics, sports, culture, and infrastructure."
            />

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {galleryCategories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="rounded-full"
                >
                  {cat.name}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, i) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-white font-semibold text-sm">{image.title}</p>
                  </div>
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
