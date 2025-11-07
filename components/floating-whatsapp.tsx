import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919447045560?text=Hello%20Ghosh%27s%20Dental%20Studio,%20I%20would%20like%20to%20book%20an%20appointment"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40 animate-bounce group"
    >
      <MessageCircle className="text-white" size={32} />
      <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm">
        Chat with us
      </span>
    </a>
  )
}
