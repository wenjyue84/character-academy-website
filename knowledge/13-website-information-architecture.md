# 13 — Website Information Architecture

## Tech choices

- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS v4** for styling
- **next/image** for image optimisation
- Deployed to **Vercel**, source in **GitHub** (`wenjyue84/character-academy-website`)
- Single-page marketing site for v1 — every section is a scroll anchor off the main page; multi-page can come later.

## Page / section outline (v1)

| # | Section | Anchor | Content source |
|---|---------|--------|----------------|
| 1 | **Hero** | `#top` | Tagline + CTA (Call or WhatsApp) + cover image |
| 2 | **Numbers that matter** | `#stats` | 4,500+ learners · 80+ partners · 20+ years · 4 branches |
| 3 | **About the academy** | `#about` | Knowledge file 01 + 02 |
| 4 | **Vision & Mission** | `#vision` | Knowledge file 03 |
| 5 | **How we work** | `#how` | The 6-step flow (file 04) |
| 6 | **Services** | `#services` | Two columns: Corporate + Individual (file 06) |
| 7 | **Projects** | `#projects` | 3 case studies (file 07) |
| 8 | **Leadership** | `#team` | Jennifer, SeaQin, May (file 05) |
| 9 | **Testimonials** | `#testimonials` | 4 quotes (file 10) |
| 10 | **Business plan** | `#plan` | 3 plans (file 09) |
| 11 | **Contact & locations** | `#contact` | 4 branches (file 11) |
| 12 | **Footer** | — | Brief credits, Chinese name, © line |

## SEO basics

- `<title>`: *Character International Academy — TVET & National Skills Certification in Malaysia*
- `<meta name="description">`: Two-sentence summary of services + headline stats.
- `<meta property="og:*">` for LinkedIn/FB sharing.
- JSON-LD `Organization` schema with address, phone, FB sameAs.

## Navigation

Sticky top nav with: *About · How we work · Services · Projects · Team · Contact*. A clear WhatsApp/phone CTA stays visible on desktop and mobile.

## Form

Contact form is optional for v1 — primary conversion is the visible phone number and WhatsApp link (+6012 6111 677). If a form is included, submissions go via Formspree or `mailto:jennifer@character.com.mx`.
