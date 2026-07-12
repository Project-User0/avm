"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admission", href: "/admission" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="flex items-center justify-between h-14 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/avm-logo.png"
                alt="Annapurna Vidhya Mandir"
                width={60}
                height={60}
                priority
                className="object-contain bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]"
              />

              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-bold text-red-700 text-lg">AVM</span>
                <span className="text-xs text-gray-800">
                  Annapurna Vidhya Mandir
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
  relative inline-flex items-center px-3 py-2 text-sm font-medium
  text-gray-800 transition-all duration-500
  hover:text-red-700
  after:absolute after:bottom-0 after:left-0
  after:h-0.5 after:w-0
  after:rounded-full
  after:bg-red-700
  after:transition-all after:duration-500 after:ease-out
  hover:after:w-full
" >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button>
              <Link href="/inquiry">Inquiry</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border">
              <Button className="flex-1">
                <Link href="/inquiry">Inquiry</Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
