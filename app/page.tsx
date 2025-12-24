"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Branches from "@/components/branches"
import Services from "@/components/services"
import Doctors from "@/components/doctors"
import Technology from "@/components/technology"
import PatientCare from "@/components/patient-care"
import Testimonials from "@/components/testimonials"
import Timeline from "@/components/timeline"
import BeforeAfter from "@/components/before-after"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Branches />
      <Services />
      <Doctors />
      <Technology />
      <PatientCare />
      <Testimonials />
      <Timeline />
      <BeforeAfter />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  )
}
