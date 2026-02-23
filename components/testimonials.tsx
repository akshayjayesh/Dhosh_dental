"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sanisha Roshith",
    location: "1 review",
    rating: 5,
    text: "One of the best dental clinic I have visited. The doctor is very kind, patient, and skilled. Treatment was painless and affordable. Staff behavior is also very good. Truly satisfied with the service❤️❤️",
    image: "/smiling-woman-portrait-professional.jpg",
  },
  {
    name: "Vinod Parery",
    location: "Local Guide·6 reviews",
    rating: 5,
    text: "I am thoroughly impressed with the quality of care and service at Ghosh's New Dental Clinic. The entire team is exceptional, reflecting the high standards of Dr. Ghosh himself. As a highly experienced dentist with over three decades in practice, he is someone I would confidently recommend for any dental needs.",
    image: "/confident-man-smiling-professional-portrait.jpg",
  },
  {
    name: "Anjana Ak",
    location: "3 reviews",
    rating: 5,
    text: "Very friendly and comfortable Dr if anybody have dental problem can visit the clinic without 2nd thought and opinion. Reception staff treat us very kindly",
    image: "/happy-woman-face-portrait-smiling.jpg",
  },
  {
    name: "Nandana E",
    location: "2 reviews",
    rating: 5,
    text: "Excellent experience from start to finish. The dentist and staff were incredibly professional and friendly. Treatment was painless, and they explained everything clearly. Highly recommend this clinic for anyone nervous about dental visits.",
    image: "/cheerful-woman-face-portrait-smiling.jpg",
  },
  {
    name: "AMAYA M P",
    location: "1 review",
    rating: 5,
    text: "I highly recommend this clinic. The doctor took the time to explain everything, making me feel very comfortable. ✨",
    image: "/happy-woman-face-portrait-smiling.jpg",
  },
  {
    name: "Apranarineesh Parambath",
    location: "1 review",
    rating: 5,
    text: "Best doctor and staff I had ever met for my dental treatment thank you.",
    image: "/confident-man-smiling-professional-portrait.jpg",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Patient Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real stories from our happy patients</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Carousel */}
        <div className="relative">
          <Card className="p-12 shadow-2xl bg-gradient-to-br from-white to-red-50/50 hover:shadow-3xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-80">
              {/* Testimonial Content */}
              <div className="animate-in fade-in duration-500 space-y-4">
                <div className="flex gap-1 mb-4 hover:gap-2 transition-all">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform"
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-xl text-foreground leading-relaxed italic hover:text-primary/80 transition-colors">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center gap-3 pt-2 hover:translate-x-2 transition-transform cursor-pointer">
                  <img
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full border-2 border-primary/20 shadow-md"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonials[current].name}</p>
                    <p className="text-muted-foreground text-sm">{testimonials[current].location}</p>
                  </div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all hover:scale-105">
                <img
                  src="/before-after-dental-teeth-transformation-smile-com.jpg"
                  alt="Before and after smile transformation"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrent(idx)
                      setAutoPlay(false)
                    }}
                    className={`h-3 rounded-full transition-all hover:scale-125 ${
                      idx === current ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  size="icon"
                  onClick={prev}
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent hover:scale-110 transition-all"
                  variant="outline"
                >
                  <ChevronLeft />
                </Button>
                <Button
                  size="icon"
                  onClick={next}
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent hover:scale-110 transition-all"
                  variant="outline"
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </Card>

          {/* View All Button */}
          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 hover:shadow-lg hover:scale-105 transition-all">
              View All Testimonials
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
