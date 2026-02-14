// Structured Data components for SEO

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BitcoinLoans.com',
    url: 'https://bitcoinloans.com',
    logo: 'https://bitcoinloans.com/logo.png',
    description: 'Compare Bitcoin-backed loan platforms and calculate loan terms.',
    sameAs: [
      'https://twitter.com/bitcoinloans',
      // Add social profiles when available
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BitcoinLoans.com',
    url: 'https://bitcoinloans.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bitcoinloans.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({ 
  title, 
  description, 
  datePublished, 
  dateModified, 
  author = 'BitcoinLoans.com Editorial Team',
  image = 'https://bitcoinloans.com/og-image.jpg'
}: { 
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BitcoinLoans.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bitcoinloans.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ questions }: { questions: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
