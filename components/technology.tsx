"use client"

import { useState, useEffect } from "react"
import { Zap, Cpu, Brain, Smile } from "lucide-react"
import { Card } from "@/components/ui/card"

const technologies = [
  {
    title: "3D Digital Scanning",
    description: "Advanced 3D imaging for precise treatment planning",
    icon: Zap,
  },
  {
    title: "Laser Technology",
    description: "Latest laser systems for aesthetic procedures",
    icon: Cpu,
  },
  {
    title: "AI-Powered Planning",
    description: "Artificial intelligence for optimal results",
    icon: Brain,
  },
  {
    title: "Digital Smile Design",
    description: "Visualize your transformation before treatment",
    icon: Smile,
  },
]

export default function Technology() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("technology")
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.8)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header with Enhanced Messaging */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Technology & Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Advanced Technology Prescribed for Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            At Grace And Glow, we invest in the most advanced dermatological and dental technology available. Every
            piece of equipment in our clinic is carefully selected and scientifically proven to deliver superior
            results. We don't just follow trends—we implement evidence-based, internationally certified treatments that
            prioritize your safety and satisfaction.
          </p>
          <p className="text-lg text-primary font-semibold max-w-3xl mx-auto">
            We are the real deal in aesthetic and dental excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Main Technology Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl h-96 group cursor-pointer hover:shadow-3xl transition-all hover:-translate-y-2 duration-300">
          <img
            src="/modern-aesthetic-clinic-technology-equipment-derma.jpg"
            alt="Modern aesthetic clinic technology"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Technology Features Grid - Enhanced with Professional Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Card
                  className={`p-6 hover:shadow-xl hover:-translate-y-3 transition-all group cursor-pointer border-border hover:border-primary/50 h-full ${
                    hoveredCard === idx ? "shadow-xl bg-primary/5" : ""
                  }`}
                >
                  <div
                    className={`w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-all ${
                      hoveredCard === idx ? "scale-110 bg-primary/30" : ""
                    }`}
                  >
                    <Icon
                      className={`text-primary transition-all ${hoveredCard === idx ? "scale-125 rotate-12" : ""}`}
                      size={28}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Professional Approach Statement */}
        <div className="bg-gradient-to-r from-primary/5 via-white to-accent/5 rounded-2xl p-10 border border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Treatment Philosophy</h3>
          <p className="text-lg text-foreground leading-relaxed text-center max-w-3xl mx-auto mb-6">
            We use only FDA-approved, clinically tested technology that's specifically prescribed for each treatment
            type. Our doctors stay updated with international dermatological and dental standards, ensuring you receive
            globally recognized excellence. Every procedure is guided by science, performed with precision, and
            customized to your unique needs.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-primary/20">
            <div className="space-y-3">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <span className="text-2xl">🏥</span> Medical Grade Technology
              </h4>
              <p className="text-muted-foreground text-sm">
                All equipment meets FDA, CE, and ISO standards with regular calibration and maintenance protocols
                ensuring optimal performance and patient safety.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <span className="text-2xl">📊</span> Evidence-Based Approach
              </h4>
              <p className="text-muted-foreground text-sm">
                Every treatment protocol is based on peer-reviewed research and clinical trials, ensuring you receive
                scientifically validated procedures.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <span className="text-2xl">👨‍⚕️</span> Expert Practitioners
              </h4>
              <p className="text-muted-foreground text-sm">
                Our certified specialists undergo continuous training in latest techniques and technology, maintaining
                international board certifications.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <span className="text-2xl">✨</span> Real Results
              </h4>
              <p className="text-muted-foreground text-sm">
                We're not just equipped with technology—we have the expertise to master it, delivering transformative
                results you can see and feel.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-700 hover:translate-x-2 transition-transform cursor-pointer">
              <div className="text-3xl text-primary">✓</div>
              <div>
                <p className="font-bold text-foreground">Clinical Efficacy</p>
                <p className="text-sm text-muted-foreground">Proven results backed by research</p>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700 delay-100 hover:translate-y-1 transition-transform cursor-pointer">
              <div className="text-3xl text-primary">✓</div>
              <div>
                <p className="font-bold text-foreground">Safety Standards</p>
                <p className="text-sm text-muted-foreground">ISO certified & international protocols</p>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-right-4 duration-700 delay-200 hover:-translate-x-2 transition-transform cursor-pointer">
              <div className="text-3xl text-primary">✓</div>
              <div>
                <p className="font-bold text-foreground">Personalized Care</p>
                <p className="text-sm text-muted-foreground">Customized treatment for your goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
