# CenPhoWax.com

Elegant informational site for a Central Phoenix Brazilian wax studio concept.

**Domain available for acquisition — asking price $50,000** → [sales@desertrich.com](mailto:sales@desertrich.com)

## Google Business Profile — paste-ready UTM links

Convention: `utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=<placement>` (lowercase only).

- Rolls into GA4's **Organic Search** channel (source `google` + medium `organic`)
- Isolates all GBP traffic under campaign **`gbp`**; `utm_content` says which button drove the click
- Gives Search Console a distinct landing page for GBP clicks

**Info → Website**

```
https://cenphowax.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=website_button
```

**Info → Appointment link**

```
https://cenphowax.com/contact/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=appointment_button
```

**Info → Products** (one row per service)

| Product | URL |
|---|---|
| Brazilian Wax | `https://cenphowax.com/services/brazilian-wax/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=product_brazilian-wax` |
| Bikini Wax | `https://cenphowax.com/services/bikini-wax/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=product_bikini-wax` |
| Underarm Wax | `https://cenphowax.com/services/underarm-wax/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=product_underarm-wax` |
| Facial Waxing | `https://cenphowax.com/services/facial-waxing/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=product_facial-waxing` |
| Leg Waxing | `https://cenphowax.com/services/leg-waxing/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=product_leg-waxing` |
| Arm Waxing | `https://cenphowax.com/services/arm-waxing/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=product_arm-waxing` |

**Posts** — template: `https://cenphowax.com/<landing>/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=post_<slug>`

| Post topic | Landing page |
|---|---|
| Your first Brazilian wax | `https://cenphowax.com/blog/first-brazilian-wax-what-to-expect/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=post_first-brazilian` |
| Hard wax vs soft wax | `https://cenphowax.com/blog/hard-wax-vs-soft-wax/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=post_hard-vs-soft` |
| Phoenix summer aftercare | `https://cenphowax.com/blog/waxing-in-phoenix-summer/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=post_phoenix-summer` |
| Prices / what it costs | `https://cenphowax.com/pricing/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=post_pricing` |

Rules: never mix `GBP`/`gbp` casing (GA4 treats them as different sources); native Call/Directions buttons cannot be UTMed — count those in GBP Performance instead. When you have a GA4 measurement ID, set `ga4Id` in `src/config/site.ts` and gtag fires site-wide; view results in GA4 → Reports → Acquisition → Traffic acquisition (filter `Session campaign = gbp`).

## Domain sale funnel (conversion)

The site exists to sell `cenphowax.com` for **$50,000**. Every page carries the funnel:

- **Header strip** — sitewide "cenphowax.com is for sale — $50,000" bar linking to `/domain-for-sale/`
- **Hero CTA** — "Acquire this domain" is the primary button on the homepage
- **`/domain-for-sale/`** — price, what ships with the name, 4-step escrow process, buyer FAQ (FAQPage JSON-LD), and a confidential inquiry form (mailto to `sales@desertrich.com`)
- **Sticky mobile CTA** — appears after 360px of scroll with price + Details + Inquire
- **Homepage `#brand` section** — price card with "View acquisition details" and "Make an offer"
- **Footer acquisition block** — price, escrow copy, mailto and details CTAs (44px tap targets)
- **Contact page** — domain inquiry card pointing at `/domain-for-sale/`

Offer/price details live in `src/config/site.ts` (`domain`, `priceLabel`, `acquisitionMailto`) so the visible price and the `Product`/`Offer` JSON-LD never drift apart.

## SEO / DA

- **Structured data (JSON-LD):** `WebSite`, `WebPage`, `Organization` (with `sameAs`), `BeautySalon`, `Product` + `Offer` ($50,000, matching visible price), `BreadcrumbList`, `Service`, `FAQPage`, `HowTo`, `Article`
- **Indexable surface:** 22 pages, canonical trailing-slash URLs, XML sitemap (`/sitemap-index.xml`), `robots.txt`, RSS (`/rss.xml`), `llms.txt`, `humans.txt`, `security.txt` (+ `/.well-known/`), IndexNow key + `npm run seo:indexnow`
- **Worker (`src/worker.js`):** www/http → apex 301, legacy WordPress paths → `/`, `/sitemap.xml` + `/wp-sitemap.xml` → sitemap index, `/404` → `/`, HSTS/X-Frame-Options/Permissions-Policy/Referrer-Policy on every response
- **Title/description:** all pages ≤ 60 chars, keyword-led; homepage targets "Central Phoenix Brazilian Wax" + "Domain for Sale"
- **Fonts:** self-hosted Inter + Cormorant Garamond latin subsets in `public/fonts/` (the same variable files Google serves), `@font-face` with `font-display: swap` plus `<link rel="preload">` — no third-party font request
- **Accessibility:** skip link, one visible `h1` per page, WCAG AA contrast on every text color, 44px primary tap targets

## Local development

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 43145
```

Open [http://127.0.0.1:43145](http://127.0.0.1:43145).

## Deploy

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
