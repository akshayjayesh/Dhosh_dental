import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=919876543210&text=Hello+Dr%27s%2C+I+would+like+to+book+an+appointment&type=phone_number&app_absent=0"
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
