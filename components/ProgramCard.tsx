'use client'

import { Program } from '@/types'
import { Card, CardImage, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { Badge } from '@/components/ui/badge'

interface ProgramCardProps {
  program: Program
  animated?: boolean
  delay?: number
}

export function ProgramCard({ program, animated = false, delay = 0 }: ProgramCardProps) {
  return (
    <Card animated={animated} delay={delay}>
      <CardImage src={program.image} alt={program.name} className="h-56" />
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle>{program.name}</CardTitle>
          <Badge variant="secondary" className="text-xs whitespace-nowrap">
            {program.duration}
          </Badge>
        </div>
        <p className="text-xs font-medium text-primary uppercase tracking-widest">{program.grades}</p>
      </CardHeader>
      <CardDescription>{program.description}</CardDescription>
      <CardContent className="mt-4">
        <ul className="space-y-2">
          {program.highlights.slice(0, 3).map((highlight, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
