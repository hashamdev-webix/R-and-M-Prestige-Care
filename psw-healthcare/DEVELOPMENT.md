# Development Guide

This guide helps you extend the PSW Healthcare website with new pages and features.

## Project Architecture

### Component Structure

Components are organized by purpose:

- **Layout Components**: `Header.tsx`, `Footer.tsx`
- **Section Components**: `Hero.tsx`, `TrustBar.tsx`, `ServicesOverview.tsx`, etc.
- **UI Components**: `Button.tsx`, `SectionHeading.tsx`, `ServiceCard.tsx`

### Design Principles

1. **Reusability**: Components are designed to be reused across pages
2. **Accessibility**: All components include proper ARIA labels and semantic HTML
3. **Responsiveness**: Mobile-first design with Tailwind breakpoints
4. **SEO**: Proper heading hierarchy, meta tags, and structured data

## Adding New Pages

### Example: Creating an About Us Page

1. **Create the page file**

```bash
mkdir -p app/about-us
touch app/about-us/page.tsx
```

2. **Add page content**

```tsx
// app/about-us/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PSW's mission to provide compassionate home care and reliable healthcare staffing in Calgary.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-navy font-heading mb-6">
            About {siteConfig.name}
          </h1>
          <p className="text-xl text-slate-600">Your content here...</p>
        </div>
      </section>
    </>
  );
}
```

3. **Update sitemap** (optional)

Add the new page to `app/sitemap.ts`:

```tsx
{
  url: `${siteUrl}/about-us`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
```

## Creating New Components

### Example: Creating a Testimonial Component

```tsx
// components/Testimonial.tsx
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export function Testimonial({ quote, author, role, image }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <p className="text-slate-600 italic mb-4">"{quote}"</p>
      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-bold text-navy">{author}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
```

## Styling Guidelines

### Color Usage

```tsx
// Primary actions (families/home care)
<Button variant="blue">Request Home Care</Button>

// Secondary actions (facilities/staffing)
<Button variant="green">Request Staffing</Button>

// Tertiary actions
<Button variant="white">Learn More</Button>
```

### Typography

```tsx
// Page titles (H1)
<h1 className="text-4xl md:text-5xl font-bold text-navy font-heading">

// Section titles (H2)
<h2 className="text-3xl md:text-4xl font-bold text-navy font-heading">

// Subsection titles (H3)
<h3 className="text-xl md:text-2xl font-bold text-navy font-heading">

// Body text
<p className="text-slate-600 leading-relaxed">
```

### Spacing

```tsx
// Section padding
<section className="py-16 md:py-20">

// Container
<div className="container mx-auto px-4 sm:px-6 lg:px-8">

// Card padding
<div className="p-6 md:p-8">
```

## Common Patterns

### Two-Column Layout with Image

```tsx
<section className="py-16 md:py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2>Your Title</h2>
        <p>Your content...</p>
      </div>
      <div className="relative">
        <Image
          src="/your-image.jpg"
          alt="Descriptive alt text"
          width={800}
          height={600}
          className="rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </div>
</section>
```

### Card Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <div key={index} className="bg-white rounded-xl shadow-md p-6">
      {/* Card content */}
    </div>
  ))}
</div>
```

### Call-to-Action Section

```tsx
<section className="py-16 bg-navy text-white text-center">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-4 font-heading">
      Ready to Get Started?
    </h2>
    <p className="text-lg mb-8">Your compelling message...</p>
    <Button href="/contact" variant="blue" size="lg">
      Contact Us Today
    </Button>
  </div>
</section>
```

## SEO Best Practices

### Page Metadata

Always include metadata for each page:

```tsx
export const metadata: Metadata = {
  title: "Page Title | PSW",
  description: "Compelling 155-character description with keywords",
  alternates: {
    canonical: "/page-url",
  },
};
```

### Heading Hierarchy

- One `<h1>` per page (usually in the hero)
- Use `<h2>` for main sections
- Use `<h3>` for subsections
- Never skip heading levels

### Image Optimization

```tsx
<Image
  src="/image.jpg"
  alt="Descriptive, keyword-rich alt text"
  width={800}
  height={600}
  priority // Only for above-the-fold images
  loading="lazy" // For below-the-fold images
/>
```

### Internal Linking

```tsx
<Link href="/home-care-calgary" className="text-green hover:underline">
  Learn more about our home care services
</Link>
```

## Accessibility Checklist

- [ ] All images have descriptive alt text
- [ ] Interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Forms have proper labels
- [ ] Buttons have descriptive text (not just "Click here")
- [ ] ARIA labels on sections and navigation
- [ ] Focus states visible on all interactive elements

## Testing

### Local Testing

```bash
# Development server
npm run dev

# Production build
npm run build
npm start

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

### Browser Testing

Test on:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Accessibility Testing

- Use browser DevTools Lighthouse audit
- Test keyboard navigation (Tab, Enter, Escape)
- Test with screen reader (VoiceOver on Mac, NVDA on Windows)

## Performance Optimization

### Image Optimization

- Use WebP format
- Provide appropriate sizes with `sizes` prop
- Use `priority` only for above-the-fold images
- Lazy load below-the-fold images

### Code Splitting

- Use dynamic imports for large components
- Keep client components minimal
- Prefer server components when possible

### Caching

- Static pages are automatically cached by Vercel
- Use `revalidate` for ISR if needed
- Leverage CDN for static assets

## Common Tasks

### Update Contact Information

Edit `/lib/site.ts`:

```tsx
export const siteConfig = {
  contact: {
    phone: "(403) 555-0123",
    phoneRaw: "+14035550123",
    email: "info@pswcalgary.ca",
    // ...
  },
};
```

### Add a New Service

1. Add to `ServicesOverview.tsx` services array
2. Create dedicated service page if needed
3. Update navigation if necessary
4. Add to sitemap

### Change Colors

Edit `/tailwind.config.ts`:

```tsx
colors: {
  navy: {
    DEFAULT: '#1B3A6B',
    // ...
  },
}
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-page

# Make changes and commit
git add .
git commit -m "Add new about page"

# Push to GitHub
git push origin feature/new-page

# Create pull request on GitHub
# Vercel will create preview deployment automatically

# After review, merge to main
# Vercel will deploy to production automatically
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Getting Help

If you encounter issues:

1. Check the error message in terminal/browser console
2. Review Next.js documentation
3. Search GitHub issues
4. Check Vercel deployment logs
5. Review this guide and README.md

## Next Steps

Recommended pages to add:

1. **Home Care Services** (`/home-care-calgary`)
2. **Healthcare Staffing** (`/healthcare-staffing-calgary`)
3. **About Us** (`/about-us`)
4. **Contact** (`/contact`)
5. **Resources/Blog** (`/resources`)
6. **Careers** (`/careers`)
7. **Privacy Policy** (`/privacy-policy`)
8. **Terms of Service** (`/terms-of-service`)
