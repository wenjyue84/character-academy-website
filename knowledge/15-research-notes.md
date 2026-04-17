# 15 — External Research Notes

Internal project artefacts — not website copy. Captures what two research subagents (2026-04-17) surfaced from public sources and what *couldn't* be retrieved.

## Corporate identity — confirmed

- **Registered name:** Character International Academy Sdn. Bhd.
- **Chinese name (per Facebook):** 名门全能美学职业培训学院 *(Mingmen All-Round Aesthetics Vocational Training Academy)*
- **Also seen as:** 名门国际美学职业培训机构
- **Facebook handle:** `Character2002` → implies founded or online-presence-established around 2002.
- **Facebook page likes:** ~4,100 range per indexed snippets.
- **Primary sector inferred from Chinese name:** beauty / aesthetics (美容 / 美学). The company profile PDF describes the academy in broader "TVET and corporate workforce development" terms; the two framings are consistent — the academy has a beauty/aesthetics TVET heritage and now offers broader advisory.

## Domain audit — flagged

- **character.com.mx** — `.mx` is the **Mexico ccTLD**. It currently serves a parked lander. Unusual choice for a Johor-based training business.
- **character.com.my** — does not resolve (ENOTFOUND).
- **Recommendation:** verify with the client whether the `.com.mx` address is intentional, a registrar error, or a legacy setup. For the production website, a fresh `.com` or `.com.my` domain is worth considering.

## SSM / corporate registry

- Not retrievable via free web search. A paid CTOS or SSM e-Info query is needed to pull registration number, incorporation date, directors, paid-up capital.

## Facebook photos — NOT scraped

Facebook server-side rendering blocks unauthenticated fetching. Every attempt on `facebook.com/Character2002`, `m.facebook.com`, and `mbasic.facebook.com` returned either a browser-deprecation page or Meta CSS scaffolding — no CDN image URLs surfaced.

**To retrieve Facebook photos, pick one:**
1. **Authenticated browser session** via the `chrome-devtools` MCP or the `dev-browser` skill, with the user logged in.
2. **Graph API** with a page access token for Character2002.
3. **Direct outreach** to Jennifer Tan for a media kit (likely fastest).

For v1 of the website, the **48 images extracted from the company-profile PDF** (19 curated under `public/images/`) are sufficient to populate every section.

## TVET context — research confirmed

Key facts verified against authoritative sources (all cited in the full research output) — captured in the glossary at `12-tvet-glossary.md`:

- JPK is the accreditation authority under the Ministry of Human Resources.
- SKM/DKM/DLKM is a 5-tier framework introduced in 2006.
- ADI-Perantisan is the rebranded SLDN / NDTS (70–80% workplace / 20–30% classroom split).
- HRD Corp Accredited Trainer requires 5-day TTT + 120 hrs accreditation-by-activity.
- PPL is the external JPK verifier role — Jennifer Tan has held this for 12+ years.
- National TVET Council established Dec 2020. Budget 2025–26 allocated RM7.9B.

## Key cited sources

- [JPK / Department of Skills Development](https://www.dsd.gov.my/en/)
- [SKM — Malaysian Skills Certificate](https://www.dsd.gov.my/en/service/malaysian-skills-certificate-skm)
- [NOSS](https://www.dsd.gov.my/en/service/national-occupational-skills-standards-noss)
- [ADI-Perantisan (CIAST)](https://www.ciast.gov.my/?p=1942&lang=en)
- [HRD Corp](https://hrdcorp.gov.my/)
- [Character Academy Facebook](https://www.facebook.com/Character2002/)
- [ISEAS Perspective 2025/5 — TVET in Malaysia's HRD](https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2025-5-tvet-in-malaysias-human-resource-development-plans-realities-and-game-changers-by-wan-chang-da/)
- [MIDA — TVET for Sustainable Talent Development](https://www.mida.gov.my/tvet-for-sustainable-talent-development/)
