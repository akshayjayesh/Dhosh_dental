"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Digital Dentistry",
    description: "Free Scanning & Treatment Planning",
    price: "Free",
    image: "https://images.pexels.com/photos/6627695/pexels-photo-6627695.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Feeca2d2d8a1e417c9ceedf9d169d7e59?format=webp",
    fullDetails: {
      description: "Digital impressions of teeth using intraoral scanners, no messy moulds needed.",
      treatments: [
        "Free Scanning — Digital impressions using advanced intraoral scanners",
        "Free Treatment Planning — Customised digital treatment plan based on scan results"
      ],
      benefits: "Modern, non-invasive approach to dental assessment and planning with precise digital technology"
    }
  },
  {
    title: "Smile Design",
    description: "Personalized smile makeovers",
    price: "₹2,500 onwards",
    image: "https://images.pexels.com/photos/6627695/pexels-photo-6627695.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F3e2396c3f46a45d7a928ada4cce0e004?format=webp",
    fullDetails: {
      description: "A cosmetic procedure that digitally redesigns the appearance of your smile by analysing facial features, tooth shape, size, and alignment to create a personalised aesthetic outcome.",
      treatments: [
        "Digital smile design analysis",
        "Facial feature assessment",
        "Customized aesthetic planning"
      ],
      benefits: "Creates a personalized aesthetic outcome that complements your facial features"
    }
  },
  {
    title: "Veneer & Teeth Whitening",
    description: "Aesthetic solutions for tooth enhancement",
    price: "₹5,000 onwards",
    image: "https://images.pexels.com/photos/6812501/pexels-photo-6812501.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Fedf5475b84ab40d081a02f4980a547f5?format=webp",
    fullDetails: {
      description: "Transform your smile with our comprehensive cosmetic solutions.",
      treatments: [
        "Veneers — Thin shells of porcelain or composite bonded to tooth front surfaces to correct colour, shape, or minor misalignment",
        "Teeth Whitening — Professional bleaching procedure to remove stains and lighten tooth colour"
      ],
      benefits: "Dramatic aesthetic improvements in tooth appearance and brightness"
    }
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement solution",
    price: "₹25,000 onwards",
    image: "https://images.pexels.com/photos/12510076/pexels-photo-12510076.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F8e44efcebbc045f09b824bfe62709a5e",
    fullDetails: {
      description: "A titanium post surgically placed into the jawbone to act as an artificial tooth root, topped with a crown for a natural-looking permanent replacement of missing teeth.",
      treatments: [
        "Titanium post placement into jawbone",
        "Osseointegration process",
        "Crown placement for natural appearance"
      ],
      benefits: "Natural-looking, durable permanent solution that restores full function and appearance"
    }
  },
  {
    title: "Root Canal, Post, Inlays, Onlays",
    description: "Advanced restorative endodontic treatments",
    price: "₹2,500 onwards",
    image: "https://images.pexels.com/photos/8176917/pexels-photo-8176917.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F817636f22fa2430a951983af81dcd29a",
    fullDetails: {
      description: "Comprehensive tooth-saving and restoration treatments.",
      treatments: [
        "Root Canal Treatment (RCT) — Removal of infected pulp, cleaning and sealing to save the natural tooth",
        "Post — A pin placed inside root canal to support a crown after RCT",
        "Inlays — Custom-made fillings fitted within the cusps of a damaged tooth",
        "Onlays — Similar to inlays but extend over one or more cusps for larger restorations"
      ],
      benefits: "Preserves natural teeth while restoring strength and functionality"
    }
  },
  {
    title: "Aligners",
    description: "Clear, removable orthodontic trays",
    price: "₹4,000 onwards",
    image: "/clear-dental-aligners-transparent-braces.jpg",
    fullDetails: {
      description: "Clear, removable plastic trays custom-made to gradually straighten teeth without metal braces.",
      treatments: [
        "Custom-made clear aligner trays",
        "Progressive alignment series",
        "Periodic tray changes for gradual teeth movement"
      ],
      benefits: "Nearly invisible, removable option for comfortable and effective teeth straightening"
    }
  },
  {
    title: "Micro Implants – Orthodontic Treatment",
    description: "Advanced orthodontic anchoring system",
    price: "₹25,000 onwards",
    image: "https://images.pexels.com/photos/12510076/pexels-photo-12510076.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F99b6e8ff88bf4a9da5e5aefee4a6d0b3?format=webp",
    fullDetails: {
      description: "Tiny titanium screws (Temporary Anchorage Devices) placed in the jawbone to serve as fixed anchor points during orthodontic treatment.",
      treatments: [
        "TAD (Temporary Anchorage Device) placement",
        "Precise tooth movement",
        "Enhanced orthodontic control"
      ],
      benefits: "Enables more controlled and precise tooth movement, reducing treatment time"
    }
  },
  {
    title: "Paediatric Dentistry",
    description: "Specialized dental care for children",
    price: "₹1,000 onwards",
    image: "https://images.pexels.com/photos/8260438/pexels-photo-8260438.jpeg",
    fullDetails: {
      description: "Complete dental care for infants, children, and teenagers with gentle, child-friendly approach.",
      treatments: [
        "Check-ups and examinations",
        "Fillings for milk and permanent teeth",
        "Fluoride treatments",
        "Space maintainers",
        "Preventive care for developing dentition"
      ],
      benefits: "Establishes good oral habits early and ensures healthy development of permanent teeth"
    }
  },
  {
    title: "Conservative Dentistry",
    description: "Minimally invasive tooth preservation",
    price: "₹1,000 onwards",
    image: "https://images.pexels.com/photos/6812543/pexels-photo-6812543.jpeg",
    fullDetails: {
      description: "Focuses on preserving natural tooth structure through fillings, preventive treatments, and minimally invasive procedures.",
      treatments: [
        "Conservative fillings",
        "Preventive treatments",
        "Minimally invasive procedures",
        "Decay and damage treatment without extraction"
      ],
      benefits: "Maintains maximum tooth structure while treating decay and damage"
    }
  },
  {
    title: "Metal Braces",
    description: "Traditional orthodontic correction",
    price: "₹20,000 onwards",
    image: "/metal-braces-dental-orthodontic-treatment.jpg",
    fullDetails: {
      description: "Traditional stainless steel brackets and wires bonded to teeth to correct misalignment, crowding, spacing, and bite issues.",
      treatments: [
        "Stainless steel bracket placement",
        "Wire installation and adjustments",
        "Bite correction",
        "Alignment of crowded teeth",
        "Spacing correction"
      ],
      benefits: "Highly effective solution with proven results for comprehensive orthodontic correction"
    }
  },
  {
    title: "Ceramic Braces",
    description: "Tooth-colored orthodontic option",
    price: "₹35,000 onwards",
    image: "/ceramic-braces-tooth-colored-orthodontic.jpg",
    fullDetails: {
      description: "Similar to metal braces but made with tooth-coloured or clear ceramic brackets, making them less visible while providing the same corrective function.",
      treatments: [
        "Ceramic bracket placement",
        "Tooth-colored wire options",
        "Aesthetic orthodontic treatment",
        "Same corrective functionality as metal braces"
      ],
      benefits: "Less visible aesthetic option with the same effectiveness as traditional braces"
    }
  },
  {
    title: "Crown & Bridges",
    description: "Durable tooth restoration solutions",
    price: "₹5,000 onwards",
    image: "https://images.pexels.com/photos/8176917/pexels-photo-8176917.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F5a01420171dc417e9c42c1c0adc26595",
    fullDetails: {
      description: "Fixed prosthetic solutions for damaged and missing teeth restoration.",
      treatments: [
        "Crown — A cap placed over damaged, decayed, or root canal-treated tooth to restore shape, strength, and appearance",
        "Bridge — A fixed prosthetic that replaces one or more missing teeth by anchoring to adjacent teeth"
      ],
      benefits: "Restores tooth function, appearance, and prevents adjacent teeth from shifting"
    }
  },
  {
    title: "Porcelain Fused Ceramic",
    description: "Strong and aesthetic crown solution",
    price: "₹5,000 onwards",
    image: "https://images.pexels.com/photos/6812501/pexels-photo-6812501.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2Ff580c8716b1449448f0fd34bdf35a183",
    fullDetails: {
      description: "A type of crown or bridge combining a metal base with a porcelain outer layer, offering strength along with a natural tooth-like appearance.",
      treatments: [
        "Metal base for structural strength",
        "Porcelain outer layer for aesthetics",
        "Natural tooth-like appearance",
        "Durable restoration"
      ],
      benefits: "Combines excellent durability with natural appearance for long-lasting restorations"
    }
  },
  {
    title: "Zirconia, E-Max, DMLS",
    description: "Premium advanced ceramic materials",
    price: "₹6,000 onwards",
    image: "https://images.pexels.com/photos/6627695/pexels-photo-6627695.jpeg",
    overlayImage: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2Fe436909c73654f4793e9649d913f2fae",
    fullDetails: {
      description: "Top-tier ceramic materials for superior aesthetics and longevity.",
      treatments: [
        "Zirconia — High-strength, metal-free ceramic crowns known for durability and natural look",
        "E-Max — All-ceramic lithium disilicate crowns offering superior aesthetics and translucency",
        "DMLS — Direct Metal Laser Sintering for precision-milled or laser-sintered restorations"
      ],
      benefits: "Maximum aesthetic appeal with exceptional durability and biocompatibility"
    }
  },
  {
    title: "Periodontal Treatments",
    description: "Gum disease treatment and prevention",
    price: "₹15,000 onwards",
    image: "https://images.pexels.com/photos/6812543/pexels-photo-6812543.jpeg",
    fullDetails: {
      description: "Comprehensive treatment for gum disease and supporting structures of the teeth.",
      treatments: [
        "Scaling — Removal of plaque and tartar from tooth surfaces",
        "Polishing — Smoothing tooth surfaces to prevent future plaque buildup",
        "Flap Surgery — Surgical lifting of gums to clean deep tartar deposits and repair bone damage",
        "Bone Grafting — Regenerating lost jawbone using graft material to support teeth or implants",
        "Gingivectomy — Surgical removal of excess or diseased gum tissue",
        "Crown Lengthening — Exposing more tooth surface by reshaping gum and bone tissue"
      ],
      benefits: "Restores gum health, prevents tooth loss, and improves overall oral health"
    }
  },
  {
    title: "Oral Surgery Procedures",
    description: "Specialized surgical dental treatments",
    price: "₹4,000 onwards",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F5519bb6402764eb0a597628e0835cd6a?format=webp&width=800&height=1200",
    fullDetails: {
      description: "Comprehensive surgical solutions for complex dental conditions.",
      treatments: [
        "Wisdom Teeth Removal — Extraction of third molars causing pain, crowding, or infection",
        "Impacted Teeth Removal — Surgical extraction of teeth trapped beneath gumline or bone",
        "Jaw Bone Fracture Correction — Surgical repair and stabilisation of fractured jaw bones",
        "Jaw Bone Cyst Removal — Excision of cysts or lesions in the jaw to prevent bone damage",
        "Orthodontic Surgery — Surgical correction of jaw discrepancies to aid orthodontic treatment",
        "Alveoloplasty — Reshaping and smoothing of jawbone ridge, typically before denture fitting",
        "Frenectomy — Removal of frenum that causes restriction or spacing issues"
      ],
      benefits: "Resolves complex oral surgical issues and improves dental and facial function"
    }
  },
  {
    title: "Full Mouth Rehabilitation",
    description: "Complete smile restoration for edentulous patients",
    price: "₹30,000 onwards",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2Fec55b0ea0e1842afa590e1a63f903ab7?format=webp&width=800&height=1200",
    fullDetails: {
      description: "Complete restoration of function and aesthetics for fully edentulous (toothless) patients through multiple restoration options.",
      treatments: [
        "Implants — Permanent fixed teeth anchored to the jawbone",
        "Removable Complete Dentures — Full sets of removable artificial teeth for upper and/or lower jaw",
        "Over Denture — A denture supported and retained by underlying implants for improved stability"
      ],
      benefits: "Restores full function, appearance, and confidence for patients missing all teeth"
    }
  },
  {
    title: "Replacement of Few Missing Teeth",
    description: "Solutions for partial tooth loss",
    price: "₹4,000 onwards",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F300a7ad4bfe3461fa9261789ab59a131?format=webp&width=800&height=1200",
    fullDetails: {
      description: "Flexible solutions for patients with one or a few missing teeth.",
      treatments: [
        "Implants — Individual permanent tooth replacements",
        "Bridges — Fixed restorations spanning the gap of missing teeth",
        "Removable Partial Dentures — Removable appliances with metal clasps for retention",
        "Acrylic Removable Dentures — Lightweight removable partial dentures made from acrylic resin"
      ],
      benefits: "Restores natural appearance, function, and prevents shifting of remaining teeth"
    }
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

      <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete dental solutions From facial correction to advanced facial aesthetics, orthodontics to periodontal treatments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedService(idx)}
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
                  <p className="text-muted-foreground mb-2 line-clamp-2">{service.description}</p>
                  <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
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

      {/* Service Details Modal */}
      {selectedService !== null && (
        <>
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-in fade-in scale-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="sticky top-4 right-4 absolute z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image - Full Size */}
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <img
                  src={services[selectedService].image || "/placeholder.svg"}
                  alt={services[selectedService].title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={
                    services[selectedService].overlayImage
                      ? {
                          backgroundImage: `url(${services[selectedService].overlayImage})`,
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
              <div className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-3">{services[selectedService].title}</h2>
                <p className="text-lg text-primary font-semibold mb-4">{services[selectedService].price}</p>

                {services[selectedService].fullDetails && (
                  <>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      {services[selectedService].fullDetails.description}
                    </p>

                    {services[selectedService].fullDetails.treatments && (
                      <div className="mb-6">
                        <h4 className="font-bold text-foreground mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {services[selectedService].fullDetails.treatments.map((treatment, idx) => (
                            <li key={idx} className="flex gap-3 text-muted-foreground">
                              <span className="text-primary font-bold">•</span>
                              <span>{treatment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {services[selectedService].fullDetails.benefits && (
                      <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <p className="text-foreground font-semibold mb-2">Benefits:</p>
                        <p className="text-muted-foreground">{services[selectedService].fullDetails.benefits}</p>
                      </div>
                    )}
                  </>
                )}

                {/* Action Button */}
                <Button
                  onClick={() => {
                    setSelectedService(null)
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg transition-all hover:shadow-lg"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
