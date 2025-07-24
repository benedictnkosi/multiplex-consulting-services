'use client'

import { useEffect } from 'react'

interface JsonLdProps {
  data: object
  id?: string
}

export function JsonLd({ data, id }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    if (id) {
      script.id = id
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [data, id])

  return null
}

// Predefined schema templates
export const schemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Multiplex Consulting Services",
    "alternateName": "Multiplex Consulting Services",
    "url": "https://multiplexconsulting.co.za",
    "logo": "https://multiplexconsulting.co.za/images/multiplex-logo.png",
    "description": "Accredited skills development and training provider empowering excellence through comprehensive training programs.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "04 Jacana Crescent, Crystal Park Ext3",
      "addressLocality": "City of Ekurhuleni",
      "postalCode": "1515",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-64-534-8988",
      "contactType": "customer service",
      "email": "info@multiplexconsulting.co.za",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/multiplexconsulting",
      "https://www.linkedin.com/company/multiplexconsulting",
      "https://twitter.com/multiplexconsulting"
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
            "description": "Comprehensive skills development programs accredited by SETA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Entrepreneurship Support",
            "description": "Business development and entrepreneurship training programs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Professional Development",
            "description": "Career advancement and professional skills training"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Gauteng Province"
    }
  },

  course: (courseData: {
    name: string
    description: string
    provider: string
    url: string
    duration?: string
    price?: string
    startDate?: string
    endDate?: string
    location?: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.name,
    "description": courseData.description,
    "provider": {
      "@type": "Organization",
      "name": courseData.provider,
      "url": "https://multiplexconsulting.co.za"
    },
    "url": courseData.url,
    "duration": courseData.duration,
    "startDate": courseData.startDate,
    "endDate": courseData.endDate,
    "location": courseData.location ? {
      "@type": "Place",
      "name": courseData.location
    } : undefined,
    "offers": courseData.price ? {
      "@type": "Offer",
      "price": courseData.price,
      "priceCurrency": "ZAR",
      "availability": "https://schema.org/InStock"
    } : undefined,
    "educationalLevel": "Professional",
    "inLanguage": "en",
    "teaches": "Skills development and professional training"
  }),

  faq: (faqData: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }),

  breadcrumb: (breadcrumbData: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbData.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Multiplex Consulting Services",
    "image": "https://multiplexconsulting.co.za/images/multiplex-logo.png",
    "description": "Accredited training provider specializing in skills development and entrepreneurship support.",
    "url": "https://multiplexconsulting.co.za",
    "telephone": "+27-64-534-8988",
    "email": "info@multiplexconsulting.co.za",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "04 Jacana Crescent, Crystal Park Ext3",
      "addressLocality": "City of Ekurhuleni",
      "postalCode": "1515",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.12151615731252,
      "longitude": 28.3798294
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "ZAR"
  }
} 