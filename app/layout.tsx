import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Multiplex Consulting Services - Accredited Skills Development & Training',
    template: '%s | Multiplex Consulting Services'
  },
  description: 'Transform your future with Multiplex Consulting Services. Accredited skills development, entrepreneurship support, and comprehensive training programs. SETA accredited provider empowering excellence.',
  keywords: [
    'training',
    'skills development',
    'accredited training',
    'SETA accredited',
    'entrepreneurship',
    'professional development',
    'South Africa training',
    'career development',
    'vocational training',
    'business skills'
  ],
  authors: [{ name: 'Multiplex Consulting Services' }],
  creator: 'Multiplex Consulting Services',
  publisher: 'Multiplex Consulting Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://multiplex.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://multiplex.co.za',
    siteName: 'Multiplex Consulting Services',
    title: 'Multiplex Consulting Services - Accredited Skills Development & Training',
    description: 'Transform your future with Multiplex Consulting Services. Accredited skills development, entrepreneurship support, and comprehensive training programs.',
    images: [
      {
        url: '/images/hero-training.jpg',
        width: 1200,
        height: 630,
        alt: 'Multiplex Consulting Services - Professional skills training environment',
      },
      {
        url: '/images/inqola-logo.png',
        width: 400,
        height: 400,
        alt: 'Multiplex Consulting Services Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multiplex Consulting Services - Accredited Skills Development & Training',
    description: 'Transform your future with Multiplex Consulting Services. Accredited skills development, entrepreneurship support, and comprehensive training programs.',
    images: ['/images/hero-training.jpg'],
    creator: '@multiplex',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'education',
  classification: 'Training and Skills Development',
  other: {
    'geo.region': 'ZA',
    'geo.placename': 'South Africa',
    'geo.position': '-26.2041;28.0473',
    'ICBM': '-26.2041, 28.0473',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Multiplex Consulting Services",
              "alternateName": "Multiplex Consulting Services",
              "description": "Accredited skills development and training provider empowering excellence through comprehensive training programs.",
              "url": "https://multiplex.co.za",
              "logo": "https://multiplex.co.za/images/inqola-logo.png",
              "image": "https://multiplex.co.za/images/hero-training.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ZA",
                "addressRegion": "Gauteng"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+27-XX-XXX-XXXX",
                "contactType": "customer service",
                "email": "info@multiplex.co.za"
              },
              "sameAs": [
                "https://www.facebook.com/multiplex",
                "https://www.linkedin.com/company/multiplex",
                "https://twitter.com/multiplex"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Training Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Skills Development Training",
                      "description": "Comprehensive skills development programs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Entrepreneurship Support",
                      "description": "Business development and entrepreneurship training"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Multiplex Consulting Services",
              "url": "https://multiplex.co.za",
              "logo": "https://multiplex.co.za/images/inqola-logo.png",
              "foundingDate": "2020",
              "description": "Accredited training provider specializing in skills development and entrepreneurship support.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ZA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@multiplex.co.za"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
