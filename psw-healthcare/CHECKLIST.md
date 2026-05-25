# Pre-Launch Checklist

Use this checklist before deploying the R&M Prestige Care Healthcare website to production.

## ✅ Content Updates

- [ ] Update company information in `/lib/site.ts`
  - [ ] Phone number (update both `phone` and `phoneRaw`)
  - [ ] Email address
  - [ ] Physical address
  - [ ] Founding year
  - [ ] Service area description

- [ ] Replace placeholder images
  - [ ] Hero section caregiver image
  - [ ] Calgary skyline image
  - [ ] Who We Serve - Families image
  - [ ] Who We Serve - Facilities image
  - [ ] Specialized Conditions image

- [ ] Add branding assets to `/public`
  - [ ] `logo.png` (400x400px)
  - [ ] `og-image.jpg` (1200x630px for social sharing)
  - [ ] `favicon.ico`
  - [ ] `apple-touch-icon.png` (180x180px)

- [ ] Review all text content for accuracy
  - [ ] Company description
  - [ ] Service descriptions
  - [ ] FAQ answers
  - [ ] Contact information

## ✅ Technical Setup

- [ ] Environment variables configured
  - [ ] Create `.env.local` for local development
  - [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain in Vercel

- [ ] Test local build
  - [ ] Run `npm install`
  - [ ] Run `npm run dev` and verify site works
  - [ ] Run `npm run build` successfully
  - [ ] Run `npm start` and test production build

- [ ] Code quality checks
  - [ ] Run `npm run lint` with no errors
  - [ ] TypeScript compilation passes
  - [ ] No console errors in browser

## ✅ SEO & Analytics

- [ ] Update metadata in `app/layout.tsx`
  - [ ] Verify site title
  - [ ] Verify meta description
  - [ ] Update Open Graph image path
  - [ ] Add Google Search Console verification code

- [ ] Add Google Analytics (optional)
  - [ ] Create GA4 property
  - [ ] Add tracking code to layout
  - [ ] Test tracking in GA4 real-time view

- [ ] Structured data verification
  - [ ] Test with [Rich Results Test](https://search.google.com/test/rich-results)
  - [ ] Verify LocalBusiness schema
  - [ ] Verify FAQPage schema

## ✅ Deployment

- [ ] Push code to GitHub
  - [ ] Initialize git repository
  - [ ] Create GitHub repository
  - [ ] Push code to main branch

- [ ] Deploy to Vercel
  - [ ] Import GitHub repository to Vercel
  - [ ] Set environment variable: `NEXT_PUBLIC_SITE_URL`
  - [ ] Verify deployment succeeds
  - [ ] Test preview URL

- [ ] Configure custom domain
  - [ ] Add domain in Vercel settings
  - [ ] Update DNS records
  - [ ] Wait for DNS propagation
  - [ ] Verify HTTPS certificate

## ✅ Post-Deployment Testing

- [ ] Functionality testing
  - [ ] All navigation links work
  - [ ] Phone number links work on mobile
  - [ ] Email links work
  - [ ] Mobile menu opens/closes properly
  - [ ] FAQ accordion works
  - [ ] All images load correctly

- [ ] Responsive design testing
  - [ ] Test on mobile (iOS Safari, Chrome)
  - [ ] Test on tablet (iPad)
  - [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
  - [ ] Test different screen sizes

- [ ] Performance testing
  - [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
  - [ ] Verify Core Web Vitals are good
  - [ ] Check mobile performance score
  - [ ] Check desktop performance score

- [ ] SEO testing
  - [ ] Verify meta tags with [Meta Tags Checker](https://metatags.io/)
  - [ ] Test structured data with [Rich Results Test](https://search.google.com/test/rich-results)
  - [ ] Verify sitemap.xml loads: `https://your-domain.com/sitemap.xml`
  - [ ] Verify robots.txt loads: `https://your-domain.com/robots.txt`

- [ ] Accessibility testing
  - [ ] Run Lighthouse accessibility audit
  - [ ] Test keyboard navigation (Tab, Enter, Escape)
  - [ ] Verify all images have alt text
  - [ ] Check color contrast
  - [ ] Test with screen reader (optional)

## ✅ Search Engine Setup

- [ ] Google Search Console
  - [ ] Add and verify property
  - [ ] Submit sitemap
  - [ ] Monitor for crawl errors

- [ ] Google Business Profile (optional)
  - [ ] Create/claim business listing
  - [ ] Add photos
  - [ ] Add business hours
  - [ ] Add services

- [ ] Bing Webmaster Tools (optional)
  - [ ] Add and verify site
  - [ ] Submit sitemap

## ✅ Monitoring & Maintenance

- [ ] Set up monitoring
  - [ ] Enable Vercel Analytics
  - [ ] Set up uptime monitoring (optional)
  - [ ] Configure error tracking (optional)

- [ ] Create maintenance plan
  - [ ] Schedule regular content updates
  - [ ] Plan for adding new pages
  - [ ] Set up backup strategy

## ✅ Marketing & Launch

- [ ] Social media
  - [ ] Update social media profiles with website URL
  - [ ] Create launch announcement posts
  - [ ] Share website on relevant platforms

- [ ] Business materials
  - [ ] Update business cards with website URL
  - [ ] Update email signatures
  - [ ] Update printed materials

- [ ] Local listings
  - [ ] Update directory listings
  - [ ] Add to healthcare directories
  - [ ] Update Google Business Profile

## 🎯 Quick Reference

### Important URLs

- Production site: `https://your-domain.com`
- Vercel dashboard: `https://vercel.com/dashboard`
- GitHub repository: `https://github.com/your-username/your-repo`
- Google Search Console: `https://search.google.com/search-console`

### Important Files

- Company config: `/lib/site.ts`
- Environment variables: `.env.local` (local), Vercel dashboard (production)
- Images: `/public/` directory
- Components: `/components/` directory

### Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Project documentation: `README.md`, `DEPLOYMENT.md`, `DEVELOPMENT.md`

---

**Note:** Check off items as you complete them. Keep this checklist for future reference when making updates or launching additional pages.
