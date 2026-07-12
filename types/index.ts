export interface Testimonial {
  id: string
  author: string
  role: string
  content: string
  rating: number
  image: string
  category: 'student' | 'parent' | 'alumni'
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  category: 'academic' | 'sports' | 'cultural' | 'workshop'
  registrationUrl?: string
}

export interface Faculty {
  id: string
  name: string
  designation: string
  subject: string
  image: string
  bio: string
  email?: string
  experience: number
}

export interface Facility {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  icon: string
}

export interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  author: string
  category: 'announcement' | 'achievement' | 'event' | 'news'
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'admission' | 'academics' | 'general' | 'fees'
}

export interface Program {
  id: string
  name: string
  description: string
  duration: string
  grades: string
  image: string
  highlights: string[]
}

export interface AdmissionStep {
  id: string
  step: number
  title: string
  description: string
  details: string[]
}

export interface GalleryCategory {
  id: string
  name: string
  description: string
  images: GalleryImage[]
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  category: string
}

export interface SchoolInfo {
  name: string
  tagline: string
  mission: string
  vision: string
  values: string[]
  founded: number
  students: number
  faculty: number
  location: string
  phone: string
  email: string
  website?: string
  socialLinks: {
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
  }
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
}
