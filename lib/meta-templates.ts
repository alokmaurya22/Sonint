// Optimized meta tag templates following the successful format
// "Sonint Technology – Software Development Company in India | Full‑Stack & AI Solutions"
// "Sonint Technology builds custom software, AI automation, and cloud‑native solutions from India for global clients. Rooted in India, engineered for the world."

export const metaTemplates = {
  // Homepage variations
  homepage: {
    primary: {
      title: "Sonint Technology – Software Development Company in India | Full-Stack & AI Solutions",
      description: "Sonint Technology builds custom software, AI automation, and cloud-native solutions from India for global clients. Rooted in India, engineered for the world."
    },
    alternative: {
      title: "Custom Software Development & AI Automation | React, Spring Boot Experts",
      description: "Transform your business with Sonint Technology's custom software solutions. We build React applications, Spring Boot APIs, ERP systems & AI automation. From India's heartland to global excellence."
    }
  },

  // Service-specific pages
  services: {
    webDevelopment: {
      title: "React & Next.js Development Services | Modern Web Applications India",
      description: "Expert React and Next.js development by Sonint Technology. Build fast, scalable web applications with modern UI/UX. From concept to deployment, engineered in India."
    },
    erpDevelopment: {
      title: "Custom ERP Development | Business Automation Software Solutions",
      description: "Transform your business processes with Sonint Technology's custom ERP systems. Streamline operations, boost productivity. Built in India, deployed globally."
    },
    aiIntegration: {
      title: "AI Integration & Automation Services | Intelligent Business Solutions",
      description: "Integrate AI into your business with Sonint Technology. Smart automation, intelligent workflows, data-driven insights. Innovation from India's tech heartland."
    },
    cloudServices: {
      title: "Cloud Infrastructure & DevOps Services | Scalable Solutions India",
      description: "Deploy and scale with confidence. Sonint Technology's cloud infrastructure and DevOps expertise ensures reliable, secure applications. Built for global reach."
    }
  },

  // Industry-specific pages
  industries: {
    education: {
      title: "Education Software Solutions | Custom ERP for Colleges & Schools",
      description: "Digitize education with Sonint Technology's custom software. Student management, online learning platforms, administrative automation. Empowering education in India."
    },
    healthcare: {
      title: "Healthcare Software Development | Medical Practice Management Systems",
      description: "Streamline healthcare operations with Sonint Technology's custom solutions. Patient management, telemedicine platforms, healthcare automation. Innovation for better care."
    },
    ecommerce: {
      title: "E-commerce Development Services | Online Store & Marketplace Solutions",
      description: "Launch and scale your online business with Sonint Technology. Custom e-commerce platforms, marketplace solutions, payment integration. From India to global markets."
    }
  },

  // Location-specific pages
  locations: {
    india: {
      title: "Software Development Company India | Tier-2 City Innovation Hub",
      description: "Leading software development from India's heartland. Sonint Technology delivers world-class solutions with local expertise. Sonbhadra to global excellence."
    },
    uttarPradesh: {
      title: "Software Development Uttar Pradesh | Tech Innovation from UP",
      description: "Pioneering technology solutions from Uttar Pradesh. Sonint Technology brings global software standards to India's heartland. Local roots, worldwide reach."
    }
  },

  // Content/Blog pages
  blog: {
    technical: {
      title: "React & Spring Boot Tutorials | Full-Stack Development Guides",
      description: "Master modern web development with Sonint Technology's technical guides. React, Spring Boot, cloud architecture tutorials. Learn from India's software experts."
    },
    business: {
      title: "Digital Transformation Insights | Business Automation Strategies",
      description: "Accelerate your digital transformation journey. Expert insights on business automation, ERP implementation, AI integration from Sonint Technology's team."
    }
  },

  // Product pages
  products: {
    saas: {
      title: "Business Software Products | ERP, CRM & Analytics Solutions",
      description: "Ready-to-deploy business software by Sonint Technology. Project management, CRM systems, custom ERP solutions & analytics dashboards. Built in India, trusted globally."
    },
    enterprise: {
      title: "Enterprise Software Solutions | Scalable Business Applications",
      description: "Enterprise-grade software solutions by Sonint Technology. Custom applications, system integration, workflow automation. Engineered for scale, built in India."
    }
  },

  // Career pages
  careers: {
    general: {
      title: "Software Developer Jobs India | React, Spring Boot & DevOps Careers",
      description: "Join Sonint Technology's remote-first team! Hiring React developers, Spring Boot engineers & DevOps specialists. Build global software from India's heartland. Apply now!"
    },
    specific: {
      react: {
        title: "React Developer Jobs India | Frontend Development Careers",
        description: "Join Sonint Technology as a React developer! Build modern web applications, work with global clients. Remote-first culture from India's emerging tech hub."
      },
      springboot: {
        title: "Spring Boot Developer Jobs | Backend Engineering Careers India",
        description: "Backend engineering opportunities at Sonint Technology. Build scalable APIs, microservices architecture. Join our Spring Boot team in India's tech revolution."
      },
      devops: {
        title: "DevOps Engineer Jobs India | Cloud Infrastructure Careers",
        description: "DevOps opportunities at Sonint Technology. Manage cloud infrastructure, CI/CD pipelines, deployment automation. Shape the future of tech from India."
      }
    }
  }
};

// Helper function to get meta tags for specific page types
export function getMetaForPage(pageType: string, subType?: string) {
  const templates = metaTemplates as any;
  
  if (subType && templates[pageType]?.[subType]) {
    return templates[pageType][subType];
  }
  
  if (templates[pageType]?.primary) {
    return templates[pageType].primary;
  }
  
  if (templates[pageType]) {
    return templates[pageType];
  }
  
  // Fallback to homepage
  return metaTemplates.homepage.primary;
}

// SEO-optimized title patterns
export const titlePatterns = {
  service: "{Service} | {Technology} Development Services India",
  product: "{Product} | {Category} Solutions by Sonint Technology", 
  location: "{Service} {Location} | {Company} - Local Expertise, Global Standards",
  career: "{Role} Jobs India | {Technology} Developer Careers at {Company}",
  blog: "{Topic} | {Category} Insights from {Company}",
  industry: "{Industry} Software Solutions | Custom {Solution} Development"
};

// Description patterns for consistency
export const descriptionPatterns = {
  service: "{Company} delivers {service} with {technology}. {benefit}. From India's heartland to global excellence.",
  product: "{Product description} by {Company}. {features}. Built in India, trusted globally.",
  career: "Join {Company}'s {team}! {opportunity}. Build global software from India's heartland. Apply now!",
  location: "{Service} from {location}. {Company} brings {value proposition}. Local roots, worldwide reach."
};