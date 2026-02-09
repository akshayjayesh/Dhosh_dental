"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin } from "lucide-react"

const mainDoctors = [
  {
    name: "Dr. ASHISH KUMAR GHOSH",
    title: "Principal Dentist",
    qualifications: "BDS",
    specialization: "General Dentistry & Orthodontist",
    phone: "+91 94470 45560",
    email: "ashish@ghoshdental.com",
    category: "Main Doctor",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fb102da237b80440abbd5f8140df01ad3?format=webp&width=800",
    experience: "32+ years",
  },
  {
    name: "Dr. SHYLAJA GHOSH",
    title: "Principal Dentist",
    qualifications: "BDS",
    specialization: "General Dentistry",
    phone: "+91 94470 45560",
    email: "shylaja@ghoshdental.com",
    category: "Main Doctor",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F76aea0e9125a4ccb8da2436d848a3dfd?format=webp&width=800",
    experience: "32 years",
  },
  {
    name: "Dr. NANDITHA GHOSH",
    title: "Principal Dentist",
    qualifications: "BDS, MDS",
    specialization: "Endodontist",
    phone: "+91 94470 45560",
    email: "nanditha@ghoshdental.com",
    category: "Main Doctor",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F703e19e82f404300a68106c3c1b3897b?format=webp&width=800",
    experience: "4 years",
  },
]

const consultants = [
  {
    name: "Dr. SONY JACOB",
    title: "Consultant",
    qualifications: "BDS, MDS",
    specialization: "Oral & Maxillo Facial Surgeon",
    phone: "+91 94470 45560",
    email: "sony@ghoshdental.com",
    category: "Consultant",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fd9813784f3ae40ac9bf09b1326563ddb?format=webp&width=800",
    experience: "12+ years",
  },
  {
    name: "Dr. SUBAIR K.",
    title: "Consultant",
    qualifications: "BDS, MDS",
    specialization: "Periodontist",
    phone: "+91 94470 45560",
    email: "subair@ghoshdental.com",
    category: "Consultant",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fb102da237b80440abbd5f8140df01ad3?format=webp&width=800",
    experience: "10+ years",
  },
  {
    name: "Dr. MUHAMMED YASAR ARAFAT",
    title: "Consultant",
    qualifications: "BDS, MDS",
    specialization: "Endodontist",
    phone: "+91 94470 45560",
    email: "yasar@ghoshdental.com",
    category: "Consultant",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F76aea0e9125a4ccb8da2436d848a3dfd?format=webp&width=800",
    experience: "11+ years",
  },
  {
    name: "Dr sai sri",
    title: "Consultant",
    qualifications: "BDS, MDS",
    specialization: "Pedodontist",
    phone: "+91 94470 45560",
    email: "saisri@ghoshdental.com",
    category: "Consultant",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2F703e19e82f404300a68106c3c1b3897b?format=webp&width=800",
    experience: "9+ years",
  },
  {
    name: "Dr. VISHAL VIJAYAN",
    title: "Consultant",
    qualifications: "BDS, MDS",
    specialization: "Orthodontist",
    phone: "+91 94470 45560",
    email: "vishal@ghoshdental.com",
    category: "Consultant",
    image: "https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fd9813784f3ae40ac9bf09b1326563ddb?format=webp&width=800",
    experience: "8+ years",
  },
]

