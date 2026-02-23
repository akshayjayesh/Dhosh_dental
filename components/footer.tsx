"use client"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BRAND_NAME, LOGO_SRC } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20 pointer-events-none" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 leading-[1.65rem]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="group hover:translate-y-2 transition-transform cursor-pointer">
            <button
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 mb-4 hover:gap-3 transition-all hover:opacity-80"
            >
              <div className="relative w-10 h-10">
                <Image
                  src={LOGO_SRC}
                  alt={BRAND_NAME}
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300 shadow-none rounded-4xl"
                />
              </div>
              <div>
                <h3 className="font-bold group-hover:text-primary transition-colors text-left">{BRAND_NAME}</h3>
                <p className="text-xs text-gray-300">Premium Dental Care</p>
              </div>
            </button>
            <p className="text-sm text-gray-300 leading-relaxed hover:text-gray-100 transition-colors">
              Transforming smiles with cutting-edge orthodontic technology and personalized care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("doctors")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Tooth Whitening
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Smile Designing
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Dental Implants
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Orthodontic Treatment & Invisalign
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Root Canal Treatment
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Periodontal Treatment
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Full Mouth Rehabilitation
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Pediatric Dentistry
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Oral Surgery
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between">
          <p className="text-sm text-gray-300">&copy; 2025 Dr Ghosh's dental Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/ghoshdentalstudio?igsh=MWJsdndhOGVib2dpNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
