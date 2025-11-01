export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Devit.IA",
  "alternateName": "DevConnect",
  "url": "https://devit-ia.com",
  "logo": "https://devit-ia.com/logo.png",
  "description": "Externalisation IT et Data pour entreprises francophones. Méthode DevConnect exclusive, nearshore Maroc, développeurs et data analysts certifiés.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "58 rue Monceau",
    "addressLocality": "Paris",
    "postalCode": "75008",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-7-63-26-26-09",
    "contactType": "Sales",
    "email": "contact@devitia.ma",
    "availableLanguage": ["French"],
    "areaServed": ["FR", "BE", "CH", "CA", "MA"]
  },
  "sameAs": [
    "https://linkedin.com/company/devit-ia"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "IT Outsourcing & Data Services",
  "provider": {
    "@type": "Organization",
    "name": "Devit.IA"
  },
  "areaServed": {
    "@type": "Country",
    "name": ["France", "Belgium", "Switzerland", "Canada", "Morocco"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT & Data Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développement Web & Mobile",
          "description": "Développeurs full-stack, front-end, back-end certifiés pour vos projets"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Engineering & Analytics",
          "description": "Data analysts et data engineers pour vos projets BI et Big Data"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intelligence Artificielle",
          "description": "Experts IA et Machine Learning pour vos projets d'innovation"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
