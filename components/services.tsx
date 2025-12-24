"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Digital Dentistry",
    description: "Advanced digital scanning, 3D imaging, and CAD-CAM technology for precise treatments",
    price: "₹5,000 - ₹50,000",
    image: "https://images.pexels.com/photos/6627695/pexels-photo-6627695.jpeg",
  },
  {
    title: "Smile Design",
    description: "Personalized smile makeovers using latest cosmetic dentistry techniques",
    price: "₹50,000 - ₹3,00,000",
    image: "https://images.pexels.com/photos/6627695/pexels-photo-6627695.jpeg",
  },
  {
    title: "Veneers & Teeth Whitening",
    description: "Aesthetic solutions for tooth color correction and porcelain veneers for perfect smiles",
    price: "₹20,000 - ₹2,00,000",
    image: "https://images.pexels.com/photos/6812501/pexels-photo-6812501.jpeg",
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement using latest implant technology - Immediate, Delayed & Basal options",
    price: "₹80,000 - ₹5,00,000",
    image: "https://images.pexels.com/photos/12510076/pexels-photo-12510076.jpeg",
  },
  {
    title: "Root Canals, Crowns & Bridges",
    description: "Restorative treatments to save teeth and restore missing teeth with precision",
    price: "₹15,000 - ₹2,50,000",
    image: "https://images.pexels.com/photos/8176917/pexels-photo-8176917.jpeg",
  },
  {
    title: "Invisalign Aligners",
    description: "Nearly invisible aligners for comfortable and effective teeth straightening",
    price: "₹2,50,000 - ₹4,50,000",
    image: "/clear-dental-aligners-transparent-braces.jpg",
  },
  {
    title: "Micro Implant Orthodontic Treatment",
    description: "Advanced orthodontic solution using micro-implants for superior results",
    price: "₹1,50,000 - ₹3,50,000",
    image: "https://images.pexels.com/photos/12510076/pexels-photo-12510076.jpeg",
  },
  {
    title: "Paediatric Dentistry",
    description: "Specialized dental care for children with gentle, child-friendly approach",
    price: "₹2,000 - ₹30,000",
    image: "https://images.pexels.com/photos/8260438/pexels-photo-8260438.jpeg",
  },
  {
    title: "Conservative Dentistry",
    description: "Teeth preservation techniques including fillings and minimal invasive treatments",
    price: "₹1,000 - ₹50,000",
    image: "https://images.pexels.com/photos/6812543/pexels-photo-6812543.jpeg",
  },
  {
    title: "Periodontology (Gum Disease)",
    description: "Comprehensive gum disease treatment and periodontal care for healthy gums",
    price: "₹5,000 - ₹1,00,000",
    image: "https://images.pexels.com/photos/6812543/pexels-photo-6812543.jpeg",
  },
  {
    title: "Metal Braces",
    description: "Traditional, durable and highly effective orthodontic solution",
    price: "₹30,000 - ₹1,50,000",
    image: "/metal-braces-dental-orthodontic-treatment.jpg",
  },
  {
    title: "Ceramic Braces",
    description: "Tooth-colored braces that blend naturally with your smile",
    price: "₹60,000 - ₹2,50,000",
    image: "/ceramic-braces-tooth-colored-orthodontic.jpg",
  },
]

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete dental solutions from cosmetic to restorative care, orthodontics to periodontal treatments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Card className="overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      hoveredCard === idx ? "scale-110 brightness-110" : "scale-100 brightness-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                  <p className="text-lg font-bold text-primary mb-6">{service.price}</p>
                  <Button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all hover:shadow-lg"
                  >
                    Book Now
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Complementary Treatments */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-3">Specialized Treatments & Support</h3>
          <p className="text-muted-foreground mb-6">
            Beyond our core services, we offer specialized support treatments including:
          </p>
          <div className="flex flex-wrap gap-4 text-center">
            {[
              "Power Chains & Auxiliaries",
              "Rapid Palatal Expanders",
              "Orthodontic Retainers",
              "Emergency Dental Repairs",
              "Professional Teeth Whitening",
              "Orthodontic Checkups",
              "Cosmetic Bonding",
              "Bite Correction",
            ].map((service, idx) => (
              <button
                key={idx}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer font-semibold text-primary border border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
