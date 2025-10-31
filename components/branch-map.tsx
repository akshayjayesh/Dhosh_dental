"use client"

interface Branch {
  name: string
  location: string
  phone: string
  hours: string
  mapUrl: string
  coords: { lat: number; lng: number }
}

interface BranchMapProps {
  branches: Branch[]
  selectedBranch: number
  onSelectBranch: (idx: number) => void
}

export default function BranchMap({ branches, selectedBranch }: BranchMapProps) {
  const selected = branches[selectedBranch]

  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-card border border-border shadow-lg">
      <iframe
        src={selected.mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </div>
  )
}
