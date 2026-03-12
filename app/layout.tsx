import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _inter = Inter({ subsets: ["latin"] })

import { BRAND_NAME, PHONE_DIAL } from "@/lib/site"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} | Best Dental Clinic in Kerala`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Ghosh's Dental Studio offers premier dental care, cosmetic dentistry, orthodontics with clear aligners and braces. Advanced technology, expert dentists in Kerala. Book appointment today!",
  keywords: [
    "dental clinic Kerala",
    "dentist near me",
    "best dental clinic",
    "orthodontics Kerala",
    "clear aligners",
    "braces treatment",
    "smile makeover",
    "cosmetic dentistry",
    "dental implants",
    "teeth whitening",
    "root canal treatment",
    "dental surgery",
    "Ghosh's Dental Studio",
  ],
  generator: "Next.js",
  applicationName: BRAND_NAME,
  authors: [
    {
      name: BRAND_NAME,
      url: "https://ghostsdentalstudio.com",
    },
  ],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ghostsdentalstudio.com",
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | Best Dental Clinic in Kerala`,
    description:
      "Ghosh's Dental Studio offers premier dental care, cosmetic dentistry, orthodontics with clear aligners and braces. Advanced technology, expert dentists in Kerala.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Fbc64039380c24b609f2a167fa750a5cc?format=webp&width=1200",
        width: 1200,
        height: 630,
        alt: "Ghosh's Dental Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Best Dental Clinic in Kerala`,
    description:
      "Ghosh's Dental Studio offers premier dental care, cosmetic dentistry, orthodontics with clear aligners and braces.",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Fbc64039380c24b609f2a167fa750a5cc?format=webp&width=1200",
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "any",
      },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth text-center">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: BRAND_NAME,
              image:
                "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Fbc64039380c24b609f2a167fa750a5cc?format=webp&width=800",
              description:
                "Premier dental clinic offering cosmetic dentistry, orthodontics, clear aligners, and advanced dental treatments in Kerala",
              url: "https://ghostsdentalstudio.com",
              telephone: PHONE_DIAL,
              sameAs: [
                "https://www.facebook.com/ghostsdentalstudio",
                "https://www.instagram.com/ghostsdentalstudio",
              ],
              areaServed: [
                {
                  "@type": "State",
                  name: "Kerala",
                },
              ],
              medicalSpecialty: [
                "Dentistry",
                "Orthodontics",
                "Cosmetic Dentistry",
                "Dental Surgery",
              ],
              department: [
                { "@type": "Dentist", name: "Dental Care" },
                { "@type": "Dentist", name: "Orthodontics" },
                { "@type": "Dentist", name: "Cosmetic Dentistry" },
              ],
              serviceArea: {
                "@type": "State",
                name: "Kerala",
              },
              priceRange: "₹₹",
              availableLanguage: "en",
            }),
          }}
          aria-hidden="true"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND_NAME,
              url: "https://ghostsdentalstudio.com",
              logo:
                "https://cdn.builder.io/api/v1/image/assets%2Fa85192c0436d4571a8e6190f11f433bd%2Fbc64039380c24b609f2a167fa750a5cc?format=webp&width=800",
              description:
                "Ghosh's Dental Studio - Premier dental care and orthodontics clinic",
              sameAs: [
                "https://www.facebook.com/ghostsdentalstudio",
                "https://www.instagram.com/ghostsdentalstudio",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: PHONE_DIAL,
              },
            }),
          }}
          aria-hidden="true"
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