function DoctorCard({ doctor, idx, selectedDoctor, hoveredCard, setSelectedDoctor, setHoveredCard, selectedCategory }: any) {
  return (
    <div
      key={idx}
      onMouseEnter={() => {
        setHoveredCard(idx)
        setSelectedDoctor(idx)
      }}
      onMouseLeave={() => setHoveredCard(null)}
      className="group cursor-pointer h-full"
    >
      <Card
        className={`overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
          selectedDoctor === idx ? "ring-2 ring-primary" : ""
        }`}
      >
        {/* Content */}
        <div className="p-6 space-y-3 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
              <h3 className="font-bold text-foreground text-sm line-clamp-2">{doctor.name}</h3>
              <p className="text-xs text-primary font-semibold mt-1">{doctor.title}</p>
            </div>
            {selectedCategory === "main" && (
              <Badge className="bg-primary/90 whitespace-nowrap">{doctor.experience}</Badge>
            )}
          </div>

          <div className="text-xs">
            <p className="text-muted-foreground mb-2">{doctor.qualifications}</p>
            <p className="text-xs text-gray-600 line-clamp-2">{doctor.specialization}</p>
          </div>

          {/* Contact Icons */}
          <div className="flex gap-2 pt-2 border-t">
            <a
              href={`tel:${doctor.phone}`}
              className="flex-1 flex items-center justify-center p-2 bg-primary/10 hover:bg-primary/20 rounded transition-all text-primary hover:scale-110"
              title="Call"
            >
              <Phone size={16} />
            </a>
            <a
              href={`mailto:${doctor.email}`}
              className="flex-1 flex items-center justify-center p-2 bg-primary/10 hover:bg-primary/20 rounded transition-all text-primary hover:scale-110"
              title="Email"
            >
              <Mail size={16} />
            </a>
            <div className="flex-1 flex items-center justify-center p-2 bg-primary/10 hover:bg-primary/20 rounded transition-all text-primary hover:scale-110 cursor-pointer">
              <MapPin size={16} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<"main" | "consultant">("main")

  const allDoctors = selectedCategory === "main" ? mainDoctors : consultants
  const selectedDoctorData = allDoctors[selectedDoctor ?? 0]

  return (
    <section id="doctors" className="py-20 bg-gradient-to-b from-red-50 via-white to-red-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Expert Doctors & Faculty</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our highly qualified team of orthodontists and dental specialists
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-12 justify-center">
          <button
            onClick={() => {
              setSelectedCategory("main")
              setSelectedDoctor(null)
              setHoveredCard(null)
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === "main"
                ? "bg-primary text-white shadow-lg"
                : "bg-white border-2 border-primary text-primary hover:bg-primary/5"
            }`}
          >
            Principal Dentists ({mainDoctors.length})
          </button>
          <button
            onClick={() => {
              setSelectedCategory("consultant")
              setSelectedDoctor(null)
              setHoveredCard(null)
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === "consultant"
                ? "bg-primary text-white shadow-lg"
                : "bg-white border-2 border-primary text-primary hover:bg-primary/5"
            }`}
          >
            Consultants ({consultants.length})
          </button>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allDoctors.map((doctor, idx) => (
            <DoctorCard
              key={idx}
              doctor={doctor}
              idx={idx}
              selectedDoctor={selectedDoctor}
              hoveredCard={hoveredCard}
              setSelectedDoctor={setSelectedDoctor}
              setHoveredCard={setHoveredCard}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>

        {/* Highlighted Featured Doctor */}
        {selectedDoctor !== null && selectedDoctorData && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                  src={selectedDoctorData.image || "/placeholder.svg"}
                  alt={selectedDoctorData.name}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{selectedDoctorData.name}</h3>
                    <p className="text-lg text-primary font-semibold mb-1">{selectedDoctorData.title}</p>
                    {selectedCategory === "main" && (
                      <p className="text-muted-foreground mb-4">{selectedDoctorData.experience} of Experience</p>
                    )}
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Qualifications:</p>
                    <p className="text-muted-foreground mb-4">{selectedDoctorData.qualifications}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Specialization:</p>
                    <p className="text-muted-foreground mb-4">{selectedDoctorData.specialization}</p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={`tel:${selectedDoctorData.phone}`}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href={`mailto:${selectedDoctorData.email}`}
                      className="flex-1 bg-accent/20 hover:bg-accent/30 text-accent font-semibold py-3 rounded-lg transition-all hover:shadow-lg text-center"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
