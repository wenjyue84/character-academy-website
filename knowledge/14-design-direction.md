# 14 — Design Direction

## The feeling we're after

A site that reads as **confident, grounded, and a little quiet** — the way a senior industry expert carries themselves. Not flashy. Not corporate-generic. A working institution run by people who actually know JPK. The words **"structured"** and **"warm"** should both apply.

## Colour palette

Primary palette pulled from the printed booklet — deep navy + warm sand + a gold accent — so the website feels like a continuation of the company profile, not a separate identity.

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Deep Navy | `#1F2A44` | Headings, nav, section anchors |
| Primary dark | Ink | `#0F172A` | Footer, body-dark sections |
| Accent | Academy Gold | `#B8894A` | CTAs, underlines, number accents |
| Accent warm | Warm Sand | `#EFE6D6` | Section backgrounds, cards |
| Neutral | Cream | `#FBF8F1` | Page background |
| Text | Slate-800 | `#1E293B` | Body text on cream |
| Muted | Slate-500 | `#64748B` | Labels, captions |

## Typography

- **Display / headings:** *Fraunces* (variable serif with a quiet warmth). Used for all H1–H3.
- **Body / UI:** *Inter* — high-contrast, legible, pairs well with serif headings.
- **Numerals in stat blocks:** Fraunces at a heavier weight so "4,500+" reads as a thing worth looking at.

## "Humanise it" — design cues that stop it looking AI-stamped

These are the small moves that make the site feel hand-built rather than machine-generated:

1. **Asymmetric hero** — don't centre-stack headline over a full-bleed image. Use a 60/40 split with the headline slightly dropped, so the eye has somewhere to land.
2. **Real numbers, real specifics** — "4,500+ learners, 80+ corporate partners, 24 years" beats "We help you grow". Specificity is the single biggest signal of authenticity.
3. **One paragraph of actual prose** in every section, not a wall of bullet points. Bullet-only layouts are the fingerprint of AI-generated sites.
4. **Named people, not stock photos** — use Jennifer's / SeaQin's / May's actual likeness from the PDF, with names and dates under each.
5. **Credential list shown plainly** — the *"17 years appointed by JPK…"* timeline is a gold mine. Display it as a vertical timeline, not a sanitized "CEO bio".
6. **Imperfection in the grid** — vary card heights and image crops across the services grid; perfect 3x3 grids read as generated.
7. **One direct quote per testimonial, shown in full** — not trimmed to a meaningless snippet. Real testimonials run long and mention specific problems.
8. **No overstated taglines** — avoid "transform your future" / "empower your journey" / "unleash potential". Write like someone who runs the business: plain, competent, useful.
9. **Physical address shown in full** — four separate branches with full postcodes. AI-copy-pasted sites tend to hide addresses; real service businesses show them.
10. **Chinese name in the footer** (名门全能美学职业培训学院) — real Malaysian TVET centres are usually bilingual; sanitising that out makes the site feel fake.

## Motion

- Minimal — a slow fade-in on scroll for section headings (200ms), nothing else.
- No carousels.
- No parallax on images (AI-generated sites overuse it).

## Accessibility

- AA contrast minimum across all text.
- Every image has descriptive `alt` text drawn from the PDF context.
- Respect `prefers-reduced-motion`.
- All CTAs are reachable via keyboard.
