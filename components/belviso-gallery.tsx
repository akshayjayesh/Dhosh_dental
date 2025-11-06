"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

type Pair = {
  category: string
  treatment: string
  sessions: string
  before: string
  after: string
}

const pairs: Pair[] = [
  {
    category: "Anti-aging",
    treatment: "Botox + Fillers",
    sessions: "1–2 sessions",
    before: "/belviso-before-anti-aging-01.svg",
    after: "/belviso-after-anti-aging-01.svg",
  },
  {
    category: "Skin treatments",
    treatment: "Laser Resurfacing",
    sessions: "2–4 sessions",
    before: "/belviso-before-laser-01.svg",
    after: "/belviso-after-laser-01.svg",
  },
  {
    category: "Facial contouring",
    treatment: "Thread Lift",
    sessions: "1 session",
    before: "/belviso-before-tightening-01.svg",
    after: "/belviso-after-tightening-01.svg",
  },
  {
    category: "Acne treatment",
    treatment: "Medical Peel",
    sessions: "3 sessions",
    before: "/belviso-before-acne-01.svg",
    after: "/belviso-after-acne-01.svg",
  },
  {
    category: "Skin treatments",
    treatment: "Hydrafacial",
    sessions: "Monthly",
    before: "/belviso-before-hydrafacial-01.svg",
    after: "/belviso-after-hydrafacial-01.svg",
  },
  {
    category: "Facial contouring",
    treatment: "RF Tightening",
    sessions: "4–6 sessions",
    before: "/belviso-before-contour-01.svg",
    after: "/belviso-after-contour-01.svg",
  },
]

function Comparison({ before, after, labelL, labelR, sessions }: { before: string; after: string; labelL: string; labelR: string; sessions: string }) {
  const [pos, setPos] = useState(50)

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl">
      <img
        src={before}
        alt={`${labelL} image`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={after} alt={`${labelR} image`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">Before</div>
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">After</div>
      </div>

      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-0.5 h-full bg-white/70 translate-x-[-1px]" style={{ marginLeft: `${pos}%` }} />
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(parseInt(e.target.value))}
        aria-label="Compare before and after"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3 accent-[color:var(--primary)]"
      />

      <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">{sessions}</div>
    </div>
  )
}

export default function BelvisoGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Real Results, Real Confidence</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore outcomes from our facial cosmetic treatments across common concerns
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pairs.map((p, i) => (
            <Card key={`${p.category}-${i}`} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Comparison before={p.before} after={p.after} labelL={p.category} labelR={p.treatment} sessions={p.sessions} />
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{p.category}</p>
                <p className="font-semibold text-foreground">{p.treatment}</p>
                <p className="text-xs text-muted-foreground mt-1">Treatment plan: {p.sessions}</p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6 text-center">Images shared with patient consent</p>
      </div>
    </section>
  )
}
