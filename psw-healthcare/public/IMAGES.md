# Image Assets

This document lists the images needed for the R&M Prestige Care Healthcare website.

## Required Images

### 1. Logo & Branding

- **logo.png** (400x400px) - Company logo for structured data
- **og-image.jpg** (1200x630px) - Open Graph image for social media sharing

### 2. Favicon

- **favicon.ico** - Browser favicon
- **apple-touch-icon.png** (180x180px) - iOS home screen icon

## Current Placeholder Images

The site currently uses Unsplash images as placeholders:

1. **Hero Section** - Caregiver with senior client
   - URL: `https://images.unsplash.com/photo-1576765608535-5f04d1e3f289`
   - Alt: "Compassionate caregiver assisting senior client with daily activities in a warm home environment"

2. **Built Around Needs** - Calgary skyline
   - URL: `https://images.unsplash.com/photo-1519003722824-194d4455a60c`
   - Alt: "Calgary skyline representing local community-focused healthcare services"

3. **Who We Serve - Families** - Home care scene
   - URL: `https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4`
   - Alt: "Family receiving compassionate home care services in Calgary"

4. **Who We Serve - Facilities** - Healthcare facility
   - URL: `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d`
   - Alt: "Healthcare facility receiving professional staffing support services"

5. **Specialized Conditions** - Professional caregiver
   - URL: `https://images.unsplash.com/photo-1559839734-2b71ea197ec2`
   - Alt: "Professional caregiver providing specialized care for seniors with medical conditions"

## Replacing Placeholder Images

To replace with your own images:

1. Add images to the `/public` directory
2. Update image paths in components:
   - `/components/Hero.tsx`
   - `/components/BuiltAroundNeeds.tsx`
   - `/components/WhoWeServe.tsx`
   - `/components/SpecializedConditions.tsx`
3. Ensure all images have descriptive alt text for SEO and accessibility
4. Use Next.js `<Image>` component with proper width/height for optimization

## Image Optimization Tips

- Use WebP format for better compression
- Provide images at 2x resolution for retina displays
- Keep file sizes under 200KB when possible
- Use descriptive, keyword-rich alt text
- Include width and height attributes to prevent layout shift
