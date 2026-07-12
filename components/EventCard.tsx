'use client'

import { Event } from '@/types'
import { Card, CardImage, CardHeader, CardTitle, CardDescription } from './Card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface EventCardProps {
  event: Event
  animated?: boolean
  delay?: number
}

export function EventCard({ event, animated = false, delay = 0 }: EventCardProps) {
  const eventDate = new Date(event.date)
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Card animated={animated} delay={delay}>
      <div className="relative mb-4">
        <CardImage src={event.image} alt={event.title} className="h-56" />
        <Badge className="absolute top-4 right-4 capitalize">{event.category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{event.title}</CardTitle>
      </CardHeader>
      <CardDescription className="line-clamp-2 mb-4">{event.description}</CardDescription>
      <div className="space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
      </div>
    </Card>
  )
}
