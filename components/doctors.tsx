"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin } from "lucide-react"

const doctors = [
  {
    name: "Dr. Dinak",
    title: "Chief Orthodontist & Founder",
    qualifications: "BDS, MDS, PGDHE, FFAC",
    specialization: "Aligner Alveolary Orthodontist & Dental Implantologist",
    phone: "+91 98765 43210",
    email: "dr.niyaz@clinic.com",
    locations: ["Kochi Main", "Thiruvananthapuram"],
    image: "/professional-dentist-with-patient-smiling-dental-c.jpg",
    experience: "20+ years",
  },
  {
    name: "Dr. George",
    title: "Senior Orthodontist",
    qualifications: "BDS, MDS, MSHCH",
    specialization: "Dental and Dentosilical Orthodontist",
    phone: "+91 98765 43211",
    email: "dr.babitha@clinic.com",
    locations: ["Kochi Main", "Thrissur"],
    image: "/clear-dental-aligners-transparent-braces.jpg",
    experience: "15+ years",
  },
  {
    name: "Dr. Andrews",
    title: "Chief Dentist & RCT Specialist",
    qualifications: "BDS",
    specialization: "Chief Dentist & Consultant RCT & Sleep Specialist",
    phone: "+91 98765 43212",
    email: "dr.clint@clinic.com",
    locations: ["Kozhikode"],
    image: "/metal-braces-dental-orthodontic-treatment.jpg",
    experience: "12+ years",
  },
  {
    name: "Dr. Amin",
    title: "Aligner Specialist",
    qualifications: "BDS",
    specialization: "Chief Dentist & Aligner Specialist",
    phone: "+91 98765 43213",
    email: "dr.farhat@clinic.com",
    locations: ["Ernakulathappan"],
    image: "/ceramic-braces-tooth-colored-orthodontic.jpg",
    experience: "10+ years",
  },
  {
    name: "Dr. Shaharban",
    title: "General Dentist",
    qualifications: "BDS, FCI",
    specialization: "General Dentistry",
    phone: "+91 98765 43214",
    email: "dr.ba@clinic.com",
    locations: ["Kottayam"],
    image: "/professional-dentist-with-patient-smiling-dental-c.jpg",
    experience: "8+ years",
  },
  {
    name: "Dr. Ramesh",
    title: "General Dentist & Therapist",
    qualifications: "BDS",
    specialization: "General Dental & Dental Therapist",
    phone: "+91 98765 43215",
    email: "dr.amal@clinic.com",
    locations: ["Kochi Main"],
    image: "/clear-dental-aligners-transparent-braces.jpg",
    experience: "7+ years",
  },
  {
    name: "Dr. Hashim",
    title: "General Dentist",
    qualifications: "BDS",
    specialization: "General Dentistry",
    phone: "+91 98765 43216",
    email: "dr.hashim@clinic.com",
    locations: ["Kozhikode"],
    image: "/metal-braces-dental-orthodontic-treatment.jpg",
    experience: "6+ years",
  },
  {
    name: "Dr. Francis",
    title: "General Dentist",
    qualifications: "BDS",
    specialization: "General Dentistry",
    phone: "+91 98765 43217",
    email: "dr.hena@clinic.com",
    locations: ["Thiruvananthapuram"],
    image: "/ceramic-braces-tooth-colored-orthodontic.jpg",
    experience: "5+ years",
  },
]

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="doctors" className="py-20 bg-gradient-to-b from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Expert Doctors & Faculty</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our highly qualified team of orthodontists and dental specialists
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, idx) => (
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
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      hoveredCard === idx ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-primary/90">{doctor.experience}</Badge>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-foreground text-sm line-clamp-2">{doctor.name}</h3>
                    <p className="text-xs text-primary font-semibold mt-1">{doctor.title}</p>
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
          ))}
        </div>

        {/* Highlighted Featured Doctor */}
        {selectedDoctor !== null && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                  src={doctors[selectedDoctor].image || "/placeholder.svg"}
                  alt={doctors[selectedDoctor].name}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{doctors[selectedDoctor].name}</h3>
                    <p className="text-lg text-primary font-semibold mb-1">{doctors[selectedDoctor].title}</p>
                    <p className="text-muted-foreground mb-4">{doctors[selectedDoctor].experience} of Experience</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Qualifications:</p>
                    <p className="text-muted-foreground mb-4">{doctors[selectedDoctor].qualifications}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Specialization:</p>
                    <p className="text-muted-foreground mb-4">{doctors[selectedDoctor].specialization}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">Available At:</p>
                    <div className="flex flex-wrap gap-2">
                      {doctors[selectedDoctor].locations.map((loc, idx) => (
                        <Badge key={idx} variant="secondary">
                          {loc}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={`tel:${doctors[selectedDoctor].phone}`}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href={`mailto:${doctors[selectedDoctor].email}`}
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
