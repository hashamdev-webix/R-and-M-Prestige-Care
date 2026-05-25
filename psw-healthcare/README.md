# R&M Prestige Care - Calgary Home Care & Healthcare Staffing

A production-ready, SEO-optimized marketing website for R&M Prestige Care, a Calgary-based home care and healthcare staffing provider.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter (body), Poppins (headings) via next/font
- **Icons:** lucide-react
- **Deployment:** Vercel-ready

## 📋 Features

- ✅ Fully responsive, mobile-first design
- ✅ SEO-optimized with Next.js Metadata API
- ✅ JSON-LD structured data (LocalBusiness + FAQPage schemas)
- ✅ Semantic HTML with proper accessibility (ARIA labels, alt text)
- ✅ Sitemap and robots.txt generation
- ✅ Fast Core Web Vitals (optimized images, minimal client JS)
- ✅ Clean, scalable component architecture
- ✅ Professional healthcare aesthetic with navy/green color scheme

## 🏗️ Project Structure

```
rm-prestige-care-healthcare/
├── app/
│   ├── layout.tsx          # Root layout with metadata & JSON-LD
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt configuration
├── components/
│   ├── Header.tsx          # Sticky header with mobile menu
│   ├── Footer.tsx          # Footer with trust strip
│   ├── Hero.tsx            # Hero section
│   ├── TrustBar.tsx        # Trust indicators
│   ├── BuiltAroundNeeds.tsx
│   ├── WhoWeServe.tsx
│   ├── SpecializedConditions.tsx
│   ├── ServicesOverview.tsx
│   ├── ServiceCard.tsx
│   ├── WhyChooseUs.tsx
│   ├── CtaBand.tsx
│   ├── Faq.tsx             # Accessible accordion FAQ
│   ├── SectionHeading.tsx
│   └── Button.tsx
├── lib/
│   └── site.ts             # Central config (company info, contact)
├── next.config.mjs         # Next.js config with image domains
├── tailwind.config.ts      # Tailwind with custom colors
├── .env.example            # Environment variables template
└── README.md
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd rm-prestige-care-healthcare
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your site URL:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Test the production build locally:

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Set the environment variable:
   - `NEXT_PUBLIC_SITE_URL` = your production domain (e.g., `https://rmprestigecare.ca`)
4. Deploy!

Vercel will automatically:

- Detect Next.js and configure the build
- Generate optimized static pages
- Deploy to their global edge network
- Provide automatic HTTPS

### Manual Deploy

```bash
npm install -g vercel
vercel
```

## 📝 Configuration

### Update Company Information

Edit `/lib/site.ts` to update:

- Company name, tagline, description
- Contact details (phone, email, address)
- Social media links
- Navigation URLs

### Update Colors

Edit `/tailwind.config.ts` to customize the color palette.

### Add Pages

Create new pages in the `/app` directory:

- `/app/about-us/page.tsx`
- `/app/home-care-calgary/page.tsx`
- `/app/contact/page.tsx`

Components are reusable across all pages.

## 🎨 Design System

### Colors

- **Primary (Navy):** `#1B3A6B` - Main brand color
- **Secondary (Green):** `#2E9E4F` - Accent for facilities/staffing
- **Light Blue:** `#EEF4FB` - Background accent
- **Slate:** `#1F2937` - Body text

### Typography

- **Headings:** Poppins (600/700 weight)
- **Body:** Inter (400/500/600 weight)

### Buttons

- **Blue:** For families/home care CTAs
- **Green:** For facilities/staffing CTAs
- **White:** For secondary actions

## 🔍 SEO Features

- Optimized meta titles and descriptions
- Open Graph and Twitter Card tags
- JSON-LD structured data for rich snippets
- Semantic HTML structure
- Descriptive alt text on all images
- Clean URL structure
- Automatic sitemap generation
- Robots.txt configuration

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard-navigable components
- Focus states on all interactive elements
- Sufficient color contrast ratios
- Descriptive link text

## 📦 Dependencies

```json
{
  "next": "^16.x",
  "react": "^19.x",
  "react-dom": "^19.x",
  "lucide-react": "latest",
  "tailwindcss": "^3.x",
  "typescript": "^5.x"
}
```

## 📄 License

© 2015–2026 R&M Prestige Care. All rights reserved.

## 🤝 Support

For questions or support:

- **Phone:** (403) 555-0123 (24/7)
- **Email:** info@rmprestigecare.ca
- **Address:** 123 Main Street SW, Calgary, AB T2P 1A1

---

Built with ❤️ for the Calgary community
