'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  animated?: boolean
  delay?: number
}

export function Card({ children, className, hover = true, animated = false, delay = 0 }: CardProps) {
  const content = (
    <div
      className={cn(
        'rounded-xl border border-border bg-card p-6 shadow-sm',
        hover && 'hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('w-full h-48 object-cover rounded-lg mb-4', className)}
      crossOrigin="anonymous"
    />
  )
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mb-3', className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('font-bold text-lg text-foreground', className)}>{children}</h3>
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-sm text-muted-foreground leading-relaxed', className)}>{children}</p>
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('', className)}>{children}</div>
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mt-4 flex gap-2', className)}>{children}</div>
}
