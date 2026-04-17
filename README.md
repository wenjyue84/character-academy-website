# Character International Academy — Website

Public marketing site for **Character International Academy Sdn. Bhd.** (名门全能美学职业培训学院), a Malaysian TVET institution based in Muar, Johor.

- Live: https://character-academy.vercel.app *(auto-deployed from `main`)*
- Stack: Next.js 15 · React 19 · Tailwind CSS 3 · TypeScript · Vercel

## Quick start

```bash
npm install
npm run dev         # http://localhost:3000
npm run build
npm run start
```

## Project layout

```
app/                 # Next.js App Router pages + global styles
components/          # Section components (Hero, About, Services, …)
public/              # Static assets — images used by the site
  images/
    hero/            # Cover and contact hero images
    sections/        # Section photos
    team/            # Leadership headshots
    testimonials/    # Client portraits
knowledge/           # Atomic .md knowledge files — source of truth for copy
  00-README.md       # Start here
_docs/               # Converted Company Profile PDF (markdown)
_assets/             # Raw images extracted from the source PDF
```

## Deployment

Deployment is one command once the `deploy-character-academy` skill is set up — see `.claude/skills/deploy-character-academy/SKILL.md`. Manually:

```bash
vercel --prod
```

## License

All website content and imagery are property of **Character International Academy Sdn. Bhd.**
