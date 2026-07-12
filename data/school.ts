import { SchoolInfo, Stat } from '@/types'

export const schoolInfo: SchoolInfo = {
  name: 'Annapurna Vidhya Mandir',
  tagline: 'Nurturing Minds, Building Futures',
  mission: 'To provide world-class education that empowers students to become responsible global citizens, critical thinkers, and lifelong learners.',
  vision: 'To be a leading educational institution fostering excellence, innovation, and holistic development.',
  values: [
    'Academic Excellence',
    'Integrity and Ethics',
    'Innovation and Creativity',
    'Inclusivity and Diversity',
    'Community Service',
    'Sustainability',
  ],
  founded: 2000,
  students: 1200,
  faculty: 85,
  location: 'Banganga, Kapilvastu',
  phone: '+91 80 4050 3000',
  email: 'info@horizonacademy.edu.in',
  socialLinks: {
    facebook: 'https://facebook.com/horizonacademy',
    twitter: 'https://twitter.com/horizonacademy',
    instagram: 'https://instagram.com/horizonacademy',
    youtube: 'https://youtube.com/horizonacademy',
  },
}

export const stats: Stat[] = [
  {
    id: '1',
    label: 'Students',
    value: 1200,
  },
  {
    id: '2',
    label: 'Faculty Members',
    value: 85,
  },
  {
    id: '3',
    label: 'Years of Excellence',
    value: 25,
  },
  {
    id: '4',
    label: 'Programs Offered',
    value: 12,
  },
]

export const principalMessage = {
  title: "Principal's Message",
  image: '/images/principal.jpg',
  message: `Welcome to Horizon Academy, where we believe education is the foundation of a better future. Our commitment to excellence, innovation, and holistic development has shaped the lives of thousands of students. We strive to create an environment where every child can discover their potential and contribute meaningfully to society. Our dedicated faculty, state-of-the-art facilities, and comprehensive curriculum ensure that students receive the finest education. I invite you to join our Horizon Academy family and embark on a transformative educational journey.`,
  author: 'Dr. Rajesh Kumar',
  title_author: 'Principal, Annapurna Vidhya Mandir',
}

export const whyChooseUs = [
  {
    id: '1',
    title: 'Expert Faculty',
    description: 'Highly qualified educators with international experience and passion for teaching.',
    icon: 'GraduationCap',
  },
  {
    id: '2',
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities including smart classrooms, labs, and sports grounds.',
    icon: 'Building2',
  },
  {
    id: '3',
    title: 'Holistic Development',
    description: 'Focus on academics, sports, arts, and character development for all-round growth.',
    icon: 'Sparkles',
  },
  {
    id: '4',
    title: 'Global Perspective',
    description: 'International curriculum and exchange programs fostering global awareness.',
    icon: 'Globe',
  },
  {
    id: '5',
    title: 'Individual Attention',
    description: 'Small batch sizes ensuring personalized learning and mentorship.',
    icon: 'Users',
  },
  {
    id: '6',
    title: 'Proven Track Record',
    description: 'Consistent academic excellence with high university placement rates.',
    icon: 'TrendingUp',
  },
]
