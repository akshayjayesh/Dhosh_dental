"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Syringe, Zap, Droplet, Activity, PlusCircle } from "lucide-react"

const facialServices = [
  {
    title: "Anti-Aging Treatments",
    features: "Botox, dermal fillers, skin rejuvenation",
    icon: Syringe,
    description:
      "Targeted treatments to soften lines, restore volume, and rejuvenate skin for a refreshed, youthful look.",
  },
  {
    title: "Laser Treatments",
    features: "Resurfacing, pigmentation, hair removal",
    icon: Zap,
    description:
      "Advanced laser solutions for texture refinement, spot reduction, and comfortable long-term hair reduction.",
  },
  {
    title: "Advanced Facials",
    features: "Medical-grade facials, peels, hydrafacials",
    icon: Droplet,
    description:
      "Deep cleansing and clinically formulated facials to brighten, hydrate, and improve overall skin health.",
  },
  {
    title: "Skin Tightening",
    features: "Microneedling, RF, thread lifts",
    icon: Activity,
    description:
      "Collagen-stimulating therapies designed to firm, lift, and redefine facial contours with minimal downtime.",
  },
  {
    title: "Additional Services",
    features: "Dermaplaning, microdermabrasion, PRP",
    icon: PlusCircle,
    description:
      "Supportive treatments that smooth texture, refine pores, and boost radiance using safe, proven methods.",
  },
]

export default function FacialServices() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="facial-services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Facial Aesthetic Services</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Safe, effective, and personalized facial cosmetic care by trained clinicians
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facialServices.map((svc, idx) => (
            <div
              key={svc.title}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <Card className="overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <svc.icon className="text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-sm text-primary font-medium mt-1">{svc.features}</p>
                    <p className="text-muted-foreground mt-3">{svc.description}</p>

                    <div className="mt-6">
                      <Button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className={`w-full transition-all hover:shadow-lg ${
                          hovered === idx ? "bg-primary text-white" : "bg-primary text-white hover:bg-primary/90"
                        }`}
                        aria-label={`Learn more about ${svc.title}`}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
