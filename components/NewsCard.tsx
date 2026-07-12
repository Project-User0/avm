'use client'

import { NewsItem } from '@/types'
import { Card, CardImage, CardHeader, CardTitle, CardDescription } from './Card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User } from 'lucide-react'

interface NewsCardProps {
  news: NewsItem
  animated?: boolean
  delay?: number
}

export function NewsCard({ news, animated = false, delay = 0 }: NewsCardProps) {
  const newsDate = new Date(news.date)
  const formattedDate = newsDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Card animated={animated} delay={delay}>
      <div className="relative mb-4">
        <CardImage src={news.image} alt={news.title} className="h-56" />
        <Badge className="absolute top-4 right-4 capitalize">{news.category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{news.title}</CardTitle>
      </CardHeader>
      <CardDescription className="line-clamp-2 mb-4">{news.excerpt}</CardDescription>
      <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            <span className="truncate">{news.author}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
