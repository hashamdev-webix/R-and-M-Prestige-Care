# Deployment Guide

This guide covers deploying the R&M Prestige Care Healthcare website to Vercel.

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Updated company information in `/lib/site.ts`
- [ ] Replaced placeholder images with real images
- [ ] Added real logo and og-image to `/public` directory
- [ ] Updated contact information (phone, email, address)
- [ ] Tested the build locally: `npm run build`
- [ ] Reviewed all content for accuracy
- [ ] Set up Google Analytics (optional)
- [ ] Set up Google Search Console verification code

## Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: R&M Prestige Care Healthcare website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In Vercel project settings, add:
     - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a `.vercel.app` URL immediately

5. **Add Custom Domain**
   - In Vercel project settings → Domains
   - Add your custom domain (e.g., `rmprestigecare.ca`)
   - Follow DNS configuration instructions
   - Vercel provides automatic HTTPS

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Tasks

### 1. Update Environment Variables

In Vercel dashboard:

- Set `NEXT_PUBLIC_SITE_URL` to your production domain
- Redeploy if needed

### 2. Set Up Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership using one of these methods:
   - HTML file upload to `/public`
   - Meta tag in `app/layout.tsx` (update the verification code)
   - DNS record
4. Submit your sitemap: `https://your-domain.com/sitemap.xml`

### 3. Set Up Google Analytics (Optional)

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 4. Test Production Site

- [ ] Test all navigation links
- [ ] Verify contact information is correct
- [ ] Test phone number links on mobile
- [ ] Check responsive design on multiple devices
- [ ] Test page load speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify meta tags with [Meta Tags Checker](https://metatags.io/)
- [ ] Test structured data with [Rich Results Test](https://search.google.com/test/rich-results)

### 5. Monitor Performance

- Use Vercel Analytics (built-in)
- Monitor Core Web Vitals
- Check error logs in Vercel dashboard
- Set up uptime monitoring (optional)

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:

- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run build checks before deploying

## Rollback

If you need to rollback:

1. Go to Vercel dashboard → Deployments
2. Find the previous working deployment
3. Click "..." → "Promote to Production"

## Custom Domain Setup

### DNS Configuration

For `rmprestigecare.ca`:

**Option A: Using Vercel Nameservers (Recommended)**

1. In Vercel, add domain
2. Update nameservers at your domain registrar to Vercel's nameservers
3. Vercel handles all DNS automatically

**Option B: Using Your Own DNS**

1. Add A record: `@` → Vercel IP (provided in dashboard)
2. Add CNAME record: `www` → `cname.vercel-dns.com`
3. Wait for DNS propagation (up to 48 hours)

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

### Images Not Loading

- Check `next.config.mjs` has correct `remotePatterns`
- Verify image URLs are accessible
- Check image paths are correct

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding/changing environment variables
- Check variable names match exactly (case-sensitive)

### 404 Errors

- Verify file structure matches Next.js App Router conventions
- Check that pages are in `/app` directory
- Ensure `page.tsx` files exist for each route

## Support

For Vercel-specific issues:

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

For Next.js issues:

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
