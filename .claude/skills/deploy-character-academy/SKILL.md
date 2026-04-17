---
name: deploy-character-academy
description: One-command deploy pipeline for the Character International Academy website (Vercel + GitHub). Use when the user says "deploy", "ship", "push live", or updates the site content and wants it published. Handles build verification, git commit/push, and Vercel production deploy.
---

# Deploy Character Academy

Project-level deployment skill for `character-academy-website`.

## When to use this skill

- The user asks to deploy, ship, publish, or push the site live.
- The user has edited files in `app/`, `components/`, `public/`, or `knowledge/` and wants the changes to appear on the production URL.
- You see uncommitted changes in the project and the user wants production updated.

## Project facts

- **Repo:** https://github.com/wenjyue84/character-academy-website (branch: `main`)
- **Vercel project:** `jay-lews-projects/character-academy-website`
- **Production URL:** https://character-academy-website.vercel.app
- **Stack:** Next.js 15 · React 19 · Tailwind CSS 3 · TypeScript
- **Node:** v20.20.2 (via nvm)

## Full pipeline

Run these commands from the project root (`C:\Users\Jyue\Documents\1-projects\Character-academy-website`):

```bash
# 1. Confirm build is clean before pushing anything
npm run build

# 2. Stage, commit, and push to GitHub (main)
git add .
git commit -m "feat: <describe the change>"
git push origin main

# 3. Deploy to Vercel production
vercel --prod --yes
```

## Fast path (no content changes — just redeploy)

```bash
vercel --prod --yes
```

## Preview deploy (test before production)

```bash
vercel --yes
```

This prints a preview URL — share it for review before running `--prod`.

## Pre-deploy checks

Before you call `vercel --prod`:

1. **Build passes.** `npm run build` must complete with no errors. TypeScript errors block the production deploy.
2. **Images referenced in components exist under `public/images/…`.** Next.js 15 image component will fail at build if the file is missing.
3. **No secrets.** `vercel.json`, `.env.local`, and `.vercel/` must stay out of the repo (the `.gitignore` already handles this).
4. **Knowledge files are consistent with the UI.** If you changed a section in `components/`, update the matching file in `knowledge/` (single source of truth for copy).

## Custom domain (future)

When the client is ready to swap `vercel.app` for a custom domain:

```bash
vercel domains add character.com.my       # or the chosen domain
vercel alias set character-academy-website.vercel.app character.com.my
```

Then point the domain's DNS at Vercel per the CLI's instructions (A record to `76.76.21.21` or CNAME to `cname.vercel-dns.com`).

## Common failure modes

| Symptom | Likely cause | Fix |
|---|---|---|
| `vercel` command not found | nvm-managed Node changed | `npm install -g vercel` under current Node |
| Build fails on Tailwind class | Tailwind purge path miss | Check `content` in `tailwind.config.ts` includes the new directory |
| Image 404 on production | Missing file or wrong casing (Linux/Vercel is case-sensitive) | Verify exact path and casing under `public/images/` |
| `outputFileTracingRoot` warning | Extra `package-lock.json` up the tree | Already pinned via `next.config.mjs` |
| 401 / login prompt on Vercel URL | Deployment protection turned on for the project | Toggle in Vercel dashboard → Settings → Deployment Protection |

## Rollback

Vercel keeps every deploy. To roll back to the last-known-good:

```bash
vercel ls character-academy-website --count 5
vercel rollback <older-deployment-url>
```

## Who to notify after deploy

If the live site is updated on behalf of the client, WhatsApp Jennifer Tan on **+6012 6111 677** with the new URL and a one-line summary of what changed.
