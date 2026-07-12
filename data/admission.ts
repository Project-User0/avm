import { AdmissionStep } from '@/types'

export const admissionSteps: AdmissionStep[] = [
  {
    id: '1',
    step: 1,
    title: 'Application',
    description: 'Complete and submit the admission application form online.',
    details: [
      'Download or fill form online',
      'Provide student and parent details',
      'Upload required documents',
      'Pay application fee',
      'Application validity: 12 months',
    ],
  },
  {
    id: '2',
    step: 2,
    title: 'Entrance Test',
    description: 'Take entrance exam to assess academic readiness (Grades 6 onwards).',
    details: [
      'Test covers English, Math, Science',
      'Duration: 2 hours',
      'Held multiple times throughout the year',
      'Result within 7 days',
      'No negative marking',
    ],
  },
  {
    id: '3',
    step: 3,
    title: 'Interview',
    description: 'Group discussion and individual interview with faculty.',
    details: [
      'Group discussion: 30 minutes',
      'Personal interview: 15 minutes',
      'Assesses aptitude and personality',
      'Usually conducted within 2 weeks of test',
      'Parents meeting optional',
    ],
  },
  {
    id: '4',
    step: 4,
    title: 'Admission Decision',
    description: 'Final decision based on performance and availability.',
    details: [
      'Merit-based selection',
      'Diversity consideration',
      'Scholarship decisions communicated',
      'Notification within 5 days',
      'Can reapply next year if unsuccessful',
    ],
  },
  {
    id: '5',
    step: 5,
    title: 'Registration',
    description: 'Complete registration and submit required documentation.',
    details: [
      'Pay registration fee',
      'Submit original documents',
      'Provide medical certificate',
      'Emergency contact information',
      'Set up school portal account',
    ],
  },
  {
    id: '6',
    step: 6,
    title: 'Orientation',
    description: 'Attend orientation program and school induction.',
    details: [
      'Welcome program for students',
      'Campus tour and facilities overview',
      'Parent orientation session',
      'Faculty introduction',
      'School policies and rules',
    ],
  },
]

export const admissionRequirements = {
  documents: [
    'Birth certificate',
    'Transfer certificate (if applicable)',
    'Last mark sheet/report card',
    'Medical certificate (vaccination record)',
    'Passport-size photographs',
    'Address proof',
  ],
  eligibility: {
    nursery: 'Age 2.5+ years',
    primary: 'Age 5.5+ years for Grade 1',
    middle: 'Based on entrance test and interview',
    senior: 'Based on entrance test and interview',
  },
  tests: {
    grades1to5: 'Internal assessment, no formal test',
    grades6to12: 'English, Mathematics, Science entrance exam',
    sports: 'Sports trial for sports scholarship',
  },
}

export const importantDates = {
  applicationDeadline: '2024-03-31',
  entranceTestStart: '2024-04-15',
  interviewStart: '2024-05-01',
  admissionDecision: '2024-05-31',
  registrationDeadline: '2024-06-15',
  academicYearStart: '2024-07-01',
}

export const fees = {
  nursery: { tuition: 180000, annual: 210000 },
  primary: { tuition: 220000, annual: 250000 },
  middle: { tuition: 280000, annual: 320000 },
  senior: { tuition: 350000, annual: 400000 },
  developmentFee: 50000,
  activityFee: 15000,
  transportationFee: { halfDay: 36000, fullDay: 48000 },
}
