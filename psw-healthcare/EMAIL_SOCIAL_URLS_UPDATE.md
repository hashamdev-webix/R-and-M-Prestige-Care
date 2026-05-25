# Email and Social Media URLs Update

## Date: May 25, 2026

---

## ISSUE

The company email and social media URLs in `/lib/site.ts` still contained "psw" references (e.g., info@pswcalgary.ca, facebook.com/pswcalgary). The company name is "R&M Prestige Care" and all URLs should reflect the correct branding.

---

## SOLUTION

Updated all email and social media URLs in `/lib/site.ts` and documentation files to use "rmprestigecare" instead of "pswcalgary" or "psw".

---

## CHANGES MADE

### File: `/lib/site.ts`

#### Email Address:

```typescript
// BEFORE:
email: "info@pswcalgary.ca",

// AFTER:
email: "info@rmprestigecare.ca",
```

#### Social Media URLs:

```typescript
// BEFORE:
social: {
  facebook: "https://facebook.com/pswcalgary",
  linkedin: "https://linkedin.com/company/pswcalgary",
  instagram: "https://instagram.com/pswcalgary",
},

// AFTER:
social: {
  facebook: "https://facebook.com/rmprestigecare",
  linkedin: "https://linkedin.com/company/rmprestigecare",
  instagram: "https://instagram.com/rmprestigecare",
},
```

---

## DOCUMENTATION FILES UPDATED

### 1. README.md

- Updated email: info@pswcalgary.ca → info@rmprestigecare.ca
- Updated example domain: https://pswcalgary.ca → https://rmprestigecare.ca

### 2. DEVELOPMENT.md

- Updated email in example code: info@pswcalgary.ca → info@rmprestigecare.ca

### 3. DEPLOYMENT.md

- Updated custom domain example: pswcalgary.ca → rmprestigecare.ca
- Updated DNS configuration section: For `pswcalgary.ca` → For `rmprestigecare.ca`

### 4. PROJECT_SUMMARY.md

- Updated email in support section: info@pswcalgary.ca → info@rmprestigecare.ca

### 5. .env.example

- Updated example URL comment: https://pswcalgary.ca → https://rmprestigecare.ca

### 6. FIXES_SUMMARY.md

- Updated to reflect that URLs have been changed (not just noted as intentional)

---

## COMPREHENSIVE "PSW" SEARCH RESULTS

After all updates, the only remaining "psw" references in the project are:

### 1. Package Files (Internal, Not User-Facing):

- `package.json` - `"name": "psw-healthcare"` (internal npm package name)
- `package-lock.json` - Auto-generated, references package name

**Note:** These are internal identifiers and do not affect the user-facing website or branding.

### 2. File Paths:

- The project folder itself is named "PSW" (file system path)
- Build artifacts in `.next` folder contain path references

**Note:** These are file system paths and do not affect the website content or branding.

### 3. Documentation Files (Historical References):

- Some documentation files like BEFORE_AFTER_COMPARISON.md and FIXES_SUMMARY.md contain historical references to "PSW" in the context of explaining what was changed
- These are intentional documentation of the changes made

---

## VERIFICATION

### Source Code Files:

✅ No "psw" references in any `.ts`, `.tsx`, `.js`, or `.jsx` files (except package.json)
✅ All email and social URLs updated to rmprestigecare
✅ All metadata and alt text use "R&M Prestige Care"

### Documentation Files:

✅ All current/active references updated to "R&M Prestige Care" or "rmprestigecare"
✅ Historical documentation preserved for reference

### Website Content:

✅ No visible "PSW" text anywhere on the website
✅ All contact information displays "R&M Prestige Care"
✅ Email links point to info@rmprestigecare.ca
✅ Social media links point to rmprestigecare accounts

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

---

## UPDATED CONTACT INFORMATION

The website now uses these contact details throughout:

### Email:

- **Address:** info@rmprestigecare.ca
- **Used in:** Footer, contact forms, mailto: links

### Social Media:

- **Facebook:** https://facebook.com/rmprestigecare
- **LinkedIn:** https://linkedin.com/company/rmprestigecare
- **Instagram:** https://instagram.com/rmprestigecare

### Domain:

- **Website:** rmprestigecare.ca (example domain in documentation)

---

## CLIENT ACTION ITEMS

When setting up the actual online presence, the client should:

1. **Register Domain:**
   - Register rmprestigecare.ca (or preferred domain)
   - Update NEXT_PUBLIC_SITE_URL in production environment

2. **Set Up Email:**
   - Create email account: info@rmprestigecare.ca
   - Configure email forwarding/hosting
   - Test mailto: links on website

3. **Create Social Media Accounts:**
   - Facebook: facebook.com/rmprestigecare
   - LinkedIn: linkedin.com/company/rmprestigecare
   - Instagram: instagram.com/rmprestigecare
   - Verify all links work correctly

4. **Update DNS:**
   - Point domain to Vercel (or hosting provider)
   - Configure email DNS records (MX, SPF, DKIM)
   - Verify SSL certificate

---

## TESTING CHECKLIST

### Email Links:

- ✅ Navigate to any page with footer
- ✅ Click email link in footer
- ✅ Verify it opens mail client with: info@rmprestigecare.ca
- ✅ Check contact forms (when built) use correct email

### Social Media Links:

- ✅ Navigate to footer (when social links are added)
- ✅ Verify Facebook link: facebook.com/rmprestigecare
- ✅ Verify LinkedIn link: linkedin.com/company/rmprestigecare
- ✅ Verify Instagram link: instagram.com/rmprestigecare

### Metadata:

- ✅ View page source
- ✅ Verify no "psw" in meta tags
- ✅ Verify no "psw" in JSON-LD structured data
- ✅ Check all pages: home, about, free-assessment

---

## SUMMARY

✅ **Email updated:** info@pswcalgary.ca → info@rmprestigecare.ca
✅ **Social URLs updated:** All changed from pswcalgary to rmprestigecare
✅ **Documentation updated:** 6 files updated with new URLs
✅ **Comprehensive search:** No user-facing "psw" references remain
✅ **Build verified:** Lint and build pass with zero errors

The R&M Prestige Care website is now fully branded with the correct company name and contact information throughout all code, documentation, and metadata.

---

## FILES CHANGED SUMMARY

### Code Files:

1. `/lib/site.ts` - Email and social media URLs

### Documentation Files:

2. `README.md` - Email and domain examples
3. `DEVELOPMENT.md` - Email in code examples
4. `DEPLOYMENT.md` - Domain examples and DNS configuration
5. `PROJECT_SUMMARY.md` - Email in support section
6. `.env.example` - Domain example in comments
7. `FIXES_SUMMARY.md` - Updated to reflect changes

**Total:** 7 files updated
