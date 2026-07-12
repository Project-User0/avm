import { GalleryCategory, GalleryImage } from '@/types'

const academicImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/classroom-1.png',
    alt: 'Smart classroom with interactive boards',
    title: 'Smart Learning Environment',
    category: 'academic',
  },
  {
    id: '2',
    src: '/images/gallery/lab-1.png',
    alt: 'Science laboratory with equipment',
    title: 'Advanced Science Lab',
    category: 'academic',
  },
  {
    id: '3',
    src: '/images/gallery/library-1.png',
    alt: 'Students studying in library',
    title: 'Library - Knowledge Hub',
    category: 'academic',
  },
  {
    id: '4',
    src: '/images/gallery/computer-lab-1.png',
    alt: 'Computer lab for coding and design',
    title: 'Computer Lab',
    category: 'academic',
  },
  {
    id: '5',
    src: '/images/gallery/workshop-1.png',
    alt: 'Hands-on workshop activity',
    title: 'Interactive Workshop',
    category: 'academic',
  },
  {
    id: '6',
    src: '/images/gallery/seminar-1.png',
    alt: 'Expert seminar session',
    title: 'Expert Lecture',
    category: 'academic',
  },
]

const sportsImages: GalleryImage[] = [
  {
    id: '7',
    src: '/images/gallery/football-1.png',
    alt: 'Football match on sports ground',
    title: 'Football Game',
    category: 'sports',
  },
  {
    id: '8',
    src: '/images/gallery/basketball-1.png',
    alt: 'Basketball match in indoor court',
    title: 'Basketball Court',
    category: 'sports',
  },
  {
    id: '9',
    src: '/images/gallery/swimming-1.png',
    alt: 'Students in swimming pool',
    title: 'Swimming Pool',
    category: 'sports',
  },
  {
    id: '10',
    src: '/images/gallery/athletics-1.png',
    alt: 'Athletic track event',
    title: 'Athletics Event',
    category: 'sports',
  },
  {
    id: '11',
    src: '/images/gallery/badminton-1.png',
    alt: 'Badminton court activity',
    title: 'Badminton Tournament',
    category: 'sports',
  },
  {
    id: '12',
    src: '/images/gallery/sports-day-1.png',
    alt: 'Annual sports day celebration',
    title: 'Sports Day Celebration',
    category: 'sports',
  },
]

const culturalImages: GalleryImage[] = [
  {
    id: '13',
    src: '/images/gallery/dance-1.png',
    alt: 'Classical dance performance',
    title: 'Dance Performance',
    category: 'cultural',
  },
  {
    id: '14',
    src: '/images/gallery/music-1.png',
    alt: 'Music concert performance',
    title: 'Music Concert',
    category: 'cultural',
  },
  {
    id: '15',
    src: '/images/gallery/drama-1.png',
    alt: 'Theatre production on stage',
    title: 'Theatre Production',
    category: 'cultural',
  },
  {
    id: '16',
    src: '/images/gallery/art-exhibition-1.png',
    alt: 'Art exhibition display',
    title: 'Art Exhibition',
    category: 'cultural',
  },
  {
    id: '17',
    src: '/images/gallery/cultural-fest-1.png',
    alt: 'Cultural fest celebration',
    title: 'Cultural Fest',
    category: 'cultural',
  },
  {
    id: '18',
    src: '/images/gallery/choir-1.png',
    alt: 'School choir performance',
    title: 'School Choir',
    category: 'cultural',
  },
]

const campusImages: GalleryImage[] = [
  {
    id: '19',
    src: '/images/gallery/campus-1.png',
    alt: 'School campus overview',
    title: 'Campus Overview',
    category: 'campus',
  },
  {
    id: '20',
    src: '/images/gallery/entrance-1.png',
    alt: 'School main entrance',
    title: 'Main Entrance',
    category: 'campus',
  },
  {
    id: '21',
    src: '/images/gallery/courtyard-1.png',
    alt: 'Campus courtyard area',
    title: 'Courtyard',
    category: 'campus',
  },
  {
    id: '22',
    src: '/images/gallery/auditorium-1.png',
    alt: 'School auditorium',
    title: 'Auditorium',
    category: 'campus',
  },
  {
    id: '23',
    src: '/images/gallery/cafeteria-1.png',
    alt: 'School cafeteria',
    title: 'Cafeteria',
    category: 'campus',
  },
  {
    id: '24',
    src: '/images/gallery/green-space-1.png',
    alt: 'Green space in campus',
    title: 'Green Spaces',
    category: 'campus',
  },
]

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'academic',
    name: 'Academic',
    description: 'Learning spaces, classrooms, and academic activities',
    images: academicImages,
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Sports facilities and athletic events',
    images: sportsImages,
  },
  {
    id: 'cultural',
    name: 'Cultural',
    description: 'Arts, music, dance, and cultural performances',
    images: culturalImages,
  },
  {
    id: 'campus',
    name: 'Campus',
    description: 'Campus infrastructure and facilities',
    images: campusImages,
  },
]

export const allGalleryImages = [
  ...academicImages,
  ...sportsImages,
  ...culturalImages,
  ...campusImages,
]
