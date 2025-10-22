import { Metadata } from 'next';

export const siteConfig = {
  name: 'Sonint Technology',
  description: 'Sonint Technology builds custom software, AI automation, and cloud-native solutions from India for global clients. Rooted in India, engineered for the world.',
  url: 'https://sonint.io',
  ogImage: '/og.png',
  creator: '@soninttech',
  keywords: [
    // Primary Keywords (High Relevance)
    'software development company in India',
    'custom software solutions',
    'full stack development services',
    'React JS development company',
    'Next JS development services',
    'web application development',
    'enterprise software solutions',
    'AI and automation software',
    'cloud-native software development',
    'modern software engineering firm',
    
    // Brand + Geo Keywords
    'Sonint Technology',
    'Sonint Digital Solutions',
    'Sonbhadra tech startup',
    'software company from India\'s heartland',
    'Indian software engineering startup',
    'tech company in Uttar Pradesh India',
    'tier-2 city tech startup India',
    
    // Service Offering Keywords
    'custom ERP development',
    'business process automation software',
    'web portal design and development',
    'REST API integration services',
    'front-end development React Tailwind',
    'backend development Spring Boot Java',
    'DevOps and CI/CD integration',
    'UI/UX design for web apps',
    'cross-platform application development',
    
    // Vision & Thought-Leadership Keywords
    'digital transformation India',
    'innovation in software engineering',
    'empowering Indian developers',
    'building global tech from India',
    'AI-driven software solutions',
    'future-ready technology services',
    'startup software studio India',
    
    // Long-Tail & Content Keywords
    'how to build a custom ERP for colleges',
    'benefits of AI in software automation',
    'React and Spring Boot full-stack tutorial',
    'digital transformation for local businesses India',
    'low-code vs custom software development',
    'building future-ready apps with cloud native architecture',
    
    // Core Technical Keywords
    'software development company',
    'web development services',
    'React development',
    'Spring Boot development',
    'custom ERP systems',
    'cloud infrastructure',
    'mobile app development',
    'AI integration',
    'business automation',
    'remote development team',
    'software engineering India',
    'web applications',
    'API development',
    'digital transformation',
    'startup technology solutions'
  ]
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/favicon.ico',
  noIndex = false,
  keywords = siteConfig.keywords,
  ...props
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  keywords?: string[];
} & Metadata = {}): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: siteConfig.creator,
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    ...props,
  };
}

// Common structured data schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sonint Technology',
  alternateName: 'Sonint',
  url: 'https://sonint.io',
  logo: 'https://sonint.io/sonintLogo.png',
  description: siteConfig.description,
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sonbhadra',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98765-43210',
    contactType: 'customer service',
    email: 'hello@sonint.io'
  },
  sameAs: [
    'https://github.com/sonint-tech',
    'https://linkedin.com/company/sonint-technology'
  ]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sonint Technology',
  url: 'https://sonint.io',
  description: siteConfig.description,
  publisher: organizationSchema,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://sonint.io/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: service.provider || 'Sonint Technology'
  },
  areaServed: service.areaServed || 'Worldwide'
});