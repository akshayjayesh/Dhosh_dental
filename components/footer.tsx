"use client"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

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
            <div className="flex items-center gap-2 mb-4 hover:gap-3 transition-all">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">AP</span>
              </div>
              <div>
                <h3 className="font-bold group-hover:text-primary transition-colors text-left">DR.GHOSH</h3>
                <p className="text-xs text-gray-300">DENTAL STUDIO</p>
              </div>
            </div>
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
                  Clear Aligners
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Metal Braces
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Ceramic Braces
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-bold mb-4">Branches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("branches")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Kochi Main
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("branches")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Thiruvananthapuram
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("branches")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Kozhikode
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("branches")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  More...
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-bold mb-2">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">Subscribe to get special offers and updates</p>
            <div className="flex gap-2 hover:gap-3 transition-all">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:bg-white/15"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white hover:shadow-lg hover:scale-105 transition-all">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between">
          <p className="text-sm text-gray-300">&copy; 2025 Dr Dinaks family dental clinic. All rights reserved.</p>
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
              href="https://instagram.com"
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
