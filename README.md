# Syl de Ville Studio

Personal site for Sylvia: software services, a sewing portfolio and music
(coming soon). Built with [Astro](https://astro.build) and hosted free on
GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
```

## Edit content

| What | Where |
|---|---|
| Site name, Web3Forms key, GitHub link | `src/site.ts` |
| Homepage text, services, selected work | `src/pages/index.astro` |
| Sewing projects | `src/content/sewing/*.md` (one file per project) |
| Sewing photos | `public/sewing/`, referenced as `image: sewing/photo.jpg` |
| Music page | `src/pages/music.astro` |
| Colors, light and dark themes | `src/styles/global.css` (the tokens at the top) |

### Add a sewing project

Make a new file in `src/content/sewing/`, for example `linen-shirt.md`:

```md
---
title: Linen shirt
category: Garments        # Garments, Costumes, Accessories or Home
date: 2026-10-01
pattern: "Pattern name"
fabric: "Washed linen"
summary: One sentence about it.
image: sewing/linen-shirt.jpg
imageAlt: A blue linen shirt on a dress form
---

Notes about the project.
```

Delete the three `example-*.md` files once you've added real ones.

### Connect the contact form

The contact and music sign-up forms use [Web3Forms](https://web3forms.com),
which is free. Enter the email address you want messages sent to, then paste
the access key it gives you into `web3formsKey` in `src/site.ts`. The key is
safe to make public.

## Deploying

Every push to `main` builds and deploys the site with
`.github/workflows/deploy.yml`. One-time setup: in the repository's
**Settings**, open **Pages** and set **Source** to **GitHub Actions**.

The site lives at https://syldeville.github.io/website/. To use your own
domain instead, see [DOMAINS.md](DOMAINS.md).
