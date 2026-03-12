"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const cases = [
  {
    title: "Severe Crowding Case",
    treatment: "Clear Aligners",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F71fd0f655fa04430be4b0c66cd7ff4e3?format=webp&width=800&height=1200",
  },
  {
    title: "Teeth Alignment",
    treatment: "Metal Braces",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F592bd4a000674c0a8fe9bcde4453cd37?format=webp&width=800&height=1200",
  },
  {
    title: "Full mouth teeth implant",
    treatment: "Ceramic Braces",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F5fe0d9aff3a24aa389b8b517f92e100f?format=webp&width=800&height=1200",
  },
  {
    title: "Spacing Correction",
    treatment: "Clear Aligners",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F94cca6db16314b07b3edee4d5028ae25?format=webp&width=800&height=1200",
  },
  {
    title: "Fixed Crowns",
    treatment: "Metal Braces",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2Fe79440ba899d4d87be2ca1691ab4b25e?format=webp&width=800&height=1200",
  },
  {
    title: "Clear aligners",
    treatment: "Clear Aligners",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F0104b815552f4cfa90958d2bdcda6c66?format=webp&width=800&height=1200",
  },
]

const filters = ["All", "Aligners", "Braces"]

export default function BeforeAfter() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const filtered =
    selectedFilter === "All"
      ? cases
      : cases.filter((c) => c.treatment.includes(selectedFilter === "Aligners" ? "Aligner" : "Braces"))

  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Before & After Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the stunning transformations our patients have achieved
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>


        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <Card
                className={`overflow-hidden group cursor-pointer hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 h-full ${
                  hoveredCard === idx ? "ring-2 ring-primary" : ""
                }`}
              >
                <div className="relative h-[600px] sm:h-[500px] lg:h-[550px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={caseItem.image || "/placeholder.svg"}
                    alt={caseItem.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredCard === idx ? "scale-110 brightness-110" : "scale-100 brightness-90"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3
                    className={`font-bold mb-2 transition-colors ${
                      hoveredCard === idx ? "text-primary text-lg" : "text-foreground"
                    }`}
                  >
                    {caseItem.title}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg hover:shadow-lg hover:scale-105 transition-all"
          >
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
