# Sonint Technology - Growing Software Startup

A clean, professional website for Sonint Technology - a passionate startup from Sonbhadra building modern software solutions.

## 🚀 Features

- **Modern Design**: Clean, professional UI built with Next.js and Tailwind CSS
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Service Showcase**: Comprehensive overview of our software engineering services
- **Case Studies**: Detailed project examples with real metrics and outcomes
- **Technical Blog**: Insights on software architecture and best practices
- **Career Portal**: Information about joining our engineering team
- **Contact System**: Multiple ways for clients to get in touch

## 🛠 Tech Stack

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Typography**: Onest font family
- **Icons**: Lucide React
- **Development**: TypeScript for type safety

## 📁 Project Structure

```
├── app/                          # Next.js app directory
│   ├── blog/                     # Blog pages and posts
│   ├── careers/                  # Career opportunities page
│   ├── case-studies/             # Project case studies
│   ├── privacy/                  # Privacy policy
│   ├── terms/                    # Terms of service
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── not-found.tsx             # 404 page
├── components/
│   ├── pro-blocks/               # Reusable UI blocks
│   │   ├── landing-page/         # Landing page components
│   │   └── logo.tsx              # Company logo
│   └── ui/                       # Base UI components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
└── public/                       # Static assets
```

## 🎨 Design System

### Brand Identity
- **Company**: Sonint Technology
- **Tagline**: "Crafting Digital Precision"
- **Focus**: Modern software engineering from Sonbhadra to the world

### Services
- Web Development (React, Next.js, Spring Boot)
- Custom ERP & Automation Systems
- Cloud Infrastructure & DevOps
- Mobile Applications
- AI Integration
- Technical Consulting

### Color Scheme
- Primary: Blue accent for CTAs and highlights
- Secondary: Muted backgrounds for sections
- Text: Foreground/muted-foreground for hierarchy

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📄 Pages Overview

### Homepage (`/`)
- Hero section with company introduction
- Services overview with feature cards
- Development process explanation
- Client testimonials
- Company statistics and impact
- Contact form and information

### Case Studies (`/case-studies`)
- Detailed project examples
- Problem-solution-impact format
- Technology stacks used
- Measurable results and metrics

### Blog (`/blog`)
- Technical articles and insights
- Software architecture best practices
- Industry trends and updates
- Sample post: "Why Clean Code Matters"

### Careers (`/careers`)
- Company culture and values
- Open positions and opportunities
- Remote-first work environment
- Application process information

### Legal Pages
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

## 🔧 Customization

### Adding New Blog Posts
1. Create a new directory in `app/blog/[slug]/`
2. Add a `page.tsx` file with the post content
3. Update the blog index page with the new post metadata

### Modifying Services
Update the service cards in `components/pro-blocks/landing-page/bento-grids/bento-grid-6.tsx`

### Updating Contact Information
Modify the contact details in `components/pro-blocks/landing-page/contact-sections/contact-section-1.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 SEO & Performance

- Semantic HTML structure
- Optimized images with Next.js Image component
- Meta tags and descriptions
- Fast loading with Next.js optimizations
- Accessible design with proper ARIA labels

## 📞 Contact Information

- **Email**: hello@sonint.tech
- **WhatsApp**: +91 98765 43210
- **Location**: Sonbhadra, Uttar Pradesh, India
- **GitHub**: https://github.com/sonint-tech
- **LinkedIn**: https://linkedin.com/company/sonint-technology

## 📄 License

© 2025 Sonint Technology. All rights reserved.

---

Built with modern web technologies and a focus on performance, accessibility, and user experience.