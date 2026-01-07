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
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Feeca2d2d8a1e417c9ceedf9d169d7e59?format=webp",
  },
  {
    title: "Smile Design",
    description: "Personalized smile makeovers using latest cosmetic dentistry techniques",
    price: "₹50,000 - ₹3,00,000",
    image: "https://images.pexels.com/photos/6627695/pexels-photo-6627695.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F3e2396c3f46a45d7a928ada4cce0e004?format=webp",
  },
  {
    title: "Veneers & Teeth Whitening",
    description: "Aesthetic solutions for tooth color correction and porcelain veneers for perfect smiles",
    price: "₹20,000 - ₹2,00,000",
    image: "https://images.pexels.com/photos/6812501/pexels-photo-6812501.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Fedf5475b84ab40d081a02f4980a547f5?format=webp",
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement using latest implant technology - Immediate, Delayed & Basal options",
    price: "₹80,000 - ₹5,00,000",
    image: "https://images.pexels.com/photos/12510076/pexels-photo-12510076.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F8e44efcebbc045f09b824bfe62709a5e",
  },
  {
    title: "Root Canal, Post, Inlays, Onlays",
    description: "Advanced restorative treatments for endodontic solutions and tooth preservation",
    price: "₹15,000 - ₹2,50,000",
    image: "https://images.pexels.com/photos/8176917/pexels-photo-8176917.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F817636f22fa2430a951983af81dcd29a",
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
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F99b6e8ff88bf4a9da5e5aefee4a6d0b3?format=webp",
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
  {
    title: "Crowns & Bridges",
    description: "Durable tooth restoration solutions to replace missing teeth and strengthen damaged ones",
    price: "₹25,000 - ₹2,00,000",
    image: "https://images.pexels.com/photos/8176917/pexels-photo-8176917.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F5a01420171dc417e9c42c1c0adc26595",
  },
  {
    title: "Porcelain Fused Ceramic",
    description: "Esthetic and strong crown solutions combining natural appearance with excellent durability",
    price: "₹18,000 - ₹1,50,000",
    image: "https://images.pexels.com/photos/6812501/pexels-photo-6812501.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2Ff580c8716b1449448f0fd34bdf35a183",
  },
  {
    title: "Zirconia, E-max, DMLS",
    description: "Premium advanced ceramic materials for superior aesthetics and long-lasting restorations",
    price: "₹35,000 - ₹2,50,000",
    image: "https://images.pexels.com/photos/6627695/pexels-photo-6627695.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2Fe436909c73654f4793e9649d913f2fae",
  },
]

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)

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
            Complete dental solutions From facial correction to advanced facial aesthetics, orthodontics to periodontal treatments
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
              <Card className="overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      hoveredCard === idx ? "scale-110 brightness-110" : "scale-100 brightness-100"
                    }`}
                  />
                  <div
                    className="absolute inset-0"
                    style={
                      service.overlayImage
                        ? {
                            backgroundImage: `url(${service.overlayImage})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }
                        : {
                            backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)",
                          }
                    }
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                  <Button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all hover:shadow-lg mt-auto"
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
