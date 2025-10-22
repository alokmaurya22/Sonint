import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sonint Technology – Software Development Company in India | Full-Stack & AI Solutions",
    template: "%s | Sonint Technology"
  },
  description:
    "Sonint Technology builds custom software, AI automation, and cloud-native solutions from India for global clients. Rooted in India, engineered for the world.",
  keywords: [
    // Primary Keywords (High Relevance)
    "software development company in India",
    "custom software solutions",
    "full stack development services",
    "React JS development company",
    "Next JS development services",
    "web application development",
    "enterprise software solutions",
    "AI and automation software",
    "cloud-native software development",
    "modern software engineering firm",

    // Brand + Geo Keywords
    "Sonint Technology",
    "Sonint Digital Solutions",
    "Sonbhadra tech startup",
    "software company from India's heartland",
    "Indian software engineering startup",
    "tech company in Uttar Pradesh India",
    "tier-2 city tech startup India",

    // Service Offering Keywords
    "custom ERP development",
    "business process automation software",
    "web portal design and development",
    "REST API integration services",
    "front-end development React Tailwind",
    "backend development Spring Boot Java",
    "DevOps and CI/CD integration",
    "UI/UX design for web apps",
    "cross-platform application development",

    // Vision & Thought-Leadership Keywords
    "digital transformation India",
    "innovation in software engineering",
    "empowering Indian developers",
    "building global tech from India",
    "AI-driven software solutions",
    "future-ready technology services",
    "startup software studio India",

    // Long-Tail & Content Keywords
    "how to build a custom ERP for colleges",
    "benefits of AI in software automation",
    "React and Spring Boot full-stack tutorial",
    "digital transformation for local businesses India",
    "low-code vs custom software development",
    "building future-ready apps with cloud native architecture",

    // Core Technical Keywords
    "software development company",
    "web development services",
    "React development",
    "Spring Boot development",
    "custom ERP systems",
    "cloud infrastructure",
    "mobile app development",
    "AI integration",
    "business automation",
    "remote development team",
    "software engineering India",
    "web applications",
    "API development",
    "digital transformation",
    "startup technology solutions"
  ],
  authors: [{ name: "Sonint Technology" }],
  creator: "Sonint Technology",
  publisher: "Sonint Technology",
  generator: 'Next.js',
  applicationName: 'Sonint Technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sonint.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sonint.io',
    title: 'Sonint Technology – Software Development Company in India | Full-Stack & AI Solutions',
    description: 'Sonint Technology builds custom software, AI automation, and cloud-native solutions from India for global clients. Rooted in India, engineered for the world.',
    siteName: 'Sonint Technology',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Sonint Technology - Modern Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sonint Technology – Software Development Company in India | Full-Stack & AI Solutions',
    description: 'Sonint Technology builds custom software, AI automation, and cloud-native solutions from India for global clients. Rooted in India, engineered for the world.',
    images: ['/og.png'],
    creator: '@soninttech',
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
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sonint Technology',
    alternateName: 'Sonint',
    url: 'https://sonint.io',
    logo: 'https://sonint.io/sonintLogo.png',
    description: 'Leading software development company specializing in React web applications, Spring Boot APIs, custom ERP systems, cloud infrastructure, and AI integration.',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'Sonint Technology Founders'
      }
    ],
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
    ],
    services: [
      'Web Development',
      'Mobile App Development',
      'Custom ERP Systems',
      'Cloud Infrastructure',
      'AI Integration',
      'Business Automation'
    ],
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Modern web applications using React, Next.js, and Spring Boot'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom ERP Systems',
            description: 'Business automation and workflow solutions'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Infrastructure',
            description: 'Cloud deployment and infrastructure management'
          }
        }
      ]
    }
  };

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className={`${onest.variable} relative antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}
