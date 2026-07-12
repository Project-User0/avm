"use client";

import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  align?: "left" | "center";
}

export function HeroSection({
  title,
  subtitle,
  description,
  image,
  primaryCTA,
  secondaryCTA,
  align = "left",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="flex items-center min-h-[650px] lg:min-h-[750px]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={
                align === "center"
                  ? "mx-auto text-center max-w-4xl"
                  : "max-w-3xl text-left"
              }
            >
              {subtitle && (
                <p className="text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                  {subtitle}
                </p>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                {title}
              </h1>

              {description && (
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-10">
                  {description}
                </p>
              )}

              {(primaryCTA || secondaryCTA) && (
                <div
                  className={`flex flex-col sm:flex-row gap-4 ${
                    align === "center"
                      ? "justify-center"
                      : "justify-start"
                  }`}
                >
                  {primaryCTA && (
                    <Button size="lg" className="rounded-lg px-8">
                      <Link href={primaryCTA.href}>
                        {primaryCTA.text}
                      </Link>
                    </Button>
                  )}

                  {secondaryCTA && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-lg px-8 border-white text-white bg-white/10 hover:bg-white hover:text-black"
                    >
                      <Link href={secondaryCTA.href}>
                        {secondaryCTA.text}
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Decorative Blur Effects */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-20 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
}