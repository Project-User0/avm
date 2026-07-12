'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Testimonial } from '@/types'

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay, testimonials.length])

  const next = () => {
    setAutoPlay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoPlay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (!testimonials.length) return null

  const testimonial = testimonials[current]

  return (
    <div className="relative rounded-2xl border border-border bg-card/90 p-8 shadow-lg md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-lg md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
          {`"${testimonial.content}"`}
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-16 h-16 rounded-full object-cover"
            crossOrigin="anonymous"
          />
          <div>
            <p className="font-bold text-foreground">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3 justify-between mt-8 pt-8 border-t border-border">
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={prev}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={next}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i)
                  setAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            {current + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </div>
  )
}
