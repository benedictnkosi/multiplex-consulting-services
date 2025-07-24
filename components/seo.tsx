'use client'

import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'course'
  structuredData?: object
}

export function SEO({
  title,
  description,
  image = '/images/hero-training.jpg',
  url,
  type = 'website',
  structuredData
}: SEOProps) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description)
    }

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage && image) {
      ogImage.setAttribute('content', `https://multiplex.co.za${image}`)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl && url) {
      ogUrl.setAttribute('content', url)
    }

    const ogType = document.querySelector('meta[property="og:type"]')
    if (ogType) {
      ogType.setAttribute('content', type)
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description)
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    if (twitterImage && image) {
      twitterImage.setAttribute('content', `https://multiplex.co.za${image}`)
    }

    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [title, description, image, url, type, structuredData])

  return null
}

// Predefined structured data for common page types
export const structuredData = {
  course: (courseData: {
    name: string
    description: string
    provider: string
    url: string
    duration?: string
    price?: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.name,
    "description": courseData.description,
    "provider": {
      "@type": "Organization",
      "name": courseData.provider,
      "url": "https://multiplex.co.za"
    },
    "url": courseData.url,
    "duration": courseData.duration,
    "offers": courseData.price ? {
      "@type": "Offer",
      "price": courseData.price,
      "priceCurrency": "ZAR"
    } : undefined
  }),

  article: (articleData: {
    title: string
    description: string
    author: string
    datePublished: string
    image?: string
    url: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {
      "@type": "Person",
      "name": articleData.author
    },
    "datePublished": articleData.datePublished,
    "image": articleData.image ? `https://multiplex.co.za${articleData.image}` : undefined,
    "url": articleData.url,
    "publisher": {
      "@type": "Organization",
      "name": "Multiplex Consulting Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://multiplex.co.za/images/inqola-logo.png"
      }
    }
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
  })
} 