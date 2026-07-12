'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQItem } from '@/types'

interface AccordionFAQProps {
  faqs: FAQItem[]
}

export function AccordionFAQ({ faqs }: AccordionFAQProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.id} value={faq.id} className="border-b border-border">
          <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
