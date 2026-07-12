'use client'

import { Facility } from '@/types'
import { Card, CardImage, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import * as LucideIcons from 'lucide-react'

interface FacilityCardProps {
  facility: Facility
  animated?: boolean
  delay?: number
}

export function FacilityCard({ facility, animated = false, delay = 0 }: FacilityCardProps) {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[facility.icon]

  return (
    <Card animated={animated} delay={delay}>
      <div className="relative mb-4">
        <CardImage src={facility.image} alt={facility.name} className="h-48" />
        {IconComponent && (
          <div className="absolute top-4 right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
            <IconComponent className="w-6 h-6" />
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{facility.name}</CardTitle>
      </CardHeader>
      <CardDescription>{facility.description}</CardDescription>
      <CardContent className="mt-4">
        <ul className="space-y-2">
          {facility.features.map((feature, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
