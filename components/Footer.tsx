import Link from "next/link";
import { Share2, Tv, Phone, Mail, MapPin, Camera } from "lucide-react";
import { Container } from "./Container";
import { schoolInfo } from "@/data/school";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="avm-logo.png"
                  alt="Annapurna Vidhya Mandir"
                  width={60}
                  height={60}
                  priority
                  className="object-contain bg-white rounded-full"
                />

                <div className="hidden sm:flex flex-col leading-tight">
                  <span className="font-bold text-red-700 text-lg">AVM</span>
                  <span className="text-xs text-gray-800">
                    Annapurna Vidhya Mandir
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {schoolInfo.tagline} - Nurturing young minds and building future
              leaders through world-class education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/admission"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/inquiry"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Inquiry Form
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {schoolInfo.location}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {schoolInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {schoolInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} {schoolInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {schoolInfo.socialLinks.facebook && (
              <a
                href={schoolInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Share2 className="w-5 h-5" />
              </a>
            )}
            {schoolInfo.socialLinks.twitter && (
              <a
                href={schoolInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Share2 className="w-5 h-5" />
              </a>
            )}
            {schoolInfo.socialLinks.instagram && (
              <a
                href={schoolInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Camera className="w-5 h-5" />
              </a>
            )}
            {schoolInfo.socialLinks.youtube && (
              <a
                href={schoolInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Tv className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
