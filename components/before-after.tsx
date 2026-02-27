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
    title: "Veneers",
    treatment: "Metal Braces",
    image: "https://cdn.builder.io/api/v1/image/assets%2F1de51d5462a249b98efb37df803b082a%2F8a368a50c92e4b46a9e1028ab4024bff?format=webp&width=800&height=1200",
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
    title: "Complex Case",
    treatment: "Metal Braces",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F75c5447cca744204b334766cc48f4761",
  },
  {
    title: "Quick Alignment",
    treatment: "Clear Aligners",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2F4c6c018aae394d4882acf0c28a8bc41d",
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

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              variant={selectedFilter === filter ? "default" : "outline"}
              className={`transition-all hover:scale-105 ${
                selectedFilter === filter
                  ? "bg-primary hover:bg-primary/90 text-white shadow-lg"
                  : "border-primary text-primary hover:bg-primary/5 hover:border-primary/70"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filtered.map((caseItem, idx) => (
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
                <div className="relative h-96 sm:h-[450px] lg:h-[550px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={caseItem.image || "/placeholder.svg"}
                    alt={caseItem.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredCard === idx ? "scale-110 brightness-110" : "scale-100 brightness-90"
                    }`}
                    style={
                      idx === 0 || idx === 1
                        ? {
                            backgroundImage: `url(${caseItem.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }
                        : undefined
                    }
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
                  <p className="text-sm text-primary font-semibold">{caseItem.treatment}</p>
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
