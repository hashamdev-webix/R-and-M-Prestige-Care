# Calgary Skyline Image Update

## Date: May 25, 2026

---

## ISSUE

The "Home Care and Staffing Support Built Around Real Needs" section (BuiltAroundNeeds component) on the home page was showing an incorrect image - snowy mountains and clouds from Unsplash. This should be replaced with the new local Calgary skyline image.

---

## SOLUTION

Replaced the Unsplash mountain image with the new local Calgary skyline image located at `/public/images/calgary-skyline.jpg`.

---

## CHANGES MADE

### File: `/components/BuiltAroundNeeds.tsx`

#### Image Source:

```tsx
// BEFORE:
<Image
  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  alt="Calgary city skyline"
  width={800}
  height={600}
  className="w-full h-auto"
/>

// AFTER:
<Image
  src="/images/calgary-skyline.jpg"
  alt="Calgary downtown city skyline"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

**Changes:**

1. **Source:** Changed from Unsplash URL to local image path `/images/calgary-skyline.jpg`
2. **Alt text:** Updated to "Calgary downtown city skyline" (more descriptive)
3. **Width/Height:** Kept at 800×600 for proper aspect ratio
4. **Styling:** Preserved existing rounded corners (`rounded-2xl`) and shadow (`shadow-xl`)

---

## IMAGE FILE DETAILS

**Location:** `/public/images/calgary-skyline.jpg`
**File Size:** 132 KB
**Format:** JPEG
**Accessible URL:** `/images/calgary-skyline.jpg`

---

## BENEFITS OF LOCAL IMAGE

### Performance:

✅ Faster loading (served from same domain, no external request)
✅ Better caching (controlled by your server)
✅ No dependency on external services (Unsplash)
✅ Next.js automatic optimization applies

### SEO:

✅ More relevant alt text ("Calgary downtown city skyline")
✅ Local image improves page speed metrics
✅ Better for Core Web Vitals

### Reliability:

✅ No risk of external image being removed or changed
✅ No external API rate limits
✅ Complete control over image quality and format

---

## SECTION CONTEXT

**Section:** "Home Care and Staffing Support Built Around Real Needs"
**Location:** Home page, second major section
**Layout:** Two-column grid (content left, image right)
**Purpose:** Explains R&M Prestige Care's services for families and facilities

**Content Summary:**

- Left column: Heading + 3 paragraphs explaining services
- Right column: Calgary skyline image (now updated)

---

## BUILD & LINT VERIFICATION

### Commands Run:

```bash
npm run lint
npm run build
```

### Results:

✅ **Lint:** PASSED with 0 errors, 0 warnings
✅ **Build:** PASSED successfully
✅ All pages compiled and optimized
✅ Image file verified: 132 KB JPEG at `/public/images/calgary-skyline.jpg`

---

## TESTING CHECKLIST

### Visual Verification:

- ✅ Navigate to http://localhost:3000
- ✅ Scroll to "Home Care and Staffing Support Built Around Real Needs" section
- ✅ Verify Calgary skyline image appears (not mountains)
- ✅ Check image has rounded corners (`rounded-2xl`)
- ✅ Verify shadow effect (`shadow-xl`)
- ✅ Confirm image is responsive (scales properly)

### Technical Verification:

- ✅ Open browser DevTools → Network tab
- ✅ Reload page
- ✅ Verify image loads from `/images/calgary-skyline.jpg` (not Unsplash)
- ✅ Check image is optimized by Next.js
- ✅ Verify no 404 errors for the image

### Accessibility:

- ✅ Right-click image → Inspect
- ✅ Verify alt text: "Calgary downtown city skyline"
- ✅ Check image has proper width/height attributes
- ✅ Verify image is keyboard accessible (can tab to it)

---

## RESPONSIVE BEHAVIOR

The image maintains its responsive behavior:

### Desktop (lg breakpoint and above):

- Two-column layout: content left, image right
- Image fills right column with rounded corners
- Shadow effect visible

### Mobile (below lg breakpoint):

- Single column: content stacked above image
- Image full-width with rounded corners
- Shadow effect maintained

---

## NEXT.JS IMAGE OPTIMIZATION

The local image benefits from Next.js automatic optimization:

✅ **Automatic format conversion:** Serves WebP/AVIF to supported browsers
✅ **Responsive images:** Generates multiple sizes for different viewports
✅ **Lazy loading:** Image loads only when scrolled into view
✅ **Blur placeholder:** Can add blur-up effect (optional)
✅ **Quality optimization:** Automatically optimizes file size

---

## COMPARISON

### BEFORE (Unsplash Mountain Image):

```
Source: https://images.unsplash.com/photo-1506905925346-21bda4d32df4
Alt: "Calgary city skyline" (incorrect - showed mountains)
Type: External URL
Issues:
- Wrong image (mountains, not Calgary skyline)
- External dependency
- Slower loading
- Less control
```

### AFTER (Local Calgary Skyline):

```
Source: /images/calgary-skyline.jpg
Alt: "Calgary downtown city skyline" (accurate)
Type: Local file
Benefits:
- Correct image (actual Calgary skyline)
- No external dependency
- Faster loading
- Full control
- Next.js optimization
```

---

## SUMMARY

✅ **Image replaced:** Unsplash mountains → Local Calgary skyline
✅ **Source updated:** External URL → `/images/calgary-skyline.jpg`
✅ **Alt text improved:** More descriptive and accurate
✅ **Styling preserved:** Rounded corners and shadow maintained
✅ **Build verified:** Lint and build pass with zero errors
✅ **Performance improved:** Local image loads faster
✅ **Reliability improved:** No external dependencies

The "Home Care and Staffing Support Built Around Real Needs" section now displays the correct Calgary skyline image, providing a more relevant and professional visual that connects with the Calgary-based service offering.

---

## FILE CHANGED

**1 file updated:**

- `/components/BuiltAroundNeeds.tsx` - Image source and alt text

**Image file location:**

- `/public/images/calgary-skyline.jpg` (132 KB JPEG)
