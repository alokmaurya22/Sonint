// Domain configuration for Sonint Technology
export const domains = {
  primary: 'https://sonint.tech',
  alternatives: [
    'https://sonint.io',
    'https://sonint.in', 
    'https://sonint.vercel.app'
  ]
};

// Get the current domain or fallback to primary
export function getCurrentDomain(): string {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return domains.primary;
}

// Generate canonical URL for SEO
export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${domains.primary}${cleanPath}`;
}

// Generate alternate URLs for different domains
export function getAlternateUrls(path: string = ''): Array<{ href: string; hreflang?: string }> {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return [
    { href: `${domains.primary}${cleanPath}`, hreflang: 'en' },
    { href: `${domains.primary}${cleanPath}`, hreflang: 'x-default' },
    ...domains.alternatives.map(domain => ({
      href: `${domain}${cleanPath}`
    }))
  ];
}

// Domain-specific redirects configuration
export const domainRedirects = {
  // Redirect all alternative domains to primary domain
  redirects: domains.alternatives.map(alt => ({
    source: alt,
    destination: domains.primary,
    permanent: true
  }))
};

// SEO-friendly domain configuration
export const domainSEO = {
  primaryDomain: domains.primary,
  verificationCodes: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
  },
  socialProfiles: {
    twitter: '@soninttech',
    linkedin: 'https://linkedin.com/company/sonint-technology',
    github: 'https://github.com/sonint-tech'
  }
};