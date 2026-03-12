"use client"

import { useState, useEffect } from "react"

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F080023912e074169b3f009e50ea11b03?format=webp&width=800&height=1200",
    alt: "Dental treatment room with advanced equipment",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F87ac7fc4b1e84ef2b298489f0a5efd7d?format=webp&width=800&height=1200",
    alt: "Modern dental clinic reception area",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F2ea6a222aeb2479eb882c504f36c5d98?format=webp&width=800&height=1200",
    alt: "Fully equipped dental operatory with latest technology",
  },
]

export default function ClinicGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("clinic-gallery")
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.8)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="clinic-gallery"
      className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Modern Clinic
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art facilities designed for your comfort and optimal dental care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`animate-in fade-in slide-in-from-bottom-4 duration-700 group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                idx === 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-80 md:h-96 overflow-hidden bg-gray-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredIndex === idx ? "scale-110" : "scale-100"
                  }`}
                />
                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}
                >
                  <div className="p-6 w-full">
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Below Gallery */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all hover:border-primary/30 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center group hover:translate-y-2 transition-transform cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">Modern Equipment</h3>
              <p className="text-muted-foreground text-sm">
                Latest dental technology for precision treatments
              </p>
            </div>

            <div className="text-center group hover:translate-y-2 transition-transform cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">Comfortable Environment</h3>
              <p className="text-muted-foreground text-sm">
                Relaxing spaces designed for patient comfort
              </p>
            </div>

            <div className="text-center group hover:translate-y-2 transition-transform cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2">Expert Care</h3>
              <p className="text-muted-foreground text-sm">
                Experienced doctors providing exceptional service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
