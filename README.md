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

## Local development

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 43145
```

Open [http://127.0.0.1:43145](http://127.0.0.1:43145).

## Deploy

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
