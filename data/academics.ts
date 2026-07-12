import { Program } from '@/types'

export const programs: Program[] = [
  {
    id: '1',
    name: 'Primary School',
    description: 'Grades 1-5: Foundation years focusing on basic literacy, numeracy, and social skills.',
    duration: '5 Years',
    grades: '1-5',
    image: '/images/programs/primary.png',
    highlights: [
      'Play-based learning',
      'Activity-based curriculum',
      'Personalized attention',
      'Skill development workshops',
    ],
  },
  {
    id: '2',
    name: 'Middle School',
    description: 'Grades 6-8: Building strong fundamentals in all subjects with focus on critical thinking.',
    duration: '3 Years',
    grades: '6-8',
    image: '/images/programs/middle.png',
    highlights: [
      'Subject specialists',
      'Practical experiments',
      'Project-based learning',
      'Leadership programs',
    ],
  },
  {
    id: '3',
    name: 'Senior School - Science',
    description: 'Grades 9-12 (Science): Comprehensive science curriculum with laboratory training.',
    duration: '4 Years',
    grades: '9-12',
    image: '/images/programs/science.png',
    highlights: [
      'Advanced labs',
      'Research projects',
      'Competitive exam preparation',
      'University mentoring',
    ],
  },
  {
    id: '4',
    name: 'Senior School - Commerce',
    description: 'Grades 9-12 (Commerce): Business studies, economics, and accounting for future entrepreneurs.',
    duration: '4 Years',
    grades: '9-12',
    image: '/images/programs/commerce.png',
    highlights: [
      'Practical case studies',
      'Business simulations',
      'Financial literacy',
      'Internship programs',
    ],
  },
  {
    id: '5',
    name: 'Senior School - Humanities',
    description: 'Grades 9-12 (Humanities): History, geography, and social sciences with global perspective.',
    duration: '4 Years',
    grades: '9-12',
    image: '/images/programs/humanities.png',
    highlights: [
      'Research methodologies',
      'Field studies',
      'Debate programs',
      'Media studies',
    ],
  },
  {
    id: '6',
    name: 'Integrated Learning',
    description: 'Interdisciplinary approach combining STEM, arts, and social sciences.',
    duration: 'All Grades',
    grades: '1-12',
    image: '/images/programs/integrated.png',
    highlights: [
      'Cross-curricular projects',
      'Innovation labs',
      'Design thinking workshops',
      'Environmental initiatives',
    ],
  },
]

export const curriculum = {
  overview: 'Our curriculum follows the CBSE framework enhanced with international best practices, focusing on skill development and holistic growth.',
  coreSubjects: [
    'English',
    'Mathematics',
    'Science',
    'Social Studies',
    'Hindi/Regional Language',
  ],
  skillDevelopment: [
    'Critical Thinking',
    'Problem Solving',
    'Creativity',
    'Communication',
    'Collaboration',
    'Digital Literacy',
  ],
  specializations: [
    'STEM Programs',
    'Sports Excellence',
    'Arts and Culture',
    'Environmental Studies',
    'Entrepreneurship',
    'Life Skills',
  ],
}

export const cocurricular = [
  {
    id: '1',
    name: 'Sports',
    activities: ['Cricket', 'Football', 'Basketball', 'Badminton', 'Swimming', 'Athletics'],
  },
  {
    id: '2',
    name: 'Arts',
    activities: ['Visual Arts', 'Music', 'Dance', 'Theatre', 'Film Making'],
  },
  {
    id: '3',
    name: 'Clubs',
    activities: [
      'Science Club',
      'Debate Club',
      'Photography Club',
      'Coding Club',
      'Eco Club',
      'Book Club',
    ],
  },
  {
    id: '4',
    name: 'Community Service',
    activities: [
      'Social Action Projects',
      'Environmental Initiatives',
      'Health Awareness',
      'Charity Drives',
    ],
  },
]
